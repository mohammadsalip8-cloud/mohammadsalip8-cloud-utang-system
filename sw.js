const CACHE_NAME = 'utang-pro-v2';
const urlsToCache = [
  '/mohammadsalip8-cloud-utang-system/',
  '/mohammadsalip8-cloud-utang-system/index.html',
  '/mohammadsalip8-cloud-utang-system/manifest.json',
  '/mohammadsalip8-cloud-utang-system/icon-192.png',
  '/mohammadsalip8-cloud-utang-system/icon-512.png',
  '/mohammadsalip8-cloud-utang-system/logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
