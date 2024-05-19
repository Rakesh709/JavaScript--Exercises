// Write a JavaScript function to calculate the sum of two numbers.

// function sumToNumber(num1,num2){
//     return  num1+num2;
// }

// const sum = sumToNumber(2,4);
// console.log(`The sum is ${sum}`);
//-------------------------------------------------------------------------------------------

//Write a JavaScript program to find the maximum number in an array.
// const maxArray = [1,5,7,3];

// function findMaxArray(arr){
//     let max =arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>max){
//             max= arr[i];
//         }
//     }
//     return max;
// }

// let number =[2,6,8,3];
// console.log(findMaxArray(number));

// function findMax(arr){
//     let max = arr[0];
//     for (let i=1;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// }

//----------------------------------------------------------------------------------------

//Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

// function sameSame(text){
//     let newText = text.split('').reverse().join('');
//     return newText === text;
// }

// let testText ="Bob";
// console.log(sameSame(testText));

//---------------------------------------------------------------------------------------
//Write a JavaScript program to reverse a given string
// function reverseText(text){
//     return text.split('').reverse().join('');
// }

// let text ="rakesh Kumar";

// console.log(reverseText(text));

// function reverseString(str){
//     let reverseStr='';
//     for(let i=str.length-1;i>=0;i--){
//         reverseStr+=str[i];
//     }
//     return reverseStr;
// }

// let testStr = "rakesh kumar is nood in coding";
// console.log(reverseString(testStr));

//--------------------------------------------------------------------------------------
//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// function arrayEven(arr){
//     let newArray= [];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }

// let number =[2,6,8,3,15,19,50];
// console.log(arrayEven(number))

//------------------------------------------------------------------------------------

//Write a JavaScript program to calculate the factorial of a given number

// 4= 4*3*2*1

// function factorial(num){
//     let fact=1;
//     for(let i=1; i<=num; i++){
//         fact *=i;
//     }
//     return fact;
// }

// let number=3;
// console.log(factorial(number));

// function factorial(num){
//     let fact=1;
//     for( let i=1 ;i<=num;i++){
//         fact*=i;
//     }
//     return fact;
// }

// let number=3;
// console.log(factorial(number));

//---------------------------------------------------------------------------
//Write a JavaScript function to check if a given number is prime
// defination of prime number
// primenumber is 1,2,3,5,7,11,13 and so on...
//wrong one
// function primeNumber(num){
//     for(let i=0;i<=num;i++) {
//         if (num%1==0 && num%i==0){
//             console.log("prime")
//         }else{
//             console.log( "Not Prime");
//         }
//     }

// }

// let number=6;
// console.log(primeNumber(number));

//Write a function that returns the sum of all numbers in an array.

// function sumArray(arr){
//     let sumArr=0;
//     for(let i=0; i<arr.length; i++){
//         sumArr+=arr[i];
//     }
//     return sumArr
// }

// let ArrayNumer =[1,2,3]
// console.log(sumArray(ArrayNumer));

//Implement a function that finds the maximum number in an array

// function maxNumber(arr){
//     let arrMax= arr[0];
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]>arrMax){
//             arrMax = arr[i]
//         }
//     }
//     return arrMax;
// }

// let ArrayNumer =[111111,2,3,777,+66666334]
// console.log(maxNumber(ArrayNumer));

//Write a function that returns a new array containing only the unique elements from an input array.
//steps to do it
// We start by creating an empty array called uniqueArray. This is where we’ll store our unique elements.
// Then, we start a loop that goes through each element in the input array arr.
// For each element, we use the indexOf method to check if it’s already in uniqueArray. The indexOf method returns the index of the element in the array if it’s present, and -1 if it’s not.
// If indexOf returns -1, that means the element is not in uniqueArray, so we add it using the push method.
// If indexOf does not return -1, that means the element is already in uniqueArray, so we do nothing and move on to the next element.
// Once we’ve checked all the elements in arr, we return uniqueArray, which now contains only the unique elements from arr.

// function uniqueElement(arr){
//     let uniqueArray =[];
//     for(let i=0;i<arr.length; i++){
//         if(uniqueArray.indexOf(arr[i])===-1){
//             uniqueArray.push(arr[i]);
//         }

//     }
//     return uniqueArray;0
// }

// // let ArrayNumer =[111111,2,3,777,+66666334]
// let ArrayNumer =[1, 2, 2, 3, 4, 4, 5]
// console.log(uniqueElement(ArrayNumer));

// function uniqueArray(arr){
//     let uniqueElement=[];
//     for(let i=0;i<arr.length; i++){
//         if(uniqueElement.indexOf(arr[i])===-1){
//             uniqueElement.push(arr[i]);
//         }
//     }
//     return uniqueArray
// }

//Implement a function that returns the average value of numbers in an array.

// function avgArray(arr){
//     let  sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum+=arr[i]/arr.length;
//     }
//     return  sum;
// }

// let ArryaV =[1,2,3,4,5,6,7,8,9];
// console.log(avgArray(ArryaV));

// function calculateAvg(numbers){
//     let sum=0;
//     for(let number of numbers){
//             sum+=number;
//     }
//     return sum/numbers.length;
// }

// let Num=[1,2,3,4,5,6,7,8,9]
// console.log(calculateAvg(Num));

//function that sorts an array of strings in alphabetical order.

// function sortArray(arr){
//     return arr.slice().sort();
// }

// let array=["zz",'aa',"ww","cc","bb"];

// console.log(sortArray(array));

//=====================================
//  bubble short alogorith we can use to solve it
//  need to check latter
// }

//------------------------

//Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1.

// function findIndexof(arr,element){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===element){
//             return i;
//         }
//     }
//     return -1
// }

// let ArrayElement=[1, 2, 3, 4, 5]
// let Elements=3;

// console.log(findIndexof(ArrayElement,Elements));

// function findIndexOf(arr,elemet){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===elemet){
//             return i;
//         }
//     }
//     return -1;
// }

// let ArrayElement=[1, 2, 3, 4, 5]
// let Elements=3;

// console.log(findIndexOf(ArrayElement,Elements))

//Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array

// function boolenFilter(arr){
//     return arr.filter(Boolean);
// }

// let arrayBoolean= [false, null, 0, undefined, NaN]

// console.log(boolenFilter(arrayBoolean))

//function that merges two arrays into a single array, alternating elements from each array.

// function mergeArray(arr1, arr2) {
//   const mergedArray = [];

//   const maxLength = Math.max(arr1.length, arr2.length);
//   console.log(maxLength)
//   console.log(arr1.length);
//   console.log(arr2.length);


//   for (let i = 0; i < maxLength; i++) {
//     if (i < arr1.length) {
//       mergedArray.push(arr1[i]);
//     }
//     if (i < arr2.length) {
//       mergedArray.push(arr2[i]);
//     }
//   }
//   return mergedArray;
// }

// let array1 = [1, 4, 7, 8];
// let array2 = [9, 8, 76,6,9,45,66];

// console.table(mergeArray(array1, array2));


//function that finds the second smallest element in an array of integers.

// function seconsArrayElement(arr){
//   let shortArray = arr.sort();
//   console.log(shortArray);
//   return  shortArray[1];
// }


// let arrayEle =[1,5,3,8,0];

// console.log(seconsArrayElement(arrayEle));

//without inbuild function--> need to check one more time 

// function secondSmallestNum(arr){
// let sortArray= arr.sort((a,b)=> a-b);
// return sortArray[1];
// }


// let arrayEle =[1,5,3,8,0];
// console.log(secondSmallestNum(arrayEle))

//------------------------------------------------------------------------------------------

//function that groups elements in an array based on a given condition. For example, grouping even and odd numbers into separate arrays.


// function seperaterArray(arr){
//     let evenArray =[];
//     let oddArray =[];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2===0){
//             evenArray.push(arr[i]);
//         }else{
//             oddArray.push(arr[i]);
//         }

//     }
//     return [evenArray,oddArray]
// }


// let arrayTest =[1,4,7,2,4];
// console.log(seperaterArray(arrayTest));

//-----------------------------------------------------------------------

// programe to sort the array


let array = [34, 7, 23, 32, 5, 62];

for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
        if(array[i]<array[j]){
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}

console.log(array);


