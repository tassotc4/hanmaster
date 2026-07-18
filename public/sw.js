const CACHE = 'hanmaster-v1';
const urlsToCache = ['/', '/app', '/manifest.json', '/js/config.js', '/js/supabase.js', '/js/paypal.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(urlsToCache)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request).then(response => {
      return caches.open(CACHE).then(cache => {
        if (e.request.method === 'GET') cache.put(e.request, response.clone());
        return response;
      });
    }))
  );
});
