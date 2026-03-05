// Google Sheets sync via Apps Script webhook
// User deploys a Google Apps Script that acts as REST endpoint

const SHEETS_KEY = 'gymplan_sheets_url';

export function getSheetsUrl() {
  return localStorage.getItem(SHEETS_KEY) || '';
}

export function setSheetsUrl(url) {
  localStorage.setItem(SHEETS_KEY, url);
}

export async function syncProgressToSheets(progress) {
  const url = getSheetsUrl();
  if (!url) return { ok: false, reason: 'No URL configured' };
  try {
    const rows = [];
    for (const [key, val] of Object.entries(progress)) {
      if (val) {
        // key format: m{month}-w{week}-d{day}-e{exercise}-s{set}
        rows.push({ key, completed: true, timestamp: new Date().toISOString() });
      }
    }
    const res = await fetch(url, {
      method: 'POST',
      mode: 'no-cors', // Apps Script requires no-cors
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'syncProgress', rows })
    });
    return { ok: true };
  } catch (e) {
    return { ok: false, reason: e.message };
  }
}

export async function loadProgressFromSheets() {
  const url = getSheetsUrl();
  if (!url) return null;
  try {
    const res = await fetch(url + '?action=getProgress');
    const data = await res.json();
    return data.progress || {};
  } catch (e) {
    return null;
  }
}

export async function saveWeightLog(entry) {
  // entry: { date, exercise, weight, reps, notes }
  const url = getSheetsUrl();
  if (!url) return false;
  try {
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'logWeight', entry })
    });
    return true;
  } catch (e) {
    return false;
  }
}

// The Google Apps Script code users need to deploy
export const APPS_SCRIPT_CODE = `
// Paste this code into Google Apps Script (script.google.com)
// Then deploy as Web App (Execute as: Me, Access: Anyone)

const SHEET_ID = SpreadsheetApp.getActiveSpreadsheet().getId();

function doGet(e) {
  const action = e.parameter.action;
  if (action === 'getProgress') {
    return getProgress();
  }
  return ContentService.createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.action === 'syncProgress') {
      saveProgress(data.rows);
    } else if (data.action === 'logWeight') {
      logWeight(data.entry);
    }
  } catch(err) {}
  return ContentService.createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}

function saveProgress(rows) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Progress') || ss.insertSheet('Progress');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Key','Completed','Timestamp']);
  }
  const existing = {};
  const data = sheet.getDataRange().getValues();
  data.forEach((row, i) => { if (i > 0) existing[row[0]] = i + 1; });
  rows.forEach(row => {
    if (existing[row.key]) {
      sheet.getRange(existing[row.key], 2, 1, 2).setValues([[row.completed, row.timestamp]]);
    } else {
      sheet.appendRow([row.key, row.completed, row.timestamp]);
    }
  });
}

function getProgress() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Progress');
  if (!sheet) return ContentService.createTextOutput(JSON.stringify({progress:{}})).setMimeType(ContentService.MimeType.JSON);
  const data = sheet.getDataRange().getValues();
  const progress = {};
  data.slice(1).forEach(row => { if (row[1]) progress[row[0]] = true; });
  return ContentService.createTextOutput(JSON.stringify({progress}))
    .setMimeType(ContentService.MimeType.JSON);
}

function logWeight(entry) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('WeightLog') || ss.insertSheet('WeightLog');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Date','Exercise','Weight(kg)','Reps','Notes']);
  }
  sheet.appendRow([entry.date, entry.exercise, entry.weight, entry.reps, entry.notes || '']);
}
`.trim();
