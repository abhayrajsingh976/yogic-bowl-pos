// Minimal service worker — enables "Add to Home Screen" / install prompt.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  // Network-first, no offline caching of live data — keeps billing always live.
  e.respondWith(fetch(e.request).catch(() => new Response('Offline — please reconnect.')));
});
