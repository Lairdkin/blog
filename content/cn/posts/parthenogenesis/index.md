---
title: "单性生殖”的读书笔记"
subtitle: ""
date: 2021-06-21T01:07:28+08:00
lastmod: 2021-06-21T01:07:28+08:00
draft: false
author: "饕餮君"
authorLink: "https://weibo.com/u/3627118341"
description: "简述了近日发表于biorxiv的“雄鼠怀孕”一文、孤雌生殖的代表“辉夜姬”，以及利用胚胎干细胞实现孤雌、孤雄生殖。"

tags: [雄鼠怀孕,孤雌生殖,孤雄生殖,基因印记]
categories: [读书笔记]

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



终于把考研分享的ppt做完了……有了一点点多余的时间，来学习一下最近很火的“单性生殖”吧。
最近一篇预印本文章很火，讲的是第二军医大通过构建相连的妊娠微环境，成功使雄性大鼠产生后代的故事。

简单来说呢，这个实验的第一步要先把一只经过去势（通俗来讲叫做“阉割”，去除睾丸、附睾、精囊等）的雄性大鼠和一只雌性大鼠通过手术结合在一起，构造一只人工“连体婴”（parabiont，连体生物）。构建这个模型的目的，是要让两只大鼠通过伤口的血管吻合共享血液，在雄性大鼠体内构造出“雌性微环境”（female microenvironment）。

成功构建出“连体婴”之后，第二步是要对其中的雄性大鼠进行子宫移植手术（uterus transplantation，UTx）。当然，移植的子宫来自其他雌性大鼠。（顺便一提，我发现他们在描述吻合右侧髂总静脉的时候，有一个iliac写成了lilac，髂变成了丁香……）

然后就到了第三步，也就是将囊胚期（胚胎发育的一个阶段，受精卵经过多次分裂，由称为“桑椹胚”的致密细胞团发育成具有空腔的胚泡）的胚胎植入两只大鼠的子宫内。
值得注意的是，为了在雄性大鼠体内构造出妊娠所需的血液环境，在移植前三天需要让经过输精管结扎的雄鼠与雌性“连体婴”交配，使雌性进入假孕状态。之后，就是从另外的雌性大鼠身上采集胚泡，进行胚胎移植。

随后的统计显示，有30.07%的胚胎在雌性子宫中正常发育，而对应的雄性数据为9.64%；并且有54.35%的“连体婴”均未产生正常胚胎，而雌性未怀孕的“连体婴”中的雄性一定不会怀孕，反之则不然。因此，研究者推测雌性怀孕是雄性怀孕的必要条件，胚胎只有在接触怀孕雌性的血液时，才能在雄性子宫中正常发育。

然后，故事讲到了最后一步。在胚胎发育至21.5天（ED21.5）时，研究者对所有的实验个体进行剖宫产，观察胎儿发育情况。在雄性大鼠产下的胎儿中出现了一些异常的死胎（而在ED18.5的手术中没有发现异常，因此推测这种异常发生于胚胎发育晚期），而其他活胎的各项主要指标与正常交配的雌鼠、“连体婴”雌鼠相比均无明显差异。
最终的数据表明，在280枚移植给雄鼠的胚胎中，有10只存活到了成年。

以上就是这篇文章的主要内容，我们不难看出，这篇文章主要试图讲述的故事是“雄鼠怀孕”，具体方法是用“连体婴”和UTx构造出一个容器，再移植成熟的胚泡进去。
而最近又被拿出来和这篇文章做比较的“辉夜姬”（kaguya，我老是想到輝夜の城で踊りたい），其核心是通过重构卵母细胞发育出可存活的孤雌生殖小鼠个体，二者的关系大概就是“容器”和“内容物”的关系吧。

那么既然说到了“辉夜姬”，就再把它相关的东西也来学习一下吧。
首先我们要注意，相比发表在预印本网站上、未经过同行评议的“雄鼠怀孕”研究，“辉夜姬”的研究在2004年以Letter形式发表于Nature，此后更进一步的研究在2007年发表于Nature biotechnology。

在介绍“辉夜姬”之前，我们要先了解一个前置知识，是什么让哺乳动物失去了孤雌生殖的能力？目前的主流观点是“基因印记”的存在，即一个等位基因在父本和母本来源中存在不同的表达。
举个例子吧，比如说有一个基因叫做Igf2，它的DNA甲基化（在DNA的嘧啶上进行甲基修饰，是控制基因转录的重要机制，高甲基化不利于基因表达）模式在精子和卵子中有所区别。这种区别使得两性生殖细胞中的Igf2表达存在差异，从而阻止了孤雌生殖。

研究人员基于“基因印记的存在是孤雌生殖的障碍”这一思路，使用H19基因缺失13kb（阻断H19等位基因表达、增强母系Igf2表达）的小鼠卵母细胞作为未发育（Ng）组，与完全发育（Fg）组构建孤雌胚胎（NgH19Δ13/Wgwt）。
如果再捋一下的话大概意思就是，正常情况下H19是父系下调、Igf2是母系下调，而H19Δ13在卵母细胞中“制造”出了类似父系的这两个基因的表达情况，即H19表达下调、Igf2表达上调。因此，NgH19Δ13/Wgwt基因型的胚胎就拥有了类似父系和母系结合的基因表达情况。（捋对没有啊我自己都晕了……

之后的实验证实，这些孤雌胚胎被移植到雌鼠子宫中后，最多发育到第17.5天便不会继续发育。在第19.5天的10只活胎中，有两只存活了下来（存活率0.5%），其中一只长大成“人”，就是大名鼎鼎的“辉夜姬”。
之后，“辉夜姬”（是一只漂亮的“小黑”C57）成功交配并产下了正常的幼崽。她自2003.2.3降生，共存活了793天。之后，研究者们制造出了更多的双母小鼠，研究发现其平均寿命比对照组长186天。

而在文章的最后，作者推测另外两个基因Gtl2（异常下调）与Dlk1（异常上调）的表达异常可能是阻止小鼠孤雌生殖的障碍，为下一篇文章埋下了伏笔。

在2007年的文章中，作者认为H19Δ13的效率实在太低（371个细胞就活了俩……），因此采用了H19和Dlk1（还记得上一篇文章的Dlk1吗？）的双敲除小鼠，由其构建的胚胎被命名为NgΔDouble/fg。
研究者们构建了323枚重组胚胎，最终有27只幼崽活到了成年，其中有5只接受了繁殖能力测试，并产下了遗传正常的幼鼠。
在此后的表型测试中，双母小鼠除了出生后体重较低、IG-DMR缺失以外，在表型上与野生型小鼠并无不同。

这一研究最大的意义在于阐明了孤雌生殖的唯一屏障——基因印记。研究表明，只要通过技术手段“擦除”基因印记，就可能产生正常的双母小鼠。
之前有人认为，缺乏精子RNA一类的男性来源的因子可能是体细胞核移植成功率低的原因。然而这一研究表明，配子融合后精子特异的转录本哺乳动物的发育并无必要。

以上，由“辉夜姬”开启的孤雌生殖小鼠研究的介绍总算告一段落……会有人看到这儿吗？
而在查找“辉夜姬”相关资料时，我顺便发现了由我国科学家制造出的第一例孤雄生殖小鼠……这不说说有点过意不去吧？那就来吧。

与以“辉夜姬”为代表的使用未成熟卵母细胞进行孤雌生殖的研究不同，发表于Cell stem cell上的这篇文章采用了单倍体胚胎干细胞（HaESCs，只含有一套染色体、具有多向分化能力的细胞，包括孤雌的phESCs和孤雄的ahESCs）。
与卵母细胞和精子相比，HaESCs呈现出整体上的低甲基化，其模式类似于原始生殖细胞（PGCs，未分化为精子或卵子的生殖细胞）。

科学家一拍大腿（没有），我们费了那么大劲来“擦除”基因印记，现在居然有现成的低甲基化送上门！于是，他们利用老朋友CRISPER-Cas9删除了phESCs中的H19、IG（Dlk1）和Rasgrf1的印记区域（比2KO多一个Rasgrf1），产生了3KO-phESCs。
然后将得到的3KO-phESCs注入到MII卵母细胞（位于第二次减数分裂中期的卵母细胞）中，总而言之一通操作之后就产生了来自phESCs的双母小鼠。

随后的表型检测证明，相较于2KO小鼠，3KO小鼠的活动距离、运动速度、生长曲线恢复了正常（与野生型相比无明显差异），显示额外敲除Rasgrf1印记区能够有效改善双母小鼠的表型。

然后，注意，费劲的地方来了——研究者们显然不满足于制造表型改善的双母小鼠，他们开始向着孤雄生殖进军了。
但孤雄生殖的难度远大于孤雌，首先，ahESCs中的印记区域多于phESCs；其次，phESCs注射进MII卵母细胞就完事儿了，但ahESCs需要一个去核的卵细胞，再将其与另一只雄鼠的精子一同注入。

研究者们先选取了六个（这已经比3KO多一倍了），然而制造出来的6KO-ahESCs最多只能发育到ED8.5，远不能满足活产的要求。
之后，研究者们又试图将6KO-ahESCs与精子共注射，通过四倍体互补产生双父小鼠。这次小鼠倒是造出来了，但所有的小鼠都有严重的过度生长和水肿，出生后不久便死于哺乳、呼吸困难，即使活到足月体内的压力也明显更高。

这显然是敲得还不够啊——研究者们又发现，6KO小鼠的Gnas印记区有明显的低甲基化。在试着敲除Gnas印记区的外显子、生成7KO-ahESCs后，他们终于从477个囊胚中得到了12只7KO双父小鼠。
相比于6KO，7KO小鼠在体重、体内压方面的表型得到了显著改善，有两只小鼠活过了48h，但没有一只活到成年。

这项研究除了最引人注目的“孤雄生殖”，也证明了仅靠广泛甲基化的HaESCs是不足以满足单性生殖的要求的，必须要对其进行修饰。
至于为什么孤雄繁殖的小鼠表型异常、无法存活，研究者用“冲突理论”加以解释，即认为母亲与后代间存在资源竞争关系，父系基因组促进后代生长、母系基因组阻碍后代生长。
（细想想还挺有道理的……怀孕的是母亲，身体的资源一共就那么多，确实存在竞争关系啊。

我的读书笔记到此就结束了，一晚上的时间就耗在这东西上，下次绝对不这么干了x

参考文献：
-  [1]A rat model of pregnancy in the male parabiont, Rongjia Zhang, Yuhuan Liu, bioRxiv, 2021.06.09.447686
- [2]Kono T, Obata Y, Wu Q, et al. Birth of parthenogenetic mice that can develop to adulthood. Nature. 2004;428(6985):860-864.
- [3]Kawahara M, Wu Q, Takahashi N, et al. High-frequency generation of viable mice from engineered bi-maternal embryos. Nat Biotechnol. 2007;25(9):1045-1050.
- [4]Li ZK, Wang LY, Wang LB, et al. Generation of Bimaternal and Bipaternal Mice from Hypomethylated Haploid ESCs with Imprinting Region Deletions. Cell Stem Cell. 2018;23(5):665-676.e4.