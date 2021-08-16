## hw2：Event Loop + Scope

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
---
## 輸出結果：
```
i: 0
i: 1
i: 2
i: 3
i: 4
5
5
5
5
5
```
---
## 執行流程：
（for 迴圈一圈一圈看）

1. 
    - 宣告變數 i ，賦值 i = 0，檢查 i < 5，true，往下執行 { }

    - **Call Stack** 執行 `console.log('i: ' + i)`，印出 `i: 0`，**Call Stack** 清空

    - **Call Stack** 執行 `setTimeout()`， 呼叫 **Web Apis** 計時 0*1000 毫秒，**Call Stack** 清空

    - 時間到， `() => {
        console.log(i)
    }` 移至 **Callback Queue**


2. 
    - i++ ，i = 1，檢查 i < 5，true，往下執行 { }

    - **Call Stack** 執行 `console.log('i: ' + i)`，印出 `i: 1`，**Call Stack** 清空

    - **Call Stack** 執行 `setTimeout()`， 呼叫 **Web Apis** 計時 1*1000 毫秒，**Call Stack** 清空

    - 時間到， `() => {
        console.log(i)
    }` 移至 **Callback Queue**

3. 
    - i++ ，i = 2，檢查 i < 5，true，往下執行 { }

    - **Call Stack** 執行 `console.log('i: ' + i)`，印出 `i: 2`，**Call Stack** 清空

    - **Call Stack** 執行 `setTimeout()`， 呼叫 **Web Apis** 計時 2*1000 毫秒，**Call Stack** 清空

    - 時間到， `() => {
        console.log(i)
    }` 移至 **Callback Queue**

4. 
    - i++ ，i = 3，檢查 i < 5，true，往下執行 { }

    - **Call Stack** 執行 `console.log('i: ' + i)`，印出 `i: 3`，**Call Stack** 清空

    - **Call Stack** 執行 `setTimeout()`， 呼叫 **Web Apis** 計時 3*1000 毫秒，**Call Stack** 清空

    - 時間到， `() => {
        console.log(i)
    }` 移至 **Callback Queue**

5. 
    - i++ ，i = 4，檢查 i < 5，true，往下執行 { }

    - **Call Stack** 執行 `console.log('i: ' + i)`，印出 `i: 4`，**Call Stack** 清空

    - **Call Stack** 執行 `setTimeout()`， 呼叫 **Web Apis** 計時 4*1000 毫秒，**Call Stack** 清空

    - 時間到， `() => {
        console.log(i)
    }` 移至 **Callback Queue**

6. 
    - i++ ，i = 5，檢查 i < 5，false，停止往下執行 { }

    - **Event Loop** 偵測到 **Call Stack** 已空，執行 **Callback Queue** 的任務
    
    - 0 毫秒到，在 **Callback Queue** 的任務 `() => {
        console.log(i)
    }`，移至 **Call Stack**，console.log(i)，此時 i = 5，所以印出 5

    - 1000 毫秒到，在 **Callback Queue** 的任務 `() => {
        console.log(i)
    }`，移至 **Call Stack**，console.log(i)，此時 i = 5，所以印出 5

    - 2000 毫秒到，在 **Callback Queue** 的任務 `() => {
        console.log(i)
    }`，移至 **Call Stack**，console.log(i)，此時 i = 5，所以印出 5

    - 3000 毫秒到，在 **Callback Queue** 的任務 `() => {
        console.log(i)
    }`，移至 **Call Stack**，console.log(i)，此時 i = 5，所以印出 5

    - 4000 毫秒到，在 **Callback Queue** 的任務 `() => {
        console.log(i)
    }`，移至 **Call Stack**，console.log(i)，此時 i = 5，所以印出 5