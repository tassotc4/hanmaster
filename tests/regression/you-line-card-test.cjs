'use strict';
// v148 gate: 'you' lines render a visible phrase card (the repeat-after-me
// fix). The target was previously invisible (no card + the hidden
// blackboard); coachPronunciation's replay (sc<80) played audio with nothing
// to read. The card becomes the coaching host (the only _tutCurBotCard
// consumer) — the reported symptom closes structurally.
const { launch, bootTutor, BASE, waitFor, SCRATCH } = require('../helpers/bootstrap.cjs');
const path = require('path');

let pass = true;
const check = (name, ok, detail) => { console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); if (!ok) pass = false; };

(async () => {
  const browser = await launch();
  const boot = await bootTutor(browser, { theme: 'dark', mode: 'static', level: 'beginner', abortApi: 'tts' });
  const page = boot.page;
  await page.evaluate(() => {
    const o = speak;
    speak = function (t, rate, lang) { window.__speakLog.push({ text: String(t).slice(0, 24), lang: lang || 'zh-default' }); return o.apply(this, arguments); };
    window.__speakLog = [];
  });

  // advance past the bot line(s) to the first 'you' line
  const dialogue = await page.evaluate(() => tutLesson.dialogue.map(d => ({ who: d.who, cn: d.cn.slice(0, 16) })));
  const firstYouIdx = dialogue.findIndex(d => d.who === 'you');
  check('lesson has a you-line to test', firstYouIdx > 0, 'idx=' + firstYouIdx);
  for (let step = 0; step < firstYouIdx; step++) {
    const target = await page.evaluate(() => tutLesson.dialogue[tutStep].cn);
    await page.evaluate(t => { const i = document.getElementById('tutTypeInput'); i.value = t; tutTypeSubmit(); }, target);
    await new Promise(r => setTimeout(r, 2200));
  }

  // --- 1. The 'you' card exists, visible, and is the _tutCurBotCard host ---
  const atYou = await page.evaluate(() => {
    const line = tutLesson.dialogue[tutStep];
    const card = window._tutCurBotCard;
    const isYouCard = !!card && card.isConnected && card.classList.contains('cus');
    const phrase = card ? card.querySelector('.phrase') : null;
    const r = phrase ? phrase.getBoundingClientRect() : null;
    const replays = card ? Array.from(card.querySelectorAll('span.replay')) : [];
    const wd = document.getElementById('tutWd');
    // ruby interleave: extract the BASE text (non-rt text nodes) for comparison
    const baseText = phrase ? Array.from(phrase.querySelectorAll('ruby')).map(r2 => Array.from(r2.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent).join('')).join('') : '';
    // the disambiguating label (v149): mirrors the attempt card's user-label
    const label = card ? card.querySelector('.user-label') : null;
    return {
      isYouCard,
      labelPresent: !!(label && label.textContent.indexOf('repeat this') !== -1),
      labelStyling: label ? getComputedStyle(label).textTransform : '',
      phraseText: phrase ? phrase.innerText.slice(0, 20) : '',
      phraseVisible: !!(r && r.width > 0 && r.height > 0 && r.top >= 0 && r.bottom <= (window.innerHeight + 40)),
      hasRuby: !!(phrase && phrase.querySelector('ruby')),
      replayCount: replays.length,
      replayWired: replays.length === 2 && /speak\('/.test(replays[0].getAttribute('onclick')) && /speakTr\('/.test(replays[1].getAttribute('onclick')),
      trSlot: !!(card && card.querySelector('.tr')),
      matchesTarget: baseText.replace(/\s/g, '') === line.cn.replace(/\s/g, ''),
      wdMatches: wd ? wd.textContent === line.cn : false
    };
  });
  check('1. you-line card: .cus user-side, ruby phrase, 2 wired replay buttons, tr slot',
    atYou.isYouCard && atYou.hasRuby && atYou.replayWired && atYou.trSlot, JSON.stringify(atYou).slice(0, 240));
  check('1b. the disambiguating label present ("Your line — repeat this:"), small-caps like YOUR ATTEMPT',
    atYou.labelPresent && atYou.labelStyling === 'uppercase', 'labelPresent=' + atYou.labelPresent + ' textTransform=' + atYou.labelStyling);
  check('1. the target phrase is VISIBLE in the viewport (the core fix)', atYou.phraseVisible && atYou.matchesTarget, JSON.stringify(atYou).slice(0, 160));
  check('1. _tutCurBotCard points at the you card (the coaching host)', atYou.isYouCard);

  // --- 2. Wrong attempt (sc<80): the coaching attaches INSIDE the you card ---
  await page.evaluate(() => { const i = document.getElementById('tutTypeInput'); i.value = '这是一个完全错误的答案'; tutTypeSubmit(); });
  await new Promise(r => setTimeout(r, 3500));
  const after = await page.evaluate(() => {
    const host = window._tutCurBotCard;
    const coach = host && host.isConnected ? host.querySelector('.coach-sec') : null;
    const phrase = host ? host.querySelector('.phrase') : null;
    return {
      coachInsideYouCard: !!(coach),
      // the coach's design: "Listen again, then repeat:" + the PINYIN (tone-
      // marked Latin) + the meaning — NOT the hanzi (same as bot-card coaching)
      coachHasPinyin: !!(coach && /[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/.test(coach.innerText)),
      coachHasListenAgain: !!(coach && coach.innerText.indexOf('Listen again') !== -1),
      phraseStillVisible: !!(phrase && phrase.getBoundingClientRect().height > 0),
      speakLog: window.__speakLog,
      step: tutStep
    };
  });
  check('2. coaching (sc<80): coach-sec inside the you card (pinyin+meaning design), phrase stays visible',
    after.coachInsideYouCard && after.coachHasPinyin && after.coachHasListenAgain && after.phraseStillVisible,
    JSON.stringify({ coach: after.coachInsideYouCard, pinyin: after.coachHasPinyin, phrase: after.phraseStillVisible }));
  const replayed = after.speakLog.some(s => s.text.indexOf(dialogue[firstYouIdx].cn.slice(0, 4)) !== -1);
  check('2. the coaching replayed the target audio (speak log)', replayed, JSON.stringify(after.speakLog));

  await page.screenshot({ path: path.join(SCRATCH, 'v148-you-line-card.png') });
  console.log('SCREENSHOT: v148-you-line-card.png');

  await browser.close();
  console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL');
  process.exit(pass ? 0 : 1);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
