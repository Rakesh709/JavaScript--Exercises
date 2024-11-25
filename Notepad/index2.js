//Code 7: Find factorial of user input number

function fact(num){
    let fact =1
    
        for(let i=1; i<=num;i++){
            fact*=i
           
        }
        //console.log(fact)
    
}

// console.log(fact(3));
//fact(3)

//++++++++++++++++++++++++++++++++++++++++++

//Code 10: Swapping of 2 numbers without third variable
let a=10; 5
let b=20; 4
   a=a+b //30 10 = 10+20 :30  || 5 = 5+4 : 9 
   b=a-b //10 20 = 30-20 :10  || 4 = 9-4 : 5
   a=a-b //20 30 = 30-10 :20  || 9 = 9-5 : 4 
//console.log (a,b)

//++++++++++++++++++++++++++++++++++++++++++++

//Code 13: To find longest word from a string

function longestWord(str){
    let longest =str.split(" ")
    let longestWords =''
    for(let word of longest){
        if(word.length > longestWords.length){
            longestWords = word
        }
    }
    return longestWords
}

//console.log(longestWord("i hate javascript"));

function longestWord2(str){
    let longwordSplit = str.split(" ")
    console.log(longwordSplit);
    
    let longWord= ''
    for(let i=0; i<longwordSplit.length; i++){
        if(longwordSplit[i].length>longWord.length){
            longWord=longwordSplit[i]
        }
    }
    return longWord
    
}

//console.log(longestWord2("i hate javascript"));


//Code 16: To find longest common string from array of strings
//["interspecies", "interstellar", "interstate"]
//"inter"

// function longestCommonString(str){
//     let word= str.split(" ")
//     let sortWord = word.sort();
//     let i=0;
//     while(sortWord[0].length > 0 && sortWord[0].charAt(i) === sortWord[sortWord.length-1].charAt(i)){
//         i++
//     }
//     console.log(sortWord[0].substring(0,i));
//     return sortWord[0].substring(0,i)
    
// }

function longestCommonString(str){
    let word = str.split(" ")
    let arr = word.sort();
    let i=0;
    while(arr[0].length >0 && arr[0].charAt(i) === arr[arr.length-1].charAt(i)){
        i++
    }

    return arr[0].substring(0,i)
}


//console.log(longestCommonString("goo google goosh gooooojjyyy"));

//Code 17: To find vowels and its count in a given string

// function vowelsFinder(str){
//     let vowels = ["a","e","i","o","u"]
//     let count=0;
//     for(let letter of str.toLowerCase()){
//         if(vowels.includes(letter)){
//             count++;
//             console.log(letter)
//         }
//     }

//     return (str.length)-count
// }

function vowelsFinder(str){
    let vowels = ["a","e","i","o","u"];
    let count= 0;
    for(let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            count++
            console.log(letter);
            
        }
    }
    return count
}


//console.log(vowelsFinder("rakeseh"));

//Code 18:To find character occurance from the string
function characterOccurance(str,letter){
    let count=0;
    for(let i=0; i<str.length-1; i++){
        if(str.charAt(i) === letter){
            count++
        }
    }
    
    return count
}


//console.log(characterOccurance("priyapri", "p"));
