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

  // ================= v139: mixed-reply sequencing (Part A ii) =================
  // Boot is QUIET via a restore seed (v135 handshake suppresses the boot
  // topic-greeting), so every observed call belongs to the test's own turn.
  // Asserted via page SPIES (speak/speakViaAPI/tutSpeak with timestamps) —
  // the consume is a CACHE HIT (invisible in the /api/tts request log), and
  // the prefetch legitimately precedes the phrase.
  const MIXED = '你好！很高兴认识你。\n\nEnglish: Nice to meet you!';
  const SEED = {
    v: 1, rv: 1, mode: 'live', level: 'beginner',
    history: [
      { role: 'user', parts: [{ text: '我很好，谢谢！' }] },
      { role: 'model', parts: [{ text: '太好了！English: Great!' }] }
    ],
    chatHtml: '<div class="cb cai"><div class="phrase">太好了！</div></div>'
  };
  const seqPage = async (lastInput, replyText) => {
    const p2 = await browser.newPage();
    await p2.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
    const calls = [];
    await p2.setRequestInterception(true);
    p2.on('request', req => {
      const url = req.url();
      if (url.includes('/api/tts')) {
        const lm = url.match(/[?&]lang=([^&]+)/);
        const tm = url.match(/[?&]text=([^&]+)/);
        calls.push({ t: Date.now(), lang: lm ? decodeURIComponent(lm[1]) : '?', text: tm ? decodeURIComponent(tm[1]).slice(0, 30) : '?' });
        req.respond({ status: 200, contentType: 'audio/mpeg', body: Buffer.from('SUQzBAAAAAAAI1RTU0AAAAPAAABTGF2Zj_QUAAAAAQAAAAs' + 'A'.repeat(2048), 'binary') });
        return;
      }
      if (url.includes('/api/chat')) {
        req.respond({ status: 200, contentType: 'application/json', body: JSON.stringify({ candidates: [{ content: { parts: [{ text: replyText || MIXED }] } }] }) });
        return;
      }
      req.continue();
    });
    await p2.evaluateOnNewDocument(buildPreload({ theme: 'dark', mode: 'live', level: 'beginner', extra: { voice_mode: 'off' } }));
    await p2.evaluateOnNewDocument(new Function(`
      localStorage.setItem('__testChatSeed', ${JSON.stringify(JSON.stringify(SEED))});
    `));
    await p2.goto(BASE + '/app.html', { waitUntil: 'load', timeout: 60000 });
    await new Promise(r => setTimeout(r, 1800));
    await waitFor(p2, () => window._chatRestored === true, 10000);
    await p2.evaluate(() => { try { navTo('/app/tutor'); } catch (e) {} });
    await new Promise(r => setTimeout(r, 1000));
    // spies: speak / speakViaAPI / tutSpeak with timestamps
    await p2.evaluate((src) => {
      window.__seqLog = [];
      window.__tutSpeakCalls = 0;
      const oS = speak;
      speak = function (t, rate, lang) { window.__seqLog.push({ ev: 'speak', ts: Date.now(), text: String(t).slice(0, 24), lang: lang || 'zh-default' }); return oS.apply(this, arguments); };
      const oA = speakViaAPI;
      speakViaAPI = function (text, lang, rate) { window.__seqLog.push({ ev: 'viaAPI', ts: Date.now(), text: String(text).slice(0, 24), lang: lang || 'zh-default' }); return oA.apply(this, arguments); };
      const oT = tutSpeak;
      tutSpeak = function () { window.__tutSpeakCalls++; window.__seqLog.push({ ev: 'MIC-OPEN (tutSpeak)', ts: Date.now() }); return oT.apply(this, arguments); };
      window._lastUserInputSource = src;
    }, lastInput);
    return { p2, calls };
  };

  // --- F1. Voice path: phrase -> translation -> mic opens only after both ---
  let { p2, calls } = await seqPage('voice');
  const caiSeq = await p2.evaluate(() => document.querySelectorAll('#tutChat .cai').length);
  await p2.evaluate(() => sendToGemini('你好呀'));
  await waitFor(p2, () => document.querySelectorAll('#tutChat .cai').length > caiSeq, 15000);
  await new Promise(r => setTimeout(r, 9000)); // full sequence: phrase + consume + translation + settle + mic
  const f1 = await p2.evaluate(() => ({ log: window.__seqLog, speakCalls: window.__tutSpeakCalls, queue: window._ttsQueueTr ? 'still set' : null }));
  const phraseSpeak = f1.log.find(e => e.ev === 'speak');
  const consume = f1.log.find(e => e.ev === 'viaAPI' && e.text.indexOf('Nice to meet') !== -1);
  const micOpen = f1.log.find(e => e.ev.indexOf('MIC-OPEN') === 0);
  const prefetchReq = calls.some(c => c.lang === 'en-US' && c.text.indexOf('Nice to meet') !== -1);
  const phraseReq = calls.some(c => c.lang === 'zh-CN' && c.text.indexOf('你好') !== -1);
  check('F1. voice mixed reply: phrase speak() ran, then consume, then mic — in order',
    !!phraseSpeak && !!consume && !!micOpen && phraseSpeak.ts < consume.ts && consume.ts < micOpen.ts,
    JSON.stringify(f1.log.map(e => e.ev + '@' + (e.ts % 100000))).slice(0, 200));
  check('F1. mic opened exactly once, queue consumed, prefetch + phrase requests seen',
    f1.speakCalls === 1 && f1.queue === null && prefetchReq && phraseReq,
    'speakCalls=' + f1.speakCalls + ' queue=' + f1.queue + ' prefetch=' + prefetchReq + ' phraseReq=' + phraseReq);

  // --- F2. Typed path: translation plays, NO mic ever ---
  ({ p2, calls } = await seqPage(null));
  const caiT = await p2.evaluate(() => document.querySelectorAll('#tutChat .cai').length);
  await p2.evaluate(() => sendToGemini('你好呀'));
  await waitFor(p2, () => document.querySelectorAll('#tutChat .cai').length > caiT, 15000);
  await new Promise(r => setTimeout(r, 8000));
  const f2 = await p2.evaluate(() => ({ log: window.__seqLog, speakCalls: window.__tutSpeakCalls, queue: window._ttsQueueTr ? 'still set' : null }));
  const consumeT = f2.log.find(e => e.ev === 'viaAPI' && e.text.indexOf('Nice to meet') !== -1);
  const anyMicT = f2.log.some(e => e.ev === 'MIC-OPEN');
  check('F2. typed mixed reply: translation consume ran, ZERO mic opens',
    !!consumeT && !anyMicT && f2.speakCalls === 0 && f2.queue === null,
    JSON.stringify(f2.log.map(e => e.ev + '@' + (e.ts % 100000))).slice(0, 200));

  // --- F2b. Malformed mid-line-label reply: the label must NEVER be voiced ---
  ({ p2, calls } = await seqPage('voice', '你好！很高兴认识你。English: Nice to meet you!'));
  const caiM = await p2.evaluate(() => document.querySelectorAll('#tutChat .cai').length);
  await p2.evaluate(() => sendToGemini('你好呀'));
  await waitFor(p2, () => document.querySelectorAll('#tutChat .cai').length > caiM, 15000);
  await new Promise(r => setTimeout(r, 9000));
  const f2b = await p2.evaluate(() => ({ log: window.__seqLog, queue: window._ttsQueueTr ? 'still set' : null }));
  const consumeM = f2b.log.find(e => e.ev === 'viaAPI' && e.text.indexOf('Nice to meet') !== -1);
  const labelVoiced = f2b.log.some(e => e.ev === 'viaAPI' && /English\s*:/.test(e.text));
  check('F2b. malformed label reply: consume strips the label, label never voiced',
    !!consumeM && !labelVoiced && consumeM.text.indexOf('English') === -1,
    JSON.stringify(f2b.log.map(e => e.ev + ':' + (e.text || '').slice(0, 20) + '@' + (e.ts % 100000))).slice(0, 250));

  // --- F3. Single-clip non-regression: Chinese-only reply (no translation) ---
  const singlePage = await browser.newPage();
  await singlePage.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
  const singleCalls = [];
  await singlePage.setRequestInterception(true);
  singlePage.on('request', req => {
    const url = req.url();
    if (url.includes('/api/tts')) {
      const lm = url.match(/[?&]lang=([^&]+)/);
      const tm = url.match(/[?&]text=([^&]+)/);
      singleCalls.push({ t: Date.now(), lang: lm ? decodeURIComponent(lm[1]) : '?', text: tm ? decodeURIComponent(tm[1]).slice(0, 30) : '?' });
      req.respond({ status: 200, contentType: 'audio/mpeg', body: Buffer.from('SUQzBAAAAAAAI1RTU0AAAAPAAABTGF2Zj_QUAAAAAQAAAAs' + 'A'.repeat(2048), 'binary') });
      return;
    }
    if (url.includes('/api/chat')) {
      // Chinese-ONLY reply: no translation line at all -> no queue, single clip
      req.respond({ status: 200, contentType: 'application/json', body: JSON.stringify({ candidates: [{ content: { parts: [{ text: '非常好！' }] } }] }) });
      return;
    }
    req.continue();
  });
  await singlePage.evaluateOnNewDocument(buildPreload({ theme: 'dark', mode: 'live', level: 'beginner', extra: { voice_mode: 'off' } }));
  await singlePage.evaluateOnNewDocument(new Function(`
    localStorage.setItem('__testChatSeed', ${JSON.stringify(JSON.stringify(SEED))});
  `));
  await singlePage.goto(BASE + '/app.html', { waitUntil: 'load', timeout: 60000 });
  await new Promise(r => setTimeout(r, 1800));
  await waitFor(singlePage, () => window._chatRestored === true, 10000);
  await singlePage.evaluate(() => { try { navTo('/app/tutor'); } catch (e) {} });
  await new Promise(r => setTimeout(r, 1000));
  await singlePage.evaluate(() => {
    window.__tutSpeakCalls = 0;
    const orig = tutSpeak;
    tutSpeak = function () { window.__tutSpeakCalls++; return orig.apply(this, arguments); };
    window._lastUserInputSource = 'voice';
  });
  const caiS = await singlePage.evaluate(() => document.querySelectorAll('#tutChat .cai').length);
  await singlePage.evaluate(() => sendToGemini('你好呀'));
  await waitFor(singlePage, () => document.querySelectorAll('#tutChat .cai').length > caiS, 15000);
  await new Promise(r => setTimeout(r, 7000));
  const singleState = await singlePage.evaluate(() => ({ speakCalls: window.__tutSpeakCalls, queue: window._ttsQueueTr ? 'still set' : null }));
  check('F3. Chinese-only reply: single clip, queue stays null, one mic open after it',
    singleState.speakCalls === 1 && singleState.queue === null && singleCalls.some(c => c.lang === 'zh-CN'),
    JSON.stringify(singleState) + ' ttsCalls=' + JSON.stringify(singleCalls));

  await p2.close();
  await singlePage.close();
  await browser.close();

  await browser.close();
  const fails = results.filter(r => !r.ok).length;
  console.log(fails ? 'RESULT: FAIL (' + fails + ')' : 'RESULT: PASS (' + results.length + ' checks)');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
