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
## mermaid 图（思维导图，流程图等）

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

{{<bilibili BV1V64y1k7TA>}}


## 参考
[HEXO博客引用B站视频并自动适配](https://hongcyu.cn/posts/hexo-bilibili.html)
[拓展hugo的markdown_流程图mermaid](https://kentxxq.com/contents/拓展hugo的markdown_流程图mermaid/)
