## 跟你朋友介紹 Git

### **一、先快速解惑**

1. Git是什麼？

    做版本控制的軟體（程式）
    

2. 版本控制是什麼？
    
    改了檔案之後，想要保存上一次的歷史紀錄。

    試想個人、團體的版本控制，會有切出分支，或合併回去的需求。
    

3. GitHub是什麼？

    放 git repository的地方。還有其他網站也在做一樣的事，視覺化repository，例如：GitLab、Bitbucket

4. repository是啥？

    在github上的專案就叫repository
---
### **二、觀念建立： 想像一下Git的運作模式**

1. 一個資料夾代表一個新版本
2. 不想做版本控制的不要丟到資料夾
3. 一個版本一個亂碼編號避免重複
4. 有個地方專門記最新版本
5. 有個地方專門記亂碼編號順序
---
### **三、指令**


1. `git init` ：在要被控制的資料夾做這個步驟。
2. `git status` ：看狀態
    1. untracked：沒加入版本控制的
    2. staged：有加入版本控制的
3. `git add 檔案`：把檔案加到版本控制＝把檔案加到staged區域＝可以想像成把檔案放到temp資料夾
    
    - `git rm --cached 檔案`：把staged的移到untracked
    - `git add .`：把所有檔案加入staged區域
4. `git commit` ：幫staged區域新建一個版本＝可以想像把temp資料夾複製改名
    - `git commit -m “message敘述”`：把staged區的檔案新增一個版本名稱
5.  `git log` ：看版本歷史紀錄
    - `git log --oneline`：較簡潔的顯示紀錄
6.  `git checkout 版本名稱(像亂碼的東西)`：切到某個版本
    - `git checkout master`：回到最新版本
7. `.gitignore`：沒用的東西丟到這個資料夾
8. `git commit -am “message敘述”`：就是一次做兩個動作`git add 檔案` 和 `git commit -m 版本名稱` (但不會把新增的檔案丟到暫存區，只會處理修改過的檔案。所以有新檔案都先做git add 、git add .）
9. `git diff` ：看改了啥


       重點觀念：
       1. 檔案用`git add `丟到staged，很像先丟到一個暫存資料夾裡。

       2. `add commit` 很像幫資料夾編版本序號。

---
### **四、Git 的平行時空：branch**

1. `git branch 分支名稱` ：開新的branch。開發新功能等，可以使用。
    - `git branch -v` 看有哪些branch。可搭配git log 看在這個branch下有哪些commit
2. `git checkout 分支名稱` ：切換到別的branch，然後就可以編輯檔案了。
    - `git checkout -b week1` = 創造一個 branch 並切換至
3. `git merge`把分支合併回主幹。
    
    - `git branch -d “分支名稱`”，刪掉已merge的branch
4. conflict ：merge 的時候如果版本發生衝突時，要手動解決。解決完要再用 `git commit -am `。
---
### **五、GitHub**

1.  如何把 code 放上 GitHub？
    1. 在 GitHub 上新增 repository
    2. 到 iTerm `git remote add origin http..........git`
    3. `git push -u origin master`
2. 把本機最新的改變新增上去
    1. `git push origin master`
    2. 或 `git push origin 分支名稱`
3. 把GitHub上最新的改變拉下來
    1. 可以在GitHub上直接改檔案
    2. `git pull origin master`
4. 把 GitHub上 的 repository 抓下來
    1. 網站上點clone or download，這裡記錄用clone，先複製網址
    2. `git clone 網址`
    3. 如果想改別人的repository，可以用網站上的fork，影印一份到自己帳號底下，再做 1. 的動作，這樣修改後就可以push回去



