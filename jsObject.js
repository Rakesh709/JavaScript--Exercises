
const mySymbol = Symbol("key1")

const jsUser ={
    name: 'John Doe',
    age: 30,
    [mySymbol] : "prime",
    occupation: 'Software Engineer'
}

// console.log(jsUser)
// console.log(jsUser.name)
// console.log(jsUser[mySymbol]);


jsUser.greeting = function(){
    console.log(`Good Morning ${this.name}`);
}

// console.log(jsUser.greeting());


//singleton

// const tinderUser = new Object()


const tinderUser ={ }

tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.age = 30
tinderUser.occupation = "Software Engineer"

// console.log(tinderUser);

const obj1 ={
    o1name: "John",
    o1age: 30
}

const obj2 ={
    O2name: "Jane",
    o2age: 25
}

//if they have the same keys

const obj3 = Object.assign({},obj1,obj2)
const obj4 = {...obj1,...obj2}
// console.log(obj3)
// console.log(obj4)










