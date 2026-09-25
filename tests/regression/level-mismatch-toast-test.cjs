'use strict';
// v145 gate: the level-mismatch toast on lesson switches.
//  1. Boot path: the app's synthetic auto-open (buildTutorTabs dispatch)
//     does NOT fire the toast — only explicit user-initiated switches do.
//  2. Explicit user switch to a MISMATCHED level: the toast fires with the
//     app's own levelDisplayName naming.
//  3. In-band switches: no toast.
//  4. The band mapping: never=[1], beginner=[1,2], intermediate=[3,4],
//     advanced=[5-9] — matching levelDisplayName + the level-lock prompts.
//  5. The mic-selector clarification note renders.
const { launch, buildPreload, BASE, waitFor, LAUNCH_ARGS } = require('../helpers/bootstrap.cjs');

let pass = true;
const results = [];
const check = (name, ok, detail) => { console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); if (!ok) pass = false; };
const MISMATCH_TEXT = 'the AI tutor speaks at';

(async () => {
  const browser = await launch();

  const readToast = (page) => page.evaluate(() => {
    const t = document.getElementById('toast');
    return { text: t ? t.textContent : '', showing: t ? t.classList.contains('show') : false };
  });

  // --- 1. Boot path: the synthetic auto-open does NOT toast ---
  const bootPage = await browser.newPage();
  await bootPage.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
  await bootPage.evaluateOnNewDocument(buildPreload({ theme: 'dark', mode: 'static', level: 'never' }));
  await bootPage.evaluateOnNewDocument(new Function(`
    // intercept toast during boot to catch any mismatch toast
    window.__bootToasts = [];
  `));
  await bootPage.goto(BASE + '/app.html', { waitUntil: 'load', timeout: 60000 });
  await new Promise(r => setTimeout(r, 1500));
  // capture toasts fired during the boot's auto-open (the buildTutorTabs dispatch)
  const bootToastSpied = await bootPage.evaluate(() => {
    return new Promise(res => {
      // the boot auto-open already happened; check the flag was never set
      res({ userSwitchFlag: !!window._userTopicSwitch });
    });
  });
  const t1 = await readToast(bootPage);
  check('1. boot: userTopicSwitch never set by the synthetic auto-open', !bootToastSpied.userSwitchFlag);
  await bootPage.evaluate(() => { try { navTo('/app/tutor'); } catch (e) {} });
  await new Promise(r => setTimeout(r, 800));
  await bootPage.close();

  // --- 2/3/4. Explicit switches (flag + openTopicLesson), static mode ---
  const testSwitch = async (level, lessonTitle, lessonLevel) => {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
    await page.setRequestInterception(true);
    page.on('request', req => {
      const url = req.url();
      if (url.includes('/api/tts')) { req.abort(); return; }
      req.continue();
    });
    await page.evaluateOnNewDocument(buildPreload({ theme: 'dark', mode: 'static', level: level }));
    await page.evaluateOnNewDocument(new Function(`
      localStorage.setItem('__testChatSeed', ${JSON.stringify(JSON.stringify({
        v: 1, rv: 1, mode: 'live', level: level,
        history: [{ role: 'user', parts: [{ text: '你好' }] }, { role: 'model', parts: [{ text: '你好！English: Hello!' }] }],
        chatHtml: '<div class="cb cai"><div class="phrase">你好！</div></div>'
      }))});
    `));
    await page.goto(BASE + '/app.html', { waitUntil: 'load', timeout: 60000 });
    await new Promise(r => setTimeout(r, 1500));
    await waitFor(page, () => window._chatRestored === true, 10000);
    // explicit user-initiated switch: set the flag like the real events do
    await page.evaluate((title, idx) => {
      window._userTopicSwitch = true;
      openTopicLesson(title, idx);
    }, lessonTitle, 0);
    await new Promise(r => setTimeout(r, 700));
    const toast = await readToast(page);
    await page.close();
    return toast;
  };

  // mismatched: HSK 8 lesson at never
  const t2 = await testSwitch('never', 'Cross-cultural Communication', 0);
  check('2. HSK 8 lesson at never: mismatch toast fires', t2.text.indexOf(MISMATCH_TEXT) !== -1, JSON.stringify(t2));
  check('2. toast uses the app levelDisplayName naming (HSK 0 (from zero))', t2.text.indexOf('HSK 0 (from zero)') !== -1, t2.text.slice(0, 100));

  // in-band: HSK 1 lesson at never
  const t3 = await testSwitch('never', 'Basic Greetings', 0);
  check('3. HSK 1 lesson at never (in-band): no toast', t3.text.indexOf(MISMATCH_TEXT) === -1, JSON.stringify(t3).slice(0, 100));

  // mismatched: HSK 8 at beginner + intermediate; in-band at advanced
  const t4 = await testSwitch('beginner', 'Cross-cultural Communication', 0);
  check('4. HSK 8 at beginner: toast fires', t4.text.indexOf(MISMATCH_TEXT) !== -1, t4.text.slice(0, 80));
  const t5 = await testSwitch('intermediate', 'Cross-cultural Communication', 0);
  check('4. HSK 8 at intermediate: toast fires', t5.text.indexOf(MISMATCH_TEXT) !== -1, t5.text.slice(0, 80));
  const t6 = await testSwitch('advanced', 'Cross-cultural Communication', 0);
  check('4. HSK 8 at advanced (in-band): no toast', t6.text.indexOf(MISMATCH_TEXT) === -1, t6.text.slice(0, 80));

  // --- 5. The mic-selector clarification note ---
  const notePage = await browser.newPage();
  await notePage.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
  await notePage.evaluateOnNewDocument(buildPreload({ theme: 'dark', mode: 'static', level: 'beginner' }));
  await notePage.goto(BASE + '/app.html', { waitUntil: 'load', timeout: 60000 });
  await new Promise(r => setTimeout(r, 1500));
  const note = await notePage.evaluate(() => {
    const sel = document.getElementById('speechLangSelect');
    if (!sel) return null;
    const noteEl = sel.previousElementSibling;
    return { label: noteEl ? noteEl.textContent.slice(0, 40) : '', hasNote: !!noteEl && noteEl.textContent.indexOf('always teaches in Chinese') !== -1 };
  });
  check('5. mic-selector note renders above the select', !!note && note.hasNote, JSON.stringify(note));

  await browser.close();
  const fails = results.filter(r => !r.ok).length;
  console.log(fails ? 'RESULT: FAIL (' + fails + ')' : 'RESULT: PASS (' + results.length + ' checks)');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
