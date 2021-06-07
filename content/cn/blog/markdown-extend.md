---
title: "Hugo Markdown 功能拓展"
date: 2021-06-05T17:46:20+08:00
draft: flase
tag:
- markdowm
- blog
- hugo
- hexo
---
本文用于演示本站的对hugo写作功能的拓展以及实现

<!--more-->

## Mermaid 图

{{< mermaid >}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
{{< /mermaid >}}

## youtube 视频

{{< youtube 9mR5y5DAVSg >}}


## 哔哩哔哩视频

{{<bilibili bvid="BV1V64y1k7TA">}}

## 网易云音乐

### 单曲：

{{<netease-music 1499600687>}}



### 歌单：

{{<netease-music songid="6764497041" type="playlist">}}



### HLS流（自适应码率）

{{<hls>}}

## Latex


行内样式：$x=2$

代码块：
$$
f(x)=\int_{-\infty}^\infty\widehat f\xi\,e^{2\pi i\xi x}\,d\xi
$$



{{< admonition tip >}} :(far fa-bookmark fa-fw): 将此页保存为书签，以备将来参考! {{< /admonition >}}

## 参考

>[HEXO博客引用B站视频并自动适配](https://hongcyu.cn/posts/hexo-bilibili.html)
>
>[拓展hugo的markdown_流程图mermaid
>
>[Hugo博客LaTeX渲染)](https://yyqx.online/posts/hugo博客latex渲染/)
