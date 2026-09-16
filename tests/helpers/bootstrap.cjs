'use strict';
const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE = 'http://127.0.0.1:8080';
const SCRATCH = path.join(__dirname, '..', 'scratch');
const LAUNCH_ARGS = ['--no-sandbox', '--disable-gpu', '--autoplay-policy=no-user-gesture-required'];

fs.mkdirSync(SCRATCH, { recursive: true });

const MOCK_SUPABASE_SOURCE = [
  "const session={user:{id:'fake-user',email:'fake@test.com'}};",
  "const mockClient={",
  "  auth: { getSession: () => Promise.resolve({ data: { session }, error: null }), getUser: () => Promise.resolve({ data: { user: session.user } }), onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }), signUp: () => Promise.resolve({ data: { user: null, session: null }, error: null }), signInWithPassword: () => Promise.resolve({ data: { session }, error: null }), updateUser: () => Promise.resolve({ data: {}, error: null }), resetPasswordForEmail: () => Promise.resolve({ data: {}, error: null }), signOut: () => Promise.resolve({ error: null }) },",
  "  from: () => ({ select: () => ({ eq: () => ({ single: () => Promise.resolve({ data: null, error: null }), maybeSingle: () => Promise.resolve({ data: null, error: null }) }), order: () => ({ range: () => Promise.resolve({ data: [], error: null }) }) }), upsert: () => Promise.resolve({ error: null }), insert: () => Promise.resolve({ error: null }) }),",
  "  rpc: () => Promise.resolve({ data: null, error: null })",
  "};",
  "Object.defineProperty(window, 'supabase', { get: () => ({ createClient: () => mockClient }), configurable: true });"
].join('\n');

function buildPreload({ theme = 'dark', mode = 'static', level = 'beginner', extra = {} } = {}) {
  // NOTE: evaluateOnNewDocument serializes the returned function — it must NOT
  // reference any free variables from this module, so values are interpolated
  // into the source string (closure vars would ReferenceError in-page).
  const lines = [
    "try { localStorage.setItem('onboarding_done', 'true'); } catch (e) {}",
    "localStorage.setItem('onboarding_completed', 'true');",
    "localStorage.setItem('trial_start', String(Date.now()));",
    "localStorage.setItem('hsk_theme', '" + theme + "');",
    "localStorage.setItem('theme', '" + theme + "');",
    "localStorage.setItem('tutor_mode', '" + mode + "');",
    "localStorage.setItem('skip_transcript_confirm', '0');",
    "localStorage.setItem('app_lang', 'en');",
    "localStorage.setItem('chinese_level', '" + level + "');",
    "localStorage.setItem('tutor_onboarded', 'true');",
    "localStorage.setItem('beginner_mode', '" + ((level === 'never' || level === 'beginner') ? 'true' : 'false') + "');"
  ];
  for (const [k, v] of Object.entries(extra)) {
    lines.push("localStorage.setItem(" + JSON.stringify(k) + ", " + JSON.stringify(v) + ");");
  }
  lines.push(MOCK_SUPABASE_SOURCE);
  return new Function(lines.join('\n'));
}

async function waitFor(page, fn, timeout = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try { if (await page.evaluate(fn)) return true; } catch (e) {}
    await new Promise(r => setTimeout(r, 300));
  }
  return false;
}

async function launch(opts = {}) {
  return puppeteer.launch({
    headless: 'new',
    executablePath: CHROME_PATH,
    args: opts.args || LAUNCH_ARGS
  });
}

// Boot a page to the tutor view. static mode runs startTutor(0) and waits for
// the first lesson phrase; live mode just navigates so the caller can drive
// the greeting / typed-send flow itself.
async function bootTutor(browser, {
  theme = 'dark',
  mode = 'static',
  level = 'beginner',
  width = 1280,
  height = 900,
  extra = {},
  abortApi = true // true = abort /api/tts + /api/chat; 'tts' = abort only tts; false = none
} = {}) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  if (abortApi) {
    await page.setRequestInterception(true);
    page.on('request', req => {
      const u = req.url();
      if (u.includes('/api/tts')) { req.abort(); return; }
      if (abortApi === true && u.includes('/api/chat')) { req.abort(); return; }
      req.continue();
    });
  }
  await page.evaluateOnNewDocument(buildPreload({ theme, mode, level, extra }));
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  await page.goto(BASE + '/app.html', { waitUntil: 'load', timeout: 60000 });
  await new Promise(r => setTimeout(r, 1200));
  await page.evaluate(() => { try { navTo('/app/tutor'); } catch (e) {} });
  await new Promise(r => setTimeout(r, 700));
  await page.evaluate(() => { try { skipOnboarding(); } catch (e) {} });
  if (mode !== 'live') {
    await page.evaluate(() => { try { startTutor(0); } catch (e) {} });
    await waitFor(page, () => !!document.querySelector('#tutChat .cai .phrase'), 15000);
  }
  return { page, errors };
}

async function grabAttCardClip(page, file) {
  const el = await page.evaluate(() => {
    const c = Array.from(document.querySelectorAll('#tutChat .cb.cus.att')).pop();
    if (!c) return null;
    const rect = c.getBoundingClientRect();
    return { x: Math.max(0, rect.left - 10), y: Math.max(0, rect.top - 10), w: Math.min(rect.width + 20, 1280), h: rect.height + 20 };
  });
  if (!el) return false;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  await page.screenshot({ path: file, clip: { x: Math.round(el.x), y: Math.round(el.y), width: Math.round(el.w), height: Math.round(el.h) } });
  return true;
}

function hasCJK(s) {
  return /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3000-\u303f\uff00-\uffef]/.test(s);
}

module.exports = {
  CHROME_PATH, BASE, SCRATCH, LAUNCH_ARGS,
  buildPreload, waitFor, launch, bootTutor, grabAttCardClip, hasCJK
};