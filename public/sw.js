const CACHE = 'mandarincourse-v53';
const urlsToCache = ['/', '/app', '/manifest.json', '/pinyin-chart', '/js/config.js', '/js/supabase.js', '/js/paypal.js', '/js/vocab-data.js', '/js/vocab-extra-data.js', '/js/extra-content.js', '/js/translate.js', '/js/tutor-data.js', '/js/tutor-data-more.js', '/js/app.js', '/css/tailwind.css', '/css/app.css', '/audio/podcast-ep1.mp3', '/audio/podcast-ep2.mp3', '/audio/podcast-ep3.mp3', '/audio/podcast-ep4.mp3', '/audio/podcast-ep5.mp3', '/icon-192.png', '/icon-512.png', '/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => Promise.all(urlsToCache.map(url => cache.add(url).catch(() => {})))));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(names => Promise.all(names.filter(n => n !== CACHE).map(n => caches.delete(n))))
    .then(() => clients.claim())
  );
});

self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  self.registration.showNotification(data.title || 'MandarinCourse', {
    body: data.body || 'Time to practice Chinese!',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200,100,200],
    data: { url: data.url || '/app' }
  });
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url || '/app'));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Network-first with cache fallback for all requests
  e.respondWith(
    fetch(e.request).then(response => {
      if (e.request.method === 'GET' && response.status === 200) {
        var clone = response.clone();
        caches.open(CACHE).then(function(cache) { cache.put(e.request, clone); }).catch(function(){});
      }
      return response;
    }).catch(function() {
      return caches.match(e.request).then(function(res) { return res || fetch(e.request); });
    })
  );
});
