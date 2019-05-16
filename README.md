# Tut_PromiseAsyncAwait_JS
basic example to explain promise and async/await 
two language lesson

## In promise.js 

#### count funcation 

###### zh

是一個function透過return promise 物件（帶有resolve,reject兩種方法）
帶入要回傳的val值以及測試time延遲時間的參數值
###### en

a function return new Promise Constructor(take resolve and reject methods) , val is the value which take into function and time is delay argument

#### main function

######   zh

使用promise chain代表要執行非同步函式(因為有使用setTimeout延遲)逐步執行
第一個參數代表回傳值
第二個代表延遲時間

###### en 

use promise chain is "then and then ~~ and then" step by step
first argument is val: resolve value
second argument is time : control delay

#### main2 function

######  zh

可以把return promise物件的 function用陣列包起來
他會把分別執行 
但只要其中一樣錯就會跳錯誤

######  en

promise all can  use array package  and  excute in parallel time when One of the function error will reject!!




##  async.js

#### main

##zh 

宣告function 必須帶有async 要等待 回傳promise 物件的funciton使用await
可以用try catch 來接 reject的情況

## en

When use async/await function , the await funciton should return a
promise Constructor and Declaration function should use async

