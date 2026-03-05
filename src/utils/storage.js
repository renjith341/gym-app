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
