const CACHE_VERSION = "1623779999";
importScripts('./workbox-sw.js')

//2
if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`)
    workbox.setConfig({ debug: false })

    //self.skipWaiting()
    workbox.core.clientsClaim();


    self.addEventListener("message",(event)=>{
        if(event.data && event.data.type === "SKIP_WAITING"){
            self.skipWaiting()
        }
    })


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
        { url: '/index.html', revision: CACHE_VERSION },
        { url: '/posts/index.html', revision: CACHE_VERSION },
        { url: '/categories/index.html', revision: CACHE_VERSION },
        { url: '/about/index.html', revision: CACHE_VERSION },
        { url: '/index.json', revision: CACHE_VERSION },
        { url: '/links/index.html',revision: CACHE_VERSION}
        // ... other entries ...
    ]);


    const matchFunction = ({ url }) => {
        return /\.(?:js|css|json||woff2)$/.test(url['href']) && !/variable.js/.test(url['href']) && !/sw.js/.test(url['href']);
    };

    workbox.routing.registerRoute(
        matchFunction,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'static-resources'
        }),
        
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