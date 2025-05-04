const CACHE_NAME = "map-cache-v1";
const FILES_TO_CACHE = [
  "/japan-map-color/",
  "/japan-map-color/index.html",
  "/japan-map-color/manifest.json",
  "/japan-map-color/service-worker.js",
  "/japan-map-color/icon.png"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});