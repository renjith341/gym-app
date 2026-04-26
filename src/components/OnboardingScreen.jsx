import { useState } from 'react';

export default function OnboardingScreen({ onSelect }) {
  const [loading, setLoading] = useState('');
  const levels = [
    { key: 'beginner',     icon: '🌱', label: 'Beginner',     sub: '3 days/week · Full Body',       desc: 'Best if new to structured gym' },
    { key: 'intermediate', icon: '⚡', label: 'Intermediate', sub: '4 days/week · Upper / Lower',    desc: '1–2 years experience' },
    { key: 'pro',          icon: '🔥', label: 'Pro',          sub: '5-6 days/week · PPL + 5/3/1',   desc: 'Advanced compound-focused' },
  ];
  const handleSelect = (key) => { setLoading(key); onSelect(key); };
  return (
    <div style={{ minHeight: '100vh', background: '#f1f5f9', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ background: 'linear-gradient(135deg, #1d4ed8, #6d28d9)', color: '#fff', padding: 'calc(32px + env(safe-area-inset-top)) 16px 24px', textAlign: 'center' }}>
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
