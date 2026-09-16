'use strict';
const path = require('path');
const { launch, bootTutor, hasCJK, SCRATCH } = require('../helpers/bootstrap.cjs');

const MESSAGES = [
  'What does 你好 mean?',
  'How do I say thank you in Chinese?',
  'Help me buy coffee please',
  'I want to say 我喜欢 you to my friend',
  'Tell me about 北京 weather',
  'How do I say welcome to a guest?'
];

(async () => {
  const browser = await launch();
  const { page, errors } = await bootTutor(browser, { theme: 'dark', mode: 'live', width: 390, height: 844, abortApi: 'tts' });
  await page.evaluate(() => { const i = document.getElementById('tutTypeInput'); if (i) i.disabled = false; });

  const lastPhraseText = () => page.evaluate(() => {
    const ps = document.querySelectorAll('#tutChat .cai .phrase');
    return ps.length ? ps[ps.length - 1].innerText.replace(/\s+/g, ' ').trim() : '';
  });

  let prev = await lastPhraseText();
  for (let t = 0; t < 30; t++) { await new Promise(r => setTimeout(r, 1000)); const now = await lastPhraseText(); if (now && now !== prev) { prev = now; break; } }

  const results = [];

  for (const msg of MESSAGES) {
    const before = prev;
    let info = null;
    for (let attempt = 0; attempt < 2 && !info; attempt++) {
      await page.evaluate((txt) => { const i = document.getElementById('tutTypeInput'); i.value = txt; tutTypeSubmit(); }, msg);
      let arrived = false;
      for (let t = 0; t < 90; t++) {
        await new Promise(r => setTimeout(r, 1000));
        const now = await lastPhraseText();
        if (now && now !== before) { arrived = true; prev = now; break; }
      }
      if (arrived) {
        await new Promise(r => setTimeout(r, 600));
        info = await page.evaluate(() => {
          const cards = Array.from(document.querySelectorAll('#tutChat .cai'));
          const c = cards.length ? cards[cards.length - 1] : null;
          if (!c) return null;
          const hasCJK_ = (s) => /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3000-\u303f\uff00-\uffef]/.test(s);
          const rubyData = Array.from(c.querySelectorAll('ruby')).map(r => {
            const base = r.childNodes[0] ? r.childNodes[0].textContent : '';
            const rt = r.querySelector('rt') ? r.querySelector('rt').textContent.trim() : '';
            return { base, rt };
          });
          const asciiBaseRubies = rubyData.filter(r => /[a-zA-Z]/.test(r.base) && !hasCJK_(r.base)).length;
          const hanziNoRt = rubyData.filter(r => /[\u4e00-\u9fff]/.test(r.base) && !r.rt).length;
          const phrase = c.querySelector('.phrase');
          const mutedDivs = Array.from(c.querySelectorAll('div')).filter(d => {
            const col = getComputedStyle(d).color;
            const fs = parseFloat(getComputedStyle(d).fontSize);
            return d.innerText.trim() && (col === 'rgb(115, 115, 115)' || col === 'rgb(113, 113, 113)' || /var\(--muted\)/.test(d.getAttribute('style') || '')) && fs >= 11;
          });
          return {
            hasPhrase: !!phrase,
            phraseText: phrase ? phrase.innerText.replace(/\s+/g, ' ').trim().slice(0, 90) : null,
            phraseFontSize: phrase ? getComputedStyle(phrase).fontSize : null,
            asciiBaseRubies,
            hanziNoRt,
            mutedCount: mutedDivs.length
          };
        });
      } else if (attempt === 0) {
        console.log('  (retry "' + msg + '" — no reply within 90s)');
      }
    }
    results.push({ msg, arrived: info !== null, info });
  }

  console.log('=== MOBILE BUBBLE VERIFICATION (390px viewport) ===');
  let allOk = true;
  for (const r of results) {
    if (!r.arrived) { console.log('FAIL "' + r.msg + '" -> no reply arrived'); allOk = false; continue; }
    const i = r.info;
    const ok = i.asciiBaseRubies === 0 && i.hanziNoRt === 0 && (i.hasPhrase || i.mutedCount >= 1);
    allOk = allOk && ok;
    console.log((ok ? 'PASS' : 'FAIL') + ' "' + r.msg + '" phrase="' + (i.phraseText || '(none)') + '" fontSize=' + (i.phraseFontSize || '-') + ' mutedBlocks=' + i.mutedCount + ' asciiBaseRubies=' + i.asciiBaseRubies + ' hanziNoRt=' + i.hanziNoRt);
  }
  const phraseSizes = results.filter(r => r.arrived && r.info && r.info.phraseFontSize).map(r => r.info.phraseFontSize);
  console.log('phrase font sizes seen on 390px: ' + JSON.stringify(phraseSizes) + ' (expect 22px per <=560px media rule)');
  await page.screenshot({ path: path.join(SCRATCH, 'mobile-bubble.png') });
  console.log('pageErrors: ' + JSON.stringify(errors.slice(0, 5)));
  await browser.close();
  console.log(allOk ? 'OVERALL: NO GARBLED BUBBLES' : 'OVERALL: GARBLED BUBBLE DETECTED');
  process.exit(allOk ? 0 : 1);
})().catch(e => { console.error('FATAL', e); process.exit(1); });