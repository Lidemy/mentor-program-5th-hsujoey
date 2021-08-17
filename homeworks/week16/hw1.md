## hw1：Event Loop

在 JavaScript 裡面，一個很重要的概念就是 Event Loop，是 JavaScript 底層在執行程式碼時的運作方式。請你說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```
---
## 輸出結果：

``` js
1
3
5
2
4
```
---
## 程式碼背後運作方式說明：
<br>

### 一. 先備知識：
<br>

1. 三個部分

    -  Call Stack 
    -  Web Apis 
    - Callback Queue

2. event loop

    圖中紅色的 event loop，它的功能是，當偵測到 Call Stack 運作完清空時，把 Callback Queue 區的項目移過去 Call Stack 執行。

3. 視覺化：

    ![image](https://i.imgur.com/CNkC5qa.png)


<br>

### 二. 運作流程：
1. 
    ``` js
    console.log(1)
    ```
    - 進到 **Call Stack** 執行，印出 1。

<br>

2. 
    ``` js
    setTimeout(() => {
    console.log(2)
    }, 0)
    ```
    - 進到 **Call Stack** 執行 `setTimeout()`。
    
    - **Web Apis** 執行 `Timer()`做計時的工作，時間到把 `() => {
    console.log(2)
    }` 移至 **Callback Queue** 等待 event loop 調配。


<br>

3. 
    ``` js
    console.log(3)
    ```
    - 進到 **Call Stack** 執行，印出 3。

<br>

4. 
    ``` js
    setTimeout(() => {
    console.log(4)
    }, 0)
    ```
    - 進到 **Call Stack** 執行 `setTimeout()`。
    
    - **Web Apis** 執行 `Timer()`做計時的工作，時間到把 `() => {
    console.log(4)
    }` 移至 **Callback Queue** 等待 event loop 調配。

<br>

5. 
    ``` js
    console.log(5)
    ```
    - 進到 **Call Stack** 執行，印出 5。

<br>

6. 
    - **event loop** 偵測到 **Call Stack** 區作業完有空了
    - **event loop** 把在 **Callback Queue** 等候的
    `() => {
    console.log(2)
    }`  以及  `() => {
    console.log(4)
    }`  依先進先出順序，交由 **Call Stack** 執行
    - 印出 2 與 4。

<br>
