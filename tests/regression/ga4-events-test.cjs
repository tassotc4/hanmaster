// GA4 conversion events (v156): trackEvent fires at the TRUE completion
// points — sign_up at the real account creation (supabase.js, the same
// callback that sets trial_start — no separate trial_start event),
// begin_checkout when the PayPal popup opens, purchase when the capture is
// COMPLETED (transaction_id = data.orderID), promo_code_applied when the
// trial grant actually happens. Also asserts single-tracking (one gtag ID).
const { launch, waitFor, SCRATCH } = require('../helpers/bootstrap.cjs');
const path = require('path');

let pass = true;
function check(name, ok, detail) {
  console.log((ok ? 'PASS' : 'FAIL') + ' ' + name + (detail ? ' — ' + detail : ''));
  if (!ok) pass = false;
}

// A Supabase mock whose signUp returns a real user + session (the
// bootstrap's canned mock returns user: null, so the sign_up branch never
// runs with it).
const SIGNUP_MOCK = `
  var session = { user: { id: 'u-test', email: 'test@example.com', confirmed_at: 'now' }, access_token: 'x' };
  var mockClient = {
    auth: { getSession: () => Promise.resolve({ data: { session }, error: null }),
      getUser: () => Promise.resolve({ data: { user: session.user } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signUp: () => Promise.resolve({ data: { user: session.user, session }, error: null }),
      signInWithPassword: () => Promise.resolve({ data: { session }, error: null }),
      updateUser: () => Promise.resolve({ data: {}, error: null }),
      resetPasswordForEmail: () => Promise.resolve({ data: {}, error: null }),
      signOut: () => Promise.resolve({ error: null }) }
  };
  Object.defineProperty(window, 'supabase', { get: () => ({ createClient: () => mockClient }), configurable: true });
`;

(async () => {
  const fs = require('fs');
  const html = fs.readFileSync(path.join(__dirname, '../../public/app.html'), 'utf8');

  // --- 1. Single-tracking (the double-install fix) ---
  check('1. app.html loads ONE measurement ID (BJX script + config, YNTP removed)',
    (html.match(/G-BJX6L2ZZJ8/g) || []).length === 2 && !html.includes('G-YNTPFZB50P'), '');
  check('1. trackEvent + tierPriceValue defined in the head inline (before the deferred JS)',
    html.includes('function trackEvent(name, params)') && html.includes('function tierPriceValue(tier)'), '');
  const pp = fs.readFileSync(path.join(__dirname, '../../public/js/paypal.js'), 'utf8');
  check('1. paypal.js fires begin_checkout (onClick) + purchase (COMPLETED, transaction_id)',
    pp.includes("trackEvent('begin_checkout'") && pp.includes("trackEvent('purchase'") &&
    pp.includes('transaction_id: data.orderID'), '');
  const sb = fs.readFileSync(path.join(__dirname, '../../public/js/supabase.js'), 'utf8');
  check('1. supabase.js fires sign_up at the real account-creation moment',
    sb.includes("trackEvent('sign_up', { method: 'email' })"), '');
  const appjs = fs.readFileSync(path.join(__dirname, '../../public/js/app.js'), 'utf8');
  check('1. app.js fires promo_code_applied at the real grant',
    appjs.includes("trackEvent('promo_code_applied'"), '');

  // --- 2. Behavioral: the events actually fire ---
  const browser = await launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.evaluateOnNewDocument(SIGNUP_MOCK);
  await page.goto('http://127.0.0.1:8080/app.html', { waitUntil: 'load', timeout: 60000 });
  await page.evaluate(() => { try { skipOnboarding(); } catch (e) {} });
  await waitFor(page, () => typeof trackEvent === 'function', 15000);
  await waitFor(500);

  // 2a. One gtag config in the dataLayer (no double-tracking at runtime)
  const cfg = await page.evaluate(() => {
    const configs = window.dataLayer.filter(e => e && e[0] === 'config').map(e => e[1]);
    return { configs, count: configs.length };
  });
  check('2a. exactly ONE gtag config fired (single-tracking at runtime)',
    cfg.count === 1 && cfg.configs[0] === 'G-BJX6L2ZZJ8', JSON.stringify(cfg));

  // 2b. sign_up at the real account creation (the direct call = the real function)
  await page.evaluate(() => { return signUpWithEmail('ga4-test@example.com', 'password123'); });
  await waitFor(page, () => window.dataLayer.some(e => e && e[0] === 'event' && e[1] === 'sign_up'), 10000);
  const su = await page.evaluate(() => {
    const e = window.dataLayer.find(e => e && e[0] === 'event' && e[1] === 'sign_up');
    return e ? { name: e[1], params: JSON.stringify(e[2] || {}), trialStart: !!localStorage.getItem('trial_start') } : null;
  });
  check('2b. sign_up fired with method=email and the trial_start timestamp set',
    !!su && su.params.indexOf('email') !== -1 && su.trialStart, JSON.stringify(su));

  // 2c. promo_code_applied at the real grant
  await page.evaluate(() => { applyFreeTrialCode('mandarin30'); });
  await waitFor(page, () => window.dataLayer.some(e => e && e[0] === 'event' && e[1] === 'promo_code_applied'), 10000);
  const promo = await page.evaluate(() => {
    const e = window.dataLayer.find(e => e && e[0] === 'event' && e[1] === 'promo_code_applied');
    return e ? { name: e[1], code: e[2] && e[2].code, premium: localStorage.getItem('is_premium') } : null;
  });
  check('2c. promo_code_applied fired with the code and premium granted',
    !!promo && promo.code === 'mandarin30' && promo.premium === 'true', JSON.stringify(promo));

  // 2d. begin_checkout + purchase via the real renderPayPalButtons path with
  // a stubbed SDK and a mocked capture-order response
  await page.setRequestInterception(true);
  page.on('request', req => {
    const u = req.url();
    if (u.includes('/api/paypal/capture-order')) {
      req.respond({ status: 200, contentType: 'application/json', body: JSON.stringify({ status: 'COMPLETED' }) });
      return;
    }
    req.continue();
  });
  await page.evaluate(() => {
    window.paypal = { Buttons: function (cfg) { window.__ppCfg = cfg; return { render: function () { return Promise.resolve(); }, close: function () {} }; } };
    renderPayPalButtons();
  });
  await waitFor(400);
  await page.evaluate(() => { window.__ppCfg.onClick(); });
  await waitFor(page, () => window.dataLayer.some(e => e && e[0] === 'event' && e[1] === 'begin_checkout'), 10000);
  const bc = await page.evaluate(() => {
    const e = window.dataLayer.find(e => e && e[0] === 'event' && e[1] === 'begin_checkout');
    return e ? { name: e[1], currency: e[2] && e[2].currency, value: e[2] && e[2].value, items: e[2] && e[2].items } : null;
  });
  check('2d. begin_checkout fired with currency/value/items (the popup opening)',
    !!bc && bc.currency === 'USD' && bc.value !== null && !!bc.items, JSON.stringify(bc));
  await page.evaluate(() => { return window.__ppCfg.onApprove({ orderID: 'GA4-TEST-ORDER' }); });
  await waitFor(page, () => window.dataLayer.some(e => e && e[0] === 'event' && e[1] === 'purchase'), 10000);
  const pu = await page.evaluate(() => {
    const e = window.dataLayer.find(e => e && e[0] === 'event' && e[1] === 'purchase');
    return e ? { name: e[1], tid: e[2] && e[2].transaction_id, value: e[2] && e[2].value, premium: localStorage.getItem('is_premium') } : null;
  });
  check('2e. purchase fired at capture COMPLETED with transaction_id + premium granted',
    !!pu && pu.tid === 'GA4-TEST-ORDER' && pu.value !== null && pu.premium === 'true', JSON.stringify(pu));

  await browser.close();
  console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL');
  process.exit(pass ? 0 : 1);
})().catch(e => { console.error('FATAL', e.message); process.exit(1); });
