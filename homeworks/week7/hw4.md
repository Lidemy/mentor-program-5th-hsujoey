## 什麼是 DOM？
文件物件模型，JS 跟 html / 瀏覽器的橋樑。

把 document 轉成 object，透過 DOM，JS可以拿到 html 裡的節點（如圖），進而可改 html 呈現的介面，或著說瀏覽器就可以用 JS。

![](https://i.imgur.com/L0QBZx8l.png)

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
事件傳遞的順序由從 Window 底下的 Document 開始，依序由捕獲階段（Capture）-> 事件目標（Target）-> 冒泡階段（Bubble）再回到 Document 及 Window。

![](https://i.imgur.com/LryQEKel.png)

## 什麼是 event delegation，為什麼我們需要它？
在欲觸發的目標的父層元素，掛監聽，父層接收到捕獲或冒泡階段時，分發事件給真正要被觸發的子元素。如此就不用對數量龐大且相似的子元素，一個一個掛監聽。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
event.preventDefault() 是阻止瀏覽器預設的行為。

舉例來說，按下 type="submit" 會提交表單，但如果我們想要讓表單在提交前先做其他事，例如：檢查填寫內容是否符合我們要的，那怎麼辦？

這時需要先使用 e.preventDefault() 阻止預設行為 - 提交表單，讓程式先跑驗證相關的程式碼。

event.stopPropagation() 是停止傳遞事件給下一個節點。