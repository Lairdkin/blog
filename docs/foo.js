console.log("loading Customer Javascript file...")
if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then(() => {
            console.log('Service Worker Registered');
        });
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', function (e) {
  console.log('before install prompt')
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  showAddToHomeScreen();
});

function addToHomeScreen() {
    deferredPrompt.prompt();  // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
      .then(function (choiceResult) {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        // 释放不再有用的deferredPrompt对象
        deferredPrompt = null;
      });
  }

function showAddToHomeScreen() {
    var a2hsBtn = document.querySelector(".ad2hs-prompt");
    a2hsBtn.style.display = "block";
    a2hsBtn.addEventListener("click", addToHomeScreen);
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
