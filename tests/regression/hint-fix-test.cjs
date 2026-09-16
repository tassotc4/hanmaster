'use strict';
const path = require('path');
const { launch, bootTutor, waitFor, SCRATCH } = require('../helpers/bootstrap.cjs');

async function liveShot(browser, theme) {
  const { page, errors } = await bootTutor(browser, { theme, mode: 'live', abortApi: 'tts' });
  await page.evaluate(() => { const i = document.getElementById('tutTypeInput'); if (i) i.disabled = false; });

  const msgs = ['你好！', '你叫什么名字？', '今天天气怎么样？'];
  let hint = null, sentIdx = -1;
  outer:
  for (let m = 0; m < msgs.length; m++) {
    sentIdx = m;
    await page.evaluate((txt) => {
      const i = document.getElementById('tutTypeInput');
      i.value = txt;
      tutTypeSubmit();
    }, msgs[m]);
    for (let t = 0; t < 45; t++) {
      await new Promise(r => setTimeout(r, 1000));
      hint = await page.evaluate(() => {
        const w = document.getElementById('tutHintWrapper');
        const h = document.getElementById('tutHintText');
        const cards = document.querySelectorAll('.cai .phrase');
        return {
          wrapperDisplay: w ? w.style.display : '(missing)',
          wrapperComputed: w ? getComputedStyle(w).display : '(missing)',
          hintText: h ? h.textContent : '(missing)',
          hasLoading: h ? h.classList.contains('ph-loading') : null,
          hintColor: h ? getComputedStyle(h).color : null,
          replyCardArrived: cards.length > 0
        };
      });
      if (hint.replyCardArrived && hint.wrapperDisplay === 'block') break outer;
      if (hint.replyCardArrived && hint.wrapperComputed === 'none') break;
    }
  }

  const pass = hint && hint.wrapperDisplay === 'block' && hint.hintText && hint.hintText !== '--' &&
    hint.hasLoading === false && hint.hintColor && !hint.hintColor.includes('rgba(0, 0, 0, 0)') && hint.hintColor !== 'transparent';
  console.log((pass ? 'PASS ' : 'FAIL ') + 'LIVE [' + theme + '] msg=' + msgs[sentIdx] + ' hint=' + JSON.stringify(hint));

  if (hint && hint.wrapperDisplay === 'block') {
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(SCRATCH, 'hint-' + theme + '.png') });
    console.log('  screenshot: hint-' + theme + '.png');
  }
  console.log('LIVE [' + theme + '] pageErrors=' + JSON.stringify(errors.slice(0, 5)));
  await page.close();
  return pass;
}

async function studyCheck(browser, theme) {
  const { page, errors } = await bootTutor(browser, { theme, mode: 'static' });
  await new Promise(r => setTimeout(r, 1500));
  const st = await page.evaluate(() => {
    const w = document.getElementById('tutHintWrapper');
    const h = document.getElementById('tutHintText');
    return {
      wrapperDisplay: w ? w.style.display : '(missing)',
      wrapperComputed: w ? getComputedStyle(w).display : '(missing)',
      hintText: h ? h.textContent : '(missing)'
    };
  });
  const pass = st.wrapperDisplay === 'none' || st.wrapperComputed === 'none';
  console.log((pass ? 'PASS ' : 'FAIL ') + 'STUDY [' + theme + '] hint-hidden=' + JSON.stringify(st));
  console.log('STUDY [' + theme + '] pageErrors=' + JSON.stringify(errors.slice(0, 5)));
  await page.close();
  return pass;
}

(async () => {
  const browser = await launch();
  let ok = true;
  ok = (await liveShot(browser, 'dark')) && ok;
  ok = (await liveShot(browser, 'light')) && ok;
  ok = (await studyCheck(browser, 'dark')) && ok;
  ok = (await studyCheck(browser, 'light')) && ok;
  await browser.close();
  console.log(ok ? 'ALL HINT CHECKS PASS' : 'SOME HINT CHECKS FAILED');
  process.exit(ok ? 0 : 1);
})().catch(e => { console.error('FATAL', e); process.exit(1); });