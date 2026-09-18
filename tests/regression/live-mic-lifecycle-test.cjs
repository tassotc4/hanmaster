'use strict';
// v131 live-capture lifecycle gate:
//  1. Live mode keeps ONE mic stream across turns — getUserMedia must NOT be
//     called again for turn 2 (fresh acquisition costs 74ms-1s and clipped the
//     first syllables of the user's reply: the "去﹐ 。" head-truncation bug).
//  2. The "Recording... speak now" hint must NOT render before
//     MediaRecorder.start() (honest state — used to invite speech during
//     device warm-up).
//  3. Flat per-level capture limits: silence 1700/1700/2000/2400ms for
//     never/beginner/intermediate/advanced; cap 10000ms (15000 advanced).
//  4. releaseLiveMicStream() actually ends the tracks.
// Uses Chrome's fake audio device (periodic beep) so no real mic is needed.
const path = require('path');
const { launch, buildPreload, BASE, waitFor, SCRATCH, LAUNCH_ARGS } = require('../helpers/bootstrap.cjs');

(async () => {
  const browser = await launch({
    args: [...LAUNCH_ARGS, '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });

  // Count every getUserMedia the app makes.
  await page.evaluateOnNewDocument(() => {
    const gum = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    window.__gumCalls = 0;
    navigator.mediaDevices.getUserMedia = (c) => { window.__gumCalls++; return gum(c); };
  });
  await page.evaluateOnNewDocument(buildPreload({ theme: 'dark', mode: 'live', level: 'advanced', extra: { voice_mode: 'off' } }));
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));

  const results = [];
  const check = (name, ok, detail) => { results.push({ name, ok, detail }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); };

  await page.goto(BASE + '/app.html', { waitUntil: 'load', timeout: 60000 });
  await new Promise(r => setTimeout(r, 2000));
  await page.evaluate(() => { try { navTo('/app/tutor'); } catch (e) {} });
  await new Promise(r => setTimeout(r, 700));
  await page.evaluate(() => { try { skipOnboarding(); } catch (e) {} });

  // Force the recording path (SpeechRecognition unavailable in headless anyway).
  await page.evaluate(() => { window._useAudioFallback = true; localStorage.setItem('tutor_mode', 'live'); });

  // --- Turn 1 -------------------------------------------------------------
  const gumBefore = await page.evaluate(() => window.__gumCalls);
  const hintImmediately = await page.evaluate(() => {
    startAudioRecording(document.getElementById('tutMic'), document.getElementById('tutMicIc'));
    return document.getElementById('tutHint').textContent;
  });
  check('hint is honest before capture opens (not "speak now")',
    !/speak now/i.test(hintImmediately), JSON.stringify(hintImmediately).slice(0, 60));

  const recOpened = await waitFor(page, () => /Recording.*speak now/i.test(document.getElementById('tutHint').textContent), 15000);
  check('turn 1: recorder opened and hint switched to "speak now"', recOpened);
  check('turn 1: live stream stored and active', await page.evaluate(() => !!(liveMicStream && liveMicStream.active)));

  // Screenshot of the honest hint while capture is actually open.
  const clip = await page.evaluate(() => {
    const r = document.getElementById('tutHint').getBoundingClientRect();
    return { x: Math.max(0, r.left - 12), y: Math.max(0, r.top - 8), w: Math.min(r.width + 24, 1280 - Math.max(0, r.left - 12)), h: r.height + 16 };
  });
  if (clip && clip.h > 0) {
    await page.screenshot({ path: path.join(SCRATCH, 'v131-recording-hint.png'), clip: { x: Math.round(clip.x), y: Math.round(clip.y), width: Math.round(clip.w), height: Math.round(clip.h) } });
    console.log('SCREENSHOT: v131-recording-hint.png');
  }

  await new Promise(r => setTimeout(r, 1500)); // let the fake beep register speech
  const gumAfterTurn1Start = await page.evaluate(() => window.__gumCalls);

  // Stop turn 1 like a user pause would.
  await page.evaluate(() => startAudioRecording(document.getElementById('tutMic'), document.getElementById('tutMicIc')));
  await new Promise(r => setTimeout(r, 2500)); // onstop + (maybe) transcription
  const streamAliveAfterStop = await page.evaluate(() => !!(liveMicStream && liveMicStream.active));
  check('stream survives turn 1 stop (kept for live mode)', streamAliveAfterStop);

  // --- Turn 2: must NOT re-acquire ----------------------------------------
  await page.evaluate(() => startAudioRecording(document.getElementById('tutMic'), document.getElementById('tutMicIc')));
  const rec2Opened = await waitFor(page, () => /Recording.*speak now/i.test(document.getElementById('tutHint').textContent), 15000);
  check('turn 2: recorder re-opened on the SAME stream', rec2Opened);
  const gumNow = await page.evaluate(() => window.__gumCalls);
  check('turn 2 caused ZERO new getUserMedia calls', gumNow === gumAfterTurn1Start,
    'gum calls: baseline=' + gumBefore + ' afterT1=' + gumAfterTurn1Start + ' afterT2=' + gumNow);

  // --- Per-level limits ----------------------------------------------------
  const limits = await page.evaluate(() => {
    const out = {};
    for (const lvl of ['never', 'beginner', 'intermediate', 'advanced']) {
      localStorage.setItem('chinese_level', lvl);
      out[lvl] = { silence: liveSilenceMs(), cap: liveCapMs() };
    }
    return out;
  });
  check('limits: never = 1700ms / 10s', limits.never.silence === 1700 && limits.never.cap === 10000, JSON.stringify(limits.never));
  check('limits: beginner = 1700ms / 10s', limits.beginner.silence === 1700 && limits.beginner.cap === 10000, JSON.stringify(limits.beginner));
  check('limits: intermediate = 2000ms / 10s', limits.intermediate.silence === 2000 && limits.intermediate.cap === 10000, JSON.stringify(limits.intermediate));
  check('limits: advanced = 2400ms / 15s', limits.advanced.silence === 2400 && limits.advanced.cap === 15000, JSON.stringify(limits.advanced));

  // --- Release --------------------_---------------------------------------
  await page.evaluate(() => {
    startAudioRecording(document.getElementById('tutMic'), document.getElementById('tutMicIc')); // stop turn 2
    releaseLiveMicStream();
  });
  const released = await page.evaluate(() => liveMicStream === null);
  check('releaseLiveMicStream() clears and ends the stream', released);

  console.log('PAGE ERRORS (informational, transcription of fake beep may 400): ' + (errors.length ? errors.join(' | ') : '0'));
  await browser.close();
  const fails = results.filter(r => !r.ok).length;
  console.log(fails ? 'RESULT: FAIL (' + fails + ' checks)' : 'RESULT: PASS (' + results.length + ' checks)');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
