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

// const array = [100, 200, 300, 400, 500]; 

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


//******************************************************* */

//8. Determine the Length of an Array


//the length property of the array to determine the length of the array. It will return the number of elements in an array
// let arr = [12, 4.7, 9, 10,55,77];
// // console.log(arr.length);

// let size=0;
// for(let i in arr){
//     size++
// }

// console.log(size)

// let arr2= ["rakesh",56.333]
// let size=0;
// for(let i of arr2){
//     size++;
// }


// console.log(size)


//---------------------------------------------------------------------------------

//9. checkinf if an element is present in an array

//Approach 1: Using includes() method

// const arr = [12,34,56,45];

// if(arr.includes(12)){
//     console.log("12 is present")
// }else{
//     console.log( "12 is not present");
// }

// function findElement(arr,element){
//     if(arr.includes(element)){
//         return `${element} is present`
//     }else{
//         return `${element} is not present`
//     }
// }

// let array = [12,34,56,45];
// let ele = 12;

// console.log(findElement(array,56));

//Approach 3: Using the find() method


// const arr = [45,67,88,12,3,4];

// const result = arr.find(element => element===199);

// if(result!==undefined){
//     console.log(`${result} is present`)
// }else{
//     console.log(`result is not present`)
// }

// function findElement(arr,element){
//     let result = arr.find(elem =>elem===element)
//     if(result!==undefined){
//         return "found"
//     }else{
//         return "not found"
//     }
// }


// const arr = [45,67,88,12,3,4];

// console.log(findElement(arr,12))

// Approach 4: Using the for() Loop

// const arr = [12,45,77,33,79];

//  let value = false;

//  for(let i=0; i< arr.length; i++){
//     if (arr[i]==45) {
//         value=true;
//         break;
//     }
//  }

// if(value){
//     console.log("value is present")
// }else{
//     console.log("value not present");
// }

//-------------------------------------------------------------------

//Difference between Array and Array of Objects in JavaScript

/*

Array
An Array is a collection of data and a data structure that is stored in a sequence of memory locations.

*/

// let arr = [1, 2, 3, 4, 5];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// arr.pop();

// console.log(arr)

/* 
An array of objects
It stores multiple values in a single variable. The object can contain anything in the real world such as person names, cars, and game characters */

// Array of objects
// let myObject = {
//     jhon: {
//         name: 'jhon',
//         age: 12,
//         gender: 'male'
//     },
//     rita: {
//         name: 'rita',
//         age: 32,
//         gender: 'male'
//     }
// };

// //to print any value 
// //// Using DOT notation
// console.log(myObject.jhon.gender);


// // Using [] notation

// console.log(myObject.rita['age'])

// // Using delete keyword
// delete myObject.jhon;

// // Iterating using for..in loop

// for(let key in myObject){
//     console.log(myObject[key])
// }


/*
Array

Array of objects

Arrays are best to use when the elements are numbers.

Objects are best to use when the elements’ strings (text).

The data inside an array is known as Elements.

The data inside objects are known as Properties which consists of a key and a value.

The elements can be manipulated using [].  

The properties can be manipulated using both.DOT notation and [].

The elements can be popped out of an array using the pop() function.

The keys or properties can be deleted by using the delete keyword.


*/


//-------------------------------------------------------------------------

//Swap First and Last Elements

// Using Temporary Variable
//syntax
// let temp =arr1[0];
// arr1[0]= arr1[arr1.length -1];
// arr1[arr1.length -1] =temp;


// let arr1 = [10, 20, 30, 40, 50];

// let tempArr = arr1[0];
// arr1[0]= arr1[arr1.length -1];
// console.log(arr1)
// arr1[arr1.length -1] = tempArr ;
// console.log(arr1); 

//Approach 2: Array Destructuring

// [arr[0],arr[arr.length-1] = arr[arr.length-1],arr[0]]

// let arr1 = [10, 20, 30, 40, 50];

// [arr1[0],arr1[arr1.length-1]]= [arr1[arr1.length-1],arr1[0]];

// console.log(arr1)

//Approach 3: Using XOR Bitwise Operator


//------------------------------------------------------------------------------------
//11 populate an array

// map method
// const numbers = [1, 2, 3, 4, 5];

// let newArray = numbers.map((num) => num)

// console.log(newArray)

// Using Spread Operator

// const numbers = [1, 2, 3, 4, 5];


// console.log([...numbers].map((numbers)=>numbers+1))

//----------------------------------------------------------------------------------

//12. Delete Middle Element


//Method 1: Using JavaScript Spread Operator

// let Arr = [1, 2, 3, 4, 5, 6];

// let middleIndex = Math.floor(Arr.length/2);
// console.log(Arr.length)
// console.log(middleIndex)

// let newArray = [...Arr.slice(0,middleIndex), ...Arr.slice(middleIndex+1)]

// console.log(newArray)

let Arr = [ 1,2,3,4,5,6];
  let Middle =Math.floor(Arr.length/2)
Arr.splice(Middle,1)
console.log(Arr)


