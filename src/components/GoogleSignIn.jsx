import { useState, useEffect } from 'react';
import { loadGoogleScript, initTokenClient, requestAccessToken, saveUser } from '../utils/googleAuth';

export default function GoogleSignIn({ clientId, onSignedIn }) {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
  const [gReady, setGReady]   = useState(false);

  useEffect(() => {
    loadGoogleScript().then(() => {
      initTokenClient(clientId);
      setGReady(true);
    });
  }, [clientId]);

  const handleSignIn = async () => {
    setLoading(true); setError('');
    try {
      const token = await requestAccessToken();

      // Fetch basic profile from Google
      const r = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const profile = await r.json();
      saveUser({ name: profile.name, email: profile.email, picture: profile.picture });
      onSignedIn(token, profile);
    } catch (e) {
      setError(typeof e === 'string' ? e : 'Sign-in cancelled or failed. Try again.');
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 55%, #1d4ed8 100%)',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      padding: 32, userSelect: 'none',
    }}>
      {/* Logo */}
      <div style={{ fontSize: 64, marginBottom: 12 }}>💪</div>
      <h1 style={{ color: '#fff', fontSize: 26, fontWeight: 900, margin: '0 0 6px', letterSpacing: -0.5 }}>
        6-Month Gym Plan
      </h1>
      <p style={{ color: '#94a3b8', fontSize: 14, margin: '0 0 48px', textAlign: 'center', maxWidth: 280, lineHeight: 1.6 }}>
        Your personal AI-powered training plan.<br />
        Sign in with Google to sync progress to your own private Google Sheet.
      </p>

      {/* Feature pills */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 44, width: '100%', maxWidth: 300 }}>
        {[
          ['🔒', 'Private to you', 'Only your Google account can access this'],
          ['📊', 'Your Google Sheet', 'Progress auto-saves to your own Drive'],
          ['🤖', 'AI-generated plans', 'Months 3–6 built around your progress'],
          ['📷', 'Exercise photos', 'Form images fetched for every exercise'],
        ].map(([icon, title, desc]) => (
          <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, background: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: '10px 14px' }}>
            <span style={{ fontSize: 20 }}>{icon}</span>
            <div>
              <div style={{ color: '#e2e8f0', fontWeight: 700, fontSize: 13 }}>{title}</div>
              <div style={{ color: '#64748b', fontSize: 12, marginTop: 1 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Error */}
      {error && (
        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 10, padding: '10px 16px', fontSize: 13, color: '#dc2626', marginBottom: 16, width: '100%', maxWidth: 300, textAlign: 'center' }}>
          {error}
        </div>
      )}

      {/* Sign-in button */}
      <button
        onClick={handleSignIn}
        disabled={!gReady || loading}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          width: '100%', maxWidth: 300, padding: '14px 24px',
          background: loading ? '#e2e8f0' : '#fff', color: '#1e293b',
          border: 'none', borderRadius: 14, fontSize: 16, fontWeight: 700,
          cursor: loading || !gReady ? 'not-allowed' : 'pointer',
          boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
          transition: 'transform 0.1s',
        }}
        onTouchStart={e => { if (!loading) e.currentTarget.style.transform = 'scale(0.97)'; }}
        onTouchEnd={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        {loading ? (
          <>
            <div style={{ width: 20, height: 20, border: '2px solid #cbd5e1', borderTopColor: '#1d4ed8', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
            Connecting…
          </>
        ) : (
          <>
            {/* Google G logo SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </>
        )}
      </button>

      <p style={{ color: '#334155', fontSize: 11, marginTop: 20, textAlign: 'center', maxWidth: 260, lineHeight: 1.5 }}>
        We only request access to files this app creates. We never read other Drive files.
      </p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
