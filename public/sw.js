const CACHE = 'hanmaster-v3';
const urlsToCache = ['/', '/app', '/manifest.json', '/js/config.js', '/js/supabase.js', '/js/paypal.js', '/js/vocab-data.js', '/js/vocab-extra-data.js', '/js/extra-content.js', '/js/translate.js', '/js/tutor-data.js', '/js/app.js', '/css/app.css'];

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

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request).then(response => {
      return caches.open(CACHE).then(cache => {
        if (e.request.method === 'GET') cache.put(e.request, response.clone());
        return response;
      });
    }).catch(() => fetch(e.request)))
  );
});
