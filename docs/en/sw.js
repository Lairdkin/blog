// 使用{uniqueIdentifier}模板，稍后我们将使用hexo的事件机制，替换成ISO时间，作为每次构建的唯一标识符
var cacheName = 'tellyouwhat-cache-2021-05-28 01:55:54 &#43;0800 CST';
// 在这个数组里面写入您主页加载需要的资源文件
var filesToCache = [
  '/',
  '/categories/',
  '/posts/',
  '/archives/',
  '/about/',
  '/links/',
  '/lib/lunr/lunr.segmentit.js',
  '/lib/katex/katex.min.js',
  '/lib/autocomplete/autocomplete.min.js',
  '/lib/lunr/lunr.min.js',
  '/js/theme.min.js',
  '/lib/cookieconsent/cookieconsent.min.js',
  '/lib/lunr/lunr.zh.min.js',
  '/lib/mapbox-gl/mapbox-gl.min.js',
  '/lib/aplayer/APlayer.min.js',
  'https://utterances.radish.cloud/utterances.5ae8c64c.js',
  'https://utterances.radish.cloud/client.js',
  '/lib/fontawesome-free/all.min.css',
  '/lib/animate/animate.min.css',
  '/lib/katex/katex.min.css',
  '/lib/cookieconsent/cookieconsent.min.css',
  '/lib/normalize/normalize.min.css',
  '/css/style.min.css',
  '/css/my-gitalk.css',
  '/page/2/',
  '/index.json',
  '/favicon.png',
  '/manifest.json',
];



self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache)
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName) {
          // 清理旧版本
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  // 更新客户端
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
        // 使用缓存而不是进行网络请求，实现app秒开
        return response || fetch(event.request);
      })
  );
});