import { getSheetUrl } from '../utils/googleSheets';

export default function WeightLogScreen({ weightLog, onClose, sheetId }) {
  const grouped = {};
  [...weightLog].reverse().forEach(e => {
    if (!grouped[e.exercise]) grouped[e.exercise] = [];
    grouped[e.exercise].push(e);
  });

  return (
    <div style={{ minHeight: '100vh', background: '#f1f5f9', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', color: '#fff', padding: 'calc(20px + env(safe-area-inset-top)) 16px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
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
