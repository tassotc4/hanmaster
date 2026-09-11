// ===== MandarinCourse Shop (v103) =====
// Digital study packs bought via the existing PayPal integration; merch links
// out to the Printify storefront. All pricing is server-authoritative (the order
// endpoints re-read products.json server-side), and downloads are served by
// /api/shop/download/:slug with a time-limited HMAC-signed token minted only
// after a COMPLETED PayPal capture.
(function() {
  var shopCatalog = null;
  var activeButtons = null;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function(c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function money(n) { return '$' + Number(n).toFixed(2); }
  function $(id) { return document.getElementById(id); }

  function ensurePayPal(cb) {
    if (typeof paypal !== 'undefined') { cb(); return; }
    var sdk = document.querySelector('script[src*="paypal.com/sdk/js"]');
    if (sdk) {
      var t = setInterval(function() {
        if (typeof paypal !== 'undefined') { clearInterval(t); cb(); }
      }, 100);
      setTimeout(function() { if (typeof paypal === 'undefined') clearInterval(t); }, 20000);
      return;
    }
    var s = document.createElement('script');
    s.src = 'https://www.paypal.com/sdk/js?client-id=' +
      (window.MANDARINCOURSE_CONFIG && MANDARINCOURSE_CONFIG.PAYPAL_CLIENT_ID) +
      '&currency=USD';
    s.onload = function() { cb(); };
    s.onerror = function() { shopPayErr('Could not load the payment provider. Please try again.'); };
    document.body.appendChild(s);
  }

  function shopPayErr(msg) {
    var err = $('shopPayError');
    if (!err) { if (typeof toast === 'function') toast(msg, 'var(--accent)'); return; }
    err.textContent = msg;
    err.style.display = 'block';
  }

  function closeModal(id) { var m = $(id); if (m) m.style.display = 'none'; }

  window.closeShopModal = function() { closeModal('shopModal'); };
  window.closeShopSuccessModal = function() {
    closeModal('shopSuccessModal');
    var dl = $('shopDownloadBtn');
    if (dl) dl.style.display = 'none';
  };

  function renderShopButton(prod) {
    var container = $('shopPaypalContainer');
    if (!container) return;
    container.innerHTML = '';
    if (activeButtons && typeof activeButtons.close === 'function') {
      try { activeButtons.close(); } catch (e) {}
    }
    activeButtons = paypal.Buttons({
      style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'checkout' },
      createOrder: function() {
        return fetch('/api/shop/create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: prod.id })
        })
          .then(function(res) { return res.json().then(function(d) { if (!res.ok) throw new Error(d.error || 'Failed to create order'); return d.id; }); });
      },
      onApprove: function(data) {
        return fetch('/api/shop/capture-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ orderId: data.orderID, productId: prod.id })
        })
          .then(function(res) { return res.json().then(function(d) { if (!res.ok) throw new Error(d.error || 'Checkout failed'); return d; }); })
          .then(function(d) {
            if (d.status !== 'COMPLETED') { throw new Error('Payment not completed'); }
            closeModal('shopModal');
            var msg = $('shopSuccessMsg');
            var dl = $('shopDownloadBtn');
            if (d.type === 'digital' && d.download && d.download.url) {
              if (msg) msg.textContent = 'Your "' + prod.name + '" is ready. The download link is valid for ' +
                (d.download.expiresInSec >= 86400 ? Math.round(d.download.expiresInSec / 86400) + ' days' : Math.round(d.download.expiresInSec / 3600) + ' hours') + '.';
              if (dl) { dl.href = d.download.url; dl.style.display = 'block'; }
            } else {
              if (msg) msg.textContent = 'Your order for "' + prod.name + '" is complete. Watch your email for details.';
              if (dl) dl.style.display = 'none';
            }
            closeModal('shopSuccessModal');
            $('shopSuccessModal').style.display = 'flex';
            if (typeof toast === 'function') toast('Purchase complete!', 'var(--green)');
          })
          .catch(function(err) { shopPayErr(err && err.message ? err.message : 'Checkout error. Tap "Retry" below.'); });
      },
      onCancel: function() { if (typeof toast === 'function') toast('Checkout cancelled.', 'var(--muted)'); },
      onError: function() { shopPayErr('PayPal checkout error. Tap "Retry" below to try again.'); }
    });
    activeButtons.render(container);
  }

  function renderModalProduct(prod) {
    var box = $('shopModalProduct');
    if (!box) return;
    box.innerHTML =
      (prod.image ? '<img src="' + esc(prod.image) + '" alt="" style="width:56px;height:56px;object-fit:cover;border-radius:10px;border:1px solid var(--border);background:var(--card2)">' : '') +
      '<div class="flex-1 min-w-0">' +
        '<div class="text-sm font-bold truncate" style="color:var(--fg)">' + esc(prod.name) + '</div>' +
        '<div class="text-xs" style="color:var(--gold)">' + money(prod.price) + '</div>' +
      '</div>';
  }

  window.buyShopProduct = function(productId) {
    if (!shopCatalog || !shopCatalog.products) return;
    var prod = null;
    for (var i = 0; i < shopCatalog.products.length; i++) {
      if (shopCatalog.products[i].id === productId) { prod = shopCatalog.products[i]; break; }
    }
    if (!prod) { shopPayErr('Product not found.'); return; }
    renderModalProduct(prod);
    var err = $('shopPayError');
    if (err) err.style.display = 'none';
    $('shopModal').style.display = 'flex';
    var container = $('shopPaypalContainer');
    if (container) container.innerHTML = '<div class="text-center py-4" style="color:var(--muted)"><i class="fas fa-spinner fa-spin"></i></div>';
    ensurePayPal(function() { renderShopButton(prod); });
  };

  function renderDigitalGrid(grid) {
    var digital = (shopCatalog.products || []).filter(function(p) { return p.type === 'digital'; });
    if (!digital.length) {
      grid.innerHTML = '<div class="text-center py-4" style="color:var(--muted)">Digital products coming soon.</div>';
      return;
    }
    var html = '';
    for (var i = 0; i < digital.length; i++) {
      var p = digital[i];
      html += '<div class="cd overflow-hidden flex flex-col" style="border:1px solid var(--border);border-radius:14px">' +
        (p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy" style="width:100%;height:150px;object-fit:cover;display:block">' : '<div style="height:150px;display:flex;align-items:center;justify-content:center;background:var(--card2)"><i class="fas fa-file-pdf fa-2x" style="color:var(--accent)"></i></div>') +
        '<div style="padding:14px;display:flex;flex-direction:column;flex:1">' +
          '<div class="font-bold text-sm mb-1" style="color:var(--fg)">' + esc(p.name) + '</div>' +
          '<div class="text-xs flex-1 mb-2" style="color:var(--fg2);line-height:1.5">' + esc(p.desc) + '</div>' +
          (p.size ? '<div class="text-[11px] mb-2" style="color:var(--muted)">' + esc(p.size) + '</div>' : '') +
          '<div class="flex items-center justify-between mt-auto">' +
            '<span class="font-bold" style="color:var(--gold);font-size:15px">' + money(p.price) + '</span>' +
            '<button class="bp shop-buy" data-pid="' + esc(p.id) + '" style="padding:9px 16px;font-size:13px"><i class="fas fa-cart-plus mr-1.5"></i>Buy</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }
    grid.innerHTML = html;
    var btns = grid.querySelectorAll('.shop-buy');
    for (var b = 0; b < btns.length; b++) {
      (function(btn) {
        btn.onclick = function() { buyShopProduct(btn.getAttribute('data-pid')); };
      })(btns[b]);
    }
  }

  function renderMerch(con) {
    if (!con) return;
    var url = shopCatalog.merchStoreUrl || '';
    if (!url) {
      con.innerHTML = '<div class="cd text-center py-10" style="border:1px dashed var(--border);border-radius:16px;background:var(--card2)">' +
        '<i class="fas fa-shirt fa-2x mb-3" style="color:var(--muted)"></i>' +
        '<div class="font-bold text-sm mb-1" style="color:var(--fg)">Merch coming soon</div>' +
        '<div class="text-xs" style="color:var(--muted)">T-shirts, mugs, and more are on the way.</div>' +
        '</div>';
      return;
    }
    con.innerHTML = '<div class="cd flex flex-col sm:flex-row items-center gap-5 p-6" style="border:1px solid var(--border);border-radius:16px">' +
      '<div class="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0" style="background:rgba(212,166,79,.12)"><i class="fas fa-shirt fa-2x" style="color:var(--gold)"></i></div>' +
      '<div class="flex-1 text-center sm:text-left">' +
        '<div class="font-bold text-base mb-1" style="color:var(--fg)">MandarinCourse Merch</div>' +
        '<div class="text-xs" style="color:var(--fg2);line-height:1.5">T-shirts, mugs, hoodies and more — printed and shipped by Printify.</div>' +
      '</div>' +
      '<button class="bp" id="shopMerchBtn" style="white-space:nowrap"><i class="fas fa-store mr-1.5"></i>Shop Merch</button>' +
      '</div>';
    var btn = $('shopMerchBtn');
    if (btn) btn.onclick = function() { window.open(url, '_blank', 'noopener'); };
  }

  function loadShop() {
    fetch('/api/shop/products')
      .then(function(res) { if (!res.ok) throw new Error('bad status'); return res.json(); })
      .then(function(data) {
        shopCatalog = data;
        var st = $('shopStatus');
        if (st) st.style.display = 'none';
        var grid = $('shopDigitalGrid');
        if (grid) renderDigitalGrid(grid);
        var merch = $('shopMerchCard');
        if (merch) renderMerch(merch);
      })
      .catch(function() {
        var st = $('shopStatus');
        if (st) st.innerHTML = '<div class="text-center py-4" style="color:var(--muted)">Could not load the shop. <button class="bp" id="shopRetryBtn" style="margin-left:8px;padding:6px 14px;font-size:12px">Try again</button></div>';
        var rb = $('shopRetryBtn');
        if (rb) rb.onclick = loadShop;
      });
  }

  window.initShop = loadShop;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadShop);
  } else {
    loadShop();
  }
})();