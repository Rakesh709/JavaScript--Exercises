
const randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector('.guesses')
const remaing = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess= parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    //to validate valid number
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess<1){
        alert("Please enter a number greater than 1")
    }else if(guess>100){
        alert("Please enter a number less than 100")
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess){
    //
}

function displayGuess(guess){

}

function displayMessage(message){

}


function endGame(){

}


function newGame(){

}