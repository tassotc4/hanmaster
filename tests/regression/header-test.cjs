'use strict';
const path = require('path');
const { launch, bootTutor, waitFor, SCRATCH } = require('../helpers/bootstrap.cjs');

async function run(browser, theme, width, label) {
  const boot = await bootTutor(browser, { theme, mode: 'static', width, height: 900, extra: { voice_mode: 'off' } });
  const page = boot.page;
  const errors = boot.errors;
  const ok = await waitFor(page, () => {
    const t = document.getElementById('tutLessonTitle');
    return t && getComputedStyle(t).display !== 'none' && t.textContent.length;
  }, 20000);
  if (!ok) { console.log('[' + label + ' ' + theme + '] BOOT: FAIL — no lesson title'); await page.close(); return null; }

  const m = await page.evaluate(() => {
    const t = document.getElementById('tutLessonTitle');
    const panel = document.querySelector('.chat-panel');
    const panelR = panel.getBoundingClientRect();
    const tr = t.getBoundingClientRect();
    const cs = getComputedStyle(t);
    const isEllipsized = t.scrollWidth > t.clientWidth;
    const panelOverflowX = panel.scrollWidth > panel.clientWidth + 1;
    const docOverflowX = document.documentElement.scrollWidth > window.innerWidth + 1;
    const header = panel.querySelector(':scope > div.flex.items-center');
    const hr = header.getBoundingClientRect();
    const om = document.getElementById('onboardingModal');
    const modalHidden = !om || getComputedStyle(om).display === 'none';
    return {
      titleFont: cs.fontFamily.split(',')[0],
      titleSize: cs.fontSize, titleWeight: cs.fontWeight,
      titleWrapped: tr.height > cs.lineHeight ? 'yes' : 'no',
      titleH: Math.round(tr.height),
      titleText: t.textContent,
      ellipsized: isEllipsized,
      titleRightGap: Math.round(panelR.right - tr.right),
      titleLeftGap: Math.round(tr.left - panelR.left),
      panelOverflowX, docOverflowX, headerH: Math.round(hr.height),
      panelW: Math.round(panelR.width), modalHidden
    };
  });
  console.log('[' + label + ' ' + theme + '] title font=' + m.titleFont + ' size=' + m.titleSize + ' w=' + m.titleWeight);
  console.log('  onboardingModal hidden=' + m.modalHidden);
  console.log('  wrapped=' + m.titleWrapped + ' ellipsized=' + m.ellipsized + ' text="' + m.titleText + '"');
  console.log('  gaps left=' + m.titleLeftGap + ' right=' + m.titleRightGap + ' (panel ' + m.panelW + 'px)');
  console.log('  overflow panelX=' + m.panelOverflowX + ' docX=' + m.docOverflowX + ' headerH=' + m.headerH);

  if (width >= 1000) {
    const clip = await page.evaluate(() => {
      const panel = document.querySelector('.chat-panel');
      const r = panel.getBoundingClientRect();
      return { x: Math.max(0, Math.round(r.x - 8)), y: Math.max(0, Math.round(r.y)), width: Math.min(1280, Math.round(r.width + 16)), height: Math.min(420, 900) };
    });
    await page.screenshot({ path: path.join(SCRATCH, 'header-' + theme + '.png'), clip });
    console.log('  screenshot: header-' + theme + '.png');
  } else {
    await page.screenshot({ path: path.join(SCRATCH, 'header-mobile-' + label + '-' + theme + '.png') });
    console.log('  screenshot: header-mobile-' + label + '-' + theme + '.png');
  }
  console.log('  page errors: ' + (errors.length ? errors.join(' | ') : '0'));
  await page.close();
  return m;
}

(async () => {
  const browser = await launch();
  const runs = [];
  runs.push(await run(browser, 'dark', 1280, 'desktop'));
  runs.push(await run(browser, 'light', 1280, 'desktop'));
  runs.push(await run(browser, 'dark', 375, 'mobile'));
  runs.push(await run(browser, 'light', 375, 'mobile'));
  runs.push(await run(browser, 'dark', 320, 'narrow'));
  await browser.close();

  // v126 expectations: serif font, ~19px/700 on desktop, never wraps/ellipsizes
  // badly, no horizontal overflow, onboarding modal hidden.
  let ok = true;
  for (const r of runs) {
    if (!r) { ok = false; continue; }
    if (r.modalHidden !== true) ok = false;
    if (r.titleFont.indexOf('Noto Serif SC') === -1) { console.log('  FAIL: title not serif (' + r.titleFont + ')'); ok = false; }
    if (r.titleSize !== '19px' || r.titleWeight !== '700') { console.log('  FAIL: title size/weight ' + r.titleSize + '/' + r.titleWeight); ok = false; }
    if (r.titleWrapped === 'yes' || r.ellipsized) { console.log('  FAIL: title wrapped/ellipsized'); ok = false; }
    if (r.panelOverflowX || r.docOverflowX) { console.log('  FAIL: horizontal overflow'); ok = false; }
    if (r.titleLeftGap < 0 || r.titleRightGap < 0) { console.log('  FAIL: title sticks out of panel'); ok = false; }
  }
  console.log('HEADER ALL:' + (ok ? ' PASS' : ' FAIL'));
  process.exit(ok ? 0 : 1);
})().catch(e => { console.error('FATAL', e); process.exit(1); });