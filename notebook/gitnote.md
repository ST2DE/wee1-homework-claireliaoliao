Git筆記

Git 版本控管
在軟體開發領域，對原始碼進行版本控管是非常重要的一件事，有別於 Subversion 或 TFVC (Team Foundation Version Control) 這類集中式版本控管系統，Git 是一套分散式版本控管系統(DVCS; Distributed Version Control System)，並帶來許多版本控管上的各種優勢與解決傳統集中式版本控管的缺失，例如支援本地操作、備份容易、功能強大且彈性的分支與合併等等。不過，由於 Git 版本控管無論在版控觀念與工具使用上，都與傳統集中式版控工具差異甚大，因此造成了不小的學習門檻。

雖然說本次文章的主題是「30 天精通 Git 版本控管」，不過，說實在的，還真有點言過其實了，因為 Git 博大精深，有非常多細節可以探究，如果真的要應用在工作上，學幾天可以真正上手呢？每天學一點，連續學習 30 天，似乎是個合理的數字 (或太多?)，如果有一個工具大家都要用，而且要立刻上手的工具，如果學 30 天都還不知道怎麼活用，那這學習門檻也太高了些。因此我想，這個系列的文章，主要還是專注於「如何在 30 天內學會 Git 版本控管，而且必須要能熟練的應用在實務開發工作上」，這才是本系列的真正目的，那些繁瑣的細節，我不會特別強調，但總是有些重要的概念與細節還是不能錯過，我會嘗試在每一個主題中提到一部份，一有機會就會深入探討，希望大家可以透過做中學，深刻體會 Git 版本控管的強大魅力。

$ github init