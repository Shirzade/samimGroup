let CACHE_VERSION = 1.04

let CURRENT_CACHE = {
    static: 'static-cache-v' + CACHE_VERSION,
    dynamic: 'dynamic-cache-v' + CACHE_VERSION
}

self.addEventListener('install', (event) => {
    console.log('installing service worker', event)
    event.waitUntil(
        caches.open(CURRENT_CACHE['static'])
            .then((cache) => {
                cache.addAll([
                    '/js/chunk-vendors.6c5ee6b.js',
                    '/js/app.d81ffad3.js'
                ])
            })
    )
})

self.addEventListener('activate', (event) => {
    console.log('activating service worker', event)
    let expectedCacheNames = Object.values(CURRENT_CACHE)

    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.forEach(cacheName => {
                    if (!expectedCacheNames.includes(cacheName)) {
                        console.log('Deleting out of date cache:', cacheName)
                        return caches.delete(cacheName)
                    }
                })
            )
        })
    )

})

self.addEventListener('fetch', (event) => {

    event.respondWith(fetch(event.request))

})

