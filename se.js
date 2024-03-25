// Cache name
const CACHE_NAME = 'pwa-sample-caches-v1';
// Cache targets
const urlsToCache = [
  './',
  './index.html',
  './src/lightsout_clear.html',
  './src/lightsout_fail.html',
  './src/random_lightsout.html',
  './src/random_lightsout4.html',
  './src/random_lightsout5.html',
  './src/select_lightsout.html',
  './src/select_lightsout4.html',
  './src/select_lightsout5.html',
  './src/stage_select.html',
  './css/style.css',
  './css/style4.css',
  './css/style5.css',
  './css/style_clear.css',
  './css/style_fail.css',
  './css/style_select.css',
  './css/style_title.css',
  './css/reset.css',
  './images/back_button.png',
  './images/background.jpg',
  './images/FAILURE.png',
  './images/Lightsout_ico.ico',
  './images/return_to_title.png',
  './images/star_black.png',
  './images/star_yellow.png',
  './images/start_button.png',
  './images/SUCCESS.png',
  './images/TITLE.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response ? response : fetch(event.request);
      })
  );
});
