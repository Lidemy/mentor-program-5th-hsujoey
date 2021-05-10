## 1.  請以自己的話解釋 API 是什麼？
Application Programming Interface。

可以用拉麵店的點餐機做比喻，我們透過點餐機介面做點餐，店家也可以透過這介面，得到客戶要傳達的資訊。只是這點餐就沒那麼客製化了，要符合介面給的選項，才是有效的資料。

透過 API 可以讓雙方交換資料，串 API 就是透過一套介面和一定的格式，讓雙方交換資料。


## 2. 請找出三個課程沒教的 HTTP status code 並簡單介紹
401 Unauthorized：未認證，可能需要登入或 Token。

403 Forbidden：沒有權限。

502 Bad Gateway：通常是伺服器的某個服務沒有正確執行。


## 3. 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。


|description      | Method |   Path   |parameter| Example    |
|:--------------|:------:|:---------|---------|------------|
|回傳所有餐廳資料|GET     |/restaurants|_limit:限制資料回傳數量| /restaurants?_limit=10|
|回傳單一餐廳資料|GET     |/restaurants/:id|無|/restaurants/15|
|新增餐廳       |POST     |/restaurants|name: 餐廳名|/無|
|刪除餐廳       |DELETE   |/restaurants/:id|無|/無|
|更改餐廳       |PATCH    |/restaurants/:id|name: 餐廳名|/無|