## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

1.CHAR： 每筆資料的 length 是固定的。

2.VARCHAR：每筆資料不能超過 length 的長度。即 length 可變的 CHAR。

3.TEXT：沒辦法設定 length，最大 length 固定是 65535。


VARCHAR 跟 TEXT 最大差別是，TEXT無法限制最大長度，固定是 65535，而 VARCHAR 可以給定一個介在 0-65535 之間的數當作最大值。

如果知道大概會需要多少字元的時候，就用 VARCHAR，真的逼不得已東西很長（例如說要存文章）的時候才用 TEXT，才能節省空間。

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
Cookie 是個儲存在瀏覽器的小型文字檔案。讓 server 記住 client 的資訊 。

在 HTTP 這層 Server 可以透過 Set-Cookie 這個 response header 來讓瀏覽器儲存相對應的 Cookie。

而瀏覽器發送 Request 時，會把相對應的 Cookie（每一個 Cookie 都有一些選項可以設置，要符合條件才能寫入以及傳送，例如說你無法寫入其他 domain 的 cookie。） 放在 Cookie 這個 Header，Server 就可以拿到資料。



## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
1.利用 cookie 裡的 user id 來判斷登入的人是誰，我只要把 cookie 裡面的值一改掉，就可以偽造別人身份登入，所以後來才需要改成 session 機制。

2.密碼存明碼，當資料庫偷被駭客入侵，會員的密碼就全被駭客知道了。

3.如果發現帳號密碼出現問題，沒辦法修改密碼。


