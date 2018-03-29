Git筆記

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

### git init (建立儲存庫 => git repository)

當 Git 安裝設定好之後，就可以開始使用 Git 版本控制了
