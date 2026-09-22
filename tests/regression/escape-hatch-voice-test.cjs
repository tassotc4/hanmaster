'use strict';
// v138 gate: auto-voicing of no-Chinese (rule 13 escape-hatch) replies.
//  1. Live + no-CJK reply -> /api/tts fires with lang=en-US (default UI) and
//     the reply text (previously this path was completely silent).
//  2. Live + Chinese reply -> lang=zh-CN (existing behavior unchanged).
//  3. Static mode + no-CJK reply -> NO auto-voice call (live-only guard).
//  4. Degenerate no-CJK reply ('ok') -> no voice call (real-text guard).
//  5. UI language es -> escape-hatch voice requests lang=es-ES.
const { launch, buildPreload, BASE, waitFor, LAUNCH_ARGS } = require('../helpers/bootstrap.cjs');

const CANNED_EN = 'Of course! Let me explain this phrase in English. It means hello and it is used any time of day.';
const CANNED_ZH = '你好！很高兴认识你。English: Nice to meet you!';

(async () => {
  const browser = await launch();
  const results = [];
  const check = (name, ok, detail) => { results.push({ name, ok }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); };

  const newPage = async (mode, replyText, extra) => {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
    const ttsCalls = [];
    await page.setRequestInterception(true);
    page.on('request', req => {
      const url = req.url();
      if (url.includes('/api/tts')) {
        const lm = url.match(/[?&]lang=([^&]+)/);
        const tm = url.match(/[?&]text=([^&]+)/);
        ttsCalls.push({ lang: lm ? decodeURIComponent(lm[1]) : '?', text: tm ? decodeURIComponent(tm[1]).slice(0, 60) : '?' });
        req.respond({ status: 200, contentType: 'audio/mpeg', body: Buffer.from('SUQzBAAAAAAAI1RTU0AAAAPAAABTGF2Zj_QUAAAAAQAAAAs' + 'A'.repeat(2048), 'binary') });
        return;
      }
      if (url.includes('/api/chat')) {
        req.respond({ status: 200, contentType: 'application/json', body: JSON.stringify({ candidates: [{ content: { parts: [{ text: replyText }] } }] }) });
        return;
      }
      req.continue();
    });
    await page.evaluateOnNewDocument(buildPreload({ theme: 'dark', mode: mode, level: 'beginner', extra: Object.assign({ voice_mode: 'off' }, extra || {}) }));
    await page.goto(BASE + '/app.html', { waitUntil: 'load', timeout: 60000 });
    await new Promise(r => setTimeout(r, 1500));
    await page.evaluate(() => { try { navTo('/app/tutor'); } catch (e) {} });
    await new Promise(r => setTimeout(r, 1200));
    return { page, ttsCalls };
  };

  const turn = async (page, msg) => {
    const cai = await page.evaluate(() => document.querySelectorAll('#tutChat .cai').length);
    await page.evaluate(m => sendToGemini(m), msg);
    await waitFor(page, () => document.querySelectorAll('#tutChat .cai').length > cai, 15000);
    await new Promise(r => setTimeout(r, 3000)); // +1100ms voice slot + fetch
  };

  // --- 1. Live + no-CJK reply: auto-voiced in the UI language ---
  let { page, ttsCalls } = await newPage('live', CANNED_EN);
  await turn(page, '请继续');
  const en = ttsCalls.filter(c => c.lang === 'en-US' && c.text.indexOf('Of course') !== -1);
  check('1. live escape-hatch reply auto-voiced (en-US, reply text)', en.length === 1, JSON.stringify(ttsCalls));

  // --- 2. Live + Chinese reply: zh-CN, unchanged ---
  ({ page, ttsCalls } = await newPage('live', CANNED_ZH));
  await turn(page, '请继续');
  const zh = ttsCalls.filter(c => c.lang === 'zh-CN');
  const stray = ttsCalls.filter(c => c.lang !== 'zh-CN');
  check('2. live Chinese reply: zh-CN only, no stray voices', zh.length >= 1 && stray.length === 0, JSON.stringify(ttsCalls));

  // --- 3. Static mode: no auto-voice (live-only guard) ---
  ({ page, ttsCalls } = await newPage('static', CANNED_EN));
  await turn(page, 'hello there, tell me something');
  // The static boot itself fires a zh-CN call for the first lesson phrase
  // (existing Chinese auto-speak) — the guard means NO non-zh escape-hatch call.
  const staticStray = ttsCalls.filter(c => c.lang !== 'zh-CN');
  check('3. static mode: no non-zh escape-hatch voice call (boot zh-CN expected)',
    staticStray.length === 0, JSON.stringify(ttsCalls));

  // --- 4. Degenerate reply: no voice ---
  ({ page, ttsCalls } = await newPage('live', 'ok'));
  await turn(page, '请继续');
  const degenerate = ttsCalls.filter(c => c.lang === 'en-US');
  check('4. degenerate no-CJK reply: no voice call', degenerate.length === 0, JSON.stringify(ttsCalls));

  // --- 5. UI es -> es-ES routing ---
  ({ page, ttsCalls } = await newPage('live', CANNED_EN, { app_lang: 'es' }));
  await turn(page, '请继续');
  const es = ttsCalls.filter(c => c.lang === 'es-ES' && c.text.indexOf('Of course') !== -1);
  check('5. UI es: escape-hatch voice routed to es-ES', es.length === 1, JSON.stringify(ttsCalls));

  await browser.close();
  const fails = results.filter(r => !r.ok).length;
  console.log(fails ? 'RESULT: FAIL (' + fails + ')' : 'RESULT: PASS (' + results.length + ' checks)');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
