---
title: "为Hugo添加PWA支持"
subtitle: ""
date: 2021-06-09T18:30:58+08:00
lastmod: 2021-06-09T18:30:58+08:00
draft: true
author: ""
authorLink: ""
description: ""

tags: ["hugo","pwa"]
categories: ["博客搭建笔记"]

hiddenFromHomePage: false
hiddenFromSearch: false

featuredImage: ""
featuredImagePreview: ""

toc:
  enable: true
math:
  enable: false
lightgallery: false
license: ""
---

本文将提供在hugo中添加PWA支持的教程。

<!--more-->

## 什么是PWA

PWA，即`Progressive-Web-App`，渐进式网络应用，概念有点类似于微信小程序，和MIUI的快应用，但是比他们更简单，**没有平台依赖性，你只需在浏览器中访问支持PWA的网页，就能收到安装提示。**

PWA可以

- 让你离线浏览内容，摆脱对于网络的束缚
- 提示安装到桌面，提升用户粘性/依赖度
- 即使没有打开网页，也能主动推送通知
- 即刻安装，免除对于存储空间的考虑

