'use strict';
const path = require('path');
const { launch, bootTutor, SCRATCH } = require('../helpers/bootstrap.cjs');

(async () => {
  const browser = await launch();
  const boot = await bootTutor(browser, { theme: 'dark', mode: 'live', width: 390, height: 844, abortApi: 'tts' });
  const page = boot.page;
  const errors = boot.errors;
  const resErrors = [];
  page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) resErrors.push(m.text()); });

  const direct = await page.evaluate(() => {
    const html = formatChineseTextWithRuby('请给我一杯咖啡');
    const div = document.createElement('div');
    div.innerHTML = html;
    return {
      html,
      tokens: Array.from(div.querySelectorAll('ruby')).map(r => {
        const rt = r.querySelector('rt');
        return { base: r.textContent.replace(rt ? rt.textContent : '', '').trim(), rt: rt ? rt.textContent : '' };
      })
    };
  });
  console.log('DIRECT RENDER  formatChineseTextWithRuby("请给我一杯咖啡")');
  console.log('  ' + direct.html);
  const kafei = direct.tokens.filter(t => t.base.includes('咖') || t.base.includes('啡'));
  const kt = kafei.find(t => t.base === '咖');
  const ft = kafei.find(t => t.base === '啡');
  const directOk = !!(kt && kt.rt === 'kā' && ft && ft.rt === 'fēi');
  console.log(directOk ? 'DIRECT: PASS  (咖→kā, 啡→fēi)' : 'DIRECT: FAIL');
  if (!directOk) { await browser.close(); process.exit(1); }

  const lastPhraseText = () => page.evaluate(() => {
    const ps = document.querySelectorAll('#tutChat .cai .phrase');
    return ps.length ? ps[ps.length - 1].innerText : '';
  });
  let prev = await lastPhraseText();
  for (let t = 0; t < 30; t++) { await new Promise(r => setTimeout(r, 1000)); const now = await lastPhraseText(); if (now && now !== prev) { prev = now; break; } }

  await page.evaluate(() => { const i = document.getElementById('tutTypeInput'); i.value = 'Help me buy coffee please'; tutTypeSubmit(); });
  for (let t = 0; t < 50; t++) { await new Promise(r => setTimeout(r, 1000)); const now = await lastPhraseText(); if (now && now !== prev) { prev = now; break; } }
  await new Promise(r => setTimeout(r, 800));

  const live = await page.evaluate(() => {
    const c = Array.from(document.querySelectorAll('#tutChat .cai')).pop();
    const rubies = Array.from(c.querySelectorAll('ruby')).map(r => {
      const rt = r.querySelector('rt');
      return { base: Array.from(r.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent).join(''), rt: rt ? rt.textContent : '' };
    });
    const hanziNoRt = rubies.filter(r => /[\u4e00-\u9fa5]/.test(r.base) && !r.rt).map(r => r.base);
    return { phrase: c.querySelector('.phrase') ? c.querySelector('.phrase').innerText : '', hanziNoRt };
  });
  console.log('\nLIVE REPLY phrase: "' + live.phrase + '"');
  console.log('  empty-rt hanzi: ' + (live.hanziNoRt.length ? live.hanziNoRt.join(' ') : '(none)'));
  const el = await page.evaluate(() => {
    const c = Array.from(document.querySelectorAll('#tutChat .cai')).pop();
    const rect = c.getBoundingClientRect();
    return { x: Math.max(0, rect.left - 8), y: Math.max(0, rect.top - 8), w: Math.min(rect.width + 16, 390), h: rect.height + 16 };
  });
  const clip = { x: Math.round(el.x), y: Math.round(el.y), width: Math.round(el.w), height: Math.round(el.h) };
  await page.screenshot({ path: path.join(SCRATCH, 'coffee-pinyin.png'), clip });
  console.log('  screenshot: coffee-pinyin.png');
  console.log('  page errors: ' + (errors.length ? errors.join(' | ') : '0') + (resErrors.length ? ' | console(400-ish): ' + resErrors.join(' | ') : ''));
  await browser.close();
  const ok = directOk && live.hanziNoRt.length === 0 && errors.length === 0;
  console.log(ok ? 'RESULT: PASS' : 'RESULT: FAIL (see above)');
  process.exit(ok ? 0 : 1);
})().catch(e => { console.error('FATAL', e); process.exit(1); });