## 感想

主機選擇 AWS，即使有學長姐的筆記可以參考，我自己在部署過程中，還是卡卡的，不像有些同學回報的，照著做就能順利在一天內完成，自己是感到崩潰的那一群 (゜▽゜;)


卡關時學長姐的筆記幫了很大的忙，我這邊也整理了自己在部署中碰到的問題，流程因為參考學長姐筆記所以步驟差不多，這邊就不再抄一次手把手的教學內容，這邊主要記下自己碰到的問題，~~有些可能真的很蠢（？) ⸍⚙̥ꇴ⚙̥⸌~~ 希望有幫助到人。


---


## Amazon Web Services (AWS)部署問題紀錄


- 註冊及設定 AWS

    - 建立 EC2 instance

    - 設定 security group

    - 用 ssh 登入 VPS

      - 這邊金鑰的部分，不知道哪裡錯了，有跳錯誤 `Permission denied (publickey)...` 我後來把這步驟再做一次就 ok 了，做第二次金鑰是.cer 的檔案，不知道跟 .pem 有什麼差異，但我的經驗是對接下來後續步驟沒影響。

- 設定 LAMP

    - 更新 ubuntu

        - 隔了一夜繼續做接下來的設定，發現怎麼輸入 sudo 什麼的都跳這錯誤
        ![alt 属性文本](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d5d3c17c-3a15-47fd-9f31-40802dcc1fc7/_2021-07-19_18.30.45.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210722T093609Z&X-Amz-Expires=86400&X-Amz-Signature=43abaf14fe3a1ce9f64d96ecb2d0517ba1bd9d75b47c2389fe74785de5a837a6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22_2021-07-19_18.30.45.png%22)
                   
         - 原來是要再用 ssh 登入 VPS 一次，也就是輸入 `ssh -i [key.cer 的路徑] ubuntu@ec2-[IP].us-east-2.compute.amazonaws.com` 這一串

    - 安裝 Tasksel

    - 用 Tasksel 下載 lamp-server


- 設定 phpmyadmin

    - 下載 phpmyadmin

    - 連接 apache2

    - 設置密碼


- 設定域名


- File Zilla 設定

    - 設定完找到 var/www/html 上傳檔案

        - 設定完預設是在 home/ubuntu 下，我在這步驟一直找不到 var 資料夾，以為自己哪裡設定錯了，大家要記得回到最上層資料夾才會看到。



    - 上傳完回頭設定我的資料庫

        - 進到資料表跳出        ![alt 属性文本](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5d866f0b-d592-498c-ab2e-d0c3ff77643f/%E6%88%AA%E5%9C%96_2021-07-22_17.59.28.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210722T095959Z&X-Amz-Expires=86400&X-Amz-Signature=102ba51745014c2744aff6e52c14bf74e7238257322fe7561b88f582d01eb991&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E6%2588%25AA%25E5%259C%2596_2021-07-22_17.59.28.png%22) 我自己是重新建資料表，沒有用匯入功能，這錯誤對我沒影響，我目前先暫時不管他（喂～ ）這部分打算在之後把其他作業放上去時，一起解決，解決辦法可以參考第三個參考資料[AWS EC2 部署網站：卡關記錄 & 心得](https://nicolakacha.coderbridge.io/2020/09/16/launch-website/)



---



## 參考資料

[[ 紀錄 ] 部屬 AWS EC2 雲端主機 + LAMP Server + phpMyAdmin](https://mtr04-note.coderbridge.io/2020/09/15/-%E7%B4%80%E9%8C%84-%08-%E9%83%A8%E5%B1%AC-aws-ec2-%E9%9B%B2%E7%AB%AF%E4%B8%BB%E6%A9%9F-/)


[在 AWS 上面部署 LEMP server](https://github.com/Lidemy/mentor-program-4th-Lauviah0622/blob/master/homeworks/week14/hw2.md)


[AWS EC2 部署網站：卡關記錄 & 心得](https://nicolakacha.coderbridge.io/2020/09/16/launch-website/)
