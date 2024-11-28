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

function fibSeries(n){
    return n * fibSeries(n-1)
}

console.log(fibSeries(3));
