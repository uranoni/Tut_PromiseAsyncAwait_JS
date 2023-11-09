// function double(x){
//     console.log(x *2);
// }

//  箭號函式只有變數只有一個時可以省略括號
// return 只有一行可以不用大括號跟 return 關鍵字
// const double = (x) =>{
//     return x *2
// };
// const double = (x) =>console.log(x *2);


// double(3)


// this 的情境

// normal function 
// function jump(){
//     console.log(this);
// }
// arrow function
// const jump =()=>{
//     console.log(this);
// }
jump();

//物件作用下的情境會指向物件
const obj = { };
// obj.jump = jump;
// obj.jump()