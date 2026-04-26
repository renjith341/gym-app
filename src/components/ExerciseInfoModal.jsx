export default function ExerciseInfoModal({ name, onClose }) {
  const query = encodeURIComponent(name + ' exercise');
  const searchUrl = `https://www.google.com/search?q=${query}&tbm=isch`;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1001, display: 'flex', flexDirection: 'column', background: '#0f172a' }}>
      {/* header */}
      <div style={{ background: '#1e293b', padding: 'calc(14px + env(safe-area-inset-top)) 16px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexShrink: 0 }}>
        <div style={{ color: '#f8fafc', fontWeight: 700, fontSize: 15, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>🔍 {name}</div>
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <a href={searchUrl} target="_blank" rel="noreferrer"
            style={{ background: '#334155', color: '#94a3b8', border: 'none', borderRadius: 8, padding: '6px 12px', fontWeight: 600, fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            ↗ Open
          </a>
          <button onClick={onClose}
            style={{ background: '#ef4444', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 14px', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
            ✕ Close
          </button>
        </div>
      </div>
      {/* iframe */}
      <iframe
        src={searchUrl}
        title={name}
        style={{ flex: 1, border: 'none', width: '100%', background: '#fff' }}
        allow="autoplay; encrypted-media"
        referrerPolicy="no-referrer"
      />
      {/* footer hint */}
      <div style={{ background: '#1e293b', padding: '8px 16px', fontSize: 12, color: '#64748b', textAlign: 'center', flexShrink: 0, paddingBottom: 'calc(8px + env(safe-area-inset-bottom))' }}>
        If images don't load,&nbsp;
        <a href={searchUrl} target="_blank" rel="noreferrer" style={{ color: '#6366f1', fontWeight: 600 }}>open in browser ↗</a>
      </div>
    </div>
  );
}
