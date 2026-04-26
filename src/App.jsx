import { useState, useEffect, useCallback, useRef } from 'react';
import { beginnerPlan } from './data/plans/beginner';
import { intermediatePlan } from './data/plans/intermediate';
import { proPlan } from './data/plans/pro';
import { loadProgress, saveProgressLocal, loadWeightLogLocal, saveWeightLocal, deleteWeightLocal, loadProfile, saveProfile, loadBodyWeightLocal, saveBodyWeightLocal } from './utils/storage';
import { getStoredUser, signOut, loadGoogleScript, initTokenClient, requestAccessToken } from './utils/googleAuth';
import { findOrCreateSheet, readProgress, writeProgressChanges, readWeightLog, appendWeightEntry, deleteWeightEntry, getCachedSheetId, readSettings, writeSettings, readBodyWeight, appendBodyWeight, ensureBodyWeightTab, ensurePlanTab, readPlan, writePlanMonth, writePlanBatch } from './utils/googleSheets';
import GoogleSignIn from './components/GoogleSignIn';
import { detectDayType } from './data/warmupCooldown';
import { MONTH_GRADS } from './utils/constants';
import TimerModal from './components/TimerModal';
import WarmupCooldownModal from './components/WarmupCooldownModal';
import ExerciseCard from './components/ExerciseCard';
import OnboardingScreen from './components/OnboardingScreen';
import WeightLogScreen from './components/WeightLogScreen';
import SettingsScreen from './components/SettingsScreen';
import DailyBodyWeight from './components/DailyBodyWeight';
import AppHeader from './components/AppHeader';

const PLAN_KEY = 'gymplan_plan';

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

// ─────────────── ROOT APP ─────────────────────────────────────────────────────
export default function App() {
  const [user, setUser]               = useState(getStoredUser());
  const [accessToken, setAccessToken] = useState(null);
  const [sheetId, setSheetId]         = useState(getCachedSheetId());
  const [syncStatus, setSyncStatus]   = useState('offline');
  const [progress, setProgress]       = useState({});
  const [weightLog, setWeightLog]     = useState([]);
  const [bodyWeightLog, setBodyWeightLog] = useState([]);
  const [profile, setProfile]         = useState(loadProfile() || { age: '', weight_kg: '', height_cm: '' });
  const [planMonths, setPlanMonths]   = useState(() => {
    try {
      const stored = localStorage.getItem(PLAN_KEY);
      if (stored) return JSON.parse(stored);
    } catch {}
    // Offline fallback: show first 2 months of intermediate plan
    return { 1: intermediatePlan[0], 2: intermediatePlan[1] };
  });
  const [activeMonth, setActiveMonth] = useState(0);
  const [activeWeek, setActiveWeek]   = useState(0);
  const [activeDay, setActiveDay]     = useState(0);
  const [screen, setScreen]           = useState('workout');
  const syncTimer        = useRef(null);
  const pendingChanges   = useRef({});

  // Persist plan to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(planMonths).length > 0) {
      localStorage.setItem(PLAN_KEY, JSON.stringify(planMonths));
    }
  }, [planMonths]);

  // ── bootstrap ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const prog = loadProgress();
    setProgress(prog);
    setWeightLog(loadWeightLogLocal());
    setBodyWeightLog(loadBodyWeightLocal());

    // Navigate to last active session
    const keys = Object.keys(prog);
    if (keys.length > 0) {
      let maxMonth = 0, maxWeek = 0, maxDay = 0;
      keys.forEach(key => {
        const m = key.match(/^m(\d+)-w(\d+)-d(\d+)/);
        if (m) {
          const mi = parseInt(m[1]) - 1, wi = parseInt(m[2]) - 1, di = parseInt(m[3]) - 1;
          if (mi > maxMonth || (mi === maxMonth && wi > maxWeek) || (mi === maxMonth && wi === maxWeek && di > maxDay)) {
            maxMonth = mi; maxWeek = wi; maxDay = di;
          }
        }
      });
      setActiveMonth(maxMonth);
      setActiveWeek(maxWeek);
      setActiveDay(maxDay);
    }

    // Pre-load Google script so token client is ready
    if (CLIENT_ID) {
      loadGoogleScript().then(() => {
        initTokenClient(CLIENT_ID);
        // If user was already signed in, silently get a token
        if (getStoredUser()) silentRefresh();
      });
    }
  }, []);

  const silentRefresh = async () => {
    try {
      const token = await requestAccessToken();
      setAccessToken(token);
    } catch { /* user will need to click sign-in again */ }
  };

  // ── Google sign-in ─────────────────────────────────────────────────────────
  const handleSignedIn = async (token, userProfile) => {
    setUser(userProfile);
    setAccessToken(token);
    setSyncStatus('syncing');
    try {
      const sid = await findOrCreateSheet(token, userProfile.email);
      setSheetId(sid);
      await Promise.all([ensureBodyWeightTab(token, sid), ensurePlanTab(token, sid)]);
      const [remoteProgress, remoteWeights, remoteSettings, remoteBodyWeight, planData] = await Promise.all([
        readProgress(token, sid),
        readWeightLog(token, sid),
        readSettings(token, sid),
        readBodyWeight(token, sid),
        readPlan(token, sid),
      ]);
      // Merge progress
      const merged = { ...loadProgress(), ...remoteProgress };
      setProgress(merged);
      saveProgressLocal(merged);
      // Merge exercise weight log
      const localWeights = loadWeightLogLocal();
      const mergedWeights = remoteWeights.length > 0
        ? [...remoteWeights, ...localWeights.filter(l => !remoteWeights.some(r => r.date === l.date && r.exercise === l.exercise && r.weight === l.weight))]
        : localWeights;
      setWeightLog(mergedWeights);
      // Load profile from settings sheet
      if (remoteSettings.profile_age !== undefined) {
        const remoteProfile = { age: remoteSettings.profile_age, weight_kg: remoteSettings.profile_weight_kg, height_cm: remoteSettings.profile_height_cm };
        setProfile(remoteProfile);
        saveProfile(remoteProfile);
      }
      // Merge body weight log
      const localBodyWeight = loadBodyWeightLocal();
      const mergedBodyWeight = remoteBodyWeight.length > 0
        ? [...remoteBodyWeight, ...localBodyWeight.filter(l => !remoteBodyWeight.some(r => r.date === l.date))]
        : localBodyWeight;
      setBodyWeightLog(mergedBodyWeight);
      // Load or seed plan
      if (Object.keys(planData).length === 0) {
        setScreen('onboarding');
      } else {
        setPlanMonths(planData);
        setActiveWeek(0);
        setActiveDay(0);
      }
      setSyncStatus('synced');
    } catch (e) {
      console.error('Sheets init error:', e);
      setSyncStatus('error');
    }
  };

  // ── onboarding ─────────────────────────────────────────────────────────────
  const handleOnboardingSelect = async (level) => {
    const planMap = { beginner: beginnerPlan, intermediate: intermediatePlan, pro: proPlan };
    const selectedPlan = planMap[level];
    const planData = {};
    selectedPlan.forEach(m => { planData[m.id] = m; });
    setPlanMonths(planData);
    setScreen('workout');
    if (accessToken && sheetId) {
      try { await writePlanBatch(accessToken, sheetId, selectedPlan); }
      catch { /* already saved in state */ }
    }
  };

  // ── export ─────────────────────────────────────────────────────────────────
  const handleExport = () => {
    const completedMonths = Object.keys(planMonths).length;
    const nextMonth = completedMonths + 1;
    const prompt = `You are an expert personal trainer. The user has completed ${completedMonths} months of structured training. Based on their history and profile below, generate Month ${nextMonth} as a JSON object.\n\nProfile: ${JSON.stringify(profile)}\n\nCompleted plan summary: ${JSON.stringify(Object.fromEntries(Object.entries(planMonths).map(([k, v]) => [k, { theme: v.theme, weeks: v.weeks?.length }])))}\n\nGenerate Month ${nextMonth} matching this exact JSON structure:\n{\n  "id": ${nextMonth},\n  "label": "Month ${nextMonth}",\n  "theme": "Theme Name",\n  "description": "Brief description",\n  "gradient": ["#hexcolor1", "#hexcolor2"],\n  "weeks": [\n    {\n      "id": 1,\n      "label": "Week 1",\n      "theme": "Week theme",\n      "note": "Coach note",\n      "days": [\n        {\n          "day": "Day 1",\n          "label": "Day label",\n          "tag": "Push|Pull|Legs|Upper|Lower|Strength|Cardio|Recovery",\n          "color": "#hexcolor",\n          "exercises": [\n            { "name": "Exercise Name", "sets": 4, "reps": "10", "rest": "90s", "tip": "Form cue" }\n          ]\n        }\n      ]\n    }\n  ]\n}\n\nInclude 4 weeks, each week 4-6 days, 5-7 exercises per day. Make it progressive from Month ${completedMonths}. Return ONLY valid JSON, no markdown, no explanation.`;
    const data = {
      exportDate: new Date().toISOString().split('T')[0],
      profile,
      completedMonths,
      plan: planMonths,
      weightLog,
      bodyWeightLog,
      prompt,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gymplan-export-${data.exportDate}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ── import plan ────────────────────────────────────────────────────────────
  const handleImportPlan = async (file) => {
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (!data.id || !Array.isArray(data.weeks)) throw new Error('Invalid plan format — must have "id" and "weeks"');
      setPlanMonths(prev => ({ ...prev, [data.id]: data }));
      if (accessToken && sheetId) {
        try { await writePlanMonth(accessToken, sheetId, data); }
        catch { /* saved in state */ }
      }
      return null;
    } catch (e) {
      return e.message;
    }
  };

  // ── debounced sync — flushes only the changed keys ────────────────────────
  const syncProgress = useCallback((key, value) => {
    if (!accessToken || !sheetId) return;
    pendingChanges.current[key] = value;
    clearTimeout(syncTimer.current);
    setSyncStatus('syncing');
    syncTimer.current = setTimeout(async () => {
      const changes = { ...pendingChanges.current };
      pendingChanges.current = {};
      try {
        await writeProgressChanges(accessToken, sheetId, changes);
        setSyncStatus('synced');
      } catch {
        setSyncStatus('error');
      }
    }, 2000);
  }, [accessToken, sheetId]);

  // ── toggle set ─────────────────────────────────────────────────────────────
  const toggleSet = (monthIdx, weekIdx, dayIdx, exIdx, setIdx) => {
    const key   = `m${monthIdx+1}-w${weekIdx+1}-d${dayIdx+1}-e${exIdx}-s${setIdx}`;
    const value = !progress[key];
    setProgress(prev => ({ ...prev, [key]: value }));
    saveProgressLocal({ ...progress, [key]: value });
    syncProgress(key, value);
  };

  const isSetDone = (mi, wi, di, ei, si) => !!progress[`m${mi+1}-w${wi+1}-d${di+1}-e${ei}-s${si}`];

  // ── log weight ─────────────────────────────────────────────────────────────
  const handleLogWeight = async (entry) => {
    const withId = { ...entry, id: Date.now() };
    saveWeightLocal(withId);
    setWeightLog(w => [...w, withId]);
    if (accessToken && sheetId) {
      try { await appendWeightEntry(accessToken, sheetId, withId); }
      catch { /* already saved locally */ }
    }
  };

  const handleDeleteWeight = async (entry) => {
    deleteWeightLocal(entry.id);
    setWeightLog(w => w.filter(e => e.id !== entry.id));
    if (accessToken && sheetId) {
      try { await deleteWeightEntry(accessToken, sheetId, entry); }
      catch { /* removed locally */ }
    }
  };

  // ── profile ────────────────────────────────────────────────────────────────
  const handleSaveProfile = async (newProfile) => {
    setProfile(newProfile);
    saveProfile(newProfile);
    if (accessToken && sheetId) {
      try { await writeSettings(accessToken, sheetId, { profile_age: newProfile.age, profile_weight_kg: newProfile.weight_kg, profile_height_cm: newProfile.height_cm }); }
      catch { /* saved locally */ }
    }
  };

  // ── body weight ────────────────────────────────────────────────────────────
  const handleLogBodyWeight = async (entry) => {
    saveBodyWeightLocal(entry);
    setBodyWeightLog(prev => {
      const idx = prev.findIndex(e => e.date === entry.date);
      if (idx >= 0) { const next = [...prev]; next[idx] = entry; return next; }
      return [...prev, entry];
    });
    if (accessToken && sheetId) {
      try { await appendBodyWeight(accessToken, sheetId, entry); }
      catch { /* saved locally */ }
    }
  };

  // ── refetch from sheet ─────────────────────────────────────────────────────
  const handleRefetch = async () => {
    if (!accessToken || !sheetId) throw new Error('Not connected');
    const [remoteProgress, remoteWeights, remoteSettings, remoteBodyWeight, planData] = await Promise.all([
      readProgress(accessToken, sheetId),
      readWeightLog(accessToken, sheetId),
      readSettings(accessToken, sheetId),
      readBodyWeight(accessToken, sheetId),
      readPlan(accessToken, sheetId),
    ]);
    const merged = { ...loadProgress(), ...remoteProgress };
    setProgress(merged);
    saveProgressLocal(merged);
    const localWeights = loadWeightLogLocal();
    const mergedWeights = remoteWeights.length > 0
      ? [...remoteWeights, ...localWeights.filter(l => !remoteWeights.some(r => r.date === l.date && r.exercise === l.exercise && r.weight === l.weight))]
      : localWeights;
    setWeightLog(mergedWeights);
    if (remoteSettings.profile_age !== undefined) {
      const p = { age: remoteSettings.profile_age, weight_kg: remoteSettings.profile_weight_kg, height_cm: remoteSettings.profile_height_cm };
      setProfile(p);
      saveProfile(p);
    }
    const localBw = loadBodyWeightLocal();
    setBodyWeightLog(remoteBodyWeight.length > 0
      ? [...remoteBodyWeight, ...localBw.filter(l => !remoteBodyWeight.some(r => r.date === l.date))]
      : localBw);
    if (Object.keys(planData).length > 0) {
      setPlanMonths(planData);
      setActiveWeek(0);
      setActiveDay(0);
    }
  };

  // ── sign out ───────────────────────────────────────────────────────────────
  const handleSignOut = () => {
    signOut();
    setUser(null);
    setAccessToken(null);
    setSheetId(null);
    setSyncStatus('offline');
    setScreen('workout');
  };

  // ── render ─────────────────────────────────────────────────────────────────
  if (!user) {
    return <GoogleSignIn clientId={CLIENT_ID} onSignedIn={handleSignedIn} />;
  }

  if (screen === 'onboarding') return <OnboardingScreen onSelect={handleOnboardingSelect} />;

  const [wcPanel, setWcPanel]       = useState(null); // 'warmup' | 'cooldown' | null
  const [showRestTimer, setShowRestTimer] = useState(false);

  const maxMonthCount = Math.max(6, ...Object.keys(planMonths).map(Number));
  const months = Array.from({ length: maxMonthCount }, (_, i) => planMonths[i + 1] ?? null);

  const [g1, g2] = planMonths[activeMonth + 1]?.gradient ?? MONTH_GRADS[activeMonth + 1] ?? ['#1d4ed8', '#6d28d9'];
  const currentMonth = months[activeMonth];

  if (screen === 'settings') return <SettingsScreen user={user} sheetId={sheetId} onClose={() => setScreen('workout')} onSignOut={handleSignOut} profile={profile} onSaveProfile={handleSaveProfile} bodyWeightLog={bodyWeightLog} onLogBodyWeight={handleLogBodyWeight} onExport={handleExport} onImportPlan={handleImportPlan} onRefetch={handleRefetch} />;
  if (screen === 'weights')  return <WeightLogScreen weightLog={weightLog} onClose={() => setScreen('workout')} sheetId={sheetId} />;

  if (!currentMonth) {
    return (
      <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: '#f1f5f9', minHeight: '100vh' }}>
        <AppHeader user={user} profile={profile} g1={g1} g2={g2} activeMonth={activeMonth} setActiveMonth={i => { setActiveMonth(i); setActiveWeek(0); setActiveDay(0); }} onSettings={() => setScreen('settings')} onWeights={() => setScreen('weights')} syncStatus={syncStatus} months={months} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400, padding: 32, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>📥</div>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#1e293b', margin: '0 0 8px' }}>Month {activeMonth + 1} not available yet</h2>
          <p style={{ color: '#64748b', fontSize: 14, margin: '0 0 24px', maxWidth: 280, lineHeight: 1.6 }}>
            Go to ⚙️ Settings → Export to get your history + AI prompt, then paste it into any AI tool and import the result.
          </p>
          <button onClick={() => setScreen('settings')} style={{ background: `linear-gradient(135deg, ${g1}, ${g2})`, color: '#fff', border: 'none', borderRadius: 16, padding: '14px 32px', fontSize: 15, fontWeight: 800, cursor: 'pointer' }}>
            ⚙️ Open Settings
          </button>
        </div>
      </div>
    );
  }

  const week = currentMonth.weeks[activeWeek] ?? currentMonth.weeks[0];
  const day  = week?.days[activeDay] ?? week?.days[0];

  const totalSets  = day?.exercises.reduce((a, ex) => a + ex.sets, 0) || 0;
  const doneSets   = day?.exercises.reduce((a, ex, ei) => a + Array.from({ length: ex.sets }).filter((_, si) => isSetDone(activeMonth, activeWeek, activeDay, ei, si)).length, 0) || 0;
  const pct        = totalSets ? Math.round(doneSets / totalSets * 100) : 0;
  const monthTotal = currentMonth.weeks.reduce((a, w) => a + w.days.reduce((b, d) => b + d.exercises.reduce((c, ex) => c + ex.sets, 0), 0), 0);
  const monthDone  = currentMonth.weeks.reduce((a, w, wi) => a + w.days.reduce((b, d, di) => b + d.exercises.reduce((c, ex, ei) => c + Array.from({ length: ex.sets }).filter((_, si) => isSetDone(activeMonth, wi, di, ei, si)).length, 0), 0), 0);
  const monthPct   = monthTotal ? Math.round(monthDone / monthTotal * 100) : 0;

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: '#f1f5f9', minHeight: '100vh' }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } } * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; } body { margin: 0; background: #f1f5f9; }`}</style>

      <AppHeader user={user} profile={profile} g1={g1} g2={g2} activeMonth={activeMonth}
        setActiveMonth={i => { setActiveMonth(i); setActiveWeek(0); setActiveDay(0); }}
        onSettings={() => setScreen('settings')} onWeights={() => setScreen('weights')}
        monthPct={monthPct} syncStatus={syncStatus} months={months}
      />

      {/* week tabs */}
      <div style={{ background: '#fff', display: 'flex', borderBottom: '1px solid #e2e8f0', overflowX: 'auto' }}>
        {currentMonth.weeks.map((w, i) => (
          <button key={i} onClick={() => { setActiveWeek(i); setActiveDay(0); }} style={{ flexShrink: 0, flex: 1, minWidth: 72, padding: '10px 4px', background: 'none', border: 'none', borderBottom: activeWeek === i ? `3px solid ${g1}` : '3px solid transparent', color: activeWeek === i ? g1 : '#64748b', fontWeight: activeWeek === i ? 700 : 500, fontSize: 12, cursor: 'pointer', lineHeight: 1.3 }}>
            {w.label}<br /><span style={{ fontSize: 10, opacity: 0.65 }}>{w.theme}</span>
          </button>
        ))}
      </div>

      <div style={{ padding: '12px 12px calc(48px + env(safe-area-inset-bottom))' }}>
        {/* coach note */}
        <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: 12, padding: '10px 12px', fontSize: 13, color: '#92400e', marginBottom: 10 }}>
          <span style={{ fontWeight: 700 }}>📋 Coach: </span>{week.note}
        </div>

        {/* day pills */}
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 8, marginBottom: 10 }}>
          {week.days.map((d, i) => {
            const dDone = d.exercises.reduce((a, ex, ei) => a + Array.from({ length: ex.sets }).filter((_, si) => isSetDone(activeMonth, activeWeek, i, ei, si)).length, 0);
            const dTotal = d.exercises.reduce((a, ex) => a + ex.sets, 0);
            const complete = dTotal > 0 && dDone === dTotal;
            return (
              <button key={i} onClick={() => setActiveDay(i)} style={{ flexShrink: 0, padding: '8px 12px', borderRadius: 12, border: activeDay === i ? 'none' : '1px solid #e2e8f0', background: activeDay === i ? g1 : '#fff', color: activeDay === i ? '#fff' : '#475569', fontWeight: 600, fontSize: 11, cursor: 'pointer', lineHeight: 1.4, textAlign: 'left', position: 'relative' }}>
                {d.day}<br /><span style={{ fontSize: 10, opacity: 0.8 }}>{d.label}</span>
                {complete && <span style={{ position: 'absolute', top: -5, right: -5, background: '#22c55e', color: '#fff', borderRadius: '50%', width: 16, height: 16, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>✓</span>}
              </button>
            );
          })}
        </div>

        {/* day header + progress */}
        <div style={{ background: '#fff', borderRadius: 16, padding: 14, marginBottom: 10, borderLeft: `4px solid ${day.color}`, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: '#1e293b' }}>{day.day}: {day.label}</div>
              <span style={{ background: day.color + '22', color: day.color, borderRadius: 20, padding: '2px 10px', fontSize: 11, fontWeight: 700, marginTop: 4, display: 'inline-block' }}>{day.tag}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <button onClick={() => setShowRestTimer(true)} style={{ background: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: 8, padding: '4px 9px', fontSize: 13, cursor: 'pointer' }}>⏱️</button>
                <button onClick={() => setWcPanel('warmup')} style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 8, padding: '4px 9px', fontSize: 13, cursor: 'pointer' }}>🔥</button>
                <button onClick={() => setWcPanel('cooldown')} style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: 8, padding: '4px 9px', fontSize: 13, cursor: 'pointer' }}>🧊</button>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: g1 }}>{pct}%</div>
                <div style={{ fontSize: 11, color: '#94a3b8' }}>{doneSets}/{totalSets} sets</div>
              </div>
            </div>
          </div>
          <div style={{ background: '#e2e8f0', borderRadius: 99, height: 6, marginTop: 10 }}>
            <div style={{ background: `linear-gradient(90deg, ${g1}, ${g2})`, width: `${pct}%`, height: 6, borderRadius: 99, transition: 'width 0.4s' }} />
          </div>
        </div>

        {/* daily body weight */}
        <DailyBodyWeight today={new Date().toISOString().split('T')[0]} bodyWeightLog={bodyWeightLog} onLog={handleLogBodyWeight} />

        {/* exercises */}
        {day.exercises.map((ex, ei) => (
          <ExerciseCard
            key={`${activeMonth}-${activeWeek}-${activeDay}-${ei}`}
            ex={ex}
            isDone={si => isSetDone(activeMonth, activeWeek, activeDay, ei, si)}
            onToggle={si => toggleSet(activeMonth, activeWeek, activeDay, ei, si)}
            onLogWeight={handleLogWeight}
            exerciseWeightLog={weightLog.filter(e => e.exercise === ex.name)}
            onDeleteWeight={handleDeleteWeight}
          />
        ))}

        {/* essentials */}
        <div style={{ background: '#fff', borderRadius: 16, padding: 14, marginTop: 4, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ fontWeight: 700, color: '#1e293b', marginBottom: 10 }}>🏋️ Daily Essentials</div>
          {[['🔥','Warm up','5–10 min light cardio + dynamic stretches'],['🧊','Cool down','5 min stretching post-session'],['💧','Hydration','2.5–3 litres daily'],['🍗','Protein','140–160g/day'],['😴','Sleep','7–8 hrs — muscles grow during sleep'],['📈','Overload','+1–2 reps or +2–5% weight weekly']].map(([icon,label,text]) => (
            <div key={label} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#475569', marginBottom: 6 }}>
              <span>{icon}</span><span><strong>{label}:</strong> {text}</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', fontSize: 12, color: '#94a3b8', marginTop: 16 }}>Trust the process 💪</div>
      </div>

      {showRestTimer && (
        <TimerModal totalSeconds={60} label="Rest Timer" onClose={() => setShowRestTimer(false)} />
      )}
      {wcPanel && (
        <WarmupCooldownModal
          type={wcPanel}
          dayType={detectDayType(day)}
          onClose={() => setWcPanel(null)}
        />
      )}
    </div>
  );
}
