'use strict';
const path = require('path');
const { launch, bootTutor, waitFor, grabAttCardClip, SCRATCH } = require('../helpers/bootstrap.cjs');

// Brute-force an IN-page transcript that produces exactly one 'tone' verdict,
// sourced from the real HSK_WORDS vocab (same base syllable, different tone).
const findTone = () => {
  const target = tutLesson.dialogue[tutStep].cn;
  const cleanT = target.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()？。，！；：\s]/g, "");
  for (let i = 0; i < cleanT.length; i++) {
    const ch = cleanT[i];
    const tToken = getPinyinForChineseText(ch)[0] || { cn: ch, py: '' };
    const base = getBaseSyllable(tToken.py);
    if (!base) continue;
    for (const w of HSK_WORDS) {
      const cand = w.c;
      if (!cand || cand === ch || target.includes(cand)) continue;
      const cBase = getBaseSyllable(w.p);
      if (cBase === base && w.p !== tToken.py) {
        const transcript = cleanT.split('').map((c, idx) => idx === i ? cand : c).join('');
        const verdicts = analyzePronunciation(target, transcript);
        const toneCount = verdicts.filter(v => v.status === 'tone').length;
        if (toneCount === 1) {
          const tv = verdicts.find(v => v.status === 'tone');
          return { target, transcript, ch, cand, expectedPy: tv.expectedPy, saidPy: tv.saidPy, statuses: verdicts.map(v => v.status) };
        }
      }
    }
  }
  return null;
};

(async () => {
  const browser = await launch();
  const errors = [];
  const results = {};

  for (const theme of ['dark', 'light']) {
    const boot = await bootTutor(browser, { theme, mode: 'static' });
    errors.push(...boot.errors);
    const page = boot.page;
    const tone = await page.evaluate(findTone);
    if (!tone) { console.log('TONE-FIND [' + theme + ']: FAIL — no tone-producible pair in vocab'); await browser.close(); process.exit(1); }
    console.log('TONE-FIND [' + theme + ']: target="' + tone.target + '" swap ' + tone.ch + '->' + tone.cand + ' (' + tone.expectedPy + ' spoken-as ' + tone.saidPy + ')');
    await page.evaluate((tr) => confirmTranscript(tr, null, null), tone.transcript);
    await waitFor(page, () => document.querySelectorAll('#tutChat .cb.cus.att').length >= 1, 8000);
    const check = await page.evaluate(() => {
      const c = Array.from(document.querySelectorAll('#tutChat .cb.cus.att')).pop();
      const tv = c.querySelector('.phrase-u .verdict-tone');
      if (!tv) return { ok: false, why: 'no .verdict-tone span' };
      const cs = getComputedStyle(tv);
      const after = getComputedStyle(tv, '::after');
      const chipTon = c.querySelector('.chip.ton');
      const stats = (c.querySelector('.stats') || {}).innerText || '';
      const verdicts = Array.from(c.querySelectorAll('.phrase-u > span')).map(s => {
        if (s.classList.contains('verdict-correct')) return 'correct';
        if (s.classList.contains('verdict-tone')) return 'tone';
        if (s.classList.contains('verdict-wrong')) return 'wrong';
        return 'none';
      });
      return {
        ok: true,
        classList: tv.className,
        title: tv.getAttribute('title') || '',
        color: cs.color,
        afterBorder: after.borderBottomColor,
        afterStyle: after.borderBottomStyle,
        chipTonText: chipTon ? chipTon.innerText : '',
        chipTonColor: chipTon ? getComputedStyle(chipTon).color : '',
        stats,
        verdicts
      };
    });
    results[theme] = { tone, check };
    console.log('CARD [' + theme + ']: color=' + check.color + ' ::after-border=' + check.afterBorder + '/' + check.afterStyle + ' classes="' + check.classList + '"');
    console.log('  chips="' + check.chipTonText + '" chipColor=' + check.chipTonColor + ' stats="' + check.stats + '" verdicts=[' + check.verdicts.join(',') + ']');
    await grabAttCardClip(page, path.join(SCRATCH, 'tone-verdict-' + theme + '.png'));
    await page.close();
  }

  const d = results.dark.check, l = results.light.check;
  const darkOk = d.ok
    && d.color === 'rgb(251, 146, 60)'
    && d.afterBorder === 'rgb(251, 146, 60)' && d.afterStyle === 'dashed'
    && !!d.title && d.classList.indexOf('tone-mistake') > -1
    && d.chipTonText.indexOf('Tone · 1') > -1
    && d.stats.indexOf('1 Tone slips:') > -1
    && d.verdicts.filter(s => s === 'tone').length === 1;
  const lightOk = l.ok
    && l.color === 'rgb(124, 83, 14)'
    && l.afterBorder === 'rgb(124, 83, 14)' && l.afterStyle === 'dashed'
    && !!l.title && l.classList.indexOf('tone-mistake') > -1
    && l.chipTonText.indexOf('Tone · 1') > -1
    && l.chipTonColor === 'rgb(124, 83, 14)'
    && l.verdicts.filter(s => s === 'tone').length === 1;
  const sameTranscript = results.dark.tone.transcript === results.light.tone.transcript;
  console.log('DARK tone render:  ' + (darkOk ? 'PASS' : 'FAIL'));
  console.log('LIGHT tone render: ' + (lightOk ? 'PASS' : 'FAIL'));
  console.log('same transcript both themes: ' + sameTranscript);
  console.log('  page errors: ' + (errors.length ? errors.join(' | ') : '0'));
  await browser.close();
  const finalOk = darkOk && lightOk && sameTranscript && errors.length === 0;
  console.log(finalOk ? 'RESULT: PASS' : 'RESULT: FAIL (see above)');
  process.exit(finalOk ? 0 : 1);
})().catch(e => { console.error('FATAL', e); process.exit(1); });