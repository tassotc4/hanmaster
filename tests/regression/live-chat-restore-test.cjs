'use strict';
// v135 gate: live-AI conversation snapshot + silent resume (user_chats) +
// the boot-greeting verdict handshake. Fresh page per scenario (localStorage
// is shared per-origin in one browser; a leading reset-preload clears seeds).
// Custom supabase mock: from('user_chats') reads a localStorage-seeded
// snapshot and captures upserts; /api/chat canned (conversation classified
// by 'You are Li Laoshi' — baseRules also say 'professional translator').
const { launch, BASE, waitFor, LAUNCH_ARGS } = require('../helpers/bootstrap.cjs');

const RESET_SRC = `
localStorage.removeItem('__testChatSeed');
localStorage.removeItem('__testNoSession');
localStorage.removeItem('__testChatErr');
`;
const MOCK_SRC = `
const seed = () => { try { return JSON.parse(localStorage.getItem('__testChatSeed') || 'null'); } catch (e) { return null; } };
const session = { user: { id: 'fake-user', email: 'fake@test.com' } };
const generic = () => ({ select: () => ({ eq: () => ({ single: () => Promise.resolve({ data: null, error: null }), maybeSingle: () => Promise.resolve({ data: null, error: null }) }), order: () => ({ range: () => Promise.resolve({ data: [], error: null }) }) }), upsert: () => Promise.resolve({ error: null }), insert: () => Promise.resolve({ error: null }) });
const mockClient = {
  auth: {
    getSession: () => Promise.resolve({ data: { session: localStorage.getItem('__testNoSession') ? null : session }, error: null }),
    getUser: () => Promise.resolve({ data: { user: session.user } }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signUp: () => Promise.resolve({ data: { user: session.user, session: session }, error: null }),
    signInWithPassword: () => Promise.resolve({ data: { session: session }, error: null }),
    updateUser: () => Promise.resolve({ data: {}, error: null }),
    resetPasswordForEmail: () => Promise.resolve({ data: {}, error: null }),
    signOut: () => Promise.resolve({ error: null })
  },
  from: (table) => {
    if (table === 'user_chats') {
      return {
        select: () => ({ eq: () => ({ single: () => {
          if (localStorage.getItem('__testChatErr')) return Promise.reject(new Error('table missing'));
          const s = seed();
          return Promise.resolve({ data: s ? { chat: typeof s === 'string' ? s : JSON.stringify(s) } : null, error: null });
        } }) }),
        upsert: (row) => { window.__chatUpsert = row; return Promise.resolve({ error: null }); }
      };
    }
    return generic();
  },
  rpc: () => Promise.resolve({ data: null, error: null })
};
Object.defineProperty(window, 'supabase', { get: () => ({ createClient: () => mockClient }), configurable: true });
`;
const BASE_LS = `
try { localStorage.setItem('onboarding_done', 'true'); } catch (e) {}
localStorage.setItem('onboarding_completed', 'true');
localStorage.setItem('trial_start', String(Date.now()));
localStorage.setItem('hsk_theme', 'dark');
localStorage.setItem('theme', 'dark');
localStorage.setItem('skip_transcript_confirm', '0');
localStorage.setItem('app_lang', 'en');
localStorage.setItem('chinese_level', 'beginner');
localStorage.setItem('tutor_onboarded', 'true');
localStorage.setItem('beginner_mode', 'true');
`;

const SEED_FULL = {
  v: 1, rv: 1, mode: 'live', level: 'beginner',
  history: [
    { role: 'user', parts: [{ text: '我很好，谢谢！' }] },
    { role: 'model', parts: [{ text: '太好了！English: Great!' }] }
  ],
  chatHtml: '<div class="cb cai"><div class="phrase">太好了！</div></div>'
};

(async () => {
  const browser = await launch();
  const results = [];
  const check = (name, ok, detail) => { results.push({ name, ok }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); };

  const newPage = async () => {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
    const errors = [];
    page.on('pageerror', e => errors.push(String(e)));
    await page.setRequestInterception(true);
    page.on('request', req => {
      const url = req.url();
      if (url.includes('/api/chat')) {
        let body = {};
        try { body = JSON.parse(req.postData() || '{}'); } catch (e) {}
        const sys = body.systemInstruction || '';
        const isConversation = /You are Li Laoshi/.test(sys);
        req.respond({ status: 200, contentType: 'application/json', body: JSON.stringify({ candidates: [{ content: { parts: [{ text: isConversation ? '非常好。English: Very good.' : 'TR-X' }] } }] }) });
        return;
      }
      if (url.includes('/api/tts')) { req.abort(); return; }
      req.continue();
    });
    return { page, errors };
  };
  const bootPage = async (mode, seed, opts) => {
    const { page, errors } = await newPage();
    await page.evaluateOnNewDocument(new Function(RESET_SRC + BASE_LS + `
localStorage.setItem('tutor_mode', '${mode}');
` + (seed ? `localStorage.setItem('__testChatSeed', ${JSON.stringify(JSON.stringify(seed))});` : '') + (opts && opts.noSession ? `localStorage.setItem('__testNoSession', '1');` : '') + (opts && opts.tableErr ? `localStorage.setItem('__testChatErr', '1');` : '') + MOCK_SRC));
    await page.goto(BASE + '/app.html', { waitUntil: 'load', timeout: 60000 });
    await new Promise(r => setTimeout(r, 1200));
    return { page, errors };
  };

  // --- 1. Full restore at boot; boot topic-greeting is suppressed by the gate
  let { page, errors } = await bootPage('live', SEED_FULL);
  await waitFor(page, () => window._chatRestored === true, 10000);
  await page.evaluate(() => { try { navTo('/app/tutor'); } catch (e) {} });
  await new Promise(r => setTimeout(r, 1500)); // gate release + any stray greeting would land here
  const r1 = await page.evaluate(() => ({
    hist: geminiHistory.length,
    histFirst: geminiHistory.length ? geminiHistory[0].parts[0].text.slice(0, 12) : '',
    restoredPhrase: Array.from(document.querySelectorAll('#tutChat .phrase')).some(p => p.innerText.indexOf('太好了') !== -1),
    greetingBubble: (document.getElementById('tutChat').innerText || '').indexOf('非常好') !== -1 || (document.getElementById('tutChat').innerText || '').indexOf('fēicháng') !== -1,
    connectingLine: (document.getElementById('tutChat').innerText || '').indexOf('Connecting to Gemini') !== -1,
    micEnabled: !document.getElementById('tutMic').disabled
  }));
  check('1. boot restore wins: history + rendered transcript, topic greeting SUPPRESSED',
    r1.hist === 2 && r1.histFirst === '我很好，谢谢！' && r1.restoredPhrase && !r1.greetingBubble && !r1.connectingLine && r1.micEnabled,
    JSON.stringify(r1));

  // --- 2. Per-turn save captures the new exchange
  await page.evaluate(() => sendToGemini('继续聊天吧'));
  await waitFor(page, () => (document.getElementById('tutChat').innerText || '').indexOf('非常好') !== -1, 15000);
  await waitFor(page, () => !!window.__chatUpsert, 10000);
  const snap = await page.evaluate(() => { const u = window.__chatUpsert; const c = JSON.parse(u.chat); return { chat: c, user: u.user_id }; });
  check('2. per-turn save: upsert with new turn + rv + html + user_id',
    snap.chat.rv === 1 && snap.chat.mode === 'live' && JSON.stringify(snap.chat.history).indexOf('继续聊天吧') !== -1 && snap.chat.chatHtml.length > 10 && snap.user === 'fake-user',
    'rv=' + snap.chat.rv + ' turns=' + snap.chat.history.length);

  // --- 3. 40-turn cap
  await page.evaluate(() => {
    geminiHistory = [];
    for (let i = 0; i < 55; i++) geminiHistory.push({ role: i % 2 ? 'model' : 'user', parts: [{ text: 'turn' + i }] });
    return saveChatSnapshot();
  });
  await new Promise(r => setTimeout(r, 500));
  const snap3 = await page.evaluate(() => JSON.parse(window.__chatUpsert.chat));
  check('3. snapshot history capped at last 40 turns',
    snap3.history.length === 40 && snap3.history[0].parts[0].text === 'turn15',
    'len=' + snap3.history.length + ' first=' + snap3.history[0].parts[0].text);

  // --- 4. Stale rv degrades to context-only restore
  ({ page, errors } = await bootPage('live', { ...SEED_FULL, rv: 0 }));
  await waitFor(page, () => window._chatRestored === true, 10000);
  const r4 = await page.evaluate(() => ({
    hist: geminiHistory.length,
    staleBubble: Array.from(document.querySelectorAll('#tutChat .phrase')).some(p => p.innerText.indexOf('太好了') !== -1),
    note: (document.getElementById('tutChat').innerText || '').indexOf('remembers your last conversation') !== -1
  }));
  check('4. stale rv: context restored, NO stale html re-inserted, note shown',
    r4.hist === 2 && !r4.staleBubble && r4.note, JSON.stringify(r4));

  // --- 5. Study mode: no restore
  ({ page, errors } = await bootPage('static', SEED_FULL));
  await page.evaluate(() => { try { navTo('/app/tutor'); } catch (e) {} });
  await new Promise(r => setTimeout(r, 1500));
  const r5 = await page.evaluate(() => ({ restored: !!window._chatRestored, hist: geminiHistory.length }));
  check('5. study mode: no restore', !r5.restored && r5.hist === 0, JSON.stringify(r5));

  // --- 6. Signed out: no restore, no crash
  ({ page, errors } = await bootPage('live', SEED_FULL, { noSession: true }));
  await new Promise(r => setTimeout(r, 1500));
  const r6 = await page.evaluate(() => ({
    restored: !!window._chatRestored,
    hist: geminiHistory.length,
    histFirst: geminiHistory.length ? geminiHistory[0].parts[0].text.slice(0, 12) : ''
  }));
  check('6. signed out: no restore (greeting proceeds normally)',
    !r6.restored && r6.histFirst !== '我很好，谢谢！', JSON.stringify(r6));

  // --- 7. user_chats read error: fail-soft AND the gate releases the greeting
  ({ page, errors } = await bootPage('live', SEED_FULL, { tableErr: true }));
  const greeted = await waitFor(page, () => geminiHistory.length >= 2, 15000);
  const r7 = await page.evaluate(() => ({ restored: !!window._chatRestored, hist: geminiHistory.length, settled: window._chatRestoreSettled }));
  check('7. table error: fail-soft restore AND greeting gate released',
    greeted && !r7.restored && r7.hist === 2 && r7.settled === true, JSON.stringify(r7));

  check('page errors across scenarios: 0', errors.length === 0, errors.join(' | ').slice(0, 300));
  await browser.close();
  const fails = results.filter(r => !r.ok).length;
  console.log(fails ? 'RESULT: FAIL (' + fails + ')' : 'RESULT: PASS (' + results.length + ' checks)');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
