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

const result = findLargestPair([10, 5, 20, 15, 25, 2]);
console.log("Largest Pair:", result.largestPair);
console.log("Indices:", result.indices);