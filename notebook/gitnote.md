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

>檢查是否成功設定

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



## 進入暫存區(git add)



#### git add (stage)

使用 git add 可以將新增檔案加入 git 版本控制

```
$   git add xxx.md
```



#### 如果add或commit之後反悔?

[如何將檔案從stage移除？](http://oomusou.io/git/remove-stage/)<br>

1.若該檔案不在repository內: git rm –cached 檔案名稱
2.若檔案已經在repository內: git reset HEAD 檔案名稱



#### git rm –cached

先了解git rm --cached的背後原理 :

1.若檔案存在於stage與repository時，會將檔案從repository刪除，並且從stage刪除，但不會刪除working directory的實際檔案，不過由於檔案已經從repository刪除，檔案會從tracked變成untracked。<br>

2.若檔案存在於stage，卻不存在於repository，會將檔案從stage刪除，但不會刪除working director的實際檔案，因為repository本來就沒有這個檔案，所以一樣是untracked不變。<br>

回想我們的狀況 :

1.若該檔案不在repository內 : git rm --cached會幫我們從stage刪除，且檔案本來就是untracked，執行完還是untracked，符合我們的預期。<br>

2.若檔案已經在repository內 : git rm --cached會幫我們從repository刪除，並且從stage刪除，因為已經從repository刪除檔案，檔案會從tracked變成untracked，這並不是我們預期的。<br>

>這解釋了為什麼當檔案不在repository時，必須下git rm --cached



#### gut reset HEAD

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




## 提交版本(commit)

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

若遺漏了呢？

這時候可以使用如下指令

```batchfile
git commit -m "init commit"
git add missing.py
git commit --amend
```

如上狀況為當我 git commit -m "init commit" 之後，

我發現我漏掉了 **missing.py** 這個檔案 (commit 前忘記 add 進去 ) ，

這時候就可以使用 git commit --amend 來修改最後一次的 commit 。


### git commit -a -m (一次完成add和commit)
當還有檔案沒有進 stage 就下 commit 指令，那就不能 commit，這時可使用 git commit -a -m 這樣的暴力法來一次加入檔案至 stage 然後進行 commit，大部份人不建議這麼做。

```
$ git commit -a -m "這次 commit 的適當描述"

```



## History (DIFF, LOG, SHOW)

### git log

我們可以使用 `git log` 的指令查看過去 commit 的紀錄，例如 commit 的版號、作者等等。

```
$   git log

commit 7d2667e09197461db0a8bc74e8bfc42bf185ccf2
Author: claire <cla022318@yahoo.com.tw>
Date:   Fri Mar 23 00:27:57 2018 +0800

```

### git diff

再從Git命令列鍵入`git diff`就可以看到修改過後的紀錄。

```
$   git diff

```



## 刪除



### git checkout -- file 可以丟棄工作區的修改

```
$ git checkout  -- xxx.py
```

命令 git checkout -- xxx.py 意思就是，把 xxx.py 文件在工作區的修改全部撤銷 ( 丟棄 ) ，

讓這個檔案回到最近一次 git commit 或 git add 時的狀態。


### git rm

有兩種況狀，一種是確定要從版本庫中刪除該檔案，那就用命令 git rm 刪掉，並且 git commit：

```
rm xxx.py
git rm xxx.py
git commit -m "remove xxx.py"
```

另一種況狀是刪錯了，使用 git checkout 可以輕鬆還原檔案:

```
rm xxx.py
git checkout -- xxx.py
```

## 推送程式碼至REMOTE端 (PUSH/PULL)

在Local端寫了這麼久，要將程式碼推到GitHub網站上吧！

### git remote add origin https://github.com/try-git/try_git.git
To push our local _repo_ to the GitHub server we'll need to add a remote repository.


### git push

當已經連結了 Git Server，就可以用 git push 來將 local 端的 commit 更新到 Server 上，請注意有修改的檔案還沒 commit 那就無法使用 git push，所以一定要將所有更新都 commit 之後，才有辦法使用 git push。

```
$ git push
```

The name of our remote is `origin` and the default local branch name is `master`. The `-u` tells Git to remember the parameters, so that next time we can simply run `git push` and Git will know what to do.

```
$ git push -u origin master
```


### git pull

當已經連結了 Git Server，我們就可以使用 git pull 來將遠端更新的 code 抓回來，同樣如果 local 端有任何更新，一定都要 commit 之後才  
有辦法使用 git pull。

```
$ git pull
```

```
$ git pull origin master
```

### .gitigore

log 檔及 build 出來的檔案及系統產生的檔案如 .DS_Store 等等，我們並不需要 commit 上去 Repository，所以我們會在 Repository 編寫一個 .gitignore 文字檔來忽略這些檔案。

範例 .gitigore 如下：

```
.DS_Store
*.log
```



## 使用分支

Git作為分散式版本管理系統的好處是不需仰賴中央單一一條主幹道開發，可根據開發需求、隨時在某一時間點開分支(branch)獨立開發某一項功能，待開發完成後再融合(merge)回去主幹道。

主幹(master)與分支(branch)是稱呼專案的主要版本和分支版本。在Git第一個建立的專案版本會被稱為master版本。

然而實際上master也僅是其中一條branch，所有branch間的關係都是平等的、彼此間無主從關係。一般習慣將穩定版本稱主幹，其餘的變動、開發中版本則都稱作分支。


### git branch：開分支
```
$   git branch branch_1
```

### git branch：查看目前分支
```
$ git branch
* master
```

### git branch -a：查看所有分支

輸入git branch -a可以查看目前我們開的所有branch：
```
$   git branch -a 
branch_a
master  remotes/origin/master
```

## 合併分支

git merge

在branch開發了一段時間後，終於完成想要的功能了! 此時可以把branch再融合回去主要的開發幹道上。

首先必須利用checkout回到想要merge過去的主幹道上；比如在此例中我們用git checkout回到master線上之後，再輸入要merge過去的branch名稱git merge。

```
$   git checkout master

Switched to   branch   'master' 

$   git merge branch_a
```

由於我們說過master也只是一條branch、和所有branch彼此關係平等，因此要checkout到branch_a、再merge master過來也是可行的，端看開發者需求。

若顯示merge failed時，可能發生了主幹道和分支有同一行程式碼的衝突。

此時就和我們在介紹push/pull時遇到Local端和Remote端程式碼衝突的情形相同，Git會告訴我們哪些地方彼此merge有衝突，待開發者一一解決後再重新merge一次即可成功。

### git stash 指令

很多時候，我們正在開發一個新功能又或是 debug，然後突然有一個功能需要緊急修正，

但你又不想 commit 現在的狀況，因為根本沒意義，事情只做了一半，這時候 stash

這個實用的指令就派上用場了

1.git stash  立馬暫存檔案

2.git stash list 觀看list內的東西

3.git stash pop 使用下列的指令把 stash 取回來，這指令取回後也會刪除 stash

4.git stash apply 希望使用 stash 取回之後，不希望刪除 stash

5.git stash clear 刪除暫存

6.git stash drop stash@{} 丟棄指定的 stash

