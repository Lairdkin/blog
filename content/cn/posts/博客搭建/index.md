---
title: Hexo博客搭建
categories:
- 笔记
tags:
- Hexo
- nodejs
date: 2018-05-28T01:56:47+08:00
---




最近记性实在是下降的厉害，搞的东西天天忘，所以把咕了好几年的博客又捡起来了，这次选用了Hexo作为博客的引擎，支持markdown，轻量，部署简单，不过安装中还是踩了一些坑，简单的记录下（其实就是博客太空水一篇2333

<script>
    fetch("https://demo.radishkin.workers.dev/api/set?url="+window.btoa(location.href)).then(res=>{
        console.log(res)
    })
</script>

## 环境
- 服务器：阿里云学生机 轻量级应用服务器 

- 服务器系统：Ubuntu16.04

    阿里云一直不提供1804的镜像，但是不推荐手动升级，容易挂

- 本地系统：Manjaro 18.0 Illyria

## 部署
Hexo生成的是纯静态页面，所以部署只需将hexo生成的public目录放置在 nginx 站点目录下就可以

### Hexo 安装
安装Hexo 前确保系统有以下软件：
- Node.js
- Git

因为Ubuntu源中提供的nodejs版本非常老，所以我们使用![nodejs](https://nodejs.org)官网提供的一个安装方式来安装nodejs

```bashv
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -sL https://deb.nodesource.com/setup_11.x | bash -
apt-get install -y nodejs
```
这个脚本会自动识别系统版本并添加ppa源

然后
```bash
# 安装git
sudo apt install git
```

因为我们是在服务器端调用hexo生成静态页面，所以本地只需要安装git就可以

```bash
# manjaro 安装git
sudo pacman -S git 
# 也可以在本地安装nodejs，方便调试
sudo pacman -S nodejs
```
然后安装hexo
```bash
 npm install -g hexo-cli
```

测试一下
```bash
hexo -v
```

输出
```bash
hexo-cli: 1.1.0
os: Linux 4.19.1-1-MANJARO linux x64
http_parser: 2.8.1
node: 11.1.0
v8: 7.0.276.32-node.7
uv: 1.23.2
zlib: 1.2.11
ares: 1.15.0
modules: 67
nghttp2: 1.34.0
napi: 3
openssl: 1.1.1
icu: 63.1
unicode: 11.0
cldr: 34.0
tz: 2018e

```

Hexo 安装完毕


### Hexo新建站点和基本配置
选择一个存放站点文件的目录，执行
```bash
hexo init “站点名”
```
hexo会在当前目录下新建一个站点文件夹，cd进站点文件夹，执行
```bash
npm install
```
执行完成后，生成目录如下
```
$ tree blog 
blog
├── _config.yml
├── db.json
├── node_modules
├── package.json
├── package-lock.json
├── scaffolds
├── source
└── themes
```

其中_config.yml是整个站点的配置文件，source是存放文章来源的md文件的，package.json存放了站点的依赖，theme是主题文件

在站点文件夹内，使用
```bash
hexo g
```
生成静态文件，静态文件存放在该目录的`public/`下


然后编辑_config.yml
```yaml

# 站点基本信息
title:  #站点名称
subtitle:  #子标题
description: 
keywords: 
author: 
language: zh-cn #语言设置为简体中文
timezone:

# 站点链接配置
url: http://ljmx.top
root: /
permalink: :year/:month/:title.html
permalink_defaults:

# 一些默认文件的配置
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:

# 使用hexo new 时写作模板
# 因为平时都是直接新建md文件，所以这里一般都用不上QAQ
# 
new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link: true # Open external links in new tab
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace:
  
# 主页设定，这个一般根据主题来修改
index_generator:
  path: ''
  per_page: 10
  order_by: -date
  
# 标签
default_category: uncategorized
category_map:
tag_map:

#日期格式
date_format: YYYY-MM-DD
time_format: HH:mm:ss

# 分页
per_page: 10
pagination_dir: page

# 拓展，主题和插件
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: anatole

# Deployment
## Docs: https://hexo.io/docs/deployment.html
# 自动部署配置，没用过2333
deploy:
  type:

```


然后可以选择一个自己喜欢的主题，放到/theme 文件夹里，在配置文件theme行写上主题名称，生成文件即可更换主题

>我们使用的主题依赖 `hexo-render-pug`插件，所以启用前需要执行 `npm install hexo-render-pug --save`安装，才能正常渲染

### Nginx 配置
ubuntu1604 安装nginx
```
sudo apt install nginx
```

查看服务状态
```
service nginx status
```

Active状态显示 active证明配置正常

编辑`/etc/nginx/nginx.conf`
```bash
#修改第一行，变更nginx执行权限，其实不推荐这样做，应该修改文件的访问权限，但是我懒233
user root

#增加一下一行到文件中
include /etc/nginx/conf.d/*.conf;
```

然后在`/etc/nginx/conf.d`目录中新建一个`站点名.conf`的文件，编辑这个文件
```bash

server {
    listen 4000;         # 监听端口
    server_name ljmx.top;    # 站点域名
    root  /var/www/public;     # 站点根目录,指向自己站点的public文件夹
    index index.html index.htm index.php;   # 默认导航页
}
```

重启nginx
```bash
service nginx restart
```

### webhook实现自动部署
现在博客部署好了，但是我每次写完文章，push到github，然后登录服务器，pull下来，执行生成语句，这样比较繁琐，所以我们的webhook就登场了

webhook是git上的一个服务，他提供了一种能力，当仓库发生变动时，webhook会自动post一段信息到预先设定的地址。通过这种方式，我们可以实现自动化生成和部署博客


在github项目主页中，点击`setting`>`webhooks`，然后ADD一个新的webhook，Payload URL填写服务器ip+端口号+请求路径，请求类型选json，sceret随便生成，但是要记住。

在hexo站点根目录下新建一个叫webhook.js文件，
填入以下内容:
```javascript
var http = require('http')
var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/webhooks_push', secret: '' })
// 上面的 secret 保持和 GitHub 后台设置的一致
function run_cmd(cmd, args, callback) {
  var spawn = require('child_process').spawn;
  var child = spawn(cmd, args);
  var resp = "";
  child.stdout.on('data', function(buffer) { resp += buffer.toString(); });
  child.stdout.on('end', function() { callback (resp) });
}
handler.on('error', function (err) {
  console.error('Error:', err.message)
})
handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
    run_cmd('sh', ['./deploy.sh'], function(text){ console.log(text) });
})
try {
  http.createServer(function (req, res) {
    handler(req, res, function (err) {
      res.statusCode = 404
      res.end('no such location')
    })
  }).listen(6000)
  //可以在这修改监听端口号
}catch(err){
  console.error('Error:', err.message)
}

```

在目录下新建一个deploy.sh的文件，填入以下内容
```bash
#填入markdown文件所在位置
cd /root/website/myblog/source
git reset --hard
git pull origin master  
hexo generate

```

然后安装依赖：
```
npm install github-webhook-handler --save
```
运行
```
node webhook.js
```

可以使用pm2，或者nohup等方式守护进程

这样当提交pull request的时候，服务器就会自动生成静态文件并部署了

## 其他

因为时间匆忙（其实就是懒，所以很多东西还没有完善，留给下篇博文吧

待完成
- [ ] 修改博客模板
- [ ] 全站ssl
- [ ] 访问统计
- [ ] 资源文件夹
- [ ] 多用户