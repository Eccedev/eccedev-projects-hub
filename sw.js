const CACHE_NAME = 'eccedev-projects-hub-v1';
const ASSETS = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './assets/favicon/site.webmanifest',
    './assets/favicon/favicon-32x32.png',
    './assets/favicon/favicon-16x16.png',
    './assets/favicon/android-chrome-192x192.png',
    './assets/favicon/android-chrome-512x512.png'
];

// Instalación: Cachear archivos estáticos
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache abierto');
                return cache.addAll(ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

// Activación: Limpiar caches antiguos
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Borrando cache antiguo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch: Estrategia Stale-While-Revalidate (servir de cache y actualizar en segundo plano)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    // Si está en el cache, devolverlo pero actualizar el cache en segundo plano
                    fetch(event.request).then(networkResponse => {
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, networkResponse);
                        });
                    });
                    return cachedResponse;
                }
                return fetch(event.request);
            })
    );
});
