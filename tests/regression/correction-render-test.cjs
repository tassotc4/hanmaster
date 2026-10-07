// Bug-1 fix gate (v159): correction markers + the LEVELUP trailing strip.
// Uses the exact strings from the reported live session: the phrase line
// must contain NO correction Chinese, the translation must contain NO
// "Correction"/level-up text, and the correction element must be complete.
const path = require('path');
const { launch, waitFor, SCRATCH, buildPreload } = require('../helpers/bootstrap.cjs');

let pass = true;
function check(name, ok, detail) {
  console.log((ok ? 'PASS' : 'FAIL') + ' ' + name + (detail ? ' — ' + detail : ''));
  if (!ok) pass = false;
}

const CANNED = '谢谢，你很好吗？\nEnglish: Thank you, are you well?\n[CORRECTION: 做得很好]';
const CANNED_LOOSE = '谢谢，你很好吗？\nEnglish: Thank you, are you well?\nCorrection: 做得很好 isn\'t needed; just say 做得很好。';
const CANNED_LEVELUP = '你喜欢喝茶吗？\nEnglish: Do you like drinking tea?\n[LEVELUP: beginner] You\'re ready to start learning a bit more Chinese.';

// Ruby interleave breaks contiguous innerText matching (做zuò得de...) —
// extract the non-rt hanzi via the ruby elements' first text nodes.
function hanziOf(el) {
  if (!el) return '';
  const rubies = Array.from(el.querySelectorAll('ruby'));
  if (rubies.length) return rubies.map(r => r.childNodes[0] ? r.childNodes[0].textContent : '').join('');
  return el.textContent;
}

async function bootWith(canned) {
  const browser = await launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  // Live mode via the buildPreload (the same mechanism as real-live-ai-test):
  // the boot greeting itself is a /api/chat call, so the canned reply reaches
  // the parser and renders (the study mode never calls /api/chat).
  await page.evaluateOnNewDocument(buildPreload({ theme: 'dark', mode: 'live', level: 'beginner', extra: { voice_mode: 'off' } }));
  await page.setRequestInterception(true);
  page.on('request', req => {
    const u = req.url();
    if (u.includes('/api/chat')) {
      req.respond({ status: 200, contentType: 'application/json',
        body: JSON.stringify({ candidates: [{ content: { parts: [{ text: canned }] } }] }) });
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
  // --- A: the strict marker reply ---
  let b = await bootWith(CANNED);
  let r = await b.page.evaluate(() => {
    // hanziOf must be defined IN-PAGE (the Node-side function is not visible
    // inside evaluate — the closure trap).
    const hanziOf = function (el) {
      if (!el) return '';
      const rubies = Array.from(el.querySelectorAll('ruby'));
      if (rubies.length) return rubies.map(function (rb) { return rb.childNodes[0] ? rb.childNodes[0].textContent : ''; }).join('');
      return el.textContent;
    };
    const bubble = document.querySelector('#tutChat .cai:last-child') || document.querySelector('#tutChat .cai');
    const phrase = bubble ? (bubble.querySelector('.phrase') || {}).textContent : null;
    const tr = bubble ? (bubble.querySelector('.tr') || {}).textContent : null;
    const corr = bubble ? bubble.querySelector('.coach-sec') : null;
    return {
      phrase: phrase || '',
      tr: tr || '',
      corrText: corr && corr.querySelector('.phrase') ? hanziOf(corr.querySelector('.phrase')) : '',
      corrReplay: corr ? !!corr.querySelector('.replay') : false
    };
  });
  check('A. phrase line contains NO correction Chinese (做得很好 absent)',
    r.phrase.indexOf('做得很好') === -1 && r.phrase.indexOf('谢谢') !== -1, JSON.stringify(r.phrase).slice(0, 80));
  check('A. translation contains no "Correction"', r.tr.indexOf('Correction') === -1, JSON.stringify(r.tr).slice(0, 80));
  check('A. correction element complete (做得很好 intact)',
    r.corrText.indexOf('做得很好') !== -1, JSON.stringify(r.corrText));
  check('A. correction replay present (speaks the complete text)', r.corrReplay, '');
  await b.page.screenshot({ path: path.join(SCRATCH, 'v159-correction-marker.png') });
  await b.browser.close();
  console.log('SCREENSHOT: v159-correction-marker.png');

  // --- B: the loose Correction fallback (the exact incident string shape) ---
  b = await bootWith(CANNED_LOOSE);
  r = await b.page.evaluate(() => {
    const hanziOf = function (el) {
      if (!el) return '';
      const rubies = Array.from(el.querySelectorAll('ruby'));
      if (rubies.length) return rubies.map(function (rb) { return rb.childNodes[0] ? rb.childNodes[0].textContent : ''; }).join('');
      return el.textContent;
    };
    const bubble = document.querySelector('#tutChat .cai:last-child') || document.querySelector('#tutChat .cai');
    const phrase = bubble ? (bubble.querySelector('.phrase') || {}).textContent : null;
    const tr = bubble ? (bubble.querySelector('.tr') || {}).textContent : null;
    const mute = bubble ? Array.from(bubble.querySelectorAll('div')).map(d => d.textContent).find(t => t.indexOf('needed') !== -1) : null;
    const corr = bubble ? bubble.querySelector('.coach-sec') : null;
    return {
      phrase: phrase || '',
      tr: tr || '',
      mute: mute || '',
      corrText: corr && corr.querySelector('.phrase') ? hanziOf(corr.querySelector('.phrase')) : ''
    };
  });
  check('B. loose fallback: phrase line contains no correction Chinese',
    r.phrase.indexOf('做得很好') === -1, JSON.stringify(r.phrase).slice(0, 80));
  check('B. loose fallback: no gapped mute line ("just say ." with the Chinese gone)',
    !(r.mute && /^[\s\S]*needed[\s\S]*\.$/.test(r.mute) && r.mute.indexOf('做得') === -1), JSON.stringify(r.mute).slice(0, 80));
  check('B. loose fallback: correction element carries the Chinese',
    r.corrText.indexOf('做得') !== -1, JSON.stringify(r.corrText).slice(0, 80));
  check('B. translation contains no "Correction"', r.tr.indexOf('Correction') === -1, JSON.stringify(r.tr).slice(0, 80));
  await b.browser.close();

  // --- C: the LEVELUP trailing strip ---
  b = await bootWith(CANNED_LEVELUP);
  r = await b.page.evaluate(() => {
    const bubble = document.querySelector('#tutChat .cai:last-child') || document.querySelector('#tutChat .cai');
    const tr = bubble ? (bubble.querySelector('.tr') || {}).textContent : null;
    return { tr: tr || '' };
  });
  check('C. translation contains NO level-up text (stripped after the marker)',
    r.tr.indexOf('ready to start learning') === -1 && r.tr.indexOf('Do you like drinking tea') !== -1,
    JSON.stringify(r.tr).slice(0, 100));
  await b.browser.close();

  // --- D: v160 [CORRECTION: cn | explanation] marker (the explanation INSIDE) ---
  b = await bootWith('很高兴认识你。你从哪儿来？\nEnglish: Nice to meet you. Where are you from?\n[CORRECTION: 我叫乔乔 | 用 “我叫…” 来介绍自己的名字]');
  r = await b.page.evaluate(() => {
    const hanziOf = function (el) {
      if (!el) return '';
      const rubies = Array.from(el.querySelectorAll('ruby'));
      if (rubies.length) return rubies.map(function (rb) { return rb.childNodes[0] ? rb.childNodes[0].textContent : ''; }).join('');
      return el.textContent;
    };
    const bubble = document.querySelector('#tutChat .cai:last-child') || document.querySelector('#tutChat .cai');
    const corr = bubble ? bubble.querySelector('.coach-sec') : null;
    const noteEl = corr ? corr.querySelector('div[style*="--muted"]') : null;
    return {
      phrase: (bubble && bubble.querySelector('.phrase')) ? hanziOf(bubble.querySelector('.phrase')) : '',
      tr: bubble ? (bubble.querySelector('.tr') || {}).textContent || '' : '',
      corrText: corr && corr.querySelector('.phrase') ? hanziOf(corr.querySelector('.phrase')) : '',
      corrNote: noteEl ? noteEl.textContent : ''
    };
  });
  check('D. marker+pipe: phrase line has NO explanation Chinese appended (叫 absent)',
    r.phrase.indexOf('叫') === -1 && r.phrase.indexOf('从哪儿来') !== -1, JSON.stringify(r.phrase).slice(0, 80));
  check('D. marker+pipe: translation has no "Explanation"/"Use"',
    r.tr.indexOf('Explanation') === -1 && r.tr.indexOf('Use') === -1, JSON.stringify(r.tr).slice(0, 80));
  check('D. marker+pipe: correction element = 我叫乔乔',
    r.corrText.indexOf('我叫乔乔') !== -1, JSON.stringify(r.corrText));
  check('D. marker+pipe: explanation rendered inside the correction card',
    r.corrNote.indexOf('介绍') !== -1, JSON.stringify(r.corrNote).slice(0, 80));
  await b.browser.close();

  // --- E: the exact v160 incident — a free-text Explanation line (no marker) ---
  b = await bootWith('很高兴认识你。你从哪儿来？\nEnglish: Nice to meet you. Where are you from?\nExplanation: Use 叫 to introduce your name.\nCorrection: 我叫乔乔。');
  r = await b.page.evaluate(() => {
    const hanziOf = function (el) {
      if (!el) return '';
      const rubies = Array.from(el.querySelectorAll('ruby'));
      if (rubies.length) return rubies.map(function (rb) { return rb.childNodes[0] ? rb.childNodes[0].textContent : ''; }).join('');
      return el.textContent;
    };
    const bubble = document.querySelector('#tutChat .cai:last-child') || document.querySelector('#tutChat .cai');
    const corr = bubble ? bubble.querySelector('.coach-sec') : null;
    const noteEl = corr ? corr.querySelector('div[style*="--muted"]') : null;
    return {
      phrase: (bubble && bubble.querySelector('.phrase')) ? hanziOf(bubble.querySelector('.phrase')) : '',
      tr: bubble ? (bubble.querySelector('.tr') || {}).textContent || '' : '',
      corrText: corr && corr.querySelector('.phrase') ? hanziOf(corr.querySelector('.phrase')) : '',
      corrNote: noteEl ? noteEl.textContent : ''
    };
  });
  check('E. free-text Explanation: phrase line has NO 叫 appended (the incident)',
    r.phrase.indexOf('叫') === -1 && r.phrase.indexOf('从哪儿来') !== -1, JSON.stringify(r.phrase).slice(0, 80));
  check('E. free-text Explanation: translation has no "Explanation: Use"',
    r.tr.indexOf('Explanation') === -1 && r.tr.indexOf('Use') === -1, JSON.stringify(r.tr).slice(0, 80));
  check('E. free-text Explanation: correction element = 我叫乔乔',
    r.corrText.indexOf('我叫乔乔') !== -1, JSON.stringify(r.corrText));
  check('E. free-text Explanation: note captured (Chinese 叫 intact)',
    r.corrNote.indexOf('叫') !== -1, JSON.stringify(r.corrNote).slice(0, 80));
  await b.browser.close();

  // --- F: bare "Use X instead of Y" line (the HSK-level note in the transcript) ---
  b = await bootWith('我也喜欢喝茶。你常喝吗？\nEnglish: I also like drinking tea. Do you drink it often?\nUse 茶 instead of 啤酒, which is beyond HSK 1-2.\nCorrection: 我喜欢喝茶。');
  r = await b.page.evaluate(() => {
    const hanziOf = function (el) {
      if (!el) return '';
      const rubies = Array.from(el.querySelectorAll('ruby'));
      if (rubies.length) return rubies.map(function (rb) { return rb.childNodes[0] ? rb.childNodes[0].textContent : ''; }).join('');
      return el.textContent;
    };
    const bubble = document.querySelector('#tutChat .cai:last-child') || document.querySelector('#tutChat .cai');
    const corr = bubble ? bubble.querySelector('.coach-sec') : null;
    return {
      phrase: (bubble && bubble.querySelector('.phrase')) ? hanziOf(bubble.querySelector('.phrase')) : '',
      tr: bubble ? (bubble.querySelector('.tr') || {}).textContent || '' : '',
      corrText: corr && corr.querySelector('.phrase') ? hanziOf(corr.querySelector('.phrase')) : ''
    };
  });
  check('F. bare "Use X instead of Y": phrase line has NO 啤酒/茶 appended',
    r.phrase.indexOf('啤酒') === -1 && r.phrase.indexOf('喝茶') !== -1, JSON.stringify(r.phrase).slice(0, 80));
  check('F. bare "Use X instead of Y": translation has no "Use"',
    r.tr.indexOf('Use') === -1, JSON.stringify(r.tr).slice(0, 80));
  check('F. bare "Use X instead of Y": correction element = 我喜欢喝茶。',
    r.corrText.indexOf('我喜欢喝茶') !== -1, JSON.stringify(r.corrText));
  await b.browser.close();

  console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL');
  process.exitCode = pass ? 0 : 1;
})().catch(e => { console.error('FATAL', e.message); process.exitCode = 1; });
