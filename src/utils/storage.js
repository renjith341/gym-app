// Local storage fallback — used when offline / before sheets sync completes
const PROGRESS_KEY = 'gymplan_progress';
const GENERATED_KEY = 'gymplan_generated';
const WEIGHTS_KEY = 'gymplan_weights';

export function loadProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); }
  catch { return {}; }
}

export function saveProgressLocal(progress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function loadGeneratedMonths() {
  try { return JSON.parse(localStorage.getItem(GENERATED_KEY) || '{}'); }
  catch { return {}; }
}

export function saveGeneratedMonth(monthId, data) {
  const all = loadGeneratedMonths();
  all[monthId] = data;
  localStorage.setItem(GENERATED_KEY, JSON.stringify(all));
}

export function loadWeightLogLocal() {
  try { return JSON.parse(localStorage.getItem(WEIGHTS_KEY) || '[]'); }
  catch { return []; }
}

export function saveWeightLocal(entry) {
  const log = loadWeightLogLocal();
  log.push({ ...entry, id: Date.now() });
  localStorage.setItem(WEIGHTS_KEY, JSON.stringify(log));
}

// ─── profile ──────────────────────────────────────────────────────────────────
const PROFILE_KEY = 'gymplan_profile';

export function loadProfile() {
  try { return JSON.parse(localStorage.getItem(PROFILE_KEY) || 'null'); }
  catch { return null; }
}

export function saveProfile(profile) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

// ─── body weight log ──────────────────────────────────────────────────────────
const BODY_WEIGHT_KEY = 'gymplan_body_weight';

export function loadBodyWeightLocal() {
  try { return JSON.parse(localStorage.getItem(BODY_WEIGHT_KEY) || '[]'); }
  catch { return []; }
}

export function saveBodyWeightLocal(entry) {
  const log = loadBodyWeightLocal();
  const idx = log.findIndex(e => e.date === entry.date);
  if (idx >= 0) log[idx] = entry; else log.push(entry);
  localStorage.setItem(BODY_WEIGHT_KEY, JSON.stringify(log));
}
