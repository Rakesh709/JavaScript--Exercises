//6. return of vowels in a string 

//array of vovels 
// loop the string into array 
// if chat found in array of vowel 
// increate the count varibale

function countVowels(str){
    const vowels = ["a","e","i","o","u"]
    let count =0;

    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}

//console.log(countVowels("rakesh"));


//7. largest number in an array 

function findLargestNumber(arr){
    let latgestNumber= arr[0]

    for(let i=1; i<arr.length;i++){
        if(arr[i]>latgestNumber){
            latgestNumber= arr[i]
        }
    }
    return latgestNumber
}

//console.log(findLargestNumber([1,5,3,8]));

//8. numnber is prime or not 

function isPrime(number){
    for(let i=2; i<=number/2; i++){
        if(number%i===0){
            return false
        }
    }
    return true
}

//console.log(isPrime(5));


//9. factorial of number

function factoral(num){
    if(num===0){
        return 1
    }

    let factorial =1;

    for(let i=1; i<=num; i++){
        factorial*=i
    }

    return factorial
}

//console.log(factoral(5));


//10. remove whitespaces from string 

function removeWhiteString(str){
    let result ='';

    for(let i=0; i<str.length; i++){
        if(str[i] !== " "){
            result+= str[i]
        }
    }
    return result;
}

console.log(removeWhiteString("Hello, World"));
