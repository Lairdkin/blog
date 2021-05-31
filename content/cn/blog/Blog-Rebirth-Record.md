---
title: "博客重生小记"
date: 2021-05-30T13:16:29+08:00
categories:
- 日志
tags:
- hugo
- 前端技术

---

2018年的夏天，坚持了仅仅两个月的[**博客**](/blog/博客搭建/)，因为服务器到期关掉了，当时的我还立下了一天一篇博客的“伟大”目标。然而事实证明，我既高估了自己的毅力，也高估了自己的写作能力了，直到博客关停的时候，仓库里还留着10多篇没有完结的草稿。在过去的两年时间里，我常常想把博客重新捡起来，最终也因为各种原因一直也没有付诸于实践。
最近我有了一点宽裕的时间，为了督促自己学习，也为了记录自己学习的过程，我决定复活我的博客。<!--more-->幸运的是，虽然博客关停了，但是之前的文章和草稿还存在github的仓库中。为了让博客快速上线，我决定使用[**Hugo**](https://Hugo.io)用来替换之前使用Hexo。由于Hugo是生成的静态文件，所以我选择了`Github Pages`进行部署，这样可以大幅度减少维护服务器的时间，更重要的是，他是免费的。但是由于某些原因，github在大陆地区的大部分位置都访问缓慢，用我宿舍所使用的电信宽带，甚至直接无法访问。为改善这一问题，我使用了cloudflare和百度云加速对站点进行加速。方案可行，开始实施。

## 安装Hugo
Hugo是一个静态网站生成框架，其官方网站号称是
>"The world’s fastest framework for building websites"

Hugo是使用Go语言实现的,相比使用js的Hexo，生成网站的速度确实要快很多，现在站点大约有70多个静态页面，生成一次只要200ms左右。Hugo生成的网站是纯静态的，无需任何后端，部署和二次开发都很简单，这也是选用Hugo的原因之一。使用Hugo写博客的工作流程很简单：首先使用markdown进行写作，在本地使用Hugo生成静态的网页，然后上传到任何可以访问的web服务器上就完成了，所以现在开始第一步：在本地安装Hugo。

### 使用二进制包进行安装

根据官方提供的快速指南，最直接的安装方式，就是下载二进制包，在Hugo的Github主页中，可以[**下载**](https://github.com/gohugoio/hugo/releases)到各种平台(Windows,Linux,Mac )的二进制包，只要解压并在操作系统的环境变量中添加进去，就可以直接使用，使用`hugo version`指令可以查看hugo的安装情况
```powershell
	PS C:\Users\19796> hugo version
hugo v0.83.1-5AFE0A57+extended windows/amd64 BuildDate=2021-05-02T14:38:05Z VendorInfo=gohugoio
````



### 使用包管理进行安装

不过显然，使用包管理工具才是更加优雅便捷的安装方式，下面提供三种系统的安装方式

#### Mac 

Mac的用户直接使用`Homebrew`或者`MacPorts`就可以快速进行安装：

```shell
brew install Hugo
# 或者
port install Hugo
```
#### Linux

Linux用户也可以直接使用Homebrew进行安装，另外部分发行版，如Ubuntu中的软件源，提供hugo 的包，但是版本较老，不推荐使用，并且由于大多数现代主题使用了scss等技术，可能需要安装hugo-extend版本，镜像源中亦没有提供，所以推荐Linux用户使用二进制包或者Homebrew进行安装。

#### Windows

笔者使用的系统是Windows10，在Windows上也有一些流行的包管理工具中提供了hugo的安装，在这里我们推荐使用`scoop`进行安装

```powershell
scoop install hugo
# 或者安装hugo-extend 
scoop install hugo-extend
```

也可以使用Chocolatey进行安装

```poweshell
choco install hugo -confirm
# or
choco install hugo-extend -confirm
```

最近windows 中自带的包管理winget 终于转正，迎来了1.0版本，不过首批提供的1400个软件中并没有hugo，还是挺遗憾的。

### 使用源代码进行安装

使用源代码构建需要[Git](https://git-scm.com/)和 [Go (版本不低于 Go 1.11)](https://golang.org/dl/)，，然后执行如下脚本就可以进行安装：

```shell
mkdir $HOME/src
cd $HOME/src
git clone https://github.com/gohugoio/hugo.git
cd hugo
go install --tags extended
```

如果不需要Sass/SCSS等功能，可以去除--tags extende语句



### 新建一个站点

当你安装完成hugo时，问题就解决了一大半，然后需要在任何你愿意的位置新建一个目录，用于存放站点文件，进入该目录，执行指令

```shell
hugo new site [your site name]
```

执行完成后，hugo会新建一个和站点同名的文件夹。进入目录,，文件结构如下：

```
├─archetypes
├─content
├─data
├─layouts
├─static
└─themes
```

其中`content`是存放我们写作的文件的地方，`static`是存放站点相关静态文件的地方，例如图片，样式表等，themes是存放主题的地方，任何一个hugo站点，没有主题是无法完成构建，也就是无法看到效果的，所以我们首先需要安装一个主题。



## 安装Introdution主题

进入[ Hugo Themes (gohugo.io)](https://themes.gohugo.io/)可以查看所有的Hugo主题，选择一个即可。大部分的主题都实现了开箱即用，并且有着完善的教程，经过挑选，我选中了[Hugo Theme Introduction )](https://themes.gohugo.io/hugo-theme-introduction/)这一款主题，引用主题主页的介绍，该主题有如下优点：

- 多语言支持，官方支持英语，法语，德语，中文等多种语言

- 使用Markdown自定义页面

- 有一个展示项目的模块，还有博客功能

- 页面有着平滑的加载和跳转动画（确实是一个比较好的优点，很多主题需要自己添加插件）

- 通过`config.toml`直接定制功能

- 贯穿始终的Markdown风格，包括文章标题

- 支持代码高亮（代码高亮效果一言难尽）

其中的项目展示功能，优秀的动画系统让，我选择了这个主题，另外该主题还自动适配了黑暗模式，体验很好

### 准备

安装本主题需要`hugo-extend`版本，另外需要在系统上全局安装一些npm包用于编译scss

```shell
npm i -g postcss postcss-cli autoprefixer
```

  📌安装完成后，如果执行hugo server运行正常，但是执行构建报如下错误：

```
Error: Error building site: POSTCSS: failed to transform "css/main.css" (text/css): resource "sass/sass/style..." not found in file cache
```

可以参考：[CSS build issues · Issue #210 · victoriadrake/hugo-theme-introduction ](https://github.com/victoriadrake/hugo-theme-introduction/issues/210#issuecomment-651869483)

### 安装主题

安装完成后可以进入你站点的根目录，安装主题

```shell
git clone https://github.com/victoriadrake/hugo-theme-introduction.git themes/introduction
```

clone完成后，主题安装在站点目录的themes/introduction里，hugo的主题中均包含一个示例站点，在站点目录执行如下指令查看示例站点：

```
cd themes/introduction/exampleSite/
hugo serve  --themesDir ../..
```

#### 配置

站点配置文件位于`config.toml`文件中

<details><summary>点击查看本站完整的站点配置，关键位置均有注释</summary>


```toml
publishdir                       = "docs"
baseURL                          = "https://radish.cloud/"   # Your domain name. Must end with "/"
theme                            = "introduction"
DefaultContentLanguage           = "cn"                    # Default language for multilingual sites
# disqusshortname                 = ""                     # https://gohugo.io/content-management/comments
# googleAnalytics                 = ""                     # https://gohugo.io/templates/internal/#google-analytics

[params]
    themeStyle                   = "auto"                  # Choose "light" or "dark" or "auto"
    favicon                      = "/img/fav.ico"          # Path to favicon file
    showRSSButton                = true             # Show rss button in navigation
    fadeIn                       = true                    # Turn on/off the fade-in effect
    fadeInIndex                  = false                   # Turn on/off the fade-in effect on the index page even if fade-in was otherwise turned off
    dateFormat                   = "Jan 2, 2006"
    email                        = "mx@radish.cloud"   # E-mail address for contact section
    customCSS                  = ["foo.css"]             # Include custom css files placed under assets/
    # customJS                   = ["foo.js"]              # Include custom JavaScript files placed under assets/
    # plausible                  = true                    # Use Plausible analytics (requires an account at Plausible.io)
    toc = true
    # autoCollapseToc = true
    

    [params.utteranc]
        enable = true
        repo = "Lairdkin/blog"    # 存储评论的Repo，格式为 owner/repo
        issueTerm = "pathname"           # 表示你选择以那种方式让github issue的评论和你的文章关联可以选择默认的pathname。
        theme = "preferred-color-scheme" 

    # Configure the home page
    [params.home]
        introHeight              = "fullheight"            # Input either "medium" or "large" or "fullheight"
        showLatest               = true                    # Show latest blog post summary
        showAllPosts             = false                   # Set true to list all posts on home page, or set false to link to separate blog list page
        allPostsArchiveFormat    = true                    # show all posts in an archive format
        numberOfProjectsToShow   = 3                       # Maximum number of projects to show on home page. Unset or comment out to show all projects
        localTime                = true                    # Show your current local time in contact section
        timeZone                 = "Asia/Shanghai"   # Your timezone as in the TZ* column of this list: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
        timeFormat               = "zh-CN"                 # Language specific format to use
    [params.projects]
        useTwoColumns            = false                   # Use a layout with two columns instead of three

    # Share buttons on blog post pages
    [params.share]
        twitter                  = true
        facebook                 = true
        pinterest                = true

    # Social icons appear in introduction and contact section. Add as many more as you like.
    # Icon pack "fab" includes social network icons, see: https://fontawesome.com/icons?d=gallery&s=brands&m=free
    # Icon pack "fas" includes solid style icons, see: https://fontawesome.com/icons?d=gallery&s=solid&m=free
    [[params.social]]
        url   = "https://twitter.com/menxin74"
        icon  = "twitter" # icon name without the 'fa-'
        icon_pack = "fab"
    [[params.social]]
        url   = "https://t.me/radishcloud"
        icon  = "telegram" # icon name without the 'fa-'
        icon_pack = "fab"
    [[params.social]]
        url   = "https://github.com/RadishKin"
        icon  = "github" # icon name without the 'fa-'
        icon_pack = "fab"
    [[params.social]]
        url = "https://weibo.com/1910759497"  # For a direct email link, use "mailto:test@example.org".
        icon = "weibo" # icon name without the 'fa-'
        icon_pack = "fab"
    [[params.social]]
        url   = "https://discord.gg/z3nEreaJvk"
        icon  = "discord" # icon name without the 'fa-'
        icon_pack = "fab"
        html_attributes = "rel=\"me\"" # Add rel attribute for Mastodon profile link verification


    [taxonomies]
    tag = "tags"
    series = "series"

    [markup]
    defaultMarkdownHandler = "goldmark"
    [markup.goldmark]
    [markup.goldmark.renderer]
        unsafe = true
    [markup.highlight]
        codeFences = true
        guessSyntax = true
        hl_Lines = ""
        lineNoStart = 1
        lineNos = true
        lineNumbersInTable = false
        noClasses = true
        # For styles, see https://xyproto.github.io/splash/docs/longer/all.html
        style = "monokai"
        tabWidth = 4

    [languages]
        [languages.en]
            languageName     = "English"
            languageCode     = "en-us"
            contentDir       = "content/en"
            weight           = 1
            title            = "Anonymous blog"
            [languages.en.params]
                description  = "Website Description"   # Max 160 characters show in search results
                # footerText   = ""                      # Text to override default footer text (markdown allowed)

        [languages.cn]
            languageName     = "简体中文"
            languageCode     = "zh-CN"
            contentDir       = "content/cn"
            weight           = 0
            title            = "无名博客"
            [languages.cn.params]
                description  = "站点描述"
                # footerText   = "  © 2017-2021 萝卜炖鱼丸 | 蒙ICP备14003205号-2 | CC BY-SA 4.0 许可"

    
```

</details>

首先应该修改languages，示例站点的默认配置是英语，德语，首先删除不需要的语言，按如下格式配置语言：

```toml
[languages.cn]
            languageName     = "简体中文"
            languageCode     = "zh-CN"
            contentDir       = "content/cn"
            weight           = 0
            title            = "无名博客"
            [languages.cn.params]
                description  = "站点描述"
```

其中language 后面的代码，简体中文应该zh-CN，繁体中文为zh-TW，此处笔者为了方便修改了主题默认的国际化文件名称，国际化文件目录`themes\introduction\i18n\`。使用DefaultContentLanguage  参数可以选择默认显示的站点语言，使用`hugo new page`也会默认优先新建该语言文件。

语言设置中还有一项` footerText `参数，在该参数中填入的文本会覆盖站点默认的footer内容，由于没有css，效果较差。建议需要修改footer的直接去对应语言的i18n文件中修改。

通过修改`markup.highlight`中 `style`属性修改代码高亮的风格，但是该主题默认的代码块区域css和大多数风格有冲突，需要修改主题样式，具体修改参见 [**主题功能修改**](#主题功能修改) 章节

其他部分默认配置均根据示例配置文件修改或者保持默认即可



### 编译站点

修改完成配置后就可以可以编译静态站点了，首先在配置文件中添加`publishdi = "docs"`配置，编译生成的文件会默认放在站点根目录的/docs目录中，该目录是github pages的默认目录，方便后面部署。

保存配置文件后执行

```
hugo
```

即可生成站点文件

其中docs/

## 迁移旧博客文件

## 部署github pages和cloudflare

## 为博客添加评论

## 私有部署评论服务

## 主题功能修改 



## TODO

- [ ] 添加博客邮件订阅功能，参见 [博客利器：使用 mailchimp 将 RSS 转为邮件订阅 - 少数派 (sspai.com)](https://sspai.com/post/60025#!)

