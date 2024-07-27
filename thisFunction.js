const { Long } = require("mongodb")

const user ={
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



const addTwo = (num1,num2) => {
    return num1 + num2
}


// const addThree = (num1,num2,num3) => (num1+num2+num3)

const ADd = (num1,num2) => ({username:"rakesh"})


// console.log(addTwo(1,2))
// console.log(addThree(1,2,3))

console.log(ADd());




























