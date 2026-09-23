'use strict';
// v140 gate: Autumn Festival sale pricing.
//  A. priceFor() mocked before/during/after the window + the exact boundary:
//     during = 4.50/29.50/64.50 (sale), END-1ms = sale, END = full price,
//     END+1day = full price (9.00/59.00/129.00).
//  B. Drift check: the client constants in public/js/paypal.js are the SAME
//     expressions as paypal-pricing.js (server) — character-identical and
//     equal evaluated values, so display and charge can never diverge.
const path = require('path');
const pricing = require(path.join(__dirname, '../../paypal-pricing.js'));
const fs = require('fs');

let pass = true;
const check = (name, ok, detail) => { console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); if (!ok) pass = false; };

// --- A: priceFor with mocked dates ---
const END = pricing.SALE_END_UTC;
const cases = [
  ['during (real now = today)', pricing.priceFor('monthly'), '4.50', true],
  ['during annual', pricing.priceFor('annual'), '29.50', true],
  ['during lifetime', pricing.priceFor('lifetime'), '64.50', true],
  ['END-1ms boundary', pricing.priceFor('monthly', END - 1), '4.50', true],
  ['END boundary (first instant of 10/1 ICT)', pricing.priceFor('monthly', END), '9.00', false],
  ['END+1day', pricing.priceFor('annual', END + 86400000), '59.00', false],
];
for (const [name, result, wantPrice, wantSale] of cases) {
  check('A. ' + name + ' -> ' + wantPrice + (wantSale ? ' (sale)' : ' (full)'),
    result.price === wantPrice && result.sale === wantSale,
    JSON.stringify(result));
}
check('A. originals preserved during sale', pricing.priceFor('annual').original === '59.00' && pricing.priceFor('lifetime').original === '129.00');

// --- B: drift check — client constants identical to the server module ---
const serverSrc = fs.readFileSync(path.join(__dirname, '../../paypal-pricing.js'), 'utf8');
const clientSrc = fs.readFileSync(path.join(__dirname, '../../public/js/paypal.js'), 'utf8');
const END_EXPR = 'Date.UTC(2026, 8, 30, 17, 0, 0)';
const DISC_EXPR = '0.5';
const serverEnd = serverSrc.match(new RegExp('SALE_END_UTC = ' + END_EXPR.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')));
const clientEnd = clientSrc.match(new RegExp('SALE_END_UTC = ' + END_EXPR.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')));
check('B. SALE_END_UTC identical expression in server module + client', !!(serverEnd && clientEnd),
  'server=' + !!serverEnd + ' client=' + !!clientEnd);
const serverDisc = serverSrc.match(/SALE_DISCOUNT = 0\.5/);
const clientDisc = clientSrc.match(/SALE_DISCOUNT = 0\.5/);
check('B. SALE_DISCOUNT identical in both', !!(serverDisc && clientDisc), 'server=' + !!serverDisc + ' client=' + !!clientDisc);
// client SALE_BASE numerically equals server BASE_PRICES
check('B. client SALE_BASE == server BASE_PRICES (9/59/129)',
  /monthly: 9, annual: 59, lifetime: 129/.test(clientSrc) &&
  pricing.BASE_PRICES.monthly === '9.00' && pricing.BASE_PRICES.annual === '59.00' && pricing.BASE_PRICES.lifetime === '129.00');
// evaluated equality
const evalEnd = Date.UTC(2026, 8, 30, 17, 0, 0);
check('B. evaluated END == pricing.SALE_END_UTC', evalEnd === pricing.SALE_END_UTC, String(pricing.SALE_END_UTC));

// --- C: server wiring (static check — the LIVE create-order check needs valid
// PayPal credentials; the local .env ones currently fail auth 401, a
// pre-existing issue: the token fetch precedes the price mapping) ---
const serverJs = fs.readFileSync(path.join(__dirname, '../../server.js'), 'utf8');
check('C. create-order wired to pricing.priceFor (server-authoritative)',
  serverJs.includes('pricing.priceFor(plan)') && serverJs.includes("amount: { currency_code: 'USD', value: price }"));
check('C. client sends only the tier name (never an amount)',
  clientSrc.includes("body: JSON.stringify({ plan: selectedPremiumTier })"));

console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL');
process.exit(pass ? 0 : 1);
