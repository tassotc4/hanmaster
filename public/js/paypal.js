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
        .then(data => { if (data.id) return data.id; throw new Error(data.error || 'Failed to create order'); });
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
    onError: function(err) {
      toast('PayPal error. Please try again.', 'var(--accent)');
    }
  }).render('#paypalButtonContainer');

  paypalButtonsRendered = true;
}
