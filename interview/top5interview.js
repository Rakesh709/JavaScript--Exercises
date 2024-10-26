//1. function to reverse the string 

function reverseStr(str){
    let reversed='';
    for(let i=str.length-1; i>=0;i--){
        reversed+=str[i]
    }
    return reversed
}


//console.log(reverseStr("123444"));

function reverseStrInBuild(str){
    return str.split("").reverse().join("");
}


//2. function to return longest word in sentense 

function findLongest(sentence){
    const words = sentence.split(" ");
    let longestWord= '';
    
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord=word
        }
    }
    return longestWord
}

//console.log(findLongest("I hate Javascript kfggsfgkffakka"));

//3. string is palindrome or not 

function isPalindrome(str){
    const reverseString = str.split("").reverse().join("")
    return str=== reverseString
}

//console.log(isPalindrome("racecar"));

function isPalindrome2(str){
    let ulta= '';
    for(let i=str.length-1; i>=0; i--){
        ulta+=str[i]
    }
    return ulta===str
}

//console.log(isPalindrome2("212"));



//4. function remove dublicate elem from an array
// [ 1,2,3,4,4,4,5,6,7]

function removeDublicate(arr){
    let newArr=[]
    
    for(let elem of arr){
        if(newArr.indexOf(elem)===-1){
            newArr.push(elem)
        }
    }
    return newArr
}

//console.log(removeDublicate([ 1,2,3,4,4,4,5,6,7]));

function removeDublicate2(arr){
    let uniqueArray =[];

    for(let i=0; i< arr.length; i++){
        if(uniqueArray.indexOf(arr[i])===-1){
            uniqueArray.push(arr[i])
        }
    }
    return uniqueArray
}

//console.log(removeDublicate2([ 1,2,3,4,4,4,5,6,7]));

function removeDublicate3(arr){
    return [...new Set(arr)]
}

//console.log(removeDublicate3([ 1,2,3,4,4,4,5,6,7]));

//5. check whether two strings are anagram or not 

function areAnagrams(str1,str2){
    const sortStr1 = str1.split("").sort().join("");
    const sortStr2 = str2.split("").sort().join("");

    return sortStr1 === sortStr2
}

//console.log(areAnagrams("listen","silent"));
