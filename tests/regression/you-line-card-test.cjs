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

  // --- 1b2. CONTRAST assertions (not just presence): the whole detour
  // happened because the gate checked existence, not visibility. Effective
  // background = semi-transparent layers blended over the nearest opaque one.
  const contrastState = await page.evaluate(() => {
    const you = window._tutCurBotCard;
    const cards = Array.from(document.querySelectorAll('#tutChat .cb'));
    const att = cards.filter(c => c.classList.contains('att'));
    const out = {};
    for (const [key, el] of [['you', you ? you.querySelector('.user-label') : null], ['attempt', att.length ? att[att.length - 1].querySelector('.user-label') : null]]) {
      if (!el) { out[key] = null; continue; }
      const cs = getComputedStyle(el);
      const layers = [];
      let n = el;
      while (n) {
        const c = getComputedStyle(n).backgroundColor;
        const m = c && c.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);
        if (m) { const a = m[4] === undefined ? 1 : parseFloat(m[4]); if (a > 0) layers.push({ rgb: [parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3])], a: a }); if (a >= 1) break; }
        n = n.parentElement;
      }
      let eff = [255, 255, 255];
      for (let i = layers.length - 1; i >= 0; i--) { const L = layers[i]; eff = L.rgb.map(function (v, j) { return Math.round(v * L.a + eff[j] * (1 - L.a)); }); }
      const cm = cs.color.match(/\d+/g);
      const lum = function (rgb) { const f = function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(rgb[0]) + 0.7152 * f(rgb[1]) + 0.0722 * f(rgb[2]); };
      const l1 = lum([parseFloat(cm[0]), parseFloat(cm[1]), parseFloat(cm[2])]);
      const l2 = lum(eff);
      out[key] = { color: cs.color, effBg: 'rgb(' + eff.join(',') + ')', ratio: +(((Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)).toFixed(2)) };
    }
    return out;
  });
  check('1b2. you-target label contrast >= 4.5:1 (gold on the card)',
    !!contrastState.you && contrastState.you.ratio >= 4.5 && contrastState.you.color === 'rgb(212, 166, 79)',
    JSON.stringify(contrastState.you));
  check('1b2. attempt label contrast >= 4.5:1 (fg2, the pre-existing AA gap fixed)',
    !!contrastState.attempt && contrastState.attempt.ratio >= 4.5 && contrastState.attempt.color === 'rgb(181, 165, 151)',
    JSON.stringify(contrastState.attempt));
  check('1. the target phrase is VISIBLE in the viewport (the core fix)', atYou.phraseVisible && atYou.matchesTarget, JSON.stringify(atYou).slice(0, 160));
  check('1. _tutCurBotCard points at the you card (the coaching host)', atYou.isYouCard);

  // --- 1c. IN-VIEWPORT at first render (the third claim: existence, contrast,
  // AND in-viewport are three different things — the scroll-clipping detour) ---
  const inViewport = await page.evaluate(() => {
    const you = window._tutCurBotCard;
    const label = you ? you.querySelector('.user-label') : null;
    const chat = document.getElementById('tutChat');
    if (!label) return { present: false };
    const lr = label.getBoundingClientRect();
    const cr = chat.getBoundingClientRect();
    return {
      present: true,
      labelTop: Math.round(lr.top), paneTop: Math.round(cr.top), paneBottom: Math.round(cr.bottom),
      // 2px tolerance for the pane's border/rounding (scrollIntoView lands 1px high)
      inVisibleArea: lr.top >= cr.top - 2 && lr.bottom <= cr.bottom + 2
    };
  });
  check('1c. the label is inside #tutChat\'s visible area at FIRST render (not just in the DOM)',
    inViewport.present && inViewport.inVisibleArea,
    'labelTop=' + inViewport.labelTop + ' paneTop=' + inViewport.paneTop + ' paneBottom=' + inViewport.paneBottom);

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
