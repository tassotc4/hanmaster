const CACHE = 'mandarincourse-v10';
const urlsToCache = ['/', '/app', '/manifest.json', '/pinyin-chart', '/js/config.js', '/js/supabase.js', '/js/paypal.js', '/js/vocab-data.js', '/js/vocab-extra-data.js', '/js/extra-content.js', '/js/translate.js', '/js/tutor-data.js', '/js/tutor-data-more.js', '/js/app.js', '/css/app.css', '/audio/podcast-ep1.mp3', '/audio/podcast-ep2.mp3', '/audio/podcast-ep3.mp3', '/audio/podcast-ep4.mp3', '/audio/podcast-ep5.mp3'];

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
    icon: 'https://cdn-icons-png.flaticon.com/512/3898/3898083.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/3898/3898083.png',
    vibrate: [200,100,200],
    data: { url: data.url || '/app' }
  });
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url || '/app'));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).then(response => {
      return caches.open(CACHE).then(cache => {
        if (e.request.method === 'GET') cache.put(e.request, response.clone());
        return response;
      });
    }).catch(() => caches.match(e.request).then(res => res || fetch(e.request)))
  );
});
