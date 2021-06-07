
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
