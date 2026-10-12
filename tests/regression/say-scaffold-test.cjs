// v161 gate: the "you can say" scaffold leak (the "Tutor is named Joseph" bug).
// When the student answers in English the tutor suggests a Chinese sentence for
// THEM; without a marker the example merged into the tutor's own phrase line
// and the lead-in ("Sure, here's how to say it in Chinese:") orphaned. Fixed
// with a [SAY: <Chinese> | <meaning>] marker rendered as its own card, plus a
// defensive loose fallback and a consecutive-duplicate collapse.
const path = require('path');
const { launch, waitFor, SCRATCH, buildPreload } = require('../helpers/bootstrap.cjs');

let pass = true;
function check(name, ok, detail) {
  console.log((ok ? 'PASS' : 'FAIL') + ' ' + name + (detail ? ' — ' + detail : ''));
  if (!ok) pass = false;
}

const IN_PAGE_HANZI = `const hanziOf = function (el) {
  if (!el) return '';
  const rubies = Array.from(el.querySelectorAll('ruby'));
  if (rubies.length) return rubies.map(function (rb) { return rb.childNodes[0] ? rb.childNodes[0].textContent : ''; }).join('');
  return el.textContent;
};`;

async function bootWith(canned, translatorCanned) {
  const browser = await launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.evaluateOnNewDocument(buildPreload({ theme: 'dark', mode: 'live', level: 'beginner', extra: { voice_mode: 'off' } }));
  await page.setRequestInterception(true);
  page.on('request', req => {
    const u = req.url();
    if (u.includes('/api/chat')) {
      // classify translator calls by the exclusive systemInstruction content
      // (the conversation prompt's baseRules also says 'professional translator'
      // — key on the Li Laoshi absence, per the v134 dedup-gate lesson).
      let text = canned;
      try {
        const si = (JSON.parse(req.postData() || '{}').systemInstruction || '');
        if (translatorCanned && si.indexOf('professional translator') !== -1 && si.indexOf('Li Laoshi') === -1) text = translatorCanned;
      } catch (e) {}
      req.respond({ status: 200, contentType: 'application/json',
        body: JSON.stringify({ candidates: [{ content: { parts: [{ text }] } }] }) });
      return;
    }
    if (u.includes('/api/tts')) { req.abort(); return; }
    req.continue();
  });
  await page.goto('http://127.0.0.1:8080/app.html', { waitUntil: 'load', timeout: 60000 });
  await page.evaluate(() => { try { skipOnboarding(); } catch (e) {} try { navTo('/app/tutor'); } catch (e) {} });
  await waitFor(page, () => !!document.querySelector('#tutChat .cai .phrase'), 20000);
  await waitFor(page, () => !!document.querySelector('#tutChat .coach-sec'), 10000);
  return { browser, page };
}

(async () => {
  // --- S1: [SAY:] marker — example in its OWN card, not merged into the phrase ---
  let b = await bootWith('你好呀！你会说中文吗？\nEnglish: Hello! Can you speak Chinese?\n[SAY: 你好，你好吗？ | Hello, how are you?]');
  let r = await b.page.evaluate(`(() => { ${IN_PAGE_HANZI}
    const bubble = document.querySelector('#tutChat .cai:last-child') || document.querySelector('#tutChat .cai');
    const cards = bubble ? Array.from(bubble.querySelectorAll('.coach-sec')) : [];
    // the SAY card is the one whose label is "You can say"
    const say = cards.find(c => /You can say/i.test(c.textContent));
    return {
      phrase: (bubble && bubble.querySelector('.phrase')) ? hanziOf(bubble.querySelector('.phrase')) : '',
      tr: bubble ? (bubble.querySelector('.tr') || {}).textContent || '' : '',
      sayText: say && say.querySelector('.phrase') ? hanziOf(say.querySelector('.phrase')) : '',
      sayTr: say ? (say.querySelector('.tr') || {}).textContent || '' : '',
      sayReplay: say ? !!say.querySelector('.replay') : false
    };
  })()`);
  check('S1. phrase line = the tutor\'s OWN sentence only (example NOT merged)',
    r.phrase.indexOf('你会说中文吗') !== -1 && r.phrase.indexOf('你好吗') === -1, JSON.stringify(r.phrase).slice(0, 80));
  check('S1. no orphan lead-in in the translation line',
    r.tr.indexOf("how to say") === -1 && r.tr.indexOf('You can say') === -1, JSON.stringify(r.tr).slice(0, 80));
  check('S1. SAY card renders the student\'s sentence intact',
    r.sayText.indexOf('你好，你好吗') !== -1, JSON.stringify(r.sayText));
  check('S1. SAY card shows the meaning',
    r.sayTr.indexOf('Hello, how are you') !== -1, JSON.stringify(r.sayTr).slice(0, 80));
  check('S1. SAY card has a replay', r.sayReplay, '');
  await b.page.screenshot({ path: path.join(SCRATCH, 'v161-say-card.png') });
  await b.browser.close();
  console.log('SCREENSHOT: v161-say-card.png');

  // --- S2: consecutive duplicate collapse (我二十五岁。我二十五岁。) ---
  b = await bootWith('我二十五岁。我二十五岁。你喜欢什么？\nEnglish: I am 25 years old. What do you like?');
  r = await b.page.evaluate(`(() => { ${IN_PAGE_HANZI}
    const bubble = document.querySelector('#tutChat .cai:last-child') || document.querySelector('#tutChat .cai');
    return { phrase: (bubble && bubble.querySelector('.phrase')) ? hanziOf(bubble.querySelector('.phrase')) : '' };
  })()`);
  check('S2. duplicate sentence collapsed (我二十五岁。 appears once)',
    (r.phrase.match(/我二十五岁/g) || []).length === 1, JSON.stringify(r.phrase));
  await b.browser.close();

  // --- S3: loose lead-in line dropped ("Great! You can say") ---
  b = await bootWith('我也喜欢走路。你每天走路吗？\nEnglish: I also like walking. Do you walk every day?\nGreat! You can say');
  r = await b.page.evaluate(() => {
    const bubble = document.querySelector('#tutChat .cai:last-child') || document.querySelector('#tutChat .cai');
    return {
      text: bubble ? bubble.textContent : '',
      sayCard: bubble ? Array.from(bubble.querySelectorAll('.coach-sec')).some(c => /You can say/i.test(c.textContent)) : false
    };
  });
  check('S3. loose lead-in "Great! You can say" is dropped (no orphan line)',
    r.text.indexOf('You can say') === -1, JSON.stringify(r.text.slice(0, 100)));
  await b.browser.close();

  // --- S4: the EXACT incident — lead-in WITH trailing Chinese ("Tutor is
  // named Joseph"): "Sure, here's how to say it in Chinese: 我叫约瑟夫。" ---
  b = await bootWith('你好！你叫小陈吗？\nEnglish: Hi! Are you Xiao Chen?\nSure, here\'s how to say it in Chinese: 我叫约瑟夫。',
    'My name is Joseph.');
  // wait for the SAY card's async translation fill so the check reads the
  // settled text (it starts as the 'Translating...' placeholder).
  await waitFor(b.page, () => {
    const bubble = document.querySelector('#tutChat .cai:last-child') || document.querySelector('#tutChat .cai');
    const say = bubble && Array.from(bubble.querySelectorAll('.coach-sec')).find(c => /You can say/i.test(c.textContent));
    const trEl = say ? say.querySelector('.tr') : null;
    return trEl && trEl.textContent.indexOf('Translating') === -1;
  }, 10000);
  r = await b.page.evaluate(`(() => { ${IN_PAGE_HANZI}
    const bubble = document.querySelector('#tutChat .cai:last-child') || document.querySelector('#tutChat .cai');
    const cards = bubble ? Array.from(bubble.querySelectorAll('.coach-sec')) : [];
    const say = cards.find(c => /You can say/i.test(c.textContent));
    return {
      phrase: (bubble && bubble.querySelector('.phrase')) ? hanziOf(bubble.querySelector('.phrase')) : '',
      text: bubble ? bubble.textContent : '',
      sayText: say && say.querySelector('.phrase') ? hanziOf(say.querySelector('.phrase')) : ''
    };
  })()`);
  check('S4. exact incident: scaffold Chinese NOT merged into the tutor\'s phrase line',
    r.phrase.indexOf('小陈') !== -1 && r.phrase.indexOf('约瑟夫') === -1, JSON.stringify(r.phrase).slice(0, 80));
  check('S4. exact incident: the example sentence renders in the You-can-say card',
    r.sayText.indexOf('我叫约瑟夫') !== -1, JSON.stringify(r.sayText));
  check('S4. exact incident: no orphan "here\'s how to say it" line',
    r.text.indexOf('how to say') === -1, JSON.stringify(r.text.slice(0, 100)));
  await b.browser.close();

  console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL');
  process.exitCode = pass ? 0 : 1;
})().catch(e => { console.error('FATAL', e.message); process.exitCode = 1; });
