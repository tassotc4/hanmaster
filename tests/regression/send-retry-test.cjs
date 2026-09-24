'use strict';
// v143 gate: sendToGemini 429 retry + distinct error messages.
// Boot is QUIET via a restore seed (v135 handshake) so all observed calls
// belong to the test's own turn. Expired trial => free tier => the daily
// counter runs, so the exactly-once side-effect assertions are real.
const { launch, buildPreload, BASE, waitFor, LAUNCH_ARGS } = require('../helpers/bootstrap.cjs');

const CANNED = '非常好！\n\nEnglish: Very good!';
const SEED = {
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

  const newPage = async (mode429, always) => {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
    let chatCalls = 0;
    await page.setRequestInterception(true);
    page.on('request', req => {
      const url = req.url();
      if (url.includes('/api/chat')) {
        chatCalls++;
        if (mode429 === '429' && (always || chatCalls <= 2)) {
          req.respond({ status: 429, contentType: 'application/json', body: JSON.stringify({ error: 'Too many requests, slow down.' }) });
        } else if (mode429 === '503') {
          req.respond({ status: 503, contentType: 'application/json', body: JSON.stringify({ error: 'AI service busy, please try again.' }) });
        } else if (mode429 === 'abort') {
          req.abort();
        } else {
          req.respond({ status: 200, contentType: 'application/json', body: JSON.stringify({ candidates: [{ content: { parts: [{ text: CANNED }] } }] }) });
        }
        return;
      }
      if (url.includes('/api/tts')) { req.abort(); return; }
      req.continue();
    });
    await page.evaluateOnNewDocument(buildPreload({ theme: 'dark', mode: 'live', level: 'beginner', extra: { voice_mode: 'off', trial_start: '0' } }));
    await page.evaluateOnNewDocument(new Function(`localStorage.setItem('__testChatSeed', ${JSON.stringify(JSON.stringify(SEED))});`));
    await page.goto(BASE + '/app.html', { waitUntil: 'load', timeout: 60000 });
    await new Promise(r => setTimeout(r, 1800));
    await waitFor(page, () => window._chatRestored === true, 10000);
    await page.evaluate(() => { try { navTo('/app/tutor'); } catch (e) {} });
    await new Promise(r => setTimeout(r, 800));
    const beforeCalls = chatCalls;
    const beforeCount = await page.evaluate(() => localStorage.getItem('tutor_messages_count'));
    return { page, beforeCalls, beforeCount, getCalls: () => chatCalls };
  };
  const readWarn = (page) => page.evaluate(() => {
    const warns = Array.from(document.querySelectorAll('#tutChat .cwarn'));
    const last = warns[warns.length - 1];
    return { text: last ? last.innerText : '', status: document.getElementById('tutStatus').textContent };
  });

  // --- 1. 429 twice then 200: retries, succeeds, exactly-once side effects ---
  let { page, beforeCalls, beforeCount, getCalls } = await newPage('429', false);
  const cai = await page.evaluate(() => document.querySelectorAll('#tutChat .cai').length);
  await page.evaluate(() => sendToGemini('你好呀'));
  await waitFor(page, () => document.querySelectorAll('#tutChat .cai').length > cai, 25000);
  await new Promise(r => setTimeout(r, 2000));
  const afterCount = await page.evaluate(() => localStorage.getItem('tutor_messages_count'));
  const histDup = await page.evaluate(() => geminiHistory.filter(h => h.parts[0].text === '你好呀').length);
  const w1 = await readWarn(page);
  check('1. 429x2: retried to success, exactly 3 calls', getCalls() - beforeCalls === 3, 'calls=' + (getCalls() - beforeCalls));
  check('1. daily counter incremented ONCE (free user, 2 retries)', parseInt(afterCount) === (parseInt(beforeCount || '0') + 1), 'before=' + beforeCount + ' after=' + afterCount);
  check('1. geminiHistory has the user text ONCE (no retry duplication)', histDup === 1, 'occurrences=' + histDup);
  check('1. reply rendered (no error bubble)', w1.text.indexOf('chatting fast') === -1 && w1.text.indexOf('Connection Failed') === -1, JSON.stringify(w1).slice(0, 120));

  // --- 2. 429 always: retries exhausted -> the distinct "chatting fast" message ---
  ({ page, beforeCalls, getCalls } = await newPage('429', true));
  await page.evaluate(() => sendToGemini('你好呀'));
  await new Promise(r => setTimeout(r, 22000)); // 3+6+9 backoff + margin
  const w2 = await readWarn(page);
  check("2. 429 exhausted: \"You're chatting fast\" message (not generic)",
    w2.text.indexOf('chatting fast') !== -1 && w2.text.indexOf('Connection Failed') === -1,
    JSON.stringify(w2).slice(0, 160));
  check('2. exactly 4 calls (initial + 3 retries)', getCalls() - beforeCalls === 4, 'calls=' + (getCalls() - beforeCalls));

  // --- 3. 503: the distinct "AI service busy" message, NO retry ---
  ({ page, beforeCalls, getCalls } = await newPage('503', false));
  await page.evaluate(() => sendToGemini('你好呀'));
  await new Promise(r => setTimeout(r, 3000));
  const w3 = await readWarn(page);
  check('3. 503: "AI service busy" message, exactly 1 call (no retry)',
    w3.text.indexOf('busy') !== -1 && w3.text.indexOf('Connection Failed') === -1 && getCalls() - beforeCalls === 1,
    JSON.stringify(w3).slice(0, 160) + ' calls=' + (getCalls() - beforeCalls));

  // --- 4. Network error: the generic message preserved ---
  ({ page, beforeCalls, getCalls } = await newPage('abort', false));
  await page.evaluate(() => sendToGemini('你好呀'));
  await new Promise(r => setTimeout(r, 3000));
  const w4 = await readWarn(page);
  check('4. network error: generic "Tutor Connection Failed" preserved',
    w4.text.indexOf('Connection Failed') !== -1 && w4.text.indexOf('chatting fast') === -1 && w4.text.indexOf('busy') === -1,
    JSON.stringify(w4).slice(0, 160));

  await browser.close();
  const fails = results.filter(r => !r.ok).length;
  console.log(fails ? 'RESULT: FAIL (' + fails + ')' : 'RESULT: PASS (' + results.length + ' checks)');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
