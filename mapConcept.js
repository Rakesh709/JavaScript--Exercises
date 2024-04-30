/*
map() is used to iterate over the array without making any changes to existing array 

The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

Syntax
var new_array = arr.map(function callback(element, index, array) {
    // Return value for new_array
}[, thisArg])


arrOne.map(value/element, index, array)
*/


const numbers =[1,2,3,4];
// const doubled = numbers.map(item => item *5);
// console.log(doubled)

// function multiFive(num){
//     return num*5;
// }

const newArray = numbers.map(item => item*10);

console.log(newArray);
console.log(numbers)



/* *************************************************** */





























