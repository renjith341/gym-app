import { useState, useCallback } from 'react';
import TimerModal from './TimerModal';
import ExerciseInfoModal from './ExerciseInfoModal';
import { parseTimedReps } from '../utils/parseTimedReps';

export default function ExerciseCard({ ex, isDone, onToggle, onLogWeight, exerciseWeightLog, onDeleteWeight }) {
  const [expanded, setExpanded] = useState(false);
  const [imgUrl, setImgUrl]     = useState(null);
  const [imgLoading, setImgLoading] = useState(false);
  const [showLog, setShowLog]   = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [showInfo, setShowInfo]   = useState(false);
  const [kg, setKg]             = useState('');
  const [reps, setReps]         = useState(String(ex.reps));

  const timerSeconds = parseTimedReps(ex.reps);

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
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontWeight: 700, fontSize: 15, color: '#1e293b', textDecoration: allDone ? 'line-through' : 'none' }}>{ex.name}</span>
              <button onClick={() => setShowInfo(true)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: 14, color: '#94a3b8', lineHeight: 1, flexShrink: 0 }}>ℹ️</button>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 4, fontSize: 12, color: '#64748b', flexWrap: 'wrap', alignItems: 'center' }}>
              <span>🔁 {ex.sets} × {ex.reps}</span>
              {ex.rest !== '—' && <span>⏱ {ex.rest}</span>}
              {ex.muscle && <span style={{ background: '#f1f5f9', color: '#475569', borderRadius: 6, padding: '1px 7px', fontSize: 11, fontWeight: 600 }}>💪 {ex.muscle}</span>}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
            {allDone && <span style={{ color: '#22c55e', fontWeight: 900, fontSize: 18, lineHeight: 1 }}>✓</span>}
            {timerSeconds && (
              <button onClick={() => setShowTimer(true)} style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 8, padding: '4px 9px', fontSize: 12, cursor: 'pointer', color: '#475569' }}>⏱️</button>
            )}
            <button onClick={() => setShowLog(l => !l)} style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 8, padding: '4px 9px', fontSize: 12, cursor: 'pointer', color: '#475569' }}>⚖️</button>
            <button onClick={handleExpand} style={{ background: expanded ? '#f1f5f9' : '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '4px 9px', fontSize: 11, fontWeight: 600, color: '#475569', cursor: 'pointer' }}>
              {expanded ? '▲' : '📷'}
            </button>
          </div>
        </div>

        {/* set buttons */}
        {ex.sets >= 1 && (
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
              <input value={kg} onChange={e => setKg(e.target.value)} placeholder="kg" type="number" inputMode="decimal" style={{ padding: '8px 10px', borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 14, minWidth: 0 }} />
              <input value={reps} onChange={e => setReps(e.target.value)} placeholder="reps" type="number" inputMode="numeric" style={{ padding: '8px 10px', borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 14, minWidth: 0 }} />
            </div>
            <button onClick={handleLog} style={{ width: '100%', padding: '9px', background: '#1d4ed8', color: '#fff', borderRadius: 8, border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Save Set {nextSetNum}</button>
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
      {showTimer && timerSeconds && (
        <TimerModal totalSeconds={timerSeconds} label={ex.name} onClose={() => setShowTimer(false)} />
      )}
      {showInfo && (
        <ExerciseInfoModal name={ex.name} onClose={() => setShowInfo(false)} />
      )}
    </div>
  );
}
