
    document.querySelectorAll(".radish-bangumi-card").forEach((node) => { 
        id = node.getAttribute("data-id"); 
        console.log(id)
        fetch("https://bilibili-api.radish.cloud/pgc/view/web/season?season_id="+id).then(
          res =>{
            return res.json()
          }
        ).then(res=>{
          console.log(res)
          node.innerHTML = `
          <div >
        <div class="moe-bangumi-card mdui-card">
            <div class="moe-bangumi-left"><img class="moe-bangumi-cover-pc"
                    src="${res.result.cover}"
                    referrerpolicy="no-referrer"><img class="moe-bangumi-cover-pe"
                    src="${res.result.square_cover}"
                    referrerpolicy="no-referrer"></div>
            <div class="moe-bangumi-right">
                <div class="moe-bangumi-header">
                    <div class="moe-bangumi-title">${res.result.season_title}</div>
                    <div class="moe-bangumi-subtitle">${res.result.positive.title} | 日本 | ${res.result.new_ep.desc}</div>
                </div>
                <main class="moe-bangumi-content">${res.result.evaluate}</main>
                <div class="moe-bangumi-footer"><a href="${res.result.link}"
                        class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent moe-bangumi-btn"
                        target="_blank"><i class="mdui-icon material-icons">arrow_forward</i> 点击查看</a></div>
            </div>
        </div>
    </div>
          `
        }) 
    })

