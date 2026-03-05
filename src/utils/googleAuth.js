// Google Identity Services — token client (implicit flow, no backend needed)
// Scopes: spreadsheets (read/write) + drive.file (create files only)

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
  'email',
  'profile',
].join(' ');

const USER_KEY   = 'gymplan_google_user';
const TOKEN_KEY  = 'gymplan_google_token';
const TOKEN_EXP  = 'gymplan_google_token_exp';

let tokenClient = null;
let resolveToken = null;
let rejectToken  = null;

export function loadGoogleScript() {
  return new Promise((resolve) => {
    if (window.google?.accounts) { resolve(); return; }
    const s = document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true; s.defer = true;
    s.onload = resolve;
    document.head.appendChild(s);
  });
}

export function initTokenClient(clientId) {
  tokenClient = window.google.accounts.oauth2.initTokenClient({
    client_id: clientId,
    scope: SCOPES,
    callback: (resp) => {
      if (resp.error) { rejectToken?.(resp.error); return; }
      const exp = Date.now() + (resp.expires_in - 60) * 1000;
      sessionStorage.setItem(TOKEN_KEY, resp.access_token);
      sessionStorage.setItem(TOKEN_EXP, String(exp));
      resolveToken?.(resp.access_token);
    },
  });
}

export function requestAccessToken() {
  return new Promise((resolve, reject) => {
    resolveToken = resolve;
    rejectToken  = reject;
    const token = sessionStorage.getItem(TOKEN_KEY);
    const exp   = parseInt(sessionStorage.getItem(TOKEN_EXP) || '0');
    if (token && Date.now() < exp) { resolve(token); return; }
    tokenClient.requestToken();
  });
}

export function getStoredToken() {
  const token = sessionStorage.getItem(TOKEN_KEY);
  const exp   = parseInt(sessionStorage.getItem(TOKEN_EXP) || '0');
  return Date.now() < exp ? token : null;
}

export function saveUser(profile) {
  localStorage.setItem(USER_KEY, JSON.stringify(profile));
}

export function getStoredUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY) || 'null'); }
  catch { return null; }
}

export function signOut() {
  localStorage.removeItem(USER_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(TOKEN_EXP);
  const token = getStoredToken();
  if (token && window.google?.accounts?.oauth2) {
    window.google.accounts.oauth2.revoke(token);
  }
}
