importScripts('./variable.js')
importScripts('./workbox-sw.js')


if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`)
    workbox.setConfig({debug: false})

    self.skipWaiting()
    workbox.core.clientsClaim();

    
    workbox.routing.registerRoute(
        /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
        new workbox.strategies.CacheFirst({
            cacheName: "images",
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 1000,
                    maxAgeSeconds: 60 * 60 * 24 * 30
                }),
                new workbox.cacheableResponse.CacheableResponsePlugin({
                    statuses: [0, 200]
                })
            ],
        })
    );

    workbox.routing.registerRoute(
        /index\.html/,
        workbox.strategies.networkFirst({
          cacheName: 'workbox:html',
        })
      );

    workbox.routing.registerRoute(
        /^https:\/\/utterances\.radish\.cloud/,
        new workbox.strategies.CacheFirst({
            cacheName: "comment",
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 1000,
                    maxAgeSeconds: 60 * 60 * 24 * 30
                }),
                new workbox.cacheableResponse.CacheableResponsePlugin({
                    statuses: [0, 200]
                })
            ]
        })
    );


    workbox.routing.registerRoute(
        /^https:\/\/cdn\.jsdelivr\.net/,
        new workbox.strategies.CacheFirst({
            cacheName: "static-libs",
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 1000,
                    maxAgeSeconds: 60 * 60 * 24 * 30
                }),
                new workbox.cacheableResponse.CacheableResponsePlugin({
                    statuses: [0, 200]
                })
            ]
        })
    );

    

    workbox.precaching.precacheAndRoute([
        {url: '/index.html', revision: CACHE_VERSION },
        {url:'/posts/index.html', revision: CACHE_VERSION },
        {url:'/categories/index.html', revision: CACHE_VERSION },
        {url:'/about/index.html', revision: CACHE_VERSION },
        // ... other entries ...
      ]);

    workbox.routing.registerRoute(
        /\.(?:js|css|json)$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'static-resources'
        })
    )


    workbox.routing.registerRoute(
        /^https:\/\/fonts\.googleapis\.com/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'google-fonts-stylesheets'
        })
    )

} else {
    console.log(`Boo! Workbox didn't load 😬`)
}