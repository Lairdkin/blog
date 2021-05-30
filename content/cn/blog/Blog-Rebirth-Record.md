---
title: "博客重生小记"
date: 2021-05-30T13:16:29+08:00
categories:
- 笔记
tags:
- docker
- java
draft: false
---

2018年的夏天，坚持了仅仅两个月的[**博客**](/blog/博客搭建/)，因为服务器到期关掉了，当时的我还立下了一天一篇博客的“伟大”目标。然而事实证明，我既高估了自己的毅力，也高估了自己的写作能力了——直到博客关停的时候，仓库里还留着10多篇没有完结的草稿。在过去的两年时间里，我常常想把博客重新捡起来，最终也因为一直也没有付诸于实践。
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



## 安装Introdution主题

## 迁移旧博客文件

## 部署github pages和cloudflare

## 为博客添加评论

## 私有部署评论服务

## 主题功能修改