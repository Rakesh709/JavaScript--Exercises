//Code 28: Sorting of an string/character
function sorting(arr){
    return arr.sort()
}

//console.log(sorting(["c","b","a"]));

//Code 29: Sorting of an number 

function numSort(arr){
    return arr.sort((a,b)=> b-a)
}

//console.log(numSort([1,23,34,2,76,78]));


//Code 30: To check if given number is prime or not

//Code 32: To find unique values from 2 arrays and keep into one array.
function uniqueElement(arr1,arr2){
    let arr = [...arr1,...arr2]
    let array = [...new Set(arr)]
    //console.log(array);
    
}

//uniqueElement([1,2,2,3],[4,4,5])
function uniqueElement(arr1,arr2){
    let newArray = [...arr1,...arr2]
    let array = [...new Set(newArray)]
    console.log(array);
   
}
uniqueElement([1,2,2,3],[4,4,5])



//Code 33: Find first duplicate element from an array.
function firstDuplicate(){
    let arr =[1,2,2,3,4]
    let data ={}
    for(let item of arr){
        if(data[item]){
            return item
        }else{
            data[item]= item
            //console.log(data[item]);     
        }
    }  
}
//firstDuplicate()


