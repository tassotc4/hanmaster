let paypalButtonsRendered = false;

function renderPayPalButtons() {
  if (paypalButtonsRendered || typeof paypal === 'undefined') return;
  const container = document.getElementById('paypalButtonContainer');
  if (!container) return;
  container.innerHTML = '';

  paypal.Buttons({
    createOrder: function() {
      return fetch('/api/paypal/create-order', { method: 'POST' })
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
            toast('Welcome to MandarinCourse Premium! 🎉', 'var(--green)');
            updatePremiumUI();
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
