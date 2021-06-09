console.log("loading Customer Javascript file...")
if('serviceWorker' in navigator) {
    const PREFETCH = true;
    const PREFETCH_LINK_RELS = ['index','next', 'prev', 'prefetch'];
    function prefetchCache() {
        if(navigator.serviceWorker.controller) {
            let links = document.querySelectorAll(
                PREFETCH_LINK_RELS.map((rel) => {
                    return 'link[rel='+rel+']';
                }).join(',')
            );
            console.log("links")
            if(links.length > 0) {
                Array.from(links)
                    .map((link) => {
                        let href = link.getAttribute('href');
                        navigator.serviceWorker.controller.postMessage({
                            action : 'cache',
                            url : href,
                        });
                    });
            }
        }
    }

    navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then(() => {
            console.log('Service Worker Registered');
        });

    navigator.serviceWorker
        .ready
        .then(() => {
            if(PREFETCH) {
                prefetchCache();
            }
        });
}

fetch("https://v1.hitokoto.cn/?c=a").then(res => {
    return res.json()
}).then(res => {
    try {
        if(res.from_who===null){
            
            document.getElementById("oneword").innerText = res.hitokoto+"     ————《"+res.from+"》"
        }else{
            document.getElementById("oneword").innerText = res.hitokoto+"     ————"+res.from_who+"《"+res.from+"》"
        }
        console.log(res.hitokoto)
      } catch(err) {}
    try{
        document.getElementById("busuanzi_container_site_uv").innerText = res.uv
    }catch(err){}
    try{
        document.getElementById("busuanzi_container_site_pv").innerText = res.total
    }catch(err){}
})


let parm1 = ''
if (document.cookie.indexOf("uv=false") == -1) {
    parm1 = "&uv=true"
    var t = new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
    document.cookie = "uv=false; expires=" + t.toGMTString() + ";path=/";
}
fetch("https://analytics.radishkin.workers.dev/api?url=" + window.btoa(location.href) + parm1).then(res => {
    return res.json()
}).then(res => {
    try {
        document.getElementById("busuanzi_value_page_pv").innerText = res.pv
      } catch(err) {}
    try{
        document.getElementById("busuanzi_container_site_uv").innerText = res.uv
    }catch(err){}
    try{
        document.getElementById("busuanzi_container_site_pv").innerText = res.total
    }catch(err){}
})
