//https://www.geeksforgeeks.org/javascript-array-programming-examples/

//1. Create an array of given size in JavaScript
//using constructer
// let arr = new Array(5);
// console.log(arr);  // [undefined, undefined, undefined, undefined, undefined]
// console.log(arr.length);

//using loop

// let size=5;
// let arr=[];

// for(let i=0; i<size ;i++){
//     arr.push(i);
// }
// console.log("Array using for loop: ",arr);

//************************************************************** */

//2. How to initialize an array in JavaScript 
// const sports = ["cricket", "football","competitive-programming"];

// console.log("sports Array", sports);

// const sports = new Array("cricket", "football","competitive-programming");
// console.log("sports:",sports)


//**************************************************************** */

//3. Iterate over an array in JavaScript

// let arr= [1,2,3,5,67];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//for each method

// let index=0;
// let array = [1,2,3,5,8];

// array.forEach(myFunction);

// function myFunction(item, index){
//     console.log(item);
    
// }

// const fruits = ["apple", "orange", "cherry"];

// fruits.forEach(function(item){
//     console.log(item +" is a fruit.");
// });

// const num = [1,2,3,4];
// let sum=0;
// num.forEach(function(item){
//     sum+=item
//     console.log(sum)
// })


// const number = [1,2,3,4];

// number.forEach(function(item,index,arr){
//     arr[index]=item*10
// })


//**************************************************************** */

//4.create a zero filled array in JavaScript
//syntax : arr(length).fill(value);


// let fillArray= Array(4).fill("no");

// console.log(fillArray); 
// [ 'no', 'no', 'no', 'no' ]

// console.log(`[${fillArray}]`)
// [no,no,no,no]

// output is diff becaouse of template littral this is how js handle to string convertion.

//filled array of size 3*3(2d array)

// const arr2d= new Array(3).fill().map(()=> new Array(3).fill(0));

// console.log(arr2d);

//need to check one more time 

//************************************************************************** */

//5. Array with a Specific Length and Pre-filled Values

// let array = new Array(4).fill(0)
// console.log(array);


//*************************************************************************** */

//6. Array includes a value



// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function check(element){
//     for(let i=0; i<num.length; i++){
//         if(num[i]===element){
//             return "element found "+ num[i]
//         }
//     }
//     return "not found "+ element
// }


// console.log(check(89))


//********************************************* */
//7. Access Elements in an Array

const array = [100, 200, 300, 400, 500]; 

// array.forEach(accessFunction);

// function accessFunction(item){
//     console.log(item)
// }

// for(let i=0; i<array.length; i++){
//     console.log(array[i]);
// }


//Destructuring Assignment

// let [firstName,secondName , thirdName,forthname,fifth] = ["alpha", "beta", "gamma", "delta"];

// console.log(firstName);
// console.log(thirdName)
// console.log(forthname)
// console.log(fifth)
// console.log(secondName)




