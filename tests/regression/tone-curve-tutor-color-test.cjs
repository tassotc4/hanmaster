// Tone-curve tutor line recolor (v153): the tutor line was bright/neon cyan
// (idle var(--neon-cyan) #00f0ff + active hardcoded #66f0ff, CSS-styled) while
// the Tutor legend dot + the AI-difficulty badge + the replay links all use
// var(--blue). Recolored: idle -> var(--blue) (#4898D5 dark / #265F90 light),
// active -> #7fb5e8 (the lightened variant, preserving the idle->active
// brightening the recording-indicator design has; #00f0ff->#66f0ff pattern).
// Student/AI gradients (#3aff5c/#e8c26a, app.js ensureToneCurveGradients) and
// the curvePulse animation logic untouched.
const path = require('path');
const puppeteer = require('puppeteer-core');
const { launch, bootTutor, waitFor, SCRATCH } = require('../helpers/bootstrap.cjs');

let pass = true;
function check(name, ok, detail) {
  console.log((ok ? 'PASS' : 'FAIL') + ' ' + name + (detail ? ' — ' + detail : ''));
  if (!ok) pass = false;
}

(async () => {
  const fs = require('fs');
  const css = fs.readFileSync(path.join(__dirname, '..', '..', 'public', 'css', 'app.css'), 'utf8');

  // --- 1. Shipped-source checks (parse the actual CSS, no replica) ---
  const baseRule = css.match(/\.tone-curve-tutor \{[^}]*\}/);
  const activeRule = css.match(/\.tone-curve-wrap\.active \.tone-curve-tutor \{[^}]*\}/);
  check('1. the base + active tutor rules parsed from shipped app.css', !!(baseRule && activeRule));
  check('1. the base stroke is var(--blue) (not neon cyan)',
    baseRule && baseRule[0].includes('stroke: var(--blue)') && !baseRule[0].includes('neon-cyan'),
    baseRule && baseRule[0].slice(0, 90));
  check('1. the base drop-shadow uses the blue rgb(72,152,213)',
    baseRule && baseRule[0].includes('rgba(72,152,213,.5)'), '');
  check('1. the active stroke is the lightened variant #7fb5e8 (not #66f0ff)',
    activeRule && activeRule[0].includes('stroke: #7fb5e8') && !activeRule[0].includes('#66f0ff'),
    activeRule && activeRule[0].slice(0, 90));
  check('1. the active drop-shadow uses the blue rgb + the animation timing UNTOUCHED',
    activeRule && activeRule[0].includes('rgba(72,152,213,.9)') &&
    activeRule[0].includes('animation: curvePulse 0.6s ease-in-out infinite alternate'), '');
  const studentRule = css.match(/\.tone-curve-student \{[^}]*\}/);
  const aiRule = css.match(/\.tone-curve-ai \{[^}]*\}/);
  check('1. the student/AI lines untouched (gradients, not the tutor blue)',
    studentRule && studentRule[0].includes('stroke: url(#studentGrad)') &&
    aiRule && aiRule[0].includes('stroke: url(#aiGrad)'), '');
  const js = fs.readFileSync(path.join(__dirname, '..', '..', 'public', 'js', 'app.js'), 'utf8');
  check('1. the JS gradients unchanged (#3aff5c/#e8c26a)',
    js.includes("grad('studentGrad', '#3aff5c')") && js.includes("grad('aiGrad', '#e8c26a')"), '');

  // --- 2. In-page computed styles, both themes ---
  const browser = await launch();
  const { page } = await bootTutor(browser, { width: 1440, height: 900, abortApi: 'tts' });
  await waitFor(page, () => !!document.querySelector('.tone-curve-tutor'), 15000);

  // Redraw the tutor line via the app's own draw path so it is guaranteed visible.
  await page.evaluate(() => { if (typeof drawTutorToneCurve === 'function') drawTutorToneCurve('nǐ hǎo ma'); });
  await waitFor(400);

  const dark = await page.evaluate(() => {
    const el = document.querySelector('.tone-curve-tutor');
    const wrap = document.querySelector('.tone-curve-wrap');
    const cs = el ? getComputedStyle(el) : null;
    const theme = document.documentElement.classList.contains('theme-light') ? 'light' : 'dark';
    return {
      theme,
      stroke: cs ? cs.stroke : null,
      drawn: !!(el && el.getTotalLength && el.getTotalLength() > 0),
      wrapActive: wrap ? wrap.classList.contains('active') : false,
      anim: cs ? cs.animationName : null
    };
  });
  check('2. dark theme: the tutor line stroke computes to the blue #4898D5',
    dark.theme === 'dark' && /rgb\(72,\s*152,\s*213\)/.test(dark.stroke), JSON.stringify(dark).slice(0, 200));
  check('2. the line is actually DRAWN and visible', dark.drawn, 'len>0');

  // The active state (the recording indicator): the wrap gains .active -> the
  // lightened stroke + the pulse animation preserved.
  await page.evaluate(() => { document.querySelector('.tone-curve-wrap').classList.add('active'); });
  await waitFor(300);
  const activeState = await page.evaluate(() => {
    const el = document.querySelector('.tone-curve-tutor');
    const cs = getComputedStyle(el);
    return { stroke: cs.stroke, anim: cs.animationName, stillDrawn: el.getTotalLength() > 0 };
  });
  check('2. active state: the stroke lightens to #7fb5e8 and curvePulse still runs',
    /rgb\(127,\s*181,\s*232\)/.test(activeState.stroke) && activeState.anim === 'curvePulse' && activeState.stillDrawn,
    JSON.stringify(activeState));
  check('2. active: dark screenshot with the line drawn',
    true, 'capturing');
  await page.screenshot({ path: path.join(SCRATCH, 'v153-tone-curve-dark.png') });
  console.log('SCREENSHOT: v153-tone-curve-dark.png');

  // --- 3. Light theme ---
  await page.evaluate(() => { document.querySelector('.tone-curve-wrap').classList.remove('active'); });
  await page.evaluate(() => { localStorage.setItem('hsk_theme', 'light'); document.documentElement.classList.add('theme-light'); });
  await waitFor(400);
  const light = await page.evaluate(() => {
    const el = document.querySelector('.tone-curve-tutor');
    const cs = getComputedStyle(el);
    const theme = document.documentElement.classList.contains('theme-light') ? 'light' : 'dark';
    return { theme, stroke: cs.stroke, drawn: el.getTotalLength() > 0 };
  });
  check('3. light theme: the tutor line stroke computes to the blue #265F90',
    light.theme === 'light' && /rgb\(38,\s*95,\s*144\)/.test(light.stroke), JSON.stringify(light).slice(0, 200));
  await page.screenshot({ path: path.join(SCRATCH, 'v153-tone-curve-light.png') });
  console.log('SCREENSHOT: v153-tone-curve-light.png');

  // --- 4. The legend dot already var(--blue) (unchanged by this fix) ---
  const dot = await page.evaluate(() => {
    const span = document.querySelector('#tutToneLegend span i');
    return span ? getComputedStyle(span).color : null;
  });
  check('4. the Tutor legend dot uses var(--blue) in the light theme (confirm, no change needed)',
    /rgb\(38,\s*95,\s*144\)/.test(dot), 'dot=' + dot);

  await browser.close();
  console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL');
  process.exit(pass ? 0 : 1);
})().catch(e => { console.error('FATAL', e.message); process.exit(1); });
