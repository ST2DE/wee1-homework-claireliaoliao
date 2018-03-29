## Git筆記

Reference:
* Article<br>
    [Learn-Git-in-30-days](https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/zh-tw/01.md)<br>
    [Git 簡易使用教學](https://coderwall.com/p/yl1-ug/git--2)<br>

## 前言

Git 版本控管

在軟體開發領域，對原始碼進行版本控管是非常重要的一件事，有別於 Subversion 或 TFVC (Team Foundation Version Control) 這類集中式版本控管系統，Git 是一套分散式版本控管系統(DVCS; Distributed Version Control System)，並帶來許多版本控管上的各種優勢與解決傳統集中式版本控管的缺失，例如支援本地操作、備份容易、功能強大且彈性的分支與合併等等。不過，由於 Git 版本控管無論在版控觀念與工具使用上，都與傳統集中式版控工具差異甚大，因此造成了不小的學習門檻。

### 安裝設定 Git

其中請特別注意設定好提交者的 name 及 Email，Git 會記錄每個 commit 是由誰提交的，這在版本控制上是很重要的資訊。
我們可以使用以下的指令來進行設定：（--global</code> 表示是全域設定）

```
$ git config --global user.name "claire"
$ git config --global user.email "cla022318@yahoo.com.tw"
```
檢查是否成功設定

```
$ git config --list
user.name=claire
user.email=cla022318@yahoo.com.tw
```

## 開始使用 Git
### 將現有專案CLONE下來

當團隊中有人已開啟了一個在 Git Server 上的 Git Repository，那我們就可以使用 Git clone 來將這個 Repository 抓來自己的 local 端一起進行開發。<br>
Clone with HTTPS

找到 Git Repository 的位址

在terminal上，使用指令git clone進行 Clone：
```
$ git clone git@github.com:fukuball/Hello-World.git
```

### 建立自己的專案

mac版本中，可以開啟terminal，輸入以下指令建立xxx檔案

```
$   mkdir week1
$   cd week1
$   touch xxx.md
```

### git init (建立儲存庫 => git repository)

專案設定好之後，就可以開始使用 Git 版本控制了
```
$  git init
```
