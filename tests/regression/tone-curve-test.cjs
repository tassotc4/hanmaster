'use strict';
const path = require('path');
const { launch, bootTutor, waitFor, SCRATCH } = require('../helpers/bootstrap.cjs');

(async () => {
  const browser = await launch();
  const errors = [];
  const results = [];

  for (const w of [1280, 375, 320]) {
    const boot = await bootTutor(browser, { theme: 'dark', mode: 'static', width: w, height: 900, extra: { voice_mode: 'off' } });
    errors.push(...boot.errors);
    const page = boot.page;
    await waitFor(page, () => !!document.getElementById('tutToneCurve'), 15000);
    await new Promise(r => setTimeout(r, 2500));

    const m = await page.evaluate((vw) => {
      const panel = document.querySelector('.chat-panel');
      const pr = panel.getBoundingClientRect();
      const tc = document.getElementById('tutToneCurve');
      const tr = tc.getBoundingClientRect();
      const overflowPx = Math.round(tr.right - pr.right);
      const panelOverflow = panel.scrollWidth - panel.clientWidth;

      // Render: draw a real tutor curve, then inspect the SVG contents.
      drawTutorToneCurve('nǐ hǎo');
      const svg = tc.querySelector('svg');
      const path = svg.querySelector('.tone-curve-tutor');
      const grid = svg.querySelector('.tone-curve-grid');
      const defs = svg.querySelectorAll('linearGradient[id],radialGradient[id]');
      const gradIds = Array.from(defs).map(d => d.id);
      const vb = svg.getAttribute('viewBox');
      const hasPathData = !!(path && path.getAttribute('d') && path.getAttribute('d').trim().length > 5);

      // Animation: .active must resolve real keyframes on svg + curves.
      tc.classList.add('active');
      const svgAnim = getComputedStyle(svg).animationName;
      const tutorAnim = path ? getComputedStyle(path).animationName : '';
      const hasGradients = gradIds.includes('studentGrad') && gradIds.includes('aiGrad');
      return {
        w: vw, overflowPx, panelOverflow,
        boxW: Math.round(tr.width), boxH: Math.round(tr.height),
        svgVB: vb, hasPathData, hasGrid: !!grid, hasGradients, gradIds,
        svgAnim, tutorAnim
      };
    }, w);
    results.push(m);
    console.log('[' + w + '] overflow=' + m.overflowPx + 'px panelScrollOverflow=' + m.panelOverflow + ' box=' + m.boxW + 'x' + m.boxH);
    console.log('  render: viewBox="' + m.svgVB + '" pathData=' + m.hasPathData + ' grid=' + m.hasGrid + ' gradients=' + JSON.stringify(m.gradIds) + ' (' + m.hasGradients + ')');
    console.log('  animation: active svg={' + (m.svgAnim || '(none)') + '} tutor={' + (m.tutorAnim || '(none)') + '}');
    if (w === 1280) {
      await page.screenshot({ path: path.join(SCRATCH, 'tone-curve-desktop.png') });
      console.log('  screenshot: tone-curve-desktop.png');
    }
    await page.close();
  }

  let ok = true;
  for (const m of results) {
    if (m.overflowPx > 1 || m.panelOverflow > 1) ok = false;
    if (!m.svgVB || m.svgVB.split(' ').length !== 4) ok = false;
    if (!m.hasPathData || !m.hasGrid || !m.hasGradients) ok = false;
    if (!m.svgAnim || !m.tutorAnim) ok = false;
  }
  console.log('  page errors: ' + (errors.length ? errors.join(' | ') : '0'));
  await browser.close();
  if (!ok) { console.log('TONE-CURVE: FAIL (see above)'); process.exit(1); }
  console.log('TONE-CURVE: PASS');
  process.exit(0);
})().catch(e => { console.error('FATAL', e); process.exit(1); });