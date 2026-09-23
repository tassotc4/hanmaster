// ===== Autumn Festival Sale (client DISPLAY side; the CHARGE side is the
// server's paypal-pricing.js — the constants below are the SAME expressions,
// drift-checked against it by tests/regression/sale-pricing-test.cjs) =====
const SALE_END_UTC = Date.UTC(2026, 8, 30, 17, 0, 0); // = 2026-10-01T00:00:00+07:00
const SALE_DISCOUNT = 0.5;
const SALE_BASE = { monthly: 9, annual: 59, lifetime: 129 };
function autumnSaleActive() { return Date.now() < SALE_END_UTC; }
function salePriceInfo(tier) {
  const base = SALE_BASE[tier] || 9;
  if (!autumnSaleActive()) return null;
  return { original: '$' + base.toFixed(2), discounted: '$' + (base * (1 - SALE_DISCOUNT)).toFixed(2) };
}
// The billing note for a tier — sale-aware. Shared by selectPremiumTier and
// applySaleDisplay so the note can never disagree with the tier cards.
function billingNoteText(tier) {
  const t2 = tier || 'annual';
  const base = SALE_BASE[t2] || 9;
  const priceStr = '$' + (autumnSaleActive() ? (base * (1 - SALE_DISCOUNT)).toFixed(2) : base.toFixed(2));
  if (t2 === 'lifetime') return priceStr + ' one-time payment — Lifetime access — Secure via PayPal';
  const suffix = t2 === 'monthly' ? '/month' : '/year';
  return priceStr + suffix + ' after trial — Cancel anytime — Secure via PayPal';
}
// Apply the sale display to every purchase surface. Runs on modal opens +
// after language changes (translateUI rewrites textContent from data-tr, so
// the sale display must re-apply or it gets clobbered). After the sale window
// this simply renders standard prices — no cleanup needed.
function applySaleDisplay() {
  const active = autumnSaleActive();
  const badge = document.getElementById('saleBadge');
  if (badge) badge.style.display = active ? 'inline-block' : 'none';
  const badge2 = document.getElementById('saleBadgeUpgrade');
  if (badge2) badge2.style.display = active ? 'inline-block' : 'none';
  const cards = { monthly: 'tierCardMonthlyPrice', annual: 'tierCardAnnualPrice', lifetime: 'tierCardLifetimePrice' };
  Object.keys(cards).forEach(function (key) {
    const el = document.getElementById(cards[key]);
    if (!el) return;
    const suffix = key === 'monthly' ? ' / mo' : key === 'annual' ? ' / yr' : '';
    if (active) {
      const info = salePriceInfo(key);
      el.innerHTML = '<s style="opacity:.55">' + info.original + suffix + '</s> ' + info.discounted + suffix;
    } else {
      el.textContent = '$' + SALE_BASE[key].toFixed(2) + suffix;
    }
    el.setAttribute('data-tr', el.textContent);
  });
  // Billing note (follows the SELECTED tier)
  const noteEl = document.getElementById('premiumBillingNote');
  if (noteEl) {
    const txt = billingNoteText(typeof selectedPremiumTier !== 'undefined' ? selectedPremiumTier : 'annual');
    noteEl.textContent = t(txt);
    noteEl.setAttribute('data-tr', txt);
  }
  // Tutor upgrade-ask CTA
  const upgBtn = document.getElementById('tutorUpgradeBtn');
  if (upgBtn) {
    const monthly = salePriceInfo('monthly');
    const txt = active && monthly ? 'Upgrade to ' + monthly.discounted + '/month' : 'Upgrade to $9.00/month';
    upgBtn.textContent = t(txt);
    upgBtn.setAttribute('data-tr', txt);
  }
  // #premMsg: the premium modal's lead message (sale-aware during the window
  // so it doesn't contradict the 50%-off badge above it)
  const pm = document.getElementById('premMsg');
  if (pm) {
    const stdTxt = 'Get full access to HSK 2 through HSK 9, advanced AI tutor conversations, and ad-free learning. 7 days free, then $9/month.';
    const saleTxt = 'Get full access to HSK 2 through HSK 9, advanced AI tutor conversations, and ad-free learning. 7 days free, then $4.50/month.';
    const txt = active ? saleTxt : stdTxt;
    pm.textContent = t(txt);
    pm.setAttribute('data-tr', txt);
  }
}

let paypalButtonsRendered = false;
let selectedPremiumTier = 'annual'; // Default selection

window.selectPremiumTier = function(tier) {
  selectedPremiumTier = tier;
  
  const cards = {
    monthly: document.getElementById('tierCardMonthly'),
    annual: document.getElementById('tierCardAnnual'),
    lifetime: document.getElementById('tierCardLifetime')
  };
  
  Object.keys(cards).forEach(key => {
    const card = cards[key];
    if (!card) return;
    if (key === tier) {
      card.style.borderColor = 'var(--gold)';
      card.style.background = 'rgba(212, 166, 79, 0.05)';
    } else {
      card.style.borderColor = 'var(--border)';
      card.style.background = 'transparent';
    }
  });
  
  const billingNote = document.getElementById('premiumBillingNote');
  if (billingNote) {
    const txt = billingNoteText(tier);
    billingNote.textContent = t(txt);
    billingNote.setAttribute('data-tr', txt);
  }
};

function renderPayPalButtons() {
  if (paypalButtonsRendered || typeof paypal === 'undefined') return;
  const container = document.getElementById('paypalButtonContainer');
  if (!container) return;
  container.innerHTML = '';

  paypal.Buttons({
    createOrder: function() {
      return fetch('/api/paypal/create-order', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: selectedPremiumTier })
      })
        .then(r => r.json())
        .then(data => {
          if (data.id) return data.id;
          throw new Error(data.error || 'Failed to create order. Please try again later.');
        });
    },
    onApprove: function(data) {
      return fetch('/api/paypal/capture-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId: data.orderID })
      })
        .then(r => r.json())
        .then(function(details) {
          if (details.status === 'COMPLETED') {
            localStorage.setItem('is_premium', 'true');
            if (selectedPremiumTier === 'monthly') {
              localStorage.setItem('premium_expiry', (Date.now() + 30 * 24 * 60 * 60 * 1000).toString());
            } else if (selectedPremiumTier === 'annual') {
              localStorage.setItem('premium_expiry', (Date.now() + 365 * 24 * 60 * 60 * 1000).toString());
            } else {
              localStorage.removeItem('premium_expiry');
            }
            localStorage.removeItem('mandarin30_used');
            toast('Welcome to MandarinCourse Premium! 🎉', 'var(--green)');
            updatePremiumUI();
            if (typeof updateTutorUsageBadge === 'function') updateTutorUsageBadge();
            document.getElementById('premiumModal').style.display = 'none';
            if (lessonsMode === 'topics') buildTopics(); else buildFlashcards();
          } else {
            toast('Payment not completed. Please try again.', 'var(--accent)');
          }
        });
    },
    onCancel: function() {
      toast('PayPal checkout cancelled.', 'var(--muted)');
    },
    onError: function(err) {
      toast('PayPal checkout error. Tap "Retry" below to try again.', 'var(--accent)');
      retryPayPalButtons();
    }
  }).render('#paypalButtonContainer');

  paypalButtonsRendered = true;
}

function retryPayPalButtons() {
  paypalButtonsRendered = false;
  const container = document.getElementById('paypalButtonContainer');
  if (!container) return;
  const retryBtn = document.createElement('button');
  retryBtn.textContent = 'Retry PayPal';
  retryBtn.className = 'w-full py-3 rounded-xl font-bold text-sm cursor-pointer';
  retryBtn.style.cssText = 'background:var(--accent);color:#fff;border:none;font-family:inherit';
  retryBtn.onclick = function() {
    container.innerHTML = '';
    renderPayPalButtons();
  };
  container.appendChild(retryBtn);
}
