# Hugo Markdown 功能拓展

本文用于演示本站的对hugo写作功能的拓展以及实现



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



## youtube 视频

{{< youtube 9mR5y5DAVSg >}}


## 哔哩哔哩视频

{{< bilibili id=BV1V64y1k7TA >}}

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



## TODO

- [ ] PlantUml

	- [plantuml/plantuml-server: PlantUML Online Server (github.com)](https://github.com/plantuml/plantuml-server)

	- [通过JavaScript调用同步实时工作演示 (plantuml.com)](https://plantuml.com/zh/demo-javascript-synchronous)


## 参考

>[HEXO博客引用B站视频并自动适配](https://hongcyu.cn/posts/hexo-bilibili.html)
>
>[拓展hugo的markdown_流程图mermaid
>
>[Hugo博客LaTeX渲染)](https://yyqx.online/posts/hugo博客latex渲染/)

