import { useState, useEffect, useRef } from 'react';

export default function TimerModal({ totalSeconds, label, onClose }) {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const done = elapsed >= totalSeconds;

  useEffect(() => {
    if (running && !done) {
      intervalRef.current = setInterval(() => setElapsed(e => e + 1), 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running, done]);

  const radius = 88;
  const circ = 2 * Math.PI * radius;
  const progress = Math.min(elapsed / totalSeconds, 1);
  const offset = circ * (1 - progress);

  const fmt = s => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(15,23,42,0.92)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28 }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ color: '#94a3b8', fontSize: 14, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>{label}</div>

      {/* SVG arc */}
      <svg width={200} height={200} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={100} cy={100} r={radius} fill="none" stroke="#1e293b" strokeWidth={10} />
        <circle cx={100} cy={100} r={radius} fill="none"
          stroke={done ? '#22c55e' : '#6366f1'}
          strokeWidth={10}
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.4s linear, stroke 0.3s' }}
        />
      </svg>

      {/* time + label inside arc */}
      <div style={{ marginTop: -168, marginBottom: 140, textAlign: 'center', pointerEvents: 'none' }}>
        <div style={{ fontSize: 48, fontWeight: 800, color: done ? '#22c55e' : '#f8fafc', fontVariantNumeric: 'tabular-nums', letterSpacing: -1 }}>
          {fmt(elapsed)}
        </div>
        <div style={{ fontSize: 13, color: '#64748b', marginTop: 2 }}>/ {fmt(totalSeconds)}</div>
        {done && <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 16, marginTop: 6 }}>Done! 🎉</div>}
      </div>

      {/* controls */}
      <div style={{ display: 'flex', gap: 16 }}>
        {!done && (
          <button onClick={() => setRunning(r => !r)}
            style={{ padding: '13px 32px', borderRadius: 14, border: 'none', background: running ? '#334155' : '#6366f1', color: '#fff', fontWeight: 700, fontSize: 16, cursor: 'pointer', minWidth: 110 }}>
            {running ? '⏸ Pause' : elapsed === 0 ? '▶ Start' : '▶ Resume'}
          </button>
        )}
        {done && (
          <button onClick={() => { setElapsed(0); setRunning(false); }}
            style={{ padding: '13px 32px', borderRadius: 14, border: 'none', background: '#334155', color: '#fff', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
            🔄 Restart
          </button>
        )}
        <button onClick={onClose}
          style={{ padding: '13px 24px', borderRadius: 14, border: 'none', background: '#1e293b', color: '#94a3b8', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
          ✕ Close
        </button>
      </div>
    </div>
  );
}
