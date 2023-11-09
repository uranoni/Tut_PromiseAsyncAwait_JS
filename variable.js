// var  : scope   function and global
// let & const : scope


var x = 2;
{
    var x  = 3
    console.log(3);
}

console.log(x)



let y = 10;
{
    let y = 20;
    console.log(y);
}

console.log(y)