import "/swfunc.js"
// 在这个数组里面写入您主页加载需要的资源文件
const BASE_CACHE_FILES = [
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
  '/lib/typeit/typeit.min.js',
  'https://utterances.radish.cloud/utterances.5ae8c64c.js',
  'https://utterances.radish.cloud/client.js',
  '/lib/fontawesome-free/all.min.css',
  '/lib/animate/animate.min.css',
  '/lib/katex/katex.min.css',
  '/lib/cookieconsent/cookieconsent.min.css',
  '/lib/normalize/normalize.min.css',
  '/css/style.min.css',
  '/images/avatar.jpg',
  '/page/2/',
  '/index.json',
  '/favicon.png',
  '/manifest.json',
];


const CACHE_VERSION = "1623241188";


const OFFLINE_CACHE_FILES = [
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
  '/lib/typeit/typeit.min.js',
  '/lib/fontawesome-free/all.min.css',
  '/lib/animate/animate.min.css',
  '/lib/katex/katex.min.css',
  '/lib/cookieconsent/cookieconsent.min.css',
  '/lib/normalize/normalize.min.css',
  '/css/style.min.css',
  '/images/avatar.jpg',
  '/page/2/',
  '/index.json',
  '/favicon.png',
  '/manifest.json'
];

const NOT_FOUND_CACHE_FILES = [
    '/css/style.min.css',
    '/js/theme.min.js',
    '/404.html',
];

const OFFLINE_PAGE = '/index.html';
const NOT_FOUND_PAGE = '/404.html';

const CACHE_VERSIONS = {
    assets: 'assets-v' + CACHE_VERSION,
    content: 'content-v' + CACHE_VERSION,
    offline: 'offline-v' + CACHE_VERSION,
    notFound: '404-v' + CACHE_VERSION,
};

// Define MAX_TTL's in SECONDS for specific file extensions
const MAX_TTL = {
    '/': 3600,
    html: 3600,
    json: 86400,
    js: 86400,
    css: 86400,
};

const CACHE_BLACKLIST = [
    //(str) => {
    //    return !str.startsWith('http://localhost') && !str.startsWith('https://gohugohq.com');
    //},
];

const SUPPORTED_METHODS = [
    'GET',
];

