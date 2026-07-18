let paypalButtonsRendered = false;

function renderPayPalButtons() {
  if (paypalButtonsRendered || typeof paypal === 'undefined') return;
  const container = document.getElementById('paypalButtonContainer');
  if (!container) return;
  container.innerHTML = '';

  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          description: 'HanMaster Premium - Monthly',
          amount: { value: '9.99' }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        if (details.status === 'COMPLETED') {
          localStorage.setItem('is_premium', 'true');
          toast('Welcome to HanMaster Premium! 🎉', 'var(--green)');
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
