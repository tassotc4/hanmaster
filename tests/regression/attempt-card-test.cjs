'use strict';
const path = require('path');
const { launch, bootTutor, waitFor, grabAttCardClip, SCRATCH } = require('../helpers/bootstrap.cjs');

(async () => {
  const browser = await launch();
  const { page, errors } = await bootTutor(browser, { theme: 'dark', mode: 'static' });

  const boot = await page.evaluate(() => typeof tutLesson !== 'undefined' && !!tutLesson && tutLesson.dialogue.length > 0);
  if (!boot) { console.log('BOOT: FAIL — no lesson loaded'); await browser.close(); process.exit(1); }
  console.log('BOOT: PASS (lesson 1 loaded)');

  // ---- Direct consistency claim: attemptCardStats vs attemptStatsFor same inputs ----
  const cons = await page.evaluate(() => {
    const target = tutLesson.dialogue[tutStep].cn;
    const tr = target + '的'; // guaranteed at least one wrong char
    const v = analyzePronunciation(target, tr);
    const a = attemptCardStats(v);
    const sEl = document.createElement('div');
    const s = attemptStatsFor(target, tr);
    sEl.innerHTML = s;
    const coachN = (sEl.textContent.match(/(\d+)\/(\d+)/) || []).slice(1);
    const cardN = (a.statsHtml.match(/(\d+)\/(\d+)/) || []).slice(1);
    return {
      target, tr, statuses: v.map(x => x.status),
      sameCounts: !!coachN.length && coachN[0] === cardN[0] && coachN[1] === cardN[1],
      coachCounts: coachN, cardCounts: cardN, statsHtml: a.statsHtml, chipHtml: a.chipHtml
    };
  });
  console.log('CONSISTENCY [' + cons.target + '] transcript "' + cons.tr + '" statuses=' + cons.statuses.join(','));
  console.log('  coach(attemptStatsFor) ' + cons.coachCounts.join('/') + ' vs card ' + cons.cardCounts.join('/') + ' → ' + (cons.sameCounts ? 'IDENTICAL' : 'MISMATCH'));
  if (!cons.sameCounts) { console.log('CONSISTENCY: FAIL'); await browser.close(); process.exit(1); }
  console.log('CONSISTENCY: PASS');

  // ---- attemptCardStats chip rendering with synthetic tone+missed verdicts ----
  const chipUnit = await page.evaluate(() => {
    return attemptCardStats([{ status: 'correct' }, { status: 'correct' }, { status: 'tone' }, { status: 'wrong' }]);
  });
  console.log('CHIPS(2/4, 1 tone, 1 missed): stats="' + chipUnit.statsHtml + '" chip="' + chipUnit.chipHtml + '"');
  if (!/2\/4/.test(chipUnit.statsHtml) || !/Tone · 1/.test(chipUnit.chipHtml) || !/Missed · 1/.test(chipUnit.chipHtml)) { console.log('CHIPS: FAIL'); await browser.close(); process.exit(1); }
  console.log('CHIPS: PASS');

  // ---- Test A: typed attempt (real app path: processScore(text, sc, target, turnId)) ----
  // 3 wrong chars => sc~70 < 80 => step does NOT auto-advance, attempt counter
  // reaches 2 for the coach stats block comparison below.
  const typedText = await page.evaluate(() => tutLesson.dialogue[tutStep].cn.replace('明', '很').replace('小', '很').replace('什', '很'));
  await page.evaluate((tr) => {
    const i = document.getElementById('tutTypeInput');
    i.value = tr;
    tutTypeSubmit();
  }, typedText);
  const cardA = await waitFor(page, () => document.querySelectorAll('#tutChat .cb.cus.att').length >= 1, 8000);
  if (!cardA) { console.log('CARD-A: FAIL — no .att card after typed attempt'); await browser.close(); process.exit(1); }
  const a = await page.evaluate((tr) => {
    const c = Array.from(document.querySelectorAll('#tutChat .cb.cus.att')).pop();
    const verdicts = Array.from(c.querySelectorAll('.phrase-u > span')).map(s => {
      if (s.classList.contains('verdict-correct')) return 'correct';
      if (s.classList.contains('verdict-tone')) return 'tone';
      if (s.classList.contains('verdict-wrong')) return 'wrong';
      return 'none';
    });
    const sc = c.querySelector('.score-line .sc');
    return {
      label: (c.querySelector('.user-label') || {}).innerText,
      phrase: (c.querySelector('.phrase-u') || {}).innerText,
      usay: (c.querySelector('.usay') || {}).innerText,
      verdicts,
      expected: analyzePronunciation(tutLesson.dialogue[tutStep].cn, tr).map(v => v.status),
      shownTarget: tutLesson.dialogue[tutStep].cn,
      scText: sc ? sc.innerText : '',
      scOk: sc ? sc.classList.contains('sc-ok') : false,
      scMid: sc ? sc.classList.contains('sc-mid') : false,
      scLow: sc ? sc.classList.contains('sc-low') : false,
      stats: (c.querySelector('.stats') || {}).innerText || '',
      chips: Array.from(c.querySelectorAll('.chip')).map(ch => ch.className + ':' + ch.innerText),
      slotId: (c.querySelector('.att-slot') || {}).id,
      slotIsEmpty: !!(c.querySelector('.att-slot') && !c.querySelector('.att-slot').innerHTML.trim())
    };
  }, typedText);
  console.log('CARD-A (typed path — target + turnId passed, verdicts colored like voice):');
  console.log('  label="' + a.label + '" phrase="' + a.phrase + '"');
  console.log('  verdicts=[' + a.verdicts.join(',') + '] expected=[' + a.expected.join(',') + '] ' + (JSON.stringify(a.verdicts) === JSON.stringify(a.expected) ? 'MATCH' : 'MISMATCH'));
  console.log('  sc="' + a.scText + '" bands ok/mid/low=' + a.scOk + '/' + a.scMid + '/' + a.scLow);
  console.log('  stats="' + a.stats + '" chips=' + JSON.stringify(a.chips) + ' slot="' + a.slotId + '" empty=' + a.slotIsEmpty);
  const okA = /attempt/i.test(a.label) && a.phrase === a.shownTarget
    && JSON.stringify(a.verdicts) === JSON.stringify(a.expected)
    && a.expected.length > 0
    && /characters correct/.test(a.stats)
    && /Missed · 3/.test(a.chips.join(' '))
    && a.scText.indexOf('/100') > -1 && (a.scOk || a.scMid || a.scLow)
    && a.slotIsEmpty && /^type-/.test(a.slotId);
  if (!okA) { console.log('CARD-A: FAIL'); await browser.close(); process.exit(1); }
  console.log('CARD-A: PASS');

  // ---- Test B: voice path confirmTranscript (real target) — merged card ----
  const merge = await page.evaluate(() => {
    const target = tutLesson.dialogue[tutStep].cn;
    const tr = target.replace('明', '很').replace('小', '很').replace('什', '很');
    const confirmId = 'confirm-' + Date.now();
    const preview = addTutMsg('user', '<div class="fc font-bold" style="font-size:18px;margin-bottom:4px;letter-spacing:1px">' + tr + '</div><div style="font-size:13px;color:var(--muted)">(voice input)</div><div id="' + confirmId + '" style="margin-top:6px;display:flex;gap:8px;"></div>');
    const before = document.querySelectorAll('#tutChat .cb').length;
    confirmTranscript(tr, null, confirmId);
    return { target, tr, before, previewConnectedAfter: preview.isConnected };
  });
  const cardB = await waitFor(page, () => document.querySelectorAll('#tutChat .cb.cus.att').length >= 2, 8000);
  if (!cardB) { console.log('MERGE: FAIL — merged card not present'); await browser.close(); process.exit(1); }
  const b = await page.evaluate((tg, tr) => {
    const cards = Array.from(document.querySelectorAll('#tutChat .cb.cus.att'));
    const c = cards[cards.length - 1];
    const verdicts = Array.from(c.querySelectorAll('.phrase-u > span')).map(s => {
      if (s.classList.contains('verdict-correct')) return 'correct';
      if (s.classList.contains('verdict-tone')) return 'tone';
      if (s.classList.contains('verdict-wrong')) return 'wrong';
      return 'none';
    });
    return {
      expected: analyzePronunciation(tg, tr).map(v => v.status),
      verdicts,
      stats: (c.querySelector('.stats') || {}).innerText || '',
      chips: Array.from(c.querySelectorAll('.chip')).map(ch => ch.className.replace('chip ', '') + ':' + ch.innerText),
      scText: (c.querySelector('.score-line .sc') || {}).innerText || '',
      scOk: (c.querySelector('.score-line .sc') || {}).classList.contains('sc-ok'),
      scLow: (c.querySelector('.score-line .sc') || {}).classList.contains('sc-low'),
      scMid: (c.querySelector('.score-line .sc') || {}).classList.contains('sc-mid'),
      chatCount: document.querySelectorAll('#tutChat .cb').length
    };
  }, merge.target, merge.tr);
  console.log('MERGE: transcript "' + merge.tr + '" preview-connected-after=' + merge.previewConnectedAfter + ' chat=' + merge.before + '→' + b.chatCount);
  console.log('  expected=[' + b.expected.join(',') + '] rendered=[' + b.verdicts.join(',') + '] ' + (JSON.stringify(b.expected) === JSON.stringify(b.verdicts) ? 'MATCH' : 'MISMATCH'));
  console.log('  sc="' + b.scText + '" bands ok/mid/low=' + b.scOk + '/' + b.scMid + '/' + b.scLow + ' stats="' + b.stats + '" chips=' + JSON.stringify(b.chips));
  const mergeOk = !merge.previewConnectedAfter && b.chatCount === merge.before
    && JSON.stringify(b.expected) === JSON.stringify(b.verdicts)
    && b.expected.filter(s => s === 'wrong').length === 3
    && /7\/10 characters correct/.test(b.stats) && /Missed · 3/.test(b.chips.join(' '));
  if (!mergeOk) { console.log('MERGE: FAIL'); await browser.close(); process.exit(1); }
  console.log('MERGE: PASS');

  const darkColors = await page.evaluate(() => {
    const c = Array.from(document.querySelectorAll('#tutChat .cb.cus.att')).pop();
    const g = s => { const e = c.querySelector(s); return e ? getComputedStyle(e).color : null; };
    return { correct: g('.phrase-u .verdict-correct'), wrong: g('.phrase-u .verdict-wrong') };
  });
  console.log('DARK computed: correct=' + darkColors.correct + ' wrong=' + darkColors.wrong);

  // Coach real /api/chat lands as .coach-sec inside the bot .cai card.
  // Attempt 2 must show the stats block — poll for it (skips attempt 1's).
  const coachArrived = await waitFor(page, () => {
    const sec = Array.from(document.querySelectorAll('#tutChat .cai .coach-sec')).pop();
    return !!sec && /characters correct/.test(sec.innerText);
  }, 25000);
  console.log('COACH(real /api/chat): ' + (coachArrived ? 'coach-sec arrived' : 'NO COACH-SEC'));
  if (!coachArrived) { console.log('COACH: FAIL'); await browser.close(); process.exit(1); }
  const coachStats = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('#tutChat .cb.cus.att'));
    const lastAtt = cards[cards.length - 1];
    const attStats = (lastAtt.querySelector('.stats') || {}).innerText || '';
    const attN = (attStats.match(/(\d+)\/(\d+)/) || []).slice(1);
    const bots = Array.from(document.querySelectorAll('#tutChat .cai'));
    const bot = bots[bots.length - 1];
    const coachSec = bot.querySelector('.coach-sec');
    const m = coachSec ? coachSec.innerHTML.match(/<b[^>]*>(\d+)<\/b>\/(\d+) characters correct/) : null;
    const botN = m ? [m[1], m[2]] : [];
    return { attN, botN, botSnippet: (coachSec ? coachSec.innerText : bot.innerText).slice(0, 160) };
  });
  console.log('  card stats=' + coachStats.attN.join('/') + ' coach stats=' + (coachStats.botN.length ? coachStats.botN.join('/') : '(none)'));
  console.log('  coach reply: "' + coachStats.botSnippet + '"');
  if (coachStats.botN.length && coachStats.attN.join('/') !== coachStats.botN.join('/')) { console.log('COACH-COUNT: FAIL'); await browser.close(); process.exit(1); }
  if (coachStats.botN.length && coachStats.attN.length && coachStats.attN.join('/') === coachStats.botN.join('/')) console.log('COACH-COUNT: PASS');

  await grabAttCardClip(page, path.join(SCRATCH, 'attempt-card-dark.png'));
  console.log('  screenshot: attempt-card-dark.png');

  // ---- Light theme — computed colors must switch ----
  const lightBoot = await bootTutor(browser, { theme: 'light', mode: 'static' });
  errors.push(...lightBoot.errors);
  const page2 = lightBoot.page;
  await page2.evaluate(() => {
    const target = tutLesson.dialogue[tutStep].cn;
    confirmTranscript(target.replace('明', '很'), null, null);
  });
  await waitFor(page2, () => document.querySelectorAll('#tutChat .cb.cus.att').length >= 1, 8000);
  const light = await page2.evaluate(() => {
    const c = Array.from(document.querySelectorAll('#tutChat .cb.cus.att')).pop();
    const g = s => { const e = c.querySelector(s); return e ? getComputedStyle(e).color : null; };
    const sc = c.querySelector('.score-line .sc');
    return {
      htmlHasTheme: document.documentElement.classList.contains('theme-light'),
      correctColor: g('.phrase-u .verdict-correct'), wrongColor: g('.phrase-u .verdict-wrong')
    };
  });
  console.log('LIGHT computed: html.theme-light=' + light.htmlHasTheme + ' correct=' + light.correctColor + ' wrong=' + light.wrongColor);
  const lightOk = light.htmlHasTheme && light.correctColor === 'rgb(27, 107, 60)' && light.wrongColor === 'rgb(185, 28, 28)';
  await grabAttCardClip(page2, path.join(SCRATCH, 'attempt-card-light.png'));
  console.log('  light-theme color switch: ' + (lightOk ? 'PASS' : 'FAIL'));

  console.log('  page errors: ' + (errors.length ? errors.join(' | ') : '0'));
  await browser.close();
  const finalOk = cons.sameCounts
    && /2\/4/.test(chipUnit.statsHtml)
    && okA
    && mergeOk && coachArrived
    && darkColors.correct === 'rgb(74, 222, 128)' && darkColors.wrong === 'rgb(248, 113, 113)'
    && lightOk
    && errors.length === 0;
  console.log(finalOk ? 'RESULT: PASS' : 'RESULT: FAIL (see above)');
  process.exit(finalOk ? 0 : 1);
})().catch(e => { console.error('FATAL', e); process.exit(1); });