function multipleBy5(num){
    return num*5
}

//FUNCTION IS OBJEVT
multipleBy5.power=2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

//**************************************New Keyword */

function createUser(username,score){
    this.username= username
    this.score= score
}

createUser.prototype.increment=function(){
    this.score++
}

//below is constructor prototype
//abhi thak hawa mai hai new keyword sai object bana
createUser.prototype.primeMe= function(){
    console.log(`Price is ${this.score}`)
}

//new keywordis like by default maine method define kia nhi hai but prototype sai method apna banaya hai to NEW keyword batata hai bahi new method banaya hai woo bhi lele


const chai = new createUser("chai",25)
const tea = createUser("tea",250)

//SAME AS ARRAY.LENGTH != ARRAY.PROTOTYPE.LENGTH

//chai.primeMe()

//****************Prototype********************************** */

// let myName = "rakesh     "

// //create method 

// console.log(myName.truelength);

let myHeroName ="Prime"

let myHero = ["Thor","Deku"]

let heroPower={
    thor:"Hammer",
    Deku:"quirk",

    getDekuPower:function(){
        console.log(`Deku power is ${this.Deku}`);
        
    }
}

Object.prototype.rakesh=function(){
    console.log(`Rakesh is present in all objects`);  
}

Array.prototype.heyRakesh=function(){
    console.log(`Rakesh says Hello`);
    
}


//console.log(heroPower.getDekuPower());

// heroPower.rakesh()
// myHero.rakesh()
// myHeroName.rakesh()

//for Array.prototype

//myHero.heyRakesh()


//heroPower.heyRakesh() // this object not access of  Array.prototype.heyRakesh

//AGER OBJECT TO POWER DE DIA TO SABKO MIL JAYEGA LIKE array function , string , object but AGER SIRF ARRAY KO DIA TO SIRF ARRAY KAI PASS HI RHEGA 

// AISA ISLIA Q KI HIGER SAI LOWER KI NHI SKTE 
// OBJECT --> ARRAY, STRING  CORRECT 
// ARRAY --> OBJECT,  INCORRECT 


//inheritance

const User= {
    name:"chai",
    email:"chai@google.com"
}

const Teacher= {
    makeVideo:true
}

const TeachingSupport ={
    isAvailable:false
}

const TASupport={
    makeAssignment:"Js assignment",
    fullTime: true,
    //to get access of teacher
    __proto__: TeachingSupport
}

Teacher.__proto__ =User

//ABOVE IS OLD ONE METHOD

//NEW WAY

Object.setPrototypeOf(TeachingSupport,Teacher)
//above is TeachingSupport can access of Teacher

//problem 

let anothername = "chaiorcode      "

String.prototype.truelength= function(){
    console.log(`${this}`);
   
    console.log(` True length is: ${this.trim().length}`);
    
}

anothername.truelength()

//rakesh is going to this line no 127
"rakesh ".truelength()