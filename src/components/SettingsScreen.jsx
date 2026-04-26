import { useState } from 'react';
import { getSheetUrl } from '../utils/googleSheets';

export default function SettingsScreen({ user, sheetId, onClose, onSignOut, profile, onSaveProfile, bodyWeightLog, onLogBodyWeight, onExport, onImportPlan, onRefetch }) {
  const [age, setAge]           = useState(profile.age || '');
  const [weightKg, setWeightKg] = useState(profile.weight_kg || '');
  const [heightCm, setHeightCm] = useState(profile.height_cm || '');
  const [saved, setSaved]       = useState(false);
  const [bwKg, setBwKg]         = useState('');
  const [importError, setImportError]     = useState('');
  const [importSuccess, setImportSuccess] = useState(false);
  const [syncing, setSyncing]   = useState(false);
  const [syncMsg, setSyncMsg]   = useState('');
  const today = new Date().toISOString().split('T')[0];

  const handleRefetch = async () => {
    setSyncing(true);
    setSyncMsg('');
    try {
      await onRefetch();
      setSyncMsg('✓ Data refreshed');
    } catch {
      setSyncMsg('⚠ Refresh failed — check connection');
    }
    setSyncing(false);
    setTimeout(() => setSyncMsg(''), 3000);
  };
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
      <div style={{ background: 'linear-gradient(135deg, #1e293b, #334155)', color: '#fff', padding: 'calc(20px + env(safe-area-inset-top)) 16px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
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

        {/* Clear cache */}
        <div style={{ background: '#fff', borderRadius: 16, padding: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>🔄 App Version</div>
          <div style={{ fontSize: 12, color: '#64748b', marginBottom: 10, lineHeight: 1.5 }}>
            If you see an old version of the app, clear the cache and reload to get the latest update.
          </div>
          <button onClick={async () => {
            if ('serviceWorker' in navigator) {
              const regs = await navigator.serviceWorker.getRegistrations();
              await Promise.all(regs.map(r => r.unregister()));
            }
            if ('caches' in window) {
              const keys = await caches.keys();
              await Promise.all(keys.map(k => caches.delete(k)));
            }
            window.location.reload(true);
          }} style={{ width: '100%', padding: '10px', background: '#f1f5f9', color: '#1e293b', border: '1px solid #e2e8f0', borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
            🔄 Clear Cache & Reload
          </button>
        </div>

        {/* Google Sheet */}
        <div style={{ background: '#fff', borderRadius: 16, padding: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>📊 Google Sheet</div>
          <div style={{ fontSize: 13, color: '#64748b', marginBottom: 12, lineHeight: 1.6 }}>
            Progress, weights, and body weight sync to your private Google Sheet.
          </div>
          <button onClick={handleRefetch} disabled={syncing || !sheetId}
            style={{ width: '100%', padding: '10px', background: syncing ? '#f1f5f9' : '#eff6ff', color: syncing ? '#94a3b8' : '#1d4ed8', border: '1px solid #bfdbfe', borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: sheetId ? 'pointer' : 'not-allowed', marginBottom: 8 }}>
            {syncing ? '⏳ Fetching…' : '☁️ Fetch Latest from Sheet'}
          </button>
          {syncMsg && <div style={{ fontSize: 13, color: syncMsg.startsWith('✓') ? '#15803d' : '#dc2626', marginBottom: 8, textAlign: 'center' }}>{syncMsg}</div>}
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
