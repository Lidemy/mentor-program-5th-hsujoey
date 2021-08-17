## hw4：What is this?

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
const obj = {                  //line1
  value: 1,                    //line2
  hello: function() {          //line3      
    console.log(this.value)    //line4
  },                           //line5
  inner: {                     //line6
    value: 2,                  //line7
    hello: function() {        //line8
      console.log(this.value)  //line9
    }                          //line10
  }                            //line11
}                              //line12
                               //line13
const obj2 = obj.inner         //line14
const hello = obj.inner.hello  //line15
obj.inner.hello() // ??        //Q1
obj2.hello() // ??             //Q2
hello() // ??                  //Q3
```
---

## 輸出結果
```
2
2
undefined
```

## 流程說明

- Q1： `obj.inner.hello()` 
    
    可以看成 `obj.inner.hello.call(obj.inner)`，

    因為 `call()` 括號內的值，就是 `this`，
    
    所以 `this` 等於 `obj.inner`。
    
    第九行的 `console.log(this.value)`
    
    因為 `this.value` 即 `obj.inner.value`，所以會印出 2。

<br>

- Q2：  `obj2.hello()`
    
    因為第十四行 `const obj2 = obj.inner`
    
    所以 `obj2.hello()` 即 `obj.inner.hello()`
    
    等於 Q1 的結果，所以會印出 2。

<br>

- Q3：  `hello()` 
    
    可以想成 `hello.call()`
    
     `undefined.hello.call(undefined)` 

    沒東西傳入，`this` 的值將會是 預設值
    
    在 嚴格模式下 預設值為 `undefined`
    
    瀏覽器的 `this` 預設值為 `window`
    
    在 `node.js` 的預設值為 `global`

