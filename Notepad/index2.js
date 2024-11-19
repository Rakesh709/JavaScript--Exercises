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
