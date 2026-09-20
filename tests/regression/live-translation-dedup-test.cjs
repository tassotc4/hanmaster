'use strict';
// v134 gate: live-mode translation dedup (two mechanisms, ONE lookup path):
//  1. _liveTrCache persisted to localStorage ('tutor_live_tr_cache') with a
//     language stamp — repeat utterances stop re-calling /api/chat across
//     sessions and across punctuation variants.
//  2. The bot's own reply translation seeds the same cache (single-sentence
//     phrases only), so echoing the tutor's phrase costs zero extra calls.
// All /api/chat traffic is intercepted + canned. Translator calls are counted
// PER TEXT: the app legitimately fires other translator-shaped calls at boot
// and on language switch (aiTranslate for UI strings) — those are ignored.
const { launch, buildPreload, BASE, waitFor, LAUNCH_ARGS } = require('../helpers/bootstrap.cjs');

(async () => {
  const browser = await launch({
    args: [...LAUNCH_ARGS, '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });

  const trCalls = {}; // text -> count
  const family = (t) => t.replace(/[\s\u3000-\u303f\uff00-\uffef。！？!?，,、]/g, '');
  const famCount = (t) => Object.entries(trCalls).filter(([k]) => family(k) === family(t)).reduce((a, [, n]) => a + n, 0);
  const canned = (text) => ({ candidates: [{ content: { parts: [{ text }] } }] });
  const BOT_REPLY = '我很喜欢咖啡。\n\nEnglish: I really like coffee.';

  await page.setRequestInterception(true);
  page.on('request', req => {
    const url = req.url();
    if (url.includes('/api/chat')) {
      let body = {};
      try { body = JSON.parse(req.postData() || '{}'); } catch (e) {}
      const sys = body.systemInstruction || '';
      const txt = (body.contents && body.contents[0] && body.contents[0].parts && body.contents[0].parts[0] && body.contents[0].parts[0].text) || '';
      // NOTE: the CONVERSATION systemInstruction also contains the phrase
      // "professional translator" (baseRules line 2)! Discriminate by the
      // tutor persona marker instead.
      const isConversation = /You are Li Laoshi/.test(sys);
      if (!isConversation && /professional translator/i.test(sys)) {
        trCalls[txt] = (trCalls[txt] || 0) + 1;
        req.respond({ status: 200, contentType: 'application/json', body: JSON.stringify(canned('TR:' + txt)) });
      } else {
        conversationCalls++;
        req.respond({ status: 200, contentType: 'application/json', body: JSON.stringify(canned(BOT_REPLY)) });
      }
      return;
    }
    if (url.includes('/api/tts')) { req.abort(); return; }
    req.continue();
  });
  await page.evaluateOnNewDocument(buildPreload({ theme: 'dark', mode: 'live', level: 'beginner', extra: { voice_mode: 'off' } }));
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  const pageLog = [];
  page.on('console', m => { const tx = m.text() || ''; if (!/DevTools|favicon|Password field|banner/i.test(tx)) pageLog.push(tx.slice(0, 150)); });
  let conversationCalls = 0;

  const results = [];
  const check = (name, ok, detail) => { results.push({ name, ok }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); };

  const boot = async () => {
    await page.goto(BASE + '/app.html', { waitUntil: 'load', timeout: 60000 });
    await new Promise(r => setTimeout(r, 1500));
    await page.evaluate(() => { try { navTo('/app/tutor'); } catch (e) {} });
    await new Promise(r => setTimeout(r, 400));
    await page.evaluate(() => { try { skipOnboarding(); } catch (e) {} });
    // let the live-mode auto-greeting settle (it renders a canned reply + seeds)
    await waitFor(page, () => document.querySelectorAll('#tutChat .cai').length >= 1, 15000);
    await new Promise(r => setTimeout(r, 800));
  };
  await boot();

  // 1. First call fetches, caches.
  const v1 = await page.evaluate(() => translateToEnglish('今天天气很好'));
  check('first fetch: exactly 1 translator call for this text', famCount('今天天气很好') === 1, 'family calls=' + famCount('今天天气很好'));
  check('first fetch returns canned value', v1 === 'TR:今天天气很好', 'got=' + v1);

  // 2. In-memory repeat: no new call.
  await page.evaluate(() => translateToEnglish('今天天气很好'));
  check('in-session repeat: no new call', famCount('今天天气很好') === 1);

  // 3. Reload: persisted cache serves the repeat.
  await boot();
  const v3 = await page.evaluate(() => translateToEnglish('今天天气很好'));
  check('post-reload repeat: no new call (localStorage persistence)', famCount('今天天气很好') === 1);
  check('post-reload repeat returns the cached value', v3 === 'TR:今天天气很好', 'got=' + v3);

  // 4. Punctuation variant hits via the bare key.
  const v4 = await page.evaluate(() => translateToEnglish('今天天气很好！'));
  check('punctuated variant (！): no new call', famCount('今天天气很好') === 1 && v4 === 'TR:今天天气很好', 'got=' + v4);

  // 5. Language switch discards the stamped cache.
  await page.evaluate(() => { changeAppLanguage('es'); });
  await new Promise(r => setTimeout(r, 1500)); // translateUI/aiTranslate traffic settles (ignored by family filter)
  const c5before = famCount('今天天气很好');
  const v5 = await page.evaluate(() => translateToEnglish('今天天气很好'));
  check('language stamp: es switch forces a fresh call', famCount('今天天气很好') === c5before + 1 && v5 === 'TR:今天天气很好', 'before=' + c5before + ' after=' + famCount('今天天气很好'));
  await page.evaluate(() => { changeAppLanguage('en'); });
  await new Promise(r => setTimeout(r, 1500));

  // 6. Consumer path: seeded cache fills the user bubble with NO call.
  const c6 = famCount('你好吗');
  await page.evaluate(() => {
    const c = loadLiveTrCache();
    c.map['你好吗'] = 'How are you?';
    saveLiveTrCache();
    addLiveUserMsg('你好吗！');
  });
  await new Promise(r => setTimeout(r, 500));
  const slot = await page.evaluate(() => {
    const b = document.querySelectorAll('#tutChat .cus');
    return b.length ? b[b.length - 1].innerText : '';
  });
  check('addLiveUserMsg echo: slot filled from cache, zero calls',
    famCount('你好吗') === c6 && slot.indexOf('How are you?') !== -1, 'calls=' + famCount('你好吗') + ' slot="' + slot.replace(/\n/g, ' / ') + '"');

  // 7. Negative control: unknown text still calls the API.
  await page.evaluate(() => addLiveUserMsg('这是一个全新的句子'));
  await new Promise(r => setTimeout(r, 500));
  check('unknown text still calls (negative control)', famCount('这是一个全新的句子') === 1);

  // 8. Bot reply seeds the cache (embedded-translation path), echo is free.
  const c8 = famCount('我很喜欢咖啡');
  await page.evaluate(() => {
    window.__spy = [];
    const origLoad = loadLiveTrCache;
    loadLiveTrCache = function() { const c = origLoad(); window.__spy.push('load:' + c.lang + ':' + Object.keys(c.map).join('|')); return c; };
    const origSave = saveLiveTrCache;
    saveLiveTrCache = function() { window.__spy.push('save:' + JSON.stringify(_liveTrCache && _liveTrCache.map)); origSave(); };
  });
  await page.evaluate(() => sendToGemini('随便聊聊咖啡吧'));
  // Wait for the REPLY itself (its .tr slot), not the instant loader bubble.
  const gotReply8 = await waitFor(page, () => {
    const trs = document.querySelectorAll('#tutChat .cai .tr');
    return trs.length && (trs[trs.length - 1].innerText || '').indexOf('I really like coffee') !== -1;
  }, 15000);
  await new Promise(r => setTimeout(r, 600));
  const seeded = await page.evaluate(() => { const c = loadLiveTrCache(); return c.map['我很喜欢咖啡'] || ''; });
  if (!(gotReply8 && seeded === 'I really like coffee')) {
    const diag = await page.evaluate(() => ({
      spy: (window.__spy || []).slice(-12),
      cacheNow: localStorage.getItem('tutor_live_tr_cache'),
      lastBubbles: Array.from(document.querySelectorAll('#tutChat .cai')).slice(-3).map(e => e.innerText.replace(/\n/g, ' / ').slice(0, 120)),
      geminiHistoryLen: (typeof geminiHistory !== 'undefined' ? geminiHistory.length : -1)
    }));
    console.log('DIAG conversationCalls=' + conversationCalls + ' ' + JSON.stringify(diag).slice(0, 900));
    console.log('DIAG pageLog tail: ' + pageLog.slice(-12).join(' || ').slice(0, 900));
  }
  check('bot reply seeds cache (single-sentence phrase)', gotReply8 && seeded === 'I really like coffee',
    'gotReply=' + gotReply8 + ' seeded="' + seeded + '" convCalls=' + conversationCalls);
  check('embedded translation made NO translator call', famCount('我很喜欢咖啡') === c8, 'calls=' + famCount('我很喜欢咖啡'));
  await page.evaluate(() => addLiveUserMsg('我很喜欢咖啡。'));
  await new Promise(r => setTimeout(r, 500));
  const slot8 = await page.evaluate(() => {
    const b = document.querySelectorAll('#tutChat .cus');
    return b.length ? b[b.length - 1].innerText : '';
  });
  check('echo of tutor phrase: zero translator calls, seeded value rendered',
    famCount('我很喜欢咖啡') === c8 && slot8.indexOf('I really like coffee') !== -1, 'calls=' + famCount('我很喜欢咖啡') + ' slot="' + slot8.replace(/\n/g, ' / ') + '"');

  check('page errors: 0', errors.length === 0, errors.join(' | '));
  await browser.close();
  const fails = results.filter(r => !r.ok).length;
  console.log(fails ? 'RESULT: FAIL (' + fails + ')' : 'RESULT: PASS (' + results.length + ' checks)');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
