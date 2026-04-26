import { useState } from 'react';

export default function DailyBodyWeight({ today, bodyWeightLog, onLog }) {
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
