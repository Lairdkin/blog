# Hugo Markdown 功能拓展

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

## 地图


{{< mapbox lng=-122.252 lat=37.453 zoom=10 marked=false light-style="mapbox://styles/mapbox/streets-zh-v1" >}}


## Echarts 
{{< echarts >}}
title:
    text: 折线统计图
    top: 2%
    left: center
tooltip:
    trigger: axis
legend:
    data:
        - 邮件营销
        - 联盟广告
        - 视频广告
        - 直接访问
        - 搜索引擎
    top: 10%
grid:
    left: 5%
    right: 5%
    bottom: 5%
    top: 20%
    containLabel: true
toolbox:
    feature:
        saveAsImage:
            title: 保存为图片
xAxis:
    type: category
    boundaryGap: false
    data:
        - 周一
        - 周二
        - 周三
        - 周四
        - 周五
        - 周六
        - 周日
yAxis:
    type: value
series:
    - name: 邮件营销
      type: line
      stack: 总量
      data:
          - 120
          - 132
          - 101
          - 134
          - 90
          - 230
          - 210
    - name: 联盟广告
      type: line
      stack: 总量
      data:
          - 220
          - 182
          - 191
          - 234
          - 290
          - 330
          - 310
    - name: 视频广告
      type: line
      stack: 总量
      data:
          - 150
          - 232
          - 201
          - 154
          - 190
          - 330
          - 410
    - name: 直接访问
      type: line
      stack: 总量
      data:
          - 320
          - 332
          - 301
          - 334
          - 390
          - 330
          - 320
    - name: 搜索引擎
      type: line
      stack: 总量
      data:
          - 820
          - 932
          - 901
          - 934
          - 1290
          - 1330
          - 1320
{{< /echarts >}}
## youtube 视频

{{< youtube 9mR5y5DAVSg >}}


## 哔哩哔哩视频

{{<bilibili bvid="BV1V64y1k7TA">}}

## 网易云音乐

### 单曲：

{{<music netease song 1499600687>}}



### 歌单：

{{<music netease playlist 6764497041>}}


## Latex


行内样式：$x=2$

代码块：
$$
f(x)=\int_{-\infty}^\infty\widehat f\xi\,e^{2\pi i\xi x}\,d\xi
$$

## 打字段落

{{< typeit code=java >}}
public class HelloWorld {
    public static void main(String []args) {
        System.out.println("Hello World");
    }
}
{{< /typeit >}}


## 参考

>[HEXO博客引用B站视频并自动适配](https://hongcyu.cn/posts/hexo-bilibili.html)
>
>[拓展hugo的markdown_流程图mermaid
>
>[Hugo博客LaTeX渲染)](https://yyqx.online/posts/hugo博客latex渲染/)

