// This is a very simple service worker. It just caches the app shell.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('music-app-v1').then((cache) => {
      return cache.addAll(['/music-app/', '/music-app/index.html']);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
