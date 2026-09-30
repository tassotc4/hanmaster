// #pricing section extension (v154): the public landing pricing section now
// shows all three paid tiers (the Trial + Monthly/Annual/Lifetime, 2x2 grid),
// a promo code field reusing applyPromoCodeFromUI (optional input-id param —
// same function, not a reimplementation), sale-aware prices via the existing
// applySaleDisplay() sect*Price targets (same drift-checked source as the
// modal), and a "Got a promo code from a friend?" hint in BOTH the section
// and the modal. index.html left as-is (orphaned duplicate, tracked).
const { launch, waitFor, SCRATCH } = require('../helpers/bootstrap.cjs');

let pass = true;
function check(name, ok, detail) {
  console.log((ok ? 'PASS' : 'FAIL') + ' ' + name + (detail ? ' — ' + detail : ''));
  if (!ok) pass = false;
}

(async () => {
  const fs = require('fs');
  const js = fs.readFileSync(__dirname + '/../../public/js/app.js', 'utf8');
  const paypal = fs.readFileSync(__dirname + '/../../public/js/paypal.js', 'utf8');
  const html = fs.readFileSync(__dirname + '/../../public/app.html', 'utf8');

  // --- 1. Source checks ---
  check('1. applyPromoCodeFromUI reads the optional inputId (same function)',
    js.includes('function applyPromoCodeFromUI(inputId)') &&
    js.includes("document.getElementById(inputId || 'promoCodeInput')"), '');
  check('1. the modal Apply still calls the no-arg form (byte-identical callers)',
    html.includes('onclick="applyPromoCodeFromUI()"') &&
    html.includes("onclick=\"applyPromoCodeFromUI('sectPromoCodeInput')\""), '');
  check('1. the section has all three paid-tier price ids',
    html.includes('id="sectMonthlyPrice"') && html.includes('id="sectAnnualPrice"') && html.includes('id="sectLifetimePrice"'), '');
  check('1. applySaleDisplay targets the sect*Price ids (same function, no new pricing logic)',
    paypal.includes("sectCards = { monthly: 'sectMonthlyPrice', annual: 'sectAnnualPrice', lifetime: 'sectLifetimePrice' }") &&
    paypal.includes('salePriceInfo(key)') && !paypal.includes('function sectSale'), '');
  check('1. the hint present in BOTH the section and the modal',
    (html.match(/data-tr="Got a promo code from a friend\?"/g) || []).length === 2, '');

  // --- 2. In-page: the section renders, the promo field works, the sale shows ---
  const browser = await launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:8080/app.html', { waitUntil: 'load', timeout: 60000 });
  await waitFor(page, () => !!document.getElementById('sectAnnualPrice'), 15000);
  await page.evaluate(() => { const s = document.getElementById('pricing'); if (s) { s.scrollIntoView(); window.scrollBy(0, 180); } });
  await waitFor(700);

  const sect = await page.evaluate(() => {
    const g = document.getElementById('pricing').querySelector('.grid');
    const cardEls = g ? Array.from(g.children) : [];
    const inp = document.getElementById('sectPromoCodeInput');
    const r = inp ? inp.getBoundingClientRect() : null;
    const hints = Array.from(document.querySelectorAll('#pricing div')).filter(e => e.textContent.trim() === 'Got a promo code from a friend?');
    const lastHint = hints[hints.length - 1];
    return {
      cardCount: cardEls.length,
      monthly: document.getElementById('sectMonthlyPrice').textContent,
      annual: document.getElementById('sectAnnualPrice').textContent,
      lifetime: document.getElementById('sectLifetimePrice').textContent,
      promoVisible: !!(inp && inp.offsetParent !== null && r && r.width > 0 && r.height > 0),
      promoRect: r ? { y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) } : null,
      hintVisible: !!(lastHint && lastHint.offsetParent !== null && lastHint.getBoundingClientRect().height > 0)
    };
  });
  check('2. the section renders all 4 cards (Trial + Monthly + Annual + Lifetime)',
    sect.cardCount === 4, 'cards=' + sect.cardCount);
  check('2. the sale display applied at boot (active -> struck-through original + discounted)',
    sect.monthly.indexOf('4.50') !== -1 && sect.annual.indexOf('29.50') !== -1 && sect.lifetime.indexOf('64.50') !== -1,
    JSON.stringify({ m: sect.monthly, a: sect.annual, l: sect.lifetime }));
  check('2. the promo field is genuinely visible in the section',
    sect.promoVisible, JSON.stringify(sect.promoRect));
  check('2. the hint is visible above the section field', sect.hintVisible, '');

  // --- 2b. The section's promo field works via the SAME function ---
  await page.evaluate(() => { document.getElementById('sectPromoCodeInput').value = 'wrongcode'; applyPromoCodeFromUI('sectPromoCodeInput'); });
  await waitFor(500);
  const invalid = await page.evaluate(() => ({ isPremium: localStorage.getItem('is_premium') }));
  check('2b. invalid code via the section field: no premium granted', invalid.isPremium === null, JSON.stringify(invalid));
  await page.evaluate(() => { document.getElementById('sectPromoCodeInput').value = 'mandarin30'; applyPromoCodeFromUI('sectPromoCodeInput'); });
  await waitFor(600);
  const after = await page.evaluate(() => ({
    isPremium: localStorage.getItem('is_premium'),
    used: localStorage.getItem('mandarin30_used'),
    deltaDays: Math.round((parseInt(localStorage.getItem('premium_expiry') || '0') - Date.now()) / 86400000)
  }));
  check('2b. mandarin30 via the section field: the 30-day trial grants',
    after.isPremium === 'true' && after.used === 'true' && after.deltaDays === 30, JSON.stringify(after));

  // --- 3. Desktop screenshot (the section, sale prices live) ---
  await page.screenshot({ path: SCRATCH + '/v154-pricing-section-desktop.png' });
  console.log('SCREENSHOT: v154-pricing-section-desktop.png');

  // --- 4. Mobile screenshot ---
  await page.setViewport({ width: 390, height: 844 });
  await waitFor(500);
  await page.evaluate(() => { const s = document.getElementById('pricing'); if (s) { s.scrollIntoView(); window.scrollBy(0, 120); } });
  await waitFor(500);
  const mobile = await page.evaluate(() => {
    const inp = document.getElementById('sectPromoCodeInput');
    const r = inp ? inp.getBoundingClientRect() : null;
    return { promoVisible: !!(inp && inp.offsetParent !== null && r && r.width > 0 && r.height > 0) };
  });
  check('4. mobile: the promo field still visible (the stacked layout)',
    mobile.promoVisible, JSON.stringify(mobile));
  await page.screenshot({ path: SCRATCH + '/v154-pricing-section-mobile.png' });
  console.log('SCREENSHOT: v154-pricing-section-mobile.png');

  await browser.close();
  console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL');
  process.exit(pass ? 0 : 1);
})().catch(e => { console.error('FATAL', e.message); process.exit(1); });
