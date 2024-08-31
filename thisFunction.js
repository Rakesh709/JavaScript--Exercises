

const user = {
    name: 'Rakesh',
    price :99,
    // this refer to current context
    welcomeMessage : function(){
        // console.log(`Welcome to our store ${this.name}`);
        // // console.log(this);
    }
}

// user.welcomeMessage()
// user.name = "Prime"
// user.welcomeMessage()

// console.log(this);


function chai(){
    let username = "rakesh"
    // console.log(this.username);
}

chai()



// getting undefined why ?
// we cant use this in function
// we can use this in object only
//it willbe use in DOM 


const chai2 = ()=>{
    let userName = "prime"
    console.log(this);
}

//syntax of arrow function

()=> {}


//implecit keyword with return keyword

const addTwo = (num1,num2) => {
    return num1 + num2
}


// const addThree = (num1,num2,num3) => (num1+num2+num3)
//important note 

// {} --> return keyword imp
// () --> no return keyword 

//explacit return used here no return keyword
const ADd = (num1,num2) => ({username:"rakesh"})


// console.log(addTwo(1,2))
// console.log(addThree(1,2,3))

//console.log(ADd());




























