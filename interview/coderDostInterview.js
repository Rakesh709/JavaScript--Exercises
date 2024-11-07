// const input = [5,7,9,11,15,17]
// const output = 13 

// for( let i=0; i<input.length; i++){
//     let current = input[i]
//     let next = current+2
//     if(input[i+1] === next) continue;
//     else{
//         //console.log(next);
//         break
        
//     }
// }

//optimise code 

// for(let i=0; i<input.length; i++){
//     let current = input[i];
//     let next = current+2;
//     if(input[i+1]!==next){
//         console.log(next);
//         break
        
//     }
// }

//const input2 = [5,7,9,11,15,17]
// const output2 = 13 

// for(let i=0; i< input2.length; i++){
//     let current = input2[i]
//     let nextValue= current+2
//     if(input2[i+1]===nextValue) continue
//     else{
//         console.log(nextValue);
//         break
        
//     }
// }

//find the missing number from the series 
//[5,7,9,11,15,17]
//13 

// let num =[5,7,9,11,15,17]

// for(let i=0; i<num.length; i++){
//     let currentNum = num[i]
//     let nextNum = currentNum+2
//     if(num[i+1] === nextNum) continue
//     else{
//         console.log(nextNum);
//         break
        
//     }
// }


//2 common key value 

// const input1 = {a:1,b:2,c:3,d:10,e:12}
// const input2 = {a:2,e:12,f:6,d:10}

// const output = {d:10,e:12}

// function doubleCheck(input1,input2){
//     let objr ={}

//     for(let i in input1){
//         if(input1[i]===input2[i]){
//             objr[i]=input1[i]
//         }
//     }
//     return objr
// }

//console.log(doubleCheck(input1,input2));

//second largest number

// let input = [1,2,-2,11,7,11]
// const output = 7

// let input1 = [1,4,7,2,4,7]
// const output1 =4

// function secondlargest(input){
//     let num = [...new Set(input)].sort((a,b)=>a-b);
//     return num[num.length-2]
// }

//console.log(secondlargest(input));


//sortt the number 

let sortNum = [1,6,3,7,5,10,1,5]
//console.log(sortNum.sort((a,b)=>a-b));


let numbers = [10,1,5];
//console.log(numbers.sort((a,b)=>a-b));

//second largest number without in build function 

//let input = [1,2,-2,11,7,1]
//7

// function secondlargest(input){
//     let arr = input.sort((a,b)=> a-b);
//     let res = arr[arr.length-1]

//     for(let i=arr.length-2; i>=0; i--){
//         if(res!=input[i]){
//             res=input[i]
//             break
//         }
//     }
//     return res
// }

//console.log(secondlargest([2, 3, 4, 6, 6, 7, 7]));


//second largest num in arr

function secondlargest(arr){
    let sortArray = arr.sort((a,b)=>a-b)
    console.log(sortArray);
    
    let res = sortArray[sortArray.length-1]
    console.log(res);
    
    for(let i=arr.length-2; i>=0;i--){
        if(res !=arr[i]){
            res= arr[i]
            break
        }
    }
    return res

}
//console.log(secondlargest([2, 3, 4, 6, 6, 7, 7]));


//rotate the array by 2 inbackword
const input = [2,7,11,4,-2]
const output=[11,4,-2,2,7]

function rotateArray(input){
    for(let i=0;i<2;i++){
        let temp =input[0]
        for(let i=0; i<input.length-1;i++){
            input[i]=input[i+1];
        }
        input[input.length-1]=temp;
    }
    console.log(input);   
}

rotateArray(input);


