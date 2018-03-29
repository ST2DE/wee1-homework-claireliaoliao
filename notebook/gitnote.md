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

##### gut reset HEAD

先了解git reset HEAD的背後原理：

HEAD為目前最新的commit節點，git reset HEAD表示將檔案還原到目前最新的commit，若沒下任何參數，預設為--mixed：

–soft : repository的檔案會被還原到HEAD，但stage與working directory檔案不變。<br>
–mixed : repository與stage的檔案都會被還原到HEAD，但working directory的檔案不變。<br>
–hard : repository、stage與working directory的檔案都會被還原到HEAD。<br>

回想我們的狀況：

若該檔案不在repository內 : git reset HEAD會出現以下錯誤：

```
fatal: ambiguous argument 'HEAD': unknown revision or path not in the working tree.

Use '--' to separate paths from revisions, like this:

'git <command> \[<revision>...\] -- \[<file>...\]'  
```

>因為檔案根本還沒進repository，也就是還沒有commit過，哪來的HEAD呢？git馬上給你錯誤訊息，，這並不是我們預期的。

2.  若檔案**已經在**repository內 : `git reset HEAD`會幫我們將repository與stage還原到目前最新commit節點檔案，但working directory的檔案不會被還原，因為stage的檔案已經不是目前的檔案，所以檔案的狀態由原本的`stage`變成`modified`，符合我們的預期。

這解釋了為什麼當檔案**已經在**repository時，必須下`git reset HEAD`。


## 提交版本(COMMIT)

### git commit (commit)

stage 狀態的檔案，下一步就是準備提交，一個 commit 在 Git 中就是一個節點，這些 commit 的節點就是未來可以回朔及追蹤的參考。<br>
當檔案都加入到 stage 了，那就可以使用以下指令來 commit：

```
$ git commit -m "你要告訴他人的內容"
```

每個 commit 有個適當的描述是非常重要的，這樣要回朔時會比較容易查找。

```
$   git commit   -m   'Add a about_me.html'


\[master   (root-commit)   0dc97a8\]  Add a about_me.html.

 1   file changed,   0   insertions(+),   0   deletions(-)

 create mode   100644  about_me.html
```

### git commit -e
由於git commit -m僅能輸入一行評論；如果想要比較詳細的評論時，可改為輸入git commit -e就能打開編輯器、撰寫超過一行的評論。

### git commit --amend
**如何修改最後一次的commit呢 ?**

有時候我們 commit 完之後，才發現自己的 commit 內容手殘打錯了，這時候可以使用如下指令，他會跳出編輯視窗給你編輯你上一次的 commit 內容。

```batchfile
git commit --amend
```
