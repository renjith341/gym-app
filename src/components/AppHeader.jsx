import SyncBadge from './SyncBadge';

export default function AppHeader({ user, profile, g1, g2, activeMonth, setActiveMonth, onSettings, onWeights, monthPct, syncStatus, months }) {
  return (
    <>
      <div style={{ background: `linear-gradient(135deg, ${g1}, ${g2})`, color: '#fff', padding: 'calc(14px + env(safe-area-inset-top)) 16px 10px' }}>
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
