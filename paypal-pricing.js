'use strict';
// PayPal subscription pricing — SERVER-AUTHORITATIVE (the client sends only
// the tier name, never an amount; the charge is a one-time Orders API capture
// created HERE, not a PayPal-hosted plan). Autumn Festival Sale: 50% off all
// tiers, active through midnight ICT (UTC+7) ending 2026-09-30, i.e.
// 2026-09-30T17:00:00Z. After that instant the window check simply stops
// matching — full price, zero cleanup on the PayPal side.
// The client duplicates the SAME constant expressions in public/js/paypal.js
// (display side); tests/regression/sale-pricing-test.cjs drift-checks them.

const SALE_END_UTC = Date.UTC(2026, 8, 30, 17, 0, 0); // = 2026-10-01T00:00:00+07:00
const BASE_PRICES = { monthly: '9.00', annual: '59.00', lifetime: '129.00' };
const SALE_DISCOUNT = 0.5;

function autumnSaleActive(nowMs) {
  return (nowMs || Date.now()) < SALE_END_UTC;
}

function priceFor(plan, nowMs) {
  const base = BASE_PRICES[plan] || BASE_PRICES.monthly;
  if (!autumnSaleActive(nowMs)) return { price: base, sale: false };
  // 9.00->4.50, 59.00->29.50, 129.00->64.50 — exact to the cent, no rounding
  return { price: (parseFloat(base) * (1 - SALE_DISCOUNT)).toFixed(2), sale: true, original: base };
}

module.exports = { SALE_END_UTC, BASE_PRICES, SALE_DISCOUNT, autumnSaleActive, priceFor };
