// Parse timed reps like "45s", "30 sec", "10 min" → seconds. Returns null if not timed.
export function parseTimedReps(repsStr) {
  if (!repsStr) return null;
  const s = String(repsStr).toLowerCase().trim();
  const secMatch = s.match(/^(\d+(?:\.\d+)?)\s*s(?:ec)?/);
  if (secMatch) return Math.round(parseFloat(secMatch[1]));
  const minMatch = s.match(/^(\d+(?:\.\d+)?)\s*m(?:in)?/);
  if (minMatch) return Math.round(parseFloat(minMatch[1]) * 60);
  return null;
}
