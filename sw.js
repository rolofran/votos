const CACHE_NAME = 'votantesjas-v1';
const urlsToCache = [
  '/',
  '/index.php',
  '/login.php',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
];

// Instalar el Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Estrategia de respuesta: Network First (Priorizar red)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});