# 熵与随机数

昨天写Dockerfile那篇文章的时候，发下我的镜像中java有一个启动参数`-Djava.security.egd=file:/dev/./urandom`，我查了察相关资料，发现了些有趣的事情

## 随机数
关于这个参数，我们从随机数来说起
学过编程的同学应该都接触过随机数这个概念，虽然叫随机，但是大多数随机数生成实质上是通过一定的预先设定的算法计算出来的，根据密码学的原理，随机数的随机性检验有三个标准：

1. **统计学伪随机性**:统计学伪随机性指的是在给定的随机比特流样本中，1的数量大致等于0的数量，同理，“10”“01”“00”“11”四者数量大致相等。类似的标准被称为统计学随机性。满足这类要求的数字在人类“一眼看上去”是随机的。
2. **密码学安全伪随机性**: 其定义为，给定随机样本的一部分和随机算法，不能有效的演算出随机样本的剩余部分。
3. **真随机性**：其定义为随机样本不可重现。实际上只要给定边界条件，真随机数并不存在，可是如果产生一个真随机数样本的边界条件十分复杂且难以捕捉（比如计算机当地的本底辐射波动值），可以认为用这个方法演算出来了真随机数

相应的，随机数也分为三类：
-  **伪随机数**：满足第一个条件的随机数。
- **密码学安全的伪随机数**：同时满足前两个条件的随机数。可以通过密码学安全伪随机数生成器计算得出。
- **真随机数**：同时满足三个条件的随机数。

我们平时使用的大多数编程语言中所生成的随机数都是伪随机数，例如java中的`Random`类，可以使用时间戳作为随机种子，这种随机数足以满足我们大多数对随机数生成的需求，但是在一些特殊场合，例如在线交易中的id（这是区块链安全性中的重要一环，据我所知，有多起区块链攻击行为与区块链生成算法有缺陷有关），对随机数的安全性要求较高时，就要求达到密码学安全的伪随机数甚至真随机数，在java中，有一些提供安全随机数生成算法的类，例如`org.apache.catalina.util.SessionIdGeneratorBase.createSecureRandom`，在Tomcat7/8中，就使用了这个类用来产生seesion id，这个类中有一个种子生成器，他会根据配置来获取随机种子，在Tomcat中，会默认使用`/dev/random`返回的字符来作为种子，这个`/dev/random `就是我们今天的主角。

## Linux中的熵池
`/dev/random`是Linux中的一个真随机数生成器，这个生成器维护了一个熵池，Random方法会从熵池中取出字符串作为种子来产生随机数，我们的熵的大部分来于键盘、鼠标和磁盘 IO 数据这样的环境噪声，这些计算机活动所产生的熵会帮助随机数生成，在生成GPG秘钥的过程中，你可能会遇到如下提示：
```bash
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
++++++++++..+++++.+++++++++++++++.++++++++++...+++++++++++++++...++++++
+++++++++++++++++++++++++++++.+++++..+++++.+++++.+++++++++++++++++++++++++>.
++++++++++>+++++...........................................................+++++
Not enough random bytes available. Please do some other work to give
the OS a chance to collect more entropy! (Need 290 more bytes)
```
但是假如我们的系统是一个服务器，我们没有鼠标和键盘输入。这意味着唯一的因素是你的磁盘IO。如果它是一个单独的、几乎不使用的磁盘，你将拥有较低的熵。另外一个问题是`/dev/random`是阻塞的，当你频繁生成随机数的时候，你可能会耗光你的熵池，`/dev/random` 会等待熵池收集到足够的环境噪声的时候才会继续生成随机数，这可能导致你的进程被长时间的挂起。在java 开发中，常常会遇到一些应用启动时间过长的问题，就可能是熵池空了导致线程阻塞了。


幸好Linux给我们提供了另外一个随机数生成器来解决这个问题。`/dev/unrandom`,这是一个伪随机数生成器，在缺乏熵的时候，他会复用熵池中的内容而不会导致阻塞，但是复用熵池会导致安全性下降，但是在安全性不强的情况下，可以考虑使用这个，比如我们可以使用`-Djava.security.egd=file:/dev/./urandom`这个java启动参数，来确保我们生成随机数的过程不被阻塞，这也回答了我们开头那个问题，`java.security.egd`是`org.apache.catalina.util.SessionIdGeneratorBase.createSecureRandom`的配置。

我们还可以用一些方法来影响熵池
```bash
$ cat /proc/sys/kernel/random/poolsize
4096
$ cat /proc/sys/kernel/random/entropy_avail
2975
```
使用这两个命令可以查看当前熵池的大小和熵池内有多少熵

我们可以通过一些方法来将熵池耗尽，比如将将/dev/random 定向到/dev/null中
```bash
$ cat /dev/random > /dev/null &
```
这样会快速的将熵池耗尽

如果我们想填充熵池呢，最好的办法是将处理器的抖动加入熵池中，我们可以安装`Haveged`来实现这一功能
```bash
$ sudo pacman -S Hacedged
$ systemctl enable haveged
$ systemctl start haveged
```
我们可以通过`pv`命令来观察熵池的增长速度
```bash
# 启用前
$ pv /dev/random > /dev/null 
25.0 B 0:00:03 [0.00 B/s] [ <=>

# 启用后
$ pv /dev/random > /dev/null               
62MiB 0:00:03 [ 564KiB/s] [  <=>  

```

可以观察到从几乎为0增长到了564kiB/s


参考：  
[James J - /dev/[u]random：对熵的解释](https://linux.cn/article-9697-1.html)  
[chszs - Tomcat 8熵池阻塞变慢详解](https://blog.csdn.net/chszs/article/details/49494701)
