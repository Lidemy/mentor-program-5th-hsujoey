## 教你朋友 CLI
### 一、先跟 h0w 哥說明一下command line 到底是什麼？
 * 簡單來說就是另一種操縱電腦的方法
 * 有兩種操縱電腦的方法，一個是Graphical User Interface (GUI)，另一個是Commend Line Interface (CLI)。
 * 我們一般使用上都是 GUI ，視覺化資料夾等等概念。
___
### 二、這邊教 h0w 哥 command line 怎麼用？
 * 先教你環境設置，不知道你 h0w 哥是用 windows 還是 Mac？兩種都跟你說一下好了。
     1. windows： 先裝Git，預設會附贈git-bash，另有Cmder，都可用來操作Commend Line。
     2. Mac：兩種方法，一是搜尋 Terminal，二是安裝 iTerm2。
       

 * 再來教 h0w 哥 一些基本指令哦
     1. pwd：(Print Working Directory)，印出所在位置。
      2. ls：(List)，印出現在資料夾底下檔案。
         - 有些指令有變化形，可以用 -加參數，例如：ls -a：顯示隱藏的檔案（.開頭的檔名）
     3. cd：(Change Directory)，切換至資料夾/位置。
         - cd ..：回上一層
         - cd ~：等於cd /Users/joeyxu
         - 打檔名的第一按Tab
     4. man：(Manual)，使用說明手冊。例如：man ls。按 q 離開。
     5. Clear：畫面清乾淨。 
 ___
### 三、h0w 哥說想用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案。這邊是步驟，照著做唄！
  * 假設你要在桌面建立 wifi 資料夾好了
     1. 先打開 iTerm ，用 `pwd` 確認一下現在位置 ，不在桌面的話，請切換到桌面，用  `cd /Users/...../Desktop` 
     2. `mkdir wifi` ，現在桌面應該有資料夾了
 * 再來建立一個叫 afu.js 的檔案
      1. `cd wifi`
      2. `touch afu.js` ，現在資料夾裡應該有這個檔案了。

### 以上就是這次的筆記。ㄅㄅ！





