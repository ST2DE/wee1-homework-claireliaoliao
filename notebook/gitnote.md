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
Initialized empty Git repository in /Users/Claire/week1/.git/
```

### git status (觀察員目錄角色，看裡面有什麼)

可以使用 git status 來觀察 Git Repository 的狀態，比如目前所在的 branch 及 哪些檔案還沒 commit 等等
```
$ git status
# On branch master
nothing to commit, working directory clean
```

### 進入暫存區(git add)

#### git add (stage)

使用 git add 可以將新增檔案加入 git 版本控制

```
$   git add xxx.md
```

#### 如果add或commit之後反悔?

[如何將檔案從stage移除？](http://oomusou.io/git/remove-stage/)<br>

1.若該檔案不在repository內: git rm –cached 檔案名稱
2.若檔案已經在repository內: git reset HEAD 檔案名稱

##### git rm –cached

先了解git rm --cached的背後原理 :

若檔案存在於stage與repository時，會將檔案從repository刪除，並且從stage刪除，但不會刪除working directory的實際檔案，不過由於檔案已經從repository刪除，檔案會從tracked變成untracked。<br>
若檔案存在於stage，卻不存在於repository，會將檔案從stage刪除，但不會刪除working director的實際檔案，因為repository本來就沒有這個檔案，所以一樣是untracked不變。<br>

回想我們的狀況 :

若該檔案不在repository內 : git rm --cached會幫我們從stage刪除，且檔案本來就是untracked，執行完還是untracked，符合我們的預期。<br>

若檔案已經在repository內 : git rm --cached會幫我們從repository刪除，並且從stage刪除，因為已經從repository刪除檔案，檔案會從tracked變成untracked，這並不是我們預期的。<br>

這解釋了為什麼當檔案不在repository時，必須下git rm --cached

