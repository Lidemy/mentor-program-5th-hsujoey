## 交作業流程


1. 設定 GitHub repository

    1. 先建立自己在第五期的倉庫

         * 到 https://classroom.github.com/a/yNNrtNyW

         * 建完會有 Lidemy/mentor-program-5th-hsujoey 這樣的位置。

     2. 按 code 按鈕，把網址複製起來，到 iTerm `git clone 網址`

2. 寫作業

    1. 先新開一個 branch

       *  `git branch 分支名稱`

     2. 切到分支在開始寫作業

        *   `git checkout 分支名稱`

     3. 用 `git checkout branch -b 分支名稱`，等於一個動作完成1.+ 2.

     4. 開始寫作業

     5. 寫完存版本

        *  `git commit -am hw1 (檔案名稱)` 作用範圍僅限於「已追蹤」的檔案，如果有額外新增檔案的話，還是要記得使用指令 add 將檔案進行列管

        * 或是  `git add hw1 (檔案名稱)` 再  ` git commit -m hw1 (檔案名稱)`

     6. 交上去GitHub

        * `git push origin week1 (分支名稱)`

3. 交作業發 pull request

     1. 點 compare & pull request

     2. 寫留言內容，按 creat pull request

     3. 到 file changed 檢查一下自己改了什麼

     4. 複製網址到學習系統去貼上

4. 改完作業後要做什麼？把本地與遠端同步

     1. 先切到 master去

        *   `git checkout master`

    2. 把遠端同步到我的電腦

       *   `git pull origin master`

    3. 把我電腦裡開的分支刪掉

       *   `git branch -d week1 (分支名稱）`