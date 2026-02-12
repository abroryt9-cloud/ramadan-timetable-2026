const CACHE_NAME = 'ramadan-2026-v1';
const GHPATH = '/ramadan-timetable-2026';

const URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/style.css`,
  `${GHPATH}/script.js`,
  `${GHPATH}/manifest.json`,
  `${GHPATH}/icons/icon-72.png`,
  `${GHPATH}/icons/icon-96.png`,
  `${GHPATH}/icons/icon-128.png`,
  `${GHPATH}/icons/icon-144.png`,
  `${GHPATH}/icons/icon-152.png`,
  `${GHPATH}/icons/icon-192.png`,
  `${GHPATH}/icons/icon-384.png`,
  `${GHPATH}/icons/icon-512.png`,
  'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Кэширование файлов');
      return cache.addAll(URLS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
