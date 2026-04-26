export default function SyncBadge({ status }) {
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
