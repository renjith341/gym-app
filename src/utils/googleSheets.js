// Google Sheets API v4 — all calls go directly from browser using OAuth access token

const SHEETS_BASE = 'https://sheets.googleapis.com/v4/spreadsheets';
const DRIVE_BASE  = 'https://www.googleapis.com/drive/v3/files';
const SHEET_NAME_PREFIX = 'GymPlan Progress';

const SHEET_ID_KEY = 'gymplan_sheet_id';

// ─── helpers ──────────────────────────────────────────────────────────────────

async function api(url, token, opts = {}) {
  const res = await fetch(url, {
    ...opts,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(opts.headers || {}),
    },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `HTTP ${res.status}`);
  }
  return res.status === 204 ? null : res.json();
}

// ─── spreadsheet lookup / creation ───────────────────────────────────────────

export function getCachedSheetId() {
  return localStorage.getItem(SHEET_ID_KEY) || null;
}

export async function findOrCreateSheet(token, userEmail) {
  // 1. Check cache
  const cached = getCachedSheetId();
  if (cached) {
    // Verify it still exists
    try {
      await api(`${SHEETS_BASE}/${cached}?fields=spreadsheetId`, token);
      return cached;
    } catch {
      localStorage.removeItem(SHEET_ID_KEY);
    }
  }

  // 2. Search Drive for existing sheet
  const name = `${SHEET_NAME_PREFIX} — ${userEmail}`;
  const q = encodeURIComponent(`name='${name}' and mimeType='application/vnd.google-apps.spreadsheet' and trashed=false`);
  const list = await api(`${DRIVE_BASE}?q=${q}&fields=files(id,name)`, token);

  if (list.files?.length > 0) {
    const id = list.files[0].id;
    localStorage.setItem(SHEET_ID_KEY, id);
    return id;
  }

  // 3. Create new sheet with all required tabs
  const created = await api(SHEETS_BASE, token, {
    method: 'POST',
    body: JSON.stringify({
      properties: { title: name },
      sheets: [
        { properties: { title: 'Progress',   sheetId: 0 } },
        { properties: { title: 'WeightLog',  sheetId: 1 } },
        { properties: { title: 'Settings',   sheetId: 2 } },
        { properties: { title: 'BodyWeight', sheetId: 3 } },
      ],
    }),
  });

  const id = created.spreadsheetId;

  // Write headers
  await api(`${SHEETS_BASE}/${id}/values:batchUpdate`, token, {
    method: 'POST',
    body: JSON.stringify({
      valueInputOption: 'RAW',
      data: [
        { range: 'Progress!A1:C1',    values: [['Key','Completed','Timestamp']] },
        { range: 'WeightLog!A1:E1',   values: [['Date','Exercise','Weight_kg','Reps','Notes']] },
        { range: 'Settings!A1:B1',    values: [['Key','Value']] },
        { range: 'BodyWeight!A1:C1',  values: [['Date','Weight_kg','Notes']] },
      ],
    }),
  });

  localStorage.setItem(SHEET_ID_KEY, id);
  return id;
}

// ─── progress ─────────────────────────────────────────────────────────────────

export async function readProgress(token, sheetId) {
  const data = await api(
    `${SHEETS_BASE}/${sheetId}/values/Progress!A:C`,
    token
  );
  const rows = data.values || [];
  const progress = {};
  rows.slice(1).forEach(([key, completed]) => {
    if (key && completed === 'TRUE') progress[key] = true;
  });
  return progress;
}

export async function writeProgress(token, sheetId, progress) {
  // Read existing rows to preserve row numbers (avoid duplicates)
  const data = await api(
    `${SHEETS_BASE}/${sheetId}/values/Progress!A:A`,
    token
  );
  const existingKeys = (data.values || []).slice(1).map(r => r[0]);
  const now = new Date().toISOString();

  // Build rows for keys not yet in sheet
  const newRows = Object.entries(progress)
    .filter(([k]) => !existingKeys.includes(k))
    .map(([k, v]) => [k, v ? 'TRUE' : 'FALSE', now]);

  // Update existing rows
  const updates = Object.entries(progress)
    .map(([k, v]) => {
      const rowNum = existingKeys.indexOf(k);
      if (rowNum === -1) return null;
      return {
        range: `Progress!B${rowNum + 2}:C${rowNum + 2}`,
        values: [[v ? 'TRUE' : 'FALSE', now]],
      };
    })
    .filter(Boolean);

  const reqs = [];
  if (newRows.length > 0) {
    reqs.push(
      api(`${SHEETS_BASE}/${sheetId}/values/Progress!A:C:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, token, {
        method: 'POST',
        body: JSON.stringify({ values: newRows }),
      })
    );
  }
  if (updates.length > 0) {
    reqs.push(
      api(`${SHEETS_BASE}/${sheetId}/values:batchUpdate`, token, {
        method: 'POST',
        body: JSON.stringify({ valueInputOption: 'RAW', data: updates }),
      })
    );
  }
  await Promise.all(reqs);
}

// ─── weight log ───────────────────────────────────────────────────────────────

export async function readWeightLog(token, sheetId) {
  const data = await api(
    `${SHEETS_BASE}/${sheetId}/values/WeightLog!A:E`,
    token
  );
  return (data.values || []).slice(1).map(([date, exercise, weight, reps, notes]) => ({
    date, exercise, weight: parseFloat(weight), reps, notes,
  }));
}

export async function appendWeightEntry(token, sheetId, entry) {
  await api(
    `${SHEETS_BASE}/${sheetId}/values/WeightLog!A:E:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    token,
    {
      method: 'POST',
      body: JSON.stringify({
        values: [[entry.date, entry.exercise, entry.weight, entry.reps, entry.notes || '']],
      }),
    }
  );
}

export function getSheetUrl(sheetId) {
  return `https://docs.google.com/spreadsheets/d/${sheetId}`;
}

// ─── settings (profile) ───────────────────────────────────────────────────────

export async function readSettings(token, sheetId) {
  try {
    const data = await api(`${SHEETS_BASE}/${sheetId}/values/Settings!A:B`, token);
    const settings = {};
    (data.values || []).slice(1).forEach(([key, value]) => { if (key) settings[key] = value; });
    return settings;
  } catch { return {}; }
}

export async function writeSettings(token, sheetId, settings) {
  const data = await api(`${SHEETS_BASE}/${sheetId}/values/Settings!A:A`, token);
  const existingKeys = (data.values || []).slice(1).map(r => r[0]);

  const newRows = Object.entries(settings).filter(([k]) => !existingKeys.includes(k)).map(([k, v]) => [k, String(v)]);
  const updates = Object.entries(settings).map(([k, v]) => {
    const row = existingKeys.indexOf(k);
    return row === -1 ? null : { range: `Settings!B${row + 2}`, values: [[String(v)]] };
  }).filter(Boolean);

  const reqs = [];
  if (newRows.length > 0) reqs.push(api(`${SHEETS_BASE}/${sheetId}/values/Settings!A:B:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, token, { method: 'POST', body: JSON.stringify({ values: newRows }) }));
  if (updates.length > 0) reqs.push(api(`${SHEETS_BASE}/${sheetId}/values:batchUpdate`, token, { method: 'POST', body: JSON.stringify({ valueInputOption: 'RAW', data: updates }) }));
  await Promise.all(reqs);
}

// ─── ensure missing tabs exist (for sheets created before BodyWeight was added) ─

export async function ensureBodyWeightTab(token, sheetId) {
  try {
    await api(`${SHEETS_BASE}/${sheetId}/values/BodyWeight!A1`, token);
    // Tab exists — nothing to do
  } catch {
    // Tab missing — create it
    await api(`${SHEETS_BASE}/${sheetId}:batchUpdate`, token, {
      method: 'POST',
      body: JSON.stringify({ requests: [{ addSheet: { properties: { title: 'BodyWeight' } } }] }),
    });
    // Write header
    await api(`${SHEETS_BASE}/${sheetId}/values/BodyWeight!A1:C1?valueInputOption=RAW`, token, {
      method: 'PUT',
      body: JSON.stringify({ values: [['Date', 'Weight_kg', 'Notes']] }),
    });
  }
}

// ─── body weight log ──────────────────────────────────────────────────────────

export async function readBodyWeight(token, sheetId) {
  try {
    const data = await api(`${SHEETS_BASE}/${sheetId}/values/BodyWeight!A:C`, token);
    return (data.values || []).slice(1).map(([date, weight_kg, notes]) => ({
      date, weight_kg: parseFloat(weight_kg), notes: notes || '',
    }));
  } catch { return []; }
}

export async function appendBodyWeight(token, sheetId, entry) {
  await api(
    `${SHEETS_BASE}/${sheetId}/values/BodyWeight!A:C:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    token,
    { method: 'POST', body: JSON.stringify({ values: [[entry.date, entry.weight_kg, entry.notes || '']] }) }
  );
}
