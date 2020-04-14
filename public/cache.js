const filesToCache = [
  './js/formatData.js',
  './js/jquery.min.js',
  './js/bootstrap.min.js',
  './css/bootstrap.min.css',
  './images/cdc-coronavirus-image-23311-web.webp'
];

const staticCacheName = 'static-cache-v1';

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return caches.open(staticCacheName).then(cache => {
          cache.put(event.request.url, response.clone());
          return response;
        });
      }).catch(error => {
        console.log(`GET REQUEST TO ${event.request.url} returned an error ${error}`);
      })
  );
});
