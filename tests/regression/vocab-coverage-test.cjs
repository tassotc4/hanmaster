'use strict';
// v133 gate (item 4 + item 5):
//  A. Pinyin coverage: every CJK char used by lesson dialogue/word lists,
//     roleplay prompts, or live-AI prompt lock lists must be covered by the
//     effective vocabulary (HSK_WORDS + HSK_EXTRA) — else it renders an
//     empty <rt>. (The 咖啡-class gap; found 也/您 via this audit.)
//  B. Ruby rendering: formatChineseTextWithRuby produces non-empty rt for
//     previously-missing chars, incl. 也 (highest-impact find).
//  C. aria-label translation: data-tr-aria-label mechanism translates
//     accessibility labels on language change; missing keys fall back to English.
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const { launch, bootTutor, waitFor } = require('../helpers/bootstrap.cjs');

const read = f => fs.readFileSync(path.join(__dirname, '../../public/js/' + f), 'utf8');
let pass = true;
const check = (name, ok, detail) => { console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); if (!ok) pass = false; };

// ---------- A: data coverage (pure Node) ----------
(async () => {
  const vocabVals = vm.runInNewContext(read('vocab-data.js') + '\n' + read('vocab-extra-data.js') + '\n;[HSK_WORDS, HSK_EXTRA]', {}, { timeout: 10000 });
  const covered = new Set();
  for (const c of [].concat(vocabVals[0].map(w => w.c), vocabVals[1].map(w => w[1]))) for (const ch of c) covered.add(ch);

  const lessonVals = vm.runInNewContext(read('tutor-data.js') + '\n' + read('tutor-data-more.js') + '\n;[MORE_TUTOR_LESSONS, EXTRA_TUTOR_LESSONS, EXTRA_ROLEPLAY_SCENARIOS]', {}, { timeout: 20000 });
  const lessons = [].concat(lessonVals[0] || [], lessonVals[1] || []);

  const appjs = read('app.js');
  const tlStart = appjs.indexOf('const TL=[');
  let depth = 0, end = -1;
  for (let i = tlStart; i < appjs.length; i++) { if (appjs[i] === '[') depth++; else if (appjs[i] === ']') { depth--; if (!depth) { end = i; break; } } }
  const cnRe = /cn\s*:\s*"((?:[^"\\]|\\.)*)"/g;
  const inlineCn = [];
  let m; while ((m = cnRe.exec(appjs.slice(tlStart, end)))) inlineCn.push(JSON.parse('"' + m[1] + '"'));

  // CJK chars that only exist inside systemInstruction prompt strings sent to
  // the model (traditional 別/東) — never ruby-rendered, deliberately excluded.
  const EXCLUDE = new Set(['別', '東']);
  const CJK = /[\u3400-\u9fff\uf900-\ufaff]/;
  const corpus = [];
  const use = (s, src) => { for (const ch of s) if (CJK.test(ch) && !EXCLUDE.has(ch)) corpus.push([ch, src]); };
  for (const les of lessons) {
    for (const d of (les.dialogue || [])) use(d.cn, les.title);
    for (const w of (les.words || [])) use(w.cn, les.title);
  }
  for (const cn of inlineCn) use(cn, 'inlineTL');
  for (const sc of (lessonVals[2] || [])) use(sc.prompt, 'roleplay:' + sc.name);
  for (const line of appjs.split('\n')) if (line.includes('VOCABULARY LOCK')) use((line.match(/[\u3400-\u9fff\uf900-\ufaff]+/g) || []).join(''), 'locklist');

  const gaps = corpus.filter(([ch]) => !covered.has(ch));
  const gapChars = [...new Set(gaps.map(g => g[0]))];
  check('A: lesson/prompt corpus pinyin coverage (' + corpus.length + ' char uses)', gaps.length === 0,
    gaps.length ? 'missing: ' + gapChars.join(' ') + ' (e.g. ' + gaps[0][1] + ')' : '');
  check('A: sanity 也 and 咖啡 are covered', covered.has('也') && covered.has('咖') && covered.has('啡'));

  // ---------- B + C: rendering & aria (browser) ----------
  const browser = await launch();
  const boot = await bootTutor(browser, { theme: 'dark', mode: 'static', level: 'beginner', abortApi: 'tts' });
  const page = boot.page;

  const ruby = await page.evaluate(() => {
    const probe = {};
    for (const s of ['我也很好，您呢？', '对牛弹琴', '贾宝玉和林黛玉', '宿命，钥匙，雾霾']) {
      probe[s] = [];
      const div = document.createElement('div');
      div.innerHTML = formatChineseTextWithRuby(s);
      for (const r of div.querySelectorAll('ruby')) {
        const rt = r.querySelector('rt');
        probe[s].push({ base: Array.from(r.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent).join(''), rt: rt ? rt.textContent : '' });
      }
    }
    return probe;
  });
  for (const [phrase, toks] of Object.entries(ruby)) {
    const empty = toks.filter(t2 => /[\u4e00-\u9fff]/.test(t2.base) && !t2.rt);
    check('B: ruby non-empty for "' + phrase + '"', empty.length === 0, empty.length ? 'empty: ' + empty.map(e2 => e2.base).join('') : '');
  }
  const ye = ruby['我也很好，您呢？'].find(t2 => t2.base === '也');
  check('B: 也 renders pinyin yě (highest-impact v133 find)', !!ye && ye.rt === 'yě', ye ? 'rt=' + ye.rt : 'missing token');
  const nin = ruby['我也很好，您呢？'].find(t2 => t2.base === '您');
  check('B: 您 renders pinyin nín', !!nin && nin.rt === 'nín', nin ? 'rt=' + nin.rt : 'missing token');

  // aria translation: switch to Spanish, aria-label on #tutMic must change
  // from English where the dictionary has the key; untranslated keys stay English.
  const before = await page.evaluate(() => document.getElementById('tutMic').getAttribute('aria-label'));
  await page.evaluate(() => { changeAppLanguage('es'); });
  await new Promise(r => setTimeout(r, 800));
  const after = await page.evaluate(() => ({
    mic: document.getElementById('tutMic').getAttribute('aria-label'),
    mp3: (document.querySelector('[data-tr-aria-label="Download MP3"]') || {}).getAttribute ? document.querySelector('[data-tr-aria-label="Download MP3"]').getAttribute('aria-label') : null
  }));
  check('C: aria-label translates on language change (Speak -> ' + after.mic + ')', before === 'Speak' && after.mic && after.mic !== 'Speak', 'before=' + before + ' after=' + after.mic);
  // Fallback: keys missing from a dictionary must stay English. "Download MP3"
  // turned out to BE translated (es: Descargar MP3), so use a synthetic key
  // to pin t()'s fallback, plus report how many real labels translated.
  const fb = await page.evaluate(() => {
    let translated = 0, fellBack = 0;
    document.querySelectorAll('[data-tr-aria-label]').forEach(el => {
      const k = el.getAttribute('data-tr-aria-label');
      if (t(k) !== k) translated++; else fellBack++;
    });
    return { synthetic: t('zzz-synthetic-nonexistent-key') === 'zzz-synthetic-nonexistent-key', translated, fellBack };
  });
  check('C: missing keys fall back to English (t() synthetic key)', fb.synthetic, 'es: ' + fb.translated + ' translated, ' + fb.fellBack + ' fell back');
  await page.evaluate(() => { changeAppLanguage('en'); });
  await new Promise(r => setTimeout(r, 500));

  console.log('page errors: ' + (boot.errors.length ? boot.errors.join(' | ') : '0'));
  if (boot.errors.length) pass = false;
  await browser.close();
  console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL');
  process.exit(pass ? 0 : 1);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
