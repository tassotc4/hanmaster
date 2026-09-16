'use strict';
const path = require('path');
const { launch, buildPreload, BASE, waitFor, SCRATCH } = require('../helpers/bootstrap.cjs');

(async () => {
  const browser = await launch();

  // Real /api/chat goes to the local server; only /api/tts is aborted (the
  // audio is irrelevant to the bubble test).
  const withChatHooks = async (page) => {
    const apiCalls = [];
    await page.setRequestInterception(true);
    page.on('request', req => {
      const url = req.url();
      if (url.includes('/api/chat')) {
        let post = null;
        try { post = JSON.parse(typeof req.postData === 'function' ? req.postData() : (req.postData || '')); } catch (e) {}
        const sys = (post && post.systemInstruction) || '';
        apiCalls.push({ ts: Date.now(), sys: String(sys).slice(0, 80), text: (post && post.contents && post.contents[0] && post.contents[0].parts && post.contents[0].parts[0] && post.contents[0].parts[0].text) || '' });
      }
      if (url.includes('/api/tts')) { req.abort(); return; }
      req.continue();
    });
    return apiCalls;
  };

  // bootTutor with abortApi already wires interception; instead drive ourselves
  // so the /api/chat collector can be attached first.
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
  const apiCalls = await withChatHooks(page);
  await page.evaluateOnNewDocument(buildPreload({ theme: 'dark', mode: 'live', level: 'beginner', extra: { voice_mode: 'off' } }));
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  page.on('console', m => { if (m.type() === 'error') apiCalls.push({ ts: Date.now(), sys: 'console.error: ' + m.text().slice(0, 120), text: '' }); });
  await page.goto(BASE + '/app.html', { waitUntil: 'load', timeout: 60000 });
  await new Promise(r => setTimeout(r, 2000));
  await page.evaluate(() => { try { navTo('/app/tutor'); } catch (e) {} });
  await new Promise(r => setTimeout(r, 500));
  await page.evaluate(() => { try { startLiveTutor(); } catch (e) {} });
  console.log('— waiting for real greeting reply —');
  const greetingOk = await waitFor(page, () => document.querySelectorAll('#tutChat .cai').length > 0, 90000);
  console.log('GREETING (real): ' + (greetingOk ? 'OK' : 'TIMEOUT'));
  await new Promise(r => setTimeout(r, 2500));

  await page.evaluate(() => { const i = document.getElementById('tutTypeInput'); i.value = '你好，李老师！'; tutTypeSubmit(); });
  console.log('— waiting for real tutor reply —');
  const replyOk = await waitFor(page, () => document.querySelectorAll('#tutChat .cai').length >= 2, 90000);
  console.log('REPLY (real): ' + (replyOk ? 'OK' : 'TIMEOUT'));
  await new Promise(r => setTimeout(r, 4000));

  const dump = await page.evaluate(() => {
    const chat = document.getElementById('tutChat');
    const out = [];
    for (const el of chat.querySelectorAll('.cb')) {
      const trs = Array.from(el.querySelectorAll('[id^="utr-"], [id^="botTr-"], .tr')).map(x => x.outerHTML.slice(0, 200));
      out.push({ cls: el.className, innerText: el.innerText.slice(0, 180), trs });
    }
    return out;
  });
  console.log('======== CHAT DUMP (real exchange) ========');
  dump.forEach((d, i) => {
    console.log('[' + i + '] class="' + d.cls + '" innerText="' + d.innerText + '"');
    d.trs.forEach(t => console.log('    slot: ' + t));
  });

  await page.screenshot({ path: path.join(SCRATCH, 'real-live-ai-dark.png') });
  console.log('SCREENSHOT: real-live-ai-dark.png');

  console.log('======== API /api/chat requests (real server) ========');
  apiCalls.forEach((c, i) => console.log('[' + i + '] ' + new Date(c.ts).toISOString().slice(11, 23) + ' text="' + c.text.slice(0, 60) + '" | sys="' + c.sys + '"'));
  console.log('PAGE ERRORS: ' + (errors.length ? errors.join(' | ') : '0'));

  await browser.close();
  const pass = greetingOk && replyOk && apiCalls.length >= 2 && errors.length === 0;
  console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL (see above)');
  process.exit(pass ? 0 : 1);
})().catch(e => { console.error('FATAL', e); process.exit(1); });