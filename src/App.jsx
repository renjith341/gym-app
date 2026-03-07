import { useState, useEffect, useCallback, useRef } from 'react';
import { beginnerPlan } from './data/plans/beginner';
import { intermediatePlan } from './data/plans/intermediate';
import { proPlan } from './data/plans/pro';
import { loadProgress, saveProgressLocal, loadWeightLogLocal, saveWeightLocal, deleteWeightLocal, loadProfile, saveProfile, loadBodyWeightLocal, saveBodyWeightLocal } from './utils/storage';
import { getStoredUser, signOut, loadGoogleScript, initTokenClient, requestAccessToken } from './utils/googleAuth';
import { findOrCreateSheet, readProgress, writeProgress, readWeightLog, appendWeightEntry, deleteWeightEntry, getSheetUrl, getCachedSheetId, readSettings, writeSettings, readBodyWeight, appendBodyWeight, ensureBodyWeightTab, ensurePlanTab, readPlan, writePlanMonth, writePlanBatch } from './utils/googleSheets';
import GoogleSignIn from './components/GoogleSignIn';

const PLAN_KEY = 'gymplan_plan';

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

const MONTH_GRADS = {
  1: ['#1d4ed8','#6d28d9'],
  2: ['#0d9488','#059669'],
  3: ['#7c3aed','#db2777'],
  4: ['#dc2626','#ea580c'],
  5: ['#0369a1','#0891b2'],
  6: ['#4f46e5','#7c3aed'],
};

// ─────────────── SYNC STATUS BADGE ───────────────────────────────────────────
function SyncBadge({ status }) {
  const styles = {
    syncing: { bg: '#fef3c7', color: '#92400e', text: '⏳ Syncing…' },
    synced:  { bg: '#f0fdf4', color: '#15803d', text: '✓ Saved to Sheets' },
    offline: { bg: '#f1f5f9', color: '#64748b', text: '📴 Offline (saved locally)' },
    error:   { bg: '#fef2f2', color: '#dc2626', text: '⚠ Sync failed (saved locally)' },
  };
  const s = styles[status] || styles.offline;
  return (
    <div style={{ background: s.bg, color: s.color, borderRadius: 8, padding: '4px 10px', fontSize: 11, fontWeight: 600 }}>
      {s.text}
    </div>
  );
}

// ─────────────── EXERCISE CARD ────────────────────────────────────────────────
function ExerciseCard({ ex, isDone, onToggle, onLogWeight, exerciseWeightLog, onDeleteWeight }) {
  const [expanded, setExpanded] = useState(false);
  const [imgUrl, setImgUrl]     = useState(null);
  const [imgLoading, setImgLoading] = useState(false);
  const [showLog, setShowLog]   = useState(false);
  const [kg, setKg]             = useState('');
  const [reps, setReps]         = useState(String(ex.reps));

  const allDone = Array.from({ length: ex.sets }).every((_, si) => isDone(si));

  const fetchImage = useCallback(async () => {
    if (imgUrl !== null || imgLoading) return;
    setImgLoading(true);
    try {
      const q = encodeURIComponent(ex.name + ' exercise');
      const res = await fetch(`https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&generator=search&gsrsearch=${q}&gsrnamespace=6&iiprop=url&iiurlwidth=400&format=json&origin=*`);
      const data = await res.json();
      const pages = Object.values(data.query?.pages || {});
      const url = pages[0]?.imageinfo?.[0]?.url || null;
      setImgUrl(url || 'none');
    } catch { setImgUrl('none'); }
    setImgLoading(false);
  }, [ex.name, imgUrl, imgLoading]);

  const handleExpand = () => {
    const next = !expanded;
    setExpanded(next);
    if (next && imgUrl === null) fetchImage();
  };

  const today = new Date().toISOString().split('T')[0];
  const todaySets = (exerciseWeightLog || []).filter(e => e.date === today);
  const nextSetNum = todaySets.length + 1;

  const handleLog = () => {
    if (!kg) return;
    onLogWeight({ exercise: ex.name, weight: parseFloat(kg), reps: reps || String(ex.reps), date: today, notes: '' });
    setKg('');
    setReps(String(ex.reps));
  };

  return (
    <div style={{ background: '#fff', borderRadius: 16, marginBottom: 8, overflow: 'hidden', opacity: allDone ? 0.58 : 1, boxShadow: '0 1px 6px rgba(0,0,0,0.07)', transition: 'opacity 0.3s' }}>
      <div style={{ padding: '12px 14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: '#1e293b', textDecoration: allDone ? 'line-through' : 'none' }}>{ex.name}</div>
            <div style={{ display: 'flex', gap: 10, marginTop: 4, fontSize: 12, color: '#64748b', flexWrap: 'wrap' }}>
              <span>🔁 {ex.sets} × {ex.reps}</span>
              {ex.rest !== '—' && <span>⏱ {ex.rest}</span>}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
            {allDone && <span style={{ color: '#22c55e', fontWeight: 900, fontSize: 18, lineHeight: 1 }}>✓</span>}
            <button onClick={() => setShowLog(l => !l)} style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 8, padding: '4px 9px', fontSize: 12, cursor: 'pointer', color: '#475569' }}>⚖️</button>
            <button onClick={handleExpand} style={{ background: expanded ? '#f1f5f9' : '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '4px 9px', fontSize: 11, fontWeight: 600, color: '#475569', cursor: 'pointer' }}>
              {expanded ? '▲' : '📷'}
            </button>
          </div>
        </div>

        {/* set buttons */}
        {ex.sets > 1 && (
          <div style={{ display: 'flex', gap: 7, marginTop: 10, flexWrap: 'wrap' }}>
            {Array.from({ length: ex.sets }).map((_, si) => (
              <button key={si} onClick={() => onToggle(si)} style={{ padding: '5px 13px', borderRadius: 9, border: isDone(si) ? '1.5px solid #22c55e' : '1.5px solid #e2e8f0', background: isDone(si) ? '#f0fdf4' : '#f8fafc', color: isDone(si) ? '#16a34a' : '#64748b', fontWeight: 700, fontSize: 12, cursor: 'pointer', transition: 'all 0.15s' }}>
                {isDone(si) ? '✓ ' : ''}Set {si + 1}
              </button>
            ))}
          </div>
        )}

        {/* weight logger */}
        {showLog && (
          <div style={{ marginTop: 10, padding: '10px 12px', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#475569', marginBottom: 8 }}>📊 Sets logged today</div>
            {todaySets.length > 0 && (
              <div style={{ marginBottom: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {todaySets.map((e, i) => (
                  <div key={e.id ?? i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', borderRadius: 8, padding: '6px 10px', border: '1px solid #e2e8f0' }}>
                    <span style={{ fontSize: 12, color: '#475569' }}>Set {i + 1}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#1d4ed8' }}>{e.weight}kg × {e.reps}</span>
                    <button onClick={() => onDeleteWeight(e)} style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: 16, cursor: 'pointer', padding: '0 4px', lineHeight: 1 }}>✕</button>
                  </div>
                ))}
              </div>
            )}
            <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 6 }}>Set {nextSetNum}</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <input value={kg} onChange={e => setKg(e.target.value)} placeholder="kg" type="number" inputMode="decimal" style={{ flex: 1, padding: '7px 10px', borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 14 }} />
              <input value={reps} onChange={e => setReps(e.target.value)} placeholder="reps" type="number" inputMode="numeric" style={{ flex: 1, padding: '7px 10px', borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 14 }} />
              <button onClick={handleLog} style={{ padding: '7px 14px', background: '#1d4ed8', color: '#fff', borderRadius: 8, border: 'none', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>Save</button>
            </div>
          </div>
        )}
      </div>

      {/* form photo */}
      {expanded && (
        <div style={{ borderTop: '1px solid #f1f5f9', background: '#fafbff' }}>
          <div style={{ width: '100%', minHeight: 140, maxHeight: 220, background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {imgLoading && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: '#94a3b8', fontSize: 13 }}>
                <div style={{ width: 28, height: 28, border: '3px solid #e2e8f0', borderTopColor: '#6366f1', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                Loading…
              </div>
            )}
            {!imgLoading && imgUrl && imgUrl !== 'none' && (
              <img src={imgUrl} alt={ex.name} onError={() => setImgUrl('none')} style={{ width: '100%', maxHeight: 220, objectFit: 'cover', display: 'block' }} />
            )}
            {!imgLoading && imgUrl === 'none' && (
              <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(ex.name + ' exercise form')}`} target="_blank" rel="noreferrer" style={{ color: '#1d4ed8', fontSize: 13, textAlign: 'center', padding: 20, textDecoration: 'none', display: 'block' }}>
                ▶ Watch "{ex.name}" on YouTube
              </a>
            )}
          </div>
          {ex.tip && (
            <div style={{ padding: '10px 14px', fontSize: 13, color: '#4c1d95', background: '#f5f3ff', display: 'flex', gap: 8 }}>
              <span>💡</span><span><strong>Form:</strong> {ex.tip}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─────────────── ONBOARDING SCREEN ───────────────────────────────────────────
function OnboardingScreen({ onSelect }) {
  const [loading, setLoading] = useState('');
  const levels = [
    { key: 'beginner',     icon: '🌱', label: 'Beginner',     sub: '3 days/week · Full Body',       desc: 'Best if new to structured gym' },
    { key: 'intermediate', icon: '⚡', label: 'Intermediate', sub: '4 days/week · Upper / Lower',    desc: '1–2 years experience' },
    { key: 'pro',          icon: '🔥', label: 'Pro',          sub: '5-6 days/week · PPL + 5/3/1',   desc: 'Advanced compound-focused' },
  ];
  const handleSelect = (key) => { setLoading(key); onSelect(key); };
  return (
    <div style={{ minHeight: '100vh', background: '#f1f5f9', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ background: 'linear-gradient(135deg, #1d4ed8, #6d28d9)', color: '#fff', padding: '32px 16px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 8 }}>💪</div>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 800 }}>Choose Your Training Level</h1>
        <p style={{ margin: '8px 0 0', opacity: 0.8, fontSize: 14 }}>Your 6-month plan will be saved to your Google Sheet</p>
      </div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {levels.map(l => (
          <button key={l.key} onClick={() => handleSelect(l.key)} disabled={!!loading}
            style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#fff', border: loading === l.key ? '2px solid #1d4ed8' : '1px solid #e2e8f0', borderRadius: 16, padding: '16px 18px', cursor: loading ? 'not-allowed' : 'pointer', textAlign: 'left', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', opacity: loading && loading !== l.key ? 0.5 : 1 }}>
            <span style={{ fontSize: 36, flexShrink: 0 }}>{loading === l.key ? '⏳' : l.icon}</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: 18, color: '#1e293b' }}>{l.label}</div>
              <div style={{ fontSize: 13, color: '#475569', marginTop: 2 }}>{l.sub}</div>
              <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 2 }}>{l.desc}</div>
            </div>
          </button>
        ))}
        <p style={{ textAlign: 'center', fontSize: 12, color: '#94a3b8', margin: '8px 0 0' }}>
          Your plan is saved to your Google Sheet — edit it anytime
        </p>
      </div>
    </div>
  );
}

// ─────────────── WEIGHT LOG SCREEN ────────────────────────────────────────────
function WeightLogScreen({ weightLog, onClose, sheetId }) {
  const grouped = {};
  [...weightLog].reverse().forEach(e => {
    if (!grouped[e.exercise]) grouped[e.exercise] = [];
    grouped[e.exercise].push(e);
  });

  return (
    <div style={{ minHeight: '100vh', background: '#f1f5f9', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', color: '#fff', padding: '20px 16px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 8, padding: '6px 12px', color: '#fff', cursor: 'pointer', fontSize: 14 }}>← Back</button>
        <div style={{ fontWeight: 800, fontSize: 20, flex: 1 }}>📊 Weight Log</div>
        {sheetId && (
          <a href={getSheetUrl(sheetId)} target="_blank" rel="noreferrer" style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: '6px 10px', color: '#fff', fontSize: 12, textDecoration: 'none', fontWeight: 600 }}>Open Sheet ↗</a>
        )}
      </div>
      <div style={{ padding: 16 }}>
        {Object.keys(grouped).length === 0 && (
          <div style={{ textAlign: 'center', padding: 40, color: '#94a3b8' }}>
            <div style={{ fontSize: 36 }}>📝</div>
            <div style={{ marginTop: 8 }}>No weights logged yet.<br />Tap ⚖️ on any exercise to log.</div>
          </div>
        )}
        {Object.entries(grouped).map(([ex, entries]) => (
          <div key={ex} style={{ background: '#fff', borderRadius: 14, padding: 14, marginBottom: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <div style={{ fontWeight: 700, color: '#1e293b', marginBottom: 8 }}>{ex}</div>
            {entries.slice(0, 8).map((e, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#475569', padding: '4px 0', borderBottom: i < entries.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                <span>{e.date}</span>
                <span style={{ fontWeight: 700, color: '#1d4ed8' }}>{e.weight}kg × {e.reps}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────── SETTINGS SCREEN ──────────────────────────────────────────────
function SettingsScreen({ user, sheetId, onClose, onSignOut, profile, onSaveProfile, bodyWeightLog, onLogBodyWeight, onExport, onImportPlan }) {
  const [age, setAge]           = useState(profile.age || '');
  const [weightKg, setWeightKg] = useState(profile.weight_kg || '');
  const [heightCm, setHeightCm] = useState(profile.height_cm || '');
  const [saved, setSaved]       = useState(false);
  const [bwKg, setBwKg]         = useState('');
  const [importError, setImportError]     = useState('');
  const [importSuccess, setImportSuccess] = useState(false);
  const today = new Date().toISOString().split('T')[0];
  const todayEntry = bodyWeightLog.find(e => e.date === today);

  const handleSave = () => {
    onSaveProfile({ age, weight_kg: weightKg, height_cm: heightCm });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleLogBw = () => {
    if (!bwKg) return;
    onLogBodyWeight({ date: today, weight_kg: parseFloat(bwKg), notes: '' });
    setBwKg('');
  };

  const handleImportFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImportError('');
    setImportSuccess(false);
    const err = await onImportPlan(file);
    if (err) setImportError(err);
    else setImportSuccess(true);
    e.target.value = '';
  };

  const recentBw = [...bodyWeightLog].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 7);

  return (
    <div style={{ minHeight: '100vh', background: '#f1f5f9', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ background: 'linear-gradient(135deg, #1e293b, #334155)', color: '#fff', padding: '20px 16px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 8, padding: '6px 12px', color: '#fff', cursor: 'pointer', fontSize: 14 }}>← Back</button>
        <div style={{ fontWeight: 800, fontSize: 20 }}>⚙️ Settings</div>
      </div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>

        {/* Google account */}
        <div style={{ background: '#fff', borderRadius: 16, padding: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {user?.picture && <img src={user.picture} alt="" style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid #e2e8f0' }} />}
            <div>
              <div style={{ fontWeight: 700, color: '#1e293b', fontSize: 16 }}>{user?.name}</div>
              <div style={{ color: '#64748b', fontSize: 13 }}>{user?.email}</div>
            </div>
          </div>
          <button onClick={onSignOut} style={{ marginTop: 14, width: '100%', padding: '10px', background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
            Sign Out
          </button>
        </div>

        {/* Profile */}
        <div style={{ background: '#fff', borderRadius: 16, padding: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12 }}>👤 My Profile</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
            {[['Age', age, setAge, 'number', 'yrs'], ['Weight', weightKg, setWeightKg, 'decimal', 'kg'], ['Height', heightCm, setHeightCm, 'decimal', 'cm']].map(([label, val, setter, mode, unit]) => (
              <div key={label} style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: '#64748b', marginBottom: 4 }}>{label} ({unit})</div>
                <input value={val} onChange={e => setter(e.target.value)} type="number" inputMode={mode}
                  style={{ width: '100%', padding: '8px', borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 14, boxSizing: 'border-box' }} />
              </div>
            ))}
          </div>
          <button onClick={handleSave} style={{ width: '100%', padding: '10px', background: saved ? '#f0fdf4' : '#1d4ed8', color: saved ? '#15803d' : '#fff', border: saved ? '1px solid #bbf7d0' : 'none', borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
            {saved ? '✓ Saved' : 'Save Profile'}
          </button>
        </div>

        {/* Body weight log */}
        <div style={{ background: '#fff', borderRadius: 16, padding: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>⚖️ Body Weight</div>
          {todayEntry && (
            <div style={{ fontSize: 13, color: '#15803d', background: '#f0fdf4', borderRadius: 8, padding: '6px 10px', marginBottom: 10 }}>
              Today: {todayEntry.weight_kg} kg
            </div>
          )}
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            <input value={bwKg} onChange={e => setBwKg(e.target.value)} type="number" inputMode="decimal" placeholder="Today's weight (kg)"
              style={{ flex: 1, padding: '8px 10px', borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 14 }} />
            <button onClick={handleLogBw} style={{ padding: '8px 16px', background: '#1d4ed8', color: '#fff', borderRadius: 8, border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Log</button>
          </div>
          {recentBw.length > 0 && (
            <div>
              <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 6 }}>Last 7 entries</div>
              {recentBw.map(e => (
                <div key={e.date} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#475569', padding: '5px 0', borderBottom: '1px solid #f1f5f9' }}>
                  <span>{e.date}</span>
                  <span style={{ fontWeight: 700, color: '#1d4ed8' }}>{e.weight_kg} kg</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* My Plan */}
        <div style={{ background: '#fff', borderRadius: 16, padding: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12 }}>📋 My Plan</div>
          <button onClick={onExport} style={{ width: '100%', padding: '10px', background: '#1d4ed8', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: 'pointer', marginBottom: 8 }}>
            📤 Export Progress + Next Month Prompt
          </button>
          <div style={{ fontSize: 12, color: '#64748b', marginBottom: 10, lineHeight: 1.5 }}>
            Download your history and a prompt to generate the next month with any AI tool (Claude, ChatGPT, etc.).
          </div>
          <label style={{ display: 'block', width: '100%', padding: '10px', background: '#f0fdf4', color: '#15803d', border: '1px solid #bbf7d0', borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: 'pointer', textAlign: 'center', boxSizing: 'border-box' }}>
            📥 Import Plan Month
            <input type="file" accept=".json" onChange={handleImportFile} style={{ display: 'none' }} />
          </label>
          {importError   && <div style={{ color: '#dc2626', fontSize: 13, marginTop: 6 }}>{importError}</div>}
          {importSuccess && <div style={{ color: '#15803d', fontSize: 13, marginTop: 6 }}>✓ Plan month imported successfully!</div>}
        </div>

        {/* Google Sheet */}
        <div style={{ background: '#fff', borderRadius: 16, padding: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>📊 Google Sheet</div>
          <div style={{ fontSize: 13, color: '#64748b', marginBottom: 12, lineHeight: 1.6 }}>
            Progress, weights, and body weight sync to your private Google Sheet.
          </div>
          {sheetId ? (
            <a href={getSheetUrl(sheetId)} target="_blank" rel="noreferrer" style={{ display: 'block', textAlign: 'center', padding: '10px', background: '#f0fdf4', color: '#15803d', border: '1px solid #bbf7d0', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
              Open My Google Sheet ↗
            </a>
          ) : (
            <div style={{ color: '#94a3b8', fontSize: 13 }}>Sheet will be created on first sync.</div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────── DAILY BODY WEIGHT ────────────────────────────────────────────
function DailyBodyWeight({ today, bodyWeightLog, onLog }) {
  const [kg, setKg] = useState('');
  const todayEntry = bodyWeightLog.find(e => e.date === today);

  const handleLog = () => {
    if (!kg) return;
    onLog({ date: today, weight_kg: parseFloat(kg), notes: '' });
    setKg('');
  };

  return (
    <div style={{ background: '#fff', borderRadius: 14, padding: '10px 14px', marginBottom: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ fontSize: 18 }}>⚖️</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#475569' }}>Today's body weight</div>
        {todayEntry && <div style={{ fontSize: 11, color: '#15803d' }}>Logged: {todayEntry.weight_kg} kg</div>}
      </div>
      <input value={kg} onChange={e => setKg(e.target.value)} type="number" inputMode="decimal" placeholder="kg"
        style={{ width: 64, padding: '6px 8px', borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 14 }} />
      <button onClick={handleLog} style={{ padding: '6px 12px', background: '#1d4ed8', color: '#fff', borderRadius: 8, border: 'none', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>Log</button>
    </div>
  );
}

// ─────────────── HEADER ───────────────────────────────────────────────────────
function AppHeader({ user, profile, g1, g2, activeMonth, setActiveMonth, onSettings, onWeights, monthPct, syncStatus, months }) {
  return (
    <>
      <div style={{ background: `linear-gradient(135deg, ${g1}, ${g2})`, color: '#fff', padding: '14px 16px 10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 19, fontWeight: 800 }}>💪 Gym Training Plan</div>
            <div style={{ fontSize: 11, opacity: 0.8, marginTop: 1 }}>
              {[profile.age && `${profile.age}y`, profile.height_cm && `${profile.height_cm}cm`, profile.weight_kg && `${profile.weight_kg}kg`].filter(Boolean).join(' · ') || 'Set profile in ⚙️'}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {user?.picture && <img src={user.picture} alt="" onClick={onSettings} style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.5)', cursor: 'pointer' }} />}
            <button onClick={onWeights} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 10, padding: '7px 10px', color: '#fff', cursor: 'pointer', fontSize: 15 }}>📊</button>
            <button onClick={onSettings} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 10, padding: '7px 10px', color: '#fff', cursor: 'pointer', fontSize: 15 }}>⚙️</button>
          </div>
        </div>
        <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SyncBadge status={syncStatus} />
          {monthPct !== undefined && (
            <div style={{ fontSize: 12, opacity: 0.85 }}>Month: {monthPct}%</div>
          )}
        </div>
        {monthPct !== undefined && (
          <div style={{ background: 'rgba(255,255,255,0.25)', borderRadius: 99, height: 4, marginTop: 6 }}>
            <div style={{ background: '#fff', width: `${monthPct}%`, height: 4, borderRadius: 99, transition: 'width 0.4s' }} />
          </div>
        )}
      </div>
      <div style={{ background: '#1e293b', display: 'flex', overflowX: 'auto' }}>
        {months.map((m, i) => (
          <button key={i} onClick={() => setActiveMonth(i)} style={{ flexShrink: 0, flex: 1, minWidth: 52, padding: '8px 4px', background: 'none', border: 'none', borderBottom: activeMonth === i ? '3px solid #fff' : '3px solid transparent', color: m ? (activeMonth === i ? '#fff' : '#64748b') : '#334155', fontWeight: activeMonth === i ? 700 : 400, fontSize: 12, cursor: m ? 'pointer' : 'default', lineHeight: 1.3 }}>
            M{i + 1}<br /><span style={{ fontSize: 9, opacity: 0.7 }}>{m ? (m.theme || '').split(' ')[0] : '—'}</span>
          </button>
        ))}
      </div>
    </>
  );
}

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
  const syncTimer = useRef(null);

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

  // ── debounced sync ─────────────────────────────────────────────────────────
  const syncProgress = useCallback((newProgress) => {
    if (!accessToken || !sheetId) return;
    clearTimeout(syncTimer.current);
    setSyncStatus('syncing');
    syncTimer.current = setTimeout(async () => {
      try {
        await writeProgress(accessToken, sheetId, newProgress);
        setSyncStatus('synced');
      } catch {
        setSyncStatus('error');
      }
    }, 2000);
  }, [accessToken, sheetId]);

  // ── toggle set ─────────────────────────────────────────────────────────────
  const toggleSet = (monthIdx, weekIdx, dayIdx, exIdx, setIdx) => {
    const key  = `m${monthIdx+1}-w${weekIdx+1}-d${dayIdx+1}-e${exIdx}-s${setIdx}`;
    const next = { ...progress };
    if (next[key]) delete next[key]; else next[key] = true;
    setProgress(next);
    saveProgressLocal(next);
    syncProgress(next);
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

  const maxMonthCount = Math.max(6, ...Object.keys(planMonths).map(Number));
  const months = Array.from({ length: maxMonthCount }, (_, i) => planMonths[i + 1] ?? null);

  const [g1, g2] = planMonths[activeMonth + 1]?.gradient ?? MONTH_GRADS[activeMonth + 1] ?? ['#1d4ed8', '#6d28d9'];
  const currentMonth = months[activeMonth];

  if (screen === 'settings') return <SettingsScreen user={user} sheetId={sheetId} onClose={() => setScreen('workout')} onSignOut={handleSignOut} profile={profile} onSaveProfile={handleSaveProfile} bodyWeightLog={bodyWeightLog} onLogBodyWeight={handleLogBodyWeight} onExport={handleExport} onImportPlan={handleImportPlan} />;
  if (screen === 'weights')  return <WeightLogScreen weightLog={weightLog} onClose={() => setScreen('workout')} sheetId={sheetId} />;

  if (!currentMonth) {
    return (
      <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: '#f1f5f9', minHeight: '100vh', maxWidth: 480, margin: '0 auto' }}>
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

  const week = currentMonth.weeks[activeWeek];
  const day  = week?.days[activeDay];

  const totalSets  = day?.exercises.reduce((a, ex) => a + ex.sets, 0) || 0;
  const doneSets   = day?.exercises.reduce((a, ex, ei) => a + Array.from({ length: ex.sets }).filter((_, si) => isSetDone(activeMonth, activeWeek, activeDay, ei, si)).length, 0) || 0;
  const pct        = totalSets ? Math.round(doneSets / totalSets * 100) : 0;
  const monthTotal = currentMonth.weeks.reduce((a, w) => a + w.days.reduce((b, d) => b + d.exercises.reduce((c, ex) => c + ex.sets, 0), 0), 0);
  const monthDone  = currentMonth.weeks.reduce((a, w, wi) => a + w.days.reduce((b, d, di) => b + d.exercises.reduce((c, ex, ei) => c + Array.from({ length: ex.sets }).filter((_, si) => isSetDone(activeMonth, wi, di, ei, si)).length, 0), 0), 0);
  const monthPct   = monthTotal ? Math.round(monthDone / monthTotal * 100) : 0;

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: '#f1f5f9', minHeight: '100vh', maxWidth: 480, margin: '0 auto' }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } } * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }`}</style>

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

      <div style={{ padding: '12px 12px 48px' }}>
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
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: g1 }}>{pct}%</div>
              <div style={{ fontSize: 11, color: '#94a3b8' }}>{doneSets}/{totalSets} sets</div>
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
    </div>
  );
}
