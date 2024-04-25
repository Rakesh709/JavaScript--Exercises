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

function msg(fistname){
    function hey(){
        console.log("Hey",fistname);
    }
    return hey;
}


console.log(msg("rakesh"))