'use strict';
// v136 gate: native-language translation replay.
//  A. Study bubble renders a translation replay button wired to the tr slot.
//  B. Live bubble renders the same (canned /api/chat reply).
//  C. speak() without a lang keeps requesting lang=zh-CN (Chinese surfaces
//     unchanged); with a lang it requests that lang.
//  D. speakTr voices the slot text in getTtsLangCode()'s language and skips
//     BOTH placeholder states (pending + failed, localized via t()).
//  E. getTtsLangCode() follows getTutorLangName() (mic zh-CN + UI es -> es-ES).
const { launch, bootTutor, buildPreload, BASE, waitFor, SCRATCH, LAUNCH_ARGS } = require('../helpers/bootstrap.cjs');
const path = require('path');

(async () => {
  const browser = await launch();
  const results = [];
  const check = (name, ok, detail) => { results.push({ name, ok }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); };

  const ttsCalls = [];
  const newTrackedPage = async (opts) => {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
    await page.setRequestInterception(true);
    page.on('request', req => {
      const url = req.url();
      if (url.includes('/api/tts')) {
        const lm = url.match(/[?&]lang=([^&]+)/);
        const tm = url.match(/[?&]text=([^&]+)/);
        ttsCalls.push({ lang: lm ? decodeURIComponent(lm[1]) : '?', text: tm ? decodeURIComponent(tm[1]).slice(0, 40) : '?' });
        // tiny dummy mp3 so the client cache/decode path proceeds harmlessly
        req.respond({ status: 200, contentType: 'audio/mpeg', body: Buffer.from('SUQzBAAAAAAAI1RTU0AAAAPAAABTGF2Zj_QUAAAAAQAAAAs' + 'A'.repeat(2048), 'binary') });
        return;
      }
      if (url.includes('/api/chat')) {
        let body = {};
        try { body = JSON.parse(req.postData() || '{}'); } catch (e) {}
        const sys = body.systemInstruction || '';
        const isConversation = /You are Li Laoshi/.test(sys);
        req.respond({ status: 200, contentType: 'application/json', body: JSON.stringify({ candidates: [{ content: { parts: [{ text: isConversation ? '非常好。\n\nEnglish: Very good.' : 'TR-X' }] } }] }) });
        return;
      }
      req.continue();
    });
    await page.evaluateOnNewDocument(buildPreload({ theme: 'dark', mode: (opts && opts.mode) || 'static', level: 'beginner', extra: { voice_mode: 'off' } }));
    await page.goto(BASE + '/app.html', { waitUntil: 'load', timeout: 60000 });
    await new Promise(r => setTimeout(r, 1500));
    return page;
  };

  // --- A. Study bubble: two replay spans, second wired to the tr slot id ---
  let page = await newTrackedPage({ mode: 'static' });
  await page.evaluate(() => { try { navTo('/app/tutor'); } catch (e) {} });
  await page.evaluate(() => { try { skipOnboarding(); } catch (e) {} });
  await page.evaluate(() => { try { startTutor(0); } catch (e) {} });
  await waitFor(page, () => document.querySelectorAll('#tutChat .cai').length > 0, 15000);
  await new Promise(r => setTimeout(r, 500));
  const study = await page.evaluate(() => {
    const last = document.querySelectorAll('#tutChat .cai')[document.querySelectorAll('#tutChat .cai').length - 1];
    const spans = last ? Array.from(last.querySelectorAll('span.replay')) : [];
    const tr = last ? last.querySelector('.tr') : null;
    return {
      replayCount: spans.length,
      secondOnclick: spans[1] ? spans[1].getAttribute('onclick') : '',
      trId: tr ? tr.id : '',
      cnOnclick: spans[0] ? spans[0].getAttribute('onclick') : ''
    };
  });
  check('A. study bubble: 2 replay buttons, 2nd wired via speakTr to the tr slot',
    study.replayCount === 2 && /speakTr\('/.test(study.secondOnclick) && study.secondOnclick.indexOf(study.trId) !== -1 && /speak\('/.test(study.cnOnclick),
    JSON.stringify(study));

  // --- C. speak() without lang -> zh-CN; with lang -> that lang ---
  const n0 = ttsCalls.length;
  await page.evaluate(() => speak('你好'));
  await new Promise(r => setTimeout(r, 400));
  const zh = ttsCalls.slice(n0).filter(c => c.lang === 'zh-CN' && c.text === '你好').length;
  check('C1. speak(text) without lang still requests zh-CN', zh === 1, 'zh-CN calls=' + zh);
  const n1 = ttsCalls.length;
  await page.evaluate(() => speak('Привет', 1.0, 'ru-RU'));
  await page.evaluate(() => speak('Xin chào', 1.0, 'vi-VN'));
  await new Promise(r => setTimeout(r, 400));
  const ru = ttsCalls.slice(n1).some(c => c.lang === 'ru-RU' && c.text === 'Привет');
  const vi = ttsCalls.slice(n1).some(c => c.lang === 'vi-VN' && c.text === 'Xin chào');
  check('C2. speak(text, rate, lang) requests that lang (ru-RU, vi-VN)', ru && vi, 'ru=' + ru + ' vi=' + vi);

  // --- D+E. speakTr: placeholder skip + correct language via UI lang ---
  await page.evaluate(() => {
    changeAppLanguage('es');
    const holder = document.createElement('div');
    holder.id = 'probe-slot';
    document.body.appendChild(holder);
  });
  await new Promise(r => setTimeout(r, 800));
  const n2 = ttsCalls.length;
  await page.evaluate(() => {
    const el = document.getElementById('probe-slot');
    el.innerText = t('Translating...');
    speakTr('probe-slot');
    el.innerText = t('(translation unavailable)');
    speakTr('probe-slot');
    el.innerText = 'Hola, ¿cómo estás?';
    speakTr('probe-slot');
  });
  await new Promise(r => setTimeout(r, 500));
  const spoke = ttsCalls.slice(n2);
  check('D. speakTr skips both localized placeholders, voices real text only',
    spoke.length === 1 && spoke[0].text === 'Hola, ¿cómo estás?', JSON.stringify(spoke));
  check('E. speakTr voices in UI language (es -> es-ES)',
    spoke.length === 1 && spoke[0].lang === 'es-ES', 'lang=' + (spoke[0] && spoke[0].lang));
  await page.evaluate(() => { changeAppLanguage('en'); });
  await new Promise(r => setTimeout(r, 500));

  // --- B. Live bubble: translation replay button wired to botTrId ---
  page = await newTrackedPage({ mode: 'live' });
  await page.evaluate(() => { try { navTo('/app/tutor'); } catch (e) {} });
  await new Promise(r => setTimeout(r, 1500));
  const cai = await page.evaluate(() => document.querySelectorAll('#tutChat .cai').length);
  await page.evaluate(() => sendToGemini('随便聊聊'));
  await waitFor(page, () => document.querySelectorAll('#tutChat .cai').length > cai, 15000);
  await waitFor(page, () => {
    const l = document.querySelectorAll('#tutChat .cai')[document.querySelectorAll('#tutChat .cai').length - 1];
    return l && l.querySelector('.tr') && (l.querySelector('.tr').innerText || '').indexOf('Very good') !== -1;
  }, 15000);
  const live = await page.evaluate(() => {
    const l = document.querySelectorAll('#tutChat .cai')[document.querySelectorAll('#tutChat .cai').length - 1];
    const spans = l ? Array.from(l.querySelectorAll('span.replay')) : [];
    const tr = l ? l.querySelector('.tr') : null;
    return { count: spans.length, onclicks: spans.map(s => s.getAttribute('onclick')), trId: tr ? tr.id : '', trText: tr ? tr.innerText : '' };
  });
  const trBtn = live.onclicks.find(o => /speakTr\('/.test(o || ''));
  check('B. live bubble: translation replay button wired to the bot tr slot',
    !!trBtn && trBtn.indexOf(live.trId) !== -1 && live.trText.indexOf('Very good') !== -1,
    JSON.stringify(live).slice(0, 200));

  await browser.close();
  const fails = results.filter(r => !r.ok).length;
  console.log(fails ? 'RESULT: FAIL (' + fails + ')' : 'RESULT: PASS (' + results.length + ' checks)');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
