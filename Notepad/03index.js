//Code 19: To find a first pair whose sum is zero
//[-5,-4,-3,-2,-1,0,1,2,3,4,5]

function getSumPairZero(array){
   for(let i=0; i<array.length; i++){
    for(let j =i+1; j<array.length; j++){
        if(array[i]+array[j]===0){
            return [array[i], array[j]]
        }
    }
   }
   return null;
}

//const result = getSumPairZero([-6,-5,-4,-3,-2,-1,0,1,2,3,4,56,68])
//console.log(result)


//To find the largest pair of the 2 elements using indexing with unsorted elements

function findLargestPair(array){
    let max1 = -Infinity
    let index1= -1;
    for(let i=0; i<array.length; i++){
        if(array[i]>max1){
            max1= array[i];
            index1=i
        }
    }

    let max2 = -Infinity;
    let index2= -1
    for(let i=0; i<array.length; i++){
        if(array[i]>max2 && i !==index1){
            max2= array[i];
            index2= i
        }
    }

    return {
        largestPair : [max1,max2],
        indices : [index1,index2]
    }
}

// const result = findLargestPair([10, 5, 20, 15, 25, 2]);
// console.log("Largest Pair:", result.largestPair);
// console.log("Indices:", result.indices);


//Code 21: To find the largest pair of the 2 elements using indexing with unsorted elements 
function sortedArray(arr){
    let sortArr = arr.sort((a,b) => b-a)
    
    console.log(sortArr);
    
    return sortArr[0]+sortArr[1]
     
}

//console.log(sortedArray([4,6,2,8,9]));
 

//Code 22: To find the largest pair of the 2 elements using indexing with sorted elements

function sortElement(arr){
    let sortArr = arr.sort((a,b)=>b-a)
    console.log(sortArr);
    console.log(arr);
    
    return sortArr[0]+sortArr[1]
}

//console.log(sortElement([4,6,2,8,9]));

//Code 23: To find the index of an element from an array 

let arr = ["a","b","c"]

let indexArr = arr.indexOf("c")

//console.log(indexArr);


//Code 24: Fibonacci Series (0,1,1,2,3,5,8,13....)

// function fibonacciSeries(n){
//     let n1=0
//     let n2=1
//     let nextTerm;
//     let arr=[]

//     arr.push(n1)
//     arr.push(n2)

//     for(let i=2; i<=n; i++){
//         nextTerm =n1+n2;
//         n1=n2
//         n2=nextTerm
//         arr.push(nextTerm)
//     }
//     return arr
// }

// console.log(fibonacciSeries(4));
// //1+1+2+3+5

function fibonacciSeries(n){
    let n1=0
    let n2=1;
    let temp;
    let arr=[]

    arr.push(n1)
    arr.push(n2)

    for(let i=2; i<n;i++){
        temp=n1+n2;
        n1=n2
        n2=temp
        arr.push(temp)
    }
    return arr
}

//console.log(fibonacciSeries(4));


function listFibo(n){
    let arr= [0,1];
    for(let i=1;i<n; i++){
        arr.push(arr[i]+arr[i-1])
    }
    return arr
}

//console.log(listFibo(4));

//Code 26: Finding a missing elements in an array and then add with existing elements. (-1 means if elements not found then it will return always -1 as per rule)

// let arrx =[2,4,6]
// let missingArray = [3,5]
// let arrrmiss=[]

// //1 +1 =2 -> 2+1 =3 (missing) continue  3+1 =4 -> 4+1 =5(missing cont)

// for(let i=0; i<arrx.length-1 ; i++){
//     let current = arrx[i]
//     let next = current+1
//     if(arrx[i+1]===next){
//         continue
//     }else{
//         console.log(next);
        
        
//     }
// }

const input = [2,4,6]
const output = [3,5]

for(let i=0; i<input.length-1; i++){
    let current  = input[i]
    let next = current+1
    if(input[i]===next) continue
    else{
        //console.log(next);
        
    }
}

let arrx = [1, 2, 4, 6];
let arrrmiss = [];

for(let i=0; i<arrx.length-1;i++){
    let current = arrx[i]
    let next = arrx[i+1]

    for(let num= current+1; num<next; num++){
        arrrmiss.push(num)
    }
}
//console.log(arrrmiss);

// let arrShort = [2,5,9,3]
// console.log(arrShort.sort());
// console.log(arrShort.sort((a,b)=>a-b));

// Use sort() with a comparator function ((a, b) => a - b) when sorting numbers for proper numerical order.
// Without a comparator, the default sorting is lexicographical, which might not give the desired result for numbers.


//fibonaci series 
function listFibonacci(n){
    let arr=[0,1];
    for(let i=0;i<n; i++){
        arr.push(arr[i]+arr[i+1])
    }
    return arr
}

console.log(listFibonacci(4));
