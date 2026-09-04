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
    if (tier === 'monthly') {
      billingNote.textContent = t('$9.00/month after trial — Cancel anytime — Secure via PayPal');
      billingNote.setAttribute('data-tr', '$9.00/month after trial — Cancel anytime — Secure via PayPal');
    } else if (tier === 'annual') {
      billingNote.textContent = t('$59.00/year after trial — Cancel anytime — Secure via PayPal');
      billingNote.setAttribute('data-tr', '$59.00/year after trial — Cancel anytime — Secure via PayPal');
    } else {
      billingNote.textContent = t('$129.00 one-time payment — Lifetime access — Secure via PayPal');
      billingNote.setAttribute('data-tr', '$129.00 one-time payment — Lifetime access — Secure via PayPal');
    }
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
