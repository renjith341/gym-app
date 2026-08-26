import { useState } from 'react';
import TimerModal from './TimerModal';
import { getWarmupExercises, getCooldownExercises } from '../data/warmupCooldown';
import { openImageSearch } from '../utils/imageSearch';

export default function WarmupCooldownModal({ type, dayType, onClose }) {
  const [timerEx, setTimerEx] = useState(null);
  const isWarmup  = type === 'warmup';
  const exercises = isWarmup ? getWarmupExercises(dayType) : getCooldownExercises(dayType);
  const totalMin  = Math.round(exercises.reduce((s, e) => s + e.duration_seconds, 0) / 60);
  const accent    = isWarmup ? '#f97316' : '#0ea5e9';

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 998, background: 'rgba(15,23,42,0.85)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, overflowY: 'auto', background: '#0f172a', display: 'flex', flexDirection: 'column' }}>
        {/* header */}
        <div style={{ background: accent, padding: 'calc(18px + env(safe-area-inset-top)) 16px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 20, color: '#fff' }}>{isWarmup ? '🔥 Warmup' : '🧊 Cooldown'}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', marginTop: 2 }}>~{totalMin} min · {exercises.length} exercises</div>
          </div>
          <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 10, padding: '8px 14px', color: '#fff', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>✕</button>
        </div>

        {/* exercise list */}
        <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {exercises.map((ex, i) => (
            <div key={ex.id} style={{ background: '#1e293b', borderRadius: 14, padding: '12px 14px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              {/* step number */}
              <div style={{ minWidth: 28, height: 28, borderRadius: '50%', background: accent, color: '#fff', fontWeight: 800, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: '#f8fafc', lineHeight: 1.3 }}>{ex.name}</span>
                    <button onClick={() => openImageSearch(ex.name)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: 13, color: '#64748b', lineHeight: 1, flexShrink: 0 }}>ℹ️</button>
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexShrink: 0, alignItems: 'center' }}>
                    <span style={{ background: accent + '33', color: accent, borderRadius: 8, padding: '2px 8px', fontSize: 12, fontWeight: 700 }}>{ex.duration_label}</span>
                    <button onClick={() => setTimerEx(ex)} style={{ background: '#334155', border: 'none', borderRadius: 8, padding: '4px 8px', fontSize: 13, cursor: 'pointer' }}>⏱️</button>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 5, lineHeight: 1.5 }}>{ex.tip}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: 'calc(24px + env(safe-area-inset-bottom))' }} />
      </div>

      {timerEx && (
        <TimerModal totalSeconds={timerEx.duration_seconds} label={timerEx.name} onClose={() => setTimerEx(null)} />
      )}
    </div>
  );
}
