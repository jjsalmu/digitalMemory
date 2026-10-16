const CACHE_NAME = 'digimem-v1.03';
const urlsToCache = [
  'digiMem.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

// Instalación: guardar los archivos de la app
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activación: borrar cachés de versiones anteriores
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(
        names.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

// Peticiones: red primero (así siempre recibes la última versión) y caché como respaldo offline.
// Las peticiones a otros dominios (p. ej. api.github.com) no se interceptan.
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  if (new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});
