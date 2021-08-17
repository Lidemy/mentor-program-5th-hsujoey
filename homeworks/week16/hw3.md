## hw3：Hoisting

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
var a = 1           //line1
function fn(){      //line2
  console.log(a)    //line3
  var a = 5         //line4
  console.log(a)    //line5
  a++               //line6
  var a             //line7
  fn2()             //line8
  console.log(a)    //line9
  function fn2(){   //line10
    console.log(a)  //line11
    a = 20       //line12
    b = 100      //line13
  }              //line14
}                //line15
fn()             //line16
console.log(a)   //line17
a = 10           //line18
console.log(a)   //line19
console.log(b)   //line20
```
---
## 輸出結果
```
undefined
5
6
20
1
10
100
```
---
## 運作說明

### 一、預編譯階段 
 - 建立 Global EC => 初始化 Global VO 與 scope chain
   ```js
   globalEC: {
      VO: {
         a: undefined,
         fn: function,
      },
      scopeChain: [globalEC.VO]
   }
   ```

### 二、執行階段

 - 第 1 行 `var a = 1`

   宣告全域變數 a ，賦值 1

   ```js
   globalEC: {
      VO: {
         a: 1,
         fn: function,
      },
      scopeChain: [globalEC.VO]
   }
   ```

 - 第 16 行 `fn()` 
 
   呼叫函式，進入第 2 行
 

 - 第 2 行

   建立 fn EC  => 初始化 fn VO 與 scope chain

   ```js
   fnEC: {
      VO: {
         a: undefined,
         fn2: function,
      },
      scopeChain: [...]
   }
   ```

 - 第 3 行 `console.log(a)`
   
   在 fnEC.VO 找到 a，值是 `undefined`，印出 `undefined`
 
 - 第 4 行 `var a = 5`
   
   在 fnEC.VO 找到 a，賦值 5
   ```js
   fnEC: {
      VO: {
         a: 5,
         fn2: function,
      },
      scopeChain: [...]
   }
   ```

 - 第 5 行 `console.log(a)`

   在 fnEC.VO 找到 a，值是 5，印出 5

 - 第 6 行 `a++`

   在 fnEC.VO 找到 a，賦值 6

   ```js
   fnEC: {
      VO: {
         a: 6,
         fn2: function,
      },
      scopeChain: [...]
   }
   ```

 - 第 7 行 `var a`

   因為 fnEC.VO 的 a，已經宣告過，這裡沒有賦值，所以不做任何事

 - 第 8 行 `fn2()` 

   呼叫函式，進入第 10 行

 - 第 10 行

   建立 fn2EC 的 VO 及 scope chain

 - 第 11 行 `console.log(a)`

   在 fn2 VO 找不到 a，
   往上層的 fn VO 找，找到 a，值是 6，
   印出 6

 - 第 12 行 `a = 20`

   在 fn2 VO 找不到 a，
   往上層的 fn VO 找，找到 a，賦值 20

   ```js
   fnEC: {
      VO: {
         a: 20,
         fn2: function,
      },
      scopeChain: [...]
   }
   ```

 - 第 13 行 `b = 100`

   在 fn2 VO 找不到 b，往上層的 fn VO 找還是找不到 b，於是再往上層 global VO 找仍找不到，最後在這層新增一個變數 b，並賦值 100

   ```js
   globalEC: {
      VO: {
         a: 1,
         b: 100,
         fn: function,
      },
      scopeChain: [globalEC.VO]
   }
   ```

   `fn2()` 執行結束，移除 fn2EC

 - 回到第 9 行 `console.log(a)`
   
   在 fnEC.VO 找到 a，值是 20，印出 20

   `fn()` 執行結束，移除 fnEC

 - 第 17 行 `console.log(a)`

   在 globalEC.VO 找到 a，值是 1，印出 1

 - 第 18 行 `a = 10`

   在 globalEC. VO 找到 a，賦值 10

   ```js
   globalEC: {
      VO: {
         a: 10,
         b: 100,
         fn: function,
      },
      scopeChain: [globalEC.VO]
   }

 - 第 19 行 `console.log(a)` 

   在 globalEC.VO 找到 a，值是 10，印出 10

 - 第 20 行 `console.log(b)`

   在 globalEC.VO 找到 b，值是 100，印出 100

   執行結束，移除 globalEC 
