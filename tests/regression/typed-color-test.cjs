'use strict';
const path = require('path');
const { launch, bootTutor, waitFor, grabAttCardClip, SCRATCH } = require('../helpers/bootstrap.cjs');

// Build a typed transcript that is a realistic attempt: a reversed target
// guarantees a set with both correct and wrong verdicts.
const findTypedTranscript = () => {
  const target = tutLesson.dialogue[tutStep].cn;
  const cleanT = target.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()？。，！；：\s]/g, "");
  if (!cleanT.length) return null;
  const transcriptTxt = cleanT.split('').reverse().join('');
  for (const candidate of [transcriptTxt, transcriptTxt.slice(0, 2) + transcriptTxt.slice(3), cleanT.slice(1)]) {
    const verdicts = analyzePronunciation(target, candidate);
    if (!verdicts.length) continue;
    const wrongs = verdicts.filter(v => v.status === 'wrong').length;
    const corrects = verdicts.filter(v => v.status === 'correct').length;
    if (wrongs >= 1 && corrects >= 1) return { target, transcript: candidate, statuses: verdicts.map(v => v.status), wrongs, corrects };
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
    const attempt = await page.evaluate(findTypedTranscript);
    if (!attempt) { console.log('ATTEMPT-FIND [' + theme + ']: FAIL'); await browser.close(); process.exit(1); }
    console.log('ATTEMPT [' + theme + ']: target="' + attempt.target + '" typed="' + attempt.transcript + '"');
    // typed attempt (real app path: processScore(text, sc, target, 'type-…'))
    await page.evaluate((tr) => {
      const i = document.getElementById('tutTypeInput');
      i.value = tr;
      tutTypeSubmit();
    }, attempt.transcript);
    await waitFor(page, () => document.querySelectorAll('#tutChat .cb.cus.att').length >= 1, 8000);
    const typed = await page.evaluate(() => {
      const c = Array.from(document.querySelectorAll('#tutChat .cb.cus.att')).pop();
      const verdicts = Array.from(c.querySelectorAll('.phrase-u > span')).map(s => {
        if (s.classList.contains('verdict-correct')) return 'correct';
        if (s.classList.contains('verdict-tone')) return 'tone';
        if (s.classList.contains('verdict-wrong')) return 'wrong';
        return 'none';
      });
      const sc = c.querySelector('.score-line .sc');
      return {
        verdicts,
        stats: (c.querySelector('.stats') || {}).innerText || '',
        chips: Array.from(c.querySelectorAll('.chip')).map(ch => ch.className.replace('chip ', '') + ':' + ch.innerText),
        slotId: (c.querySelector('.att-slot') || {}).id,
        correctColor: c.querySelector('.phrase-u .verdict-correct') ? getComputedStyle(c.querySelector('.phrase-u .verdict-correct')).color : null,
        wrongColor: c.querySelector('.phrase-u .verdict-wrong') ? getComputedStyle(c.querySelector('.phrase-u .verdict-wrong')).color : null
      };
    });
    // voice path with the SAME transcript must produce the SAME verdict sequence
    const voice = await page.evaluate((tr) => {
      confirmTranscript(tr, null, null);
      return { before: document.querySelectorAll('#tutChat .cb.cus.att').length };
    }, attempt.transcript);
    await waitFor(page, () => document.querySelectorAll('#tutChat .cb.cus.att').length >= (voice.before + 1), 8000);
    const voiceCard = await page.evaluate(() => {
      const c = Array.from(document.querySelectorAll('#tutChat .cb.cus.att')).pop();
      const verdicts = Array.from(c.querySelectorAll('.phrase-u > span')).map(s => {
        if (s.classList.contains('verdict-correct')) return 'correct';
        if (s.classList.contains('verdict-tone')) return 'tone';
        if (s.classList.contains('verdict-wrong')) return 'wrong';
        return 'none';
      });
      return { verdicts };
    });
    results[theme] = { attempt, typed, voiceCard };
    console.log('TYPED[' + theme + ']: verdicts=[' + typed.verdicts.join(',') + '] stats="' + typed.stats + '"');
    console.log('  chips=' + JSON.stringify(typed.chips) + ' slot="' + typed.slotId + '"');
    console.log('  colors correct=' + typed.correctColor + ' wrong=' + typed.wrongColor);
    console.log('  voice-same-transcript verdicts=[' + voiceCard.verdicts.join(',') + '] ' + (JSON.stringify(typed.verdicts) === JSON.stringify(voiceCard.verdicts) ? 'IDENTICAL' : 'DIFFER'));
    await grabAttCardClip(page, path.join(SCRATCH, 'typed-color-' + theme + '.png'));
    await page.close();
  }

  const d = results.dark, l = results.light;
  const typedOk = (r) => r.typed.verdicts.length > 0
    && r.typed.verdicts.indexOf('correct') > -1
    && r.typed.verdicts.indexOf('wrong') > -1
    && /characters correct/.test(r.typed.stats)
    && /Missed ·/.test(r.typed.chips.join(' '))
    && r.typed.slotId.indexOf('type-') === 0;
  const darkOk = typedOk(d)
    && d.typed.correctColor === 'rgb(74, 222, 128)' && d.typed.wrongColor === 'rgb(248, 113, 113)'
    && JSON.stringify(d.typed.verdicts) === JSON.stringify(d.voiceCard.verdicts);
  const lightOk = typedOk(l)
    && l.typed.correctColor === 'rgb(27, 107, 60)' && l.typed.wrongColor === 'rgb(185, 28, 28)'
    && JSON.stringify(l.typed.verdicts) === JSON.stringify(l.voiceCard.verdicts);
  console.log('DARK typed parity:  ' + (darkOk ? 'PASS' : 'FAIL'));
  console.log('LIGHT typed parity: ' + (lightOk ? 'PASS' : 'FAIL'));
  console.log('  page errors: ' + (errors.length ? errors.join(' | ') : '0'));
  await browser.close();
  const finalOk = darkOk && lightOk && errors.length === 0;
  console.log(finalOk ? 'RESULT: PASS' : 'RESULT: FAIL (see above)');
  process.exit(finalOk ? 0 : 1);
})().catch(e => { console.error('FATAL', e); process.exit(1); });