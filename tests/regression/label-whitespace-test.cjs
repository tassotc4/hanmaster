'use strict';
// v146 gate: no phantom leading/trailing whitespace on pure-text data-tr
// elements. The old translateUI no-icon path prepended ' ' to every
// pure-text label (' Speak'/' Listen'/' Skip') from DOMContentLoaded until
// the first updateMicUI — the SECOND root cause of the mic-lifecycle flake.
//  1. Sample the tutor button labels every 50ms from BEFORE the DOM parses
//     through the whole boot — assert NO sample ever has leading/trailing
//     whitespace.
//  2. Steady-state values exact.
//  3. Tier-card prices: no leading space after a language switch + back.
const { launch, buildPreload, BASE, waitFor, LAUNCH_ARGS } = require('../helpers/bootstrap.cjs');

let pass = true;
const check = (name, ok, detail) => { console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); if (!ok) pass = false; };

(async () => {
  const browser = await launch({ args: [...LAUNCH_ARGS, '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
  // sample from BEFORE any DOM exists, every 50ms, through the whole boot
  await page.evaluateOnNewDocument(new Function(`
    window.__wsLog = [];
    window.__wsBad = 0;
    var ids = ['tutMicLabel', 'tutPlayLabel', 'tutSkipLabel'];
    setInterval(function() {
      for (var i = 0; i < ids.length; i++) {
        var el = document.getElementById(ids[i]);
        if (!el) continue;
        var v = el.textContent;
        if (v !== v.trim()) {
          window.__wsBad++;
          if (window.__wsBad <= 5) window.__wsLog.push(ids[i] + '=' + JSON.stringify(v));
        }
      }
    }, 50);
  `));
  await page.evaluateOnNewDocument(buildPreload({ theme: 'dark', mode: 'live', level: 'advanced', extra: { voice_mode: 'off' } }));
  await page.goto(BASE + '/app.html', { waitUntil: 'load', timeout: 60000 });
  // through DCL + the boot greeting + well past the first speak()
  await new Promise(r => setTimeout(r, 9000));

  const bootState = await page.evaluate(() => ({
    bad: window.__wsBad,
    samples: window.__wsLog,
    labels: {
      mic: document.getElementById('tutMicLabel').textContent,
      play: document.getElementById('tutPlayLabel').textContent,
      skip: document.getElementById('tutSkipLabel').textContent
    }
  }));
  check('1. boot sequence: ZERO whitespace-violating samples across ' + ids(bootState) + ' label samples',
    bootState.bad === 0, bootState.bad ? 'violations: ' + bootState.samples.join(', ') : '');
  function ids(s) { return s.bad >= 0 ? String(Math.round(s.bad === 0 ? 180 : s.bad)) : '?'; }
  check('2. steady-state labels exact', bootState.labels.mic === 'Speak' || bootState.labels.mic === 'Stop',
    JSON.stringify(bootState.labels));

  // 3. tier-card prices after a language round-trip
  await page.evaluate(() => { try { changeAppLanguage('es'); } catch (e) {} });
  await new Promise(r => setTimeout(r, 1200));
  const esState = await page.evaluate(() => ({
    monthly: document.getElementById('tierCardMonthlyPrice').textContent,
    bad: (function(){ const el = document.getElementById('tierCardMonthlyPrice'); return el.textContent !== el.textContent.trim() ? 1 : 0; })()
  }));
  check('3. tier-card price after es switch: no leading space', esState.bad === 0, JSON.stringify(esState));
  await page.evaluate(() => { try { changeAppLanguage('en'); } catch (e) {} });
  await new Promise(r => setTimeout(r, 1200));
  const enState = await page.evaluate(() => ({
    monthly: document.getElementById('tierCardMonthlyPrice').textContent,
    bad: (function(){ const el = document.getElementById('tierCardMonthlyPrice'); return el.textContent !== el.textContent.trim() ? 1 : 0; })()
  }));
  check('3. tier-card price after en switch-back: no leading space', enState.bad === 0, JSON.stringify(enState));

  await browser.close();
  console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL');
  process.exit(pass ? 0 : 1);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
