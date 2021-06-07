---
title: "THE REVIVAL OF THE BLOG"
date: 2021-05-30T13:16:43+08:00
draft: true
---

In summer of 2008,My blog only keeped two months is closed,because of the server is overdue.At that time, I also set a "great" goal of one blog a day. However, it turns out that I overestimated both my perseverance and my writing ability - until the blog was shut down, there were still more than 10 unfinished drafts in the warehouse. In the past two years, I often wanted to revival the blog again, but in the end, I never put it into practice.
Recently I had a little bit of spare time, and I decided to resurrect my blog in order to urge myself to study and also to record my learning process. Fortunately, although the blog was shut down, the previous posts and drafts still exist in the github repository. To get the blog online quickly, I decided to use [**Hugo**](https://Hugo.io) to replace the previous use of Hexo. Since Hugo is a generated static file, I chose `Github Pages` for deployment, which drastically reduces the time to maintain the server, and more importantly, he is free. But for some reason, github is slow to access in most locations in the mainland, and with the telecom broadband used in my dorm, it is even directly inaccessible. To improve this problem, I used cloudflare and Baidu cloud acceleration to accelerate the site. The program is feasible, start implementing.



## Install Hugo

### Binary (Cross-platform) 

Download the appropriate version for your platform from [Hugo Releases](https://github.com/gohugoio/hugo/releases). Once downloaded, the binary can be run from anywhere. You don’t need to install it into a global location. This works well for shared hosts and other systems where you don’t have a privileged account.

Ideally, you should install it somewhere in your `PATH` for easy use. `/usr/local/bin` is the most probable location.



### Docker 

We currently do not offer official Hugo images for Docker, but we do recommend these up to date distributions: https://hub.docker.com/r/klakegg/hugo/

### Homebrew (macOS) 

If you are on macOS and using [Homebrew](https://brew.sh/), you can install Hugo with the following one-liner:

install-with-homebrew.sh



```sh
brew install hugo
```

For more detailed explanations, read the installation guides that follow for installing on macOS and Windows.

### MacPorts (macOS) 

If you are on macOS and using [MacPorts](https://www.macports.org/), you can install Hugo with the following one-liner:

install-with-macports.sh



```sh
port install hugo
```

### Homebrew (Linux) 

If you are using [Homebrew](https://docs.brew.sh/Homebrew-on-Linux) on Linux, you can install Hugo with the following one-liner:

install-with-linuxbrew.sh



```sh
brew install hugo
```

Installation guides for Homebrew on Linux are available on their [website](https://docs.brew.sh/Homebrew-on-Linux).

### Chocolatey (Windows) 

If you are on a Windows machine and use [Chocolatey](https://chocolatey.org/) for package management, you can install Hugo with the following one-liner:

install-with-chocolatey.ps1



```ps1
choco install hugo -confirm
```

Or if you need the “extended” Sass/SCSS version:

install-extended-with-chocolatey.ps1



```ps1
choco install hugo-extended -confirm
```

### Scoop (Windows) 

If you are on a Windows machine and use [Scoop](https://scoop.sh/) for package management, you can install Hugo with the following one-liner:

```bash
scoop install hugo
```

Or install the extended version with:

```bash
scoop install hugo-extended
```

### Source 

#### Prerequisite Tools 

- [Git](https://git-scm.com/)
- [Go (at least Go 1.11)](https://golang.org/dl/)

#### Fetch from GitHub 

Since Hugo 0.48, Hugo uses the Go Modules support built into Go 1.11 to build. The easiest way to get started is to clone Hugo in a directory outside of the GOPATH, as in the following example:

from-gh.sh



```sh
mkdir $HOME/src
cd $HOME/src
git clone https://github.com/gohugoio/hugo.git
cd hugo
go install --tags extended
```

Remove `--tags extended` if you do not want/need Sass/SCSS support.

If you are a Windows user, substitute the `$HOME` environment variable above with `%USERPROFILE%`.

## 