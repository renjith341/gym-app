import { useState, useEffect, useRef } from 'react';

const PIN_KEY = 'gymplan_pin_hash';
const AUTH_KEY = 'gymplan_authed';
const AUTH_TTL = 1000 * 60 * 60 * 24 * 7; // 7 days

// Simple hash (not cryptographic — just obfuscates the PIN in localStorage)
function hashPin(pin) {
  let h = 0;
  for (let i = 0; i < pin.length; i++) {
    h = (Math.imul(31, h) + pin.charCodeAt(i)) | 0;
  }
  return String(h + 2147483648);
}

function isAuthed() {
  try {
    const d = JSON.parse(localStorage.getItem(AUTH_KEY) || 'null');
    return d && Date.now() - d.t < AUTH_TTL;
  } catch { return false; }
}

function setAuthed() {
  localStorage.setItem(AUTH_KEY, JSON.stringify({ t: Date.now() }));
}

export function hasPinSet() {
  return !!localStorage.getItem(PIN_KEY);
}

export default function PinLock({ onUnlocked }) {
  const pinSet = hasPinSet();
  const [mode, setMode] = useState(pinSet ? 'enter' : 'setup'); // setup | enter | confirm
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isAuthed()) onUnlocked();
  }, []);

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleDigit = (d) => {
    setError('');
    if (mode === 'setup') {
      if (pin.length < 4) setPin(p => p + d);
    } else if (mode === 'confirm') {
      if (confirmPin.length < 4) {
        const next = confirmPin + d;
        setConfirmPin(next);
        if (next.length === 4) {
          if (next === pin) {
            localStorage.setItem(PIN_KEY, hashPin(next));
            setAuthed();
            setSuccess(true);
            setTimeout(() => onUnlocked(), 600);
          } else {
            setError('PINs do not match — try again');
            triggerShake();
            setTimeout(() => { setPin(''); setConfirmPin(''); setMode('setup'); }, 800);
          }
        }
      }
    } else {
      // enter mode
      const next = pin + d;
      setPin(next);
      if (next.length === 4) {
        const stored = localStorage.getItem(PIN_KEY);
        if (hashPin(next) === stored) {
          setAuthed();
          setSuccess(true);
          setTimeout(() => onUnlocked(), 600);
        } else {
          setError('Incorrect PIN');
          triggerShake();
          setTimeout(() => setPin(''), 500);
        }
      }
    }
  };

  const handleBackspace = () => {
    setError('');
    if (mode === 'confirm') setConfirmPin(p => p.slice(0, -1));
    else setPin(p => p.slice(0, -1));
  };

  // Auto-advance setup to confirm
  useEffect(() => {
    if (mode === 'setup' && pin.length === 4) {
      setTimeout(() => setMode('confirm'), 300);
    }
  }, [pin, mode]);

  const currentLen = mode === 'confirm' ? confirmPin.length : pin.length;

  const titles = {
    setup: 'Create Your PIN',
    confirm: 'Confirm PIN',
    enter: 'Enter PIN',
  };
  const subtitles = {
    setup: 'Choose a 4-digit PIN to protect your app',
    confirm: 'Re-enter your PIN to confirm',
    enter: 'Your gym plan is PIN protected',
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 60%, #1d4ed8 100%)',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", padding: 24,
      userSelect: 'none'
    }}>
      {/* Logo */}
      <div style={{ fontSize: 52, marginBottom: 8 }}>💪</div>
      <div style={{ color: '#fff', fontSize: 22, fontWeight: 800, marginBottom: 4 }}>6-Month Gym Plan</div>
      <div style={{ color: '#94a3b8', fontSize: 13, marginBottom: 40 }}>{subtitles[mode]}</div>

      {/* Title */}
      <div style={{ color: '#e2e8f0', fontSize: 18, fontWeight: 700, marginBottom: 24 }}>{titles[mode]}</div>

      {/* PIN dots */}
      <div style={{
        display: 'flex', gap: 16, marginBottom: 32,
        animation: shake ? 'shake 0.4s ease' : 'none'
      }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{
            width: 18, height: 18, borderRadius: '50%',
            background: i < currentLen ? (success ? '#22c55e' : '#fff') : 'transparent',
            border: `2px solid ${i < currentLen ? (success ? '#22c55e' : '#fff') : '#475569'}`,
            transition: 'all 0.15s'
          }} />
        ))}
      </div>

      {/* Error */}
      {error && (
        <div style={{ color: '#f87171', fontSize: 13, marginBottom: 16, fontWeight: 600 }}>{error}</div>
      )}

      {/* Keypad */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, width: '100%', maxWidth: 280 }}>
        {['1','2','3','4','5','6','7','8','9','','0','⌫'].map((d, i) => (
          <button key={i} onClick={() => d === '⌫' ? handleBackspace() : d ? handleDigit(d) : null}
            disabled={!d}
            style={{
              height: 72, borderRadius: 16, border: 'none',
              background: d === '⌫' ? 'rgba(255,255,255,0.08)' : d ? 'rgba(255,255,255,0.12)' : 'transparent',
              color: '#fff', fontSize: d === '⌫' ? 22 : 26, fontWeight: 600,
              cursor: d ? 'pointer' : 'default',
              transition: 'background 0.1s',
              opacity: !d ? 0 : 1,
            }}
            onTouchStart={e => { if(d) e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; }}
            onTouchEnd={e => { if(d) e.currentTarget.style.background = d==='⌫' ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.12)'; }}
          >
            {d}
          </button>
        ))}
      </div>

      {mode === 'enter' && (
        <button
          onClick={() => { localStorage.removeItem(AUTH_KEY); }}
          style={{ marginTop: 32, color: '#475569', background: 'none', border: 'none', fontSize: 12, cursor: 'pointer' }}
        >
          Forgot PIN? Reset app data
        </button>
      )}

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-10px); }
          40% { transform: translateX(10px); }
          60% { transform: translateX(-8px); }
          80% { transform: translateX(8px); }
        }
      `}</style>
    </div>
  );
}
