// Hoisting
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

//===================================================
//Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.


//Hoisting in JavaScript 
// x=66;
// var x; //jo bhi defination hai upper chali jati hai file kai hoist ho ke {simple moved forward}
// console.log(x);

// say()
// function say(){
//     console.log("hello");
// }

// var and say defination upperr chali jati hai upper ligal hai ye.
//------------------------------------------------------------------
// var y=1;
// var call = function (){
//     console.log(y);
//     // var y=1;
// };

// call(); // get undefined when you removed vat y=1 then it will give 
//--------------------------------------------------------------------
// var y=5;
// var call = function (){
//     var y;   // vat y hoist ho jata hai function kai ander bhi
//     console.log(y);
//     // var y=1;
// };

// call();

//--------------------------------------------------------------------

// console.log(b);
// console.log(a);

let a=10;
var b=20;
const c=30

// console.log(b);

// sayHello()

// function sayHello(){
//     console.log("Hi There!");
    
// }



var hi= function(){
    //console.log("Hi there");
    
}

// hi()

hiii()

var hiii = function(){
    console.log("Hiiiiiiii");
    
}
