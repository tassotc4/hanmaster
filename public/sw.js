const CACHE = 'mandarincourse-v70';
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

  // Only handle same-origin GET requests. Never cache live API responses,
  // and never let a failure reject the fetch event (which surfaces as
  // "Failed to fetch" / network errors in the console and breaks audio blobs).
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/')) return;

  // Network-first with cache fallback
  e.respondWith(
    fetch(e.request).then(response => {
      if (response && response.status === 200) {
        var clone = response.clone();
        caches.open(CACHE).then(function(cache) { cache.put(e.request, clone); }).catch(function(){});
      }
      return response;
    }).catch(function() {
      return caches.match(e.request).then(function(res) {
        if (res) return res;
        // SPA route fallback: serve the cached app shell for any navigation
        if (e.request.mode === 'navigate') {
          return caches.match('/app').then(function(shell) {
            return shell || caches.match('/') || Response.error();
          });
        }
        return Response.error();
      });
    })
  );
});
