'use strict';
// v142 gate: Chinese promo hallucinations caught at the transcript layer.
//  1. BOTH shipped regexes (parsed from actual source, evaled — no replica):
//     match 谢谢观看﹚ (exact incident string incl. trailing fullwidth bracket),
//     谢谢观看, 感謝觀看, 感谢观看; do NOT match bare 谢谢 / 好 / 对 / 行 / 不 /
//     我很好 / 好的谢谢 (genuine short answers pass, v97 trade-off).
//  2. Client behavioral: the hallucinated transcript is rejected by the
//     client guard — NO user bubble, NO conversation call (the tutor never
//     sees it).
//  3. Genuine-pass end-to-end: transcript 谢谢 renders as a user bubble and
//     the conversation call fires.
const path = require('path');
const fs = require('fs');
const { launch, buildPreload, BASE, waitFor, LAUNCH_ARGS } = require('../helpers/bootstrap.cjs');

let pass = true;
const check = (name, ok, detail) => { console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); if (!ok) pass = false; };
const FW = String.fromCharCode(0xFE5A); // ﹚ fullwidth closing bracket
const INCIDENT = '谢谢观看' + FW;

// --- 1. Parse + eval BOTH shipped regexes from source ---
const serverSrc = fs.readFileSync(path.join(__dirname, '../../server.js'), 'utf8');
const clientSrc = fs.readFileSync(path.join(__dirname, '../../public/js/app.js'), 'utf8');
const serverReM = serverSrc.match(/if \((\/transcribe\|speaker's own[^\n]+?\/)\.test\(transcribed\)\)/);
const clientReM = clientSrc.match(/const zhPromo = (\/[^\n]+?\/)\.test\(transcript\);/);
check('both regexes parse from actual shipped source', !!(serverReM && clientReM),
  'server=' + !!serverReM + ' client=' + !!clientReM);
let serverRe, clientRe;
try { serverRe = eval(serverReM[1]); clientRe = eval(clientReM[1]); } catch (e) { console.log('eval error:', e.message); }
const POS = [INCIDENT, '谢谢观看', '感謝觀看', '感谢观看', '感谢观看，请订阅', '一键三连', '请订阅我的频道'];
const NEG = ['谢谢', '好', '对', '行', '不', '我很好', '好的谢谢', '你好', '谢谢你的帮助'];
for (const s of POS) {
  check('server regex matches "' + s.slice(0, 12) + '"', !!(serverRe && serverRe.test(s)));
  check('client regex matches "' + s.slice(0, 12) + '"', !!(clientRe && clientRe.test(s)));
}
for (const s of NEG) {
  check('server regex does NOT match "' + s + '"', !!(serverRe && !serverRe.test(s)));
  check('client regex does NOT match "' + s + '"', !!(clientRe && !clientRe.test(s)));
}
check('server + client Chinese sections agree on every case',
  POS.concat(NEG).every(s => !!serverRe && !!clientRe && serverRe.test(s) === clientRe.test(s)));

// --- 2+3. Client behavioral (Puppeteer) ---
(async () => {
  const browser = await launch();
  const runCase = async (transcriptText) => {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
    let chatCalls = 0;
    await page.setRequestInterception(true);
    page.on('request', req => {
      const url = req.url();
      if (url.includes('/api/chat')) {
        chatCalls++;
        req.respond({ status: 200, contentType: 'application/json', body: JSON.stringify({ candidates: [{ content: { parts: [{ text: transcriptText }] } }] }) });
        return;
      }
      if (url.includes('/api/tts')) { req.abort(); return; }
      req.continue();
    });
    await page.evaluateOnNewDocument(buildPreload({ theme: 'dark', mode: 'live', level: 'beginner', extra: { voice_mode: 'off' } }));
    await page.goto(BASE + '/app.html', { waitUntil: 'load', timeout: 60000 });
    await new Promise(r => setTimeout(r, 1800));
    await page.evaluate(() => { try { navTo('/app/tutor'); } catch (e) {} });
    await new Promise(r => setTimeout(r, 1500));
    // settle the boot's own greeting traffic first, then snapshot the count —
    // assertions use the DELTA (only this case's flow)
    const beforeCalls = chatCalls;
    // call sendAudioToGemini directly with fake audio; the mocked /api/chat
    // returns the transcript text — the client guard decides what happens.
    await page.evaluate((t) => {
      sendAudioToGemini('SGVsbG8=', 3, 'audio/mp4');
    }, transcriptText);
    await new Promise(r => setTimeout(r, 2500));
    const state = await page.evaluate(() => ({
      userBubbles: document.querySelectorAll('#tutChat .cus').length,
      status: document.getElementById('tutStatus').textContent
    }));
    await page.close();
    return { state, delta: chatCalls - beforeCalls };
  };

  // 2. The hallucinated transcript: rejected client-side
  const bad = await runCase(INCIDENT);
  check('2. hallucinated transcript (谢谢观看﹚): NO user bubble, NO tutor call',
    bad.state.userBubbles === 0 && bad.delta === 1 && /No speech|no speech/i.test(bad.state.status),
    JSON.stringify(bad.state) + ' delta=' + bad.delta);

  // 3. Genuine 谢谢: passes through end-to-end
  const good = await runCase('谢谢');
  check('3. genuine 谢谢: user bubble renders + conversation call fires',
    good.state.userBubbles >= 1 && good.delta === 2,
    JSON.stringify(good.state) + ' delta=' + good.delta);

  await browser.close();
  console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL');
  process.exit(pass ? 0 : 1);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
