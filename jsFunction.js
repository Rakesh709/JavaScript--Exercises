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


// function calaculateVolume(length){
//     return function (breadth){
//         return function (height){
//             return length*breadth*height;
//         }
//     }
// }

// console.log(calaculateVolume(3)(4)(5));

//it is like we have multipkle argument we can pass in nested form of function and passinf the argument is little bit diffrent

//3. js function in html

//4. setTimeOut function in js 

//setTimeout(function, milliseconds, arg1, arg2, ...);
/*
Parameters:
function: After the specified time period, this is the function that is executed.
milliseconds: The delay time is expressed in milliseconds.
arg1, arg2: If needed, these are the optional parameters.


Purpose of setTimeout()
In JavaScript, the setTimeout() function is utilized to introduce a delay or to execute a particular function after a specified amount of time has passed. It is part of the Web APIs provided by browsers and Node.js, allowing asynchronous execution of code.


*/

// function delayFunction(){
//     console.log("this won't be executed due to clearnTimeout");
// }

// let timeOutId = setTimeout(delayFunction,2000);

// console.log(timeOutId)

// clearTimeout(timeOutId);
// console.log("timeout cancelled")

//-----------------------------------------

console.log("start");

setTimeout(function(){
    console.log("Delay log after 2000 millisec");
},2000);

console.log("end")

setTimeout(function(){
    console.log(" this is the second timeout")
},1000);

console.log("second timmer");












