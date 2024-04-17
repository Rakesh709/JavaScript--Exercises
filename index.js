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

function sumArray(arr){
    let sumArr=0;
    for(let i=0; i<arr.length; i++){
        sumArr+=arr[i];
    }
    return sumArr
}

let ArrayNumer =[1,2,3]
console.log(sumArray(ArrayNumer));