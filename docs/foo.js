
let deferredPrompt;

window.addEventListener('beforeinstallprompt', function (e) {
  e.preventDefault();
  deferredPrompt = e;
  showAddToHomeScreen();
});

function showAddToHomeScreen() {
  tata.log("<span>开启离线访问功能?</span>", '<a href="javascript:void(0);" style="color:#455760;" onclick="addToHomeScreen()">好的</a>', {
    position: "bm",
    duration: 4000
  })

}

function addToHomeScreen() {
  deferredPrompt.prompt();
  deferredPrompt.userChoice
    .then(function (choiceResult) {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
}


fetch("https://v1.hitokoto.cn/?c=a").then(res => {
  return res.json()
}).then(res => {
  try {
    if (res.from_who === null) {

      document.getElementById("oneword").innerText = res.hitokoto + "     ————《" + res.from + "》"
    } else {
      document.getElementById("oneword").innerText = res.hitokoto + "     ————" + res.from_who + "《" + res.from + "》"
    }
    console.log(res.hitokoto)
  } catch (err) { }
})


// let parm1 = ''
// if (document.cookie.indexOf("uv=false") == -1) {
//   parm1 = "&uv=true"
//   var t = new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
//   document.cookie = "uv=false; expires=" + t.toGMTString() + ";path=/";
// }
// fetch("https://analytics.radishkin.workers.dev/api?url=" + window.btoa(location.href) + parm1).then(res => {
//   return res.json()
// }).then(res => {
//   try {
//     document.getElementById("busuanzi_value_page_pv").innerText = res.pv
//   } catch (err) { }
//   try {
//     document.getElementById("busuanzi_container_site_uv").innerText = res.uv
//   } catch (err) { }
//   try {
//     document.getElementById("busuanzi_container_site_pv").innerText = res.total
//   } catch (err) { }
// })
