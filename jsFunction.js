//https://www.geeksforgeeks.org/javascript-function-examples/?ref=lbp

//1. How to write a function in JavaScript ?

// function CreatingArray(){
//     console.log("welcome to js");
// }

// CreatingArray();
// console.log(CreatingArray())

// function welcome(name){
//     console.log("hello ",name);
// }

// welcome("rakesh");


// let welcome = function(){
//     return "welcome rakesh";
// }

// console.log(welcome());

//named function 
// function fullNmae(fname,sname){
//     return  fname +" "+ sname;
// }

// let pehla= "rakesh";
// let dushra ="kumar";

// console.log(fullNmae(pehla,dushra));

//Anonymous function 
// let add = function(a,b){
//     return a+b;
// }

// console.log(add(2,4))

//nested function

// function msg(fistname){
//     function hey(){
//         console.log("Hey",fistname);
//     }
//     return hey;
// }


// console.log(msg("rakesh"))


//************************************************************ */

//2.currying function in JavaScript
 // transforms the function of multiple arguments into several functions of a single argument in sequence


//  function calculateVolume(l,b,h){
//     return l*b*h
//  }

//  console.log(calculateVolume(3,4,5));


function calaculateVolume(length){
    return function (breadth){
        return function (height){
            return length*breadth*height;
        }
    }
}

console.log(calaculateVolume(3)(4)(5));

//it is like we have multipkle argument we can pass in nested ofrm of function and passinf the argument is little bit diffrent