//object
let car= {
    make: "Toyota",
    model:"Carry",
    year:2020,
    start: function(){
        return `${this.model} car started in ${this.year} `
    }
}

// console.log(car);
 
//functional contructor
function Person(name,age){
    this.name= name
    this.age= age
}

let john = new Person("John",30)
// console.log(john.name);

//prototyple chain 

function Animal(type){
    this.type= type
}

Animal.prototype.speak= function(){
    return `${this.type} makes aound`
}

Array.prototype.rakesh= function(){
    return `Cutom method ${this}`
}

let myArray= [1,2,3]

//console.log(myArray.rakesh());

//classes in Js 
//all function in side class is called method

class Vehicle{
    constructor(make,model){
        this.make= make;
        this.model= model; 
    }
    //method
    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

//inheritance

class Car extends Vehicle{
    //drive method
    drive(){
        return `${this.make} : This is an inheritance`
    }

}

let myCar = new Car("Toyota","Corolla")

// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Toyota","Corolla")
//console.log(vehOne.start());


//Encapsulation 

class BankAccount{
    #balance = 0;

    deposite(amount){
        this.#balance+= amount
        return this.#balance
    }
    //you have to balnce vua deposite not anythning else

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()


// console.log( account.deposite(5));
// console.log(account.getBalance());


//Abstraction 

class CoffeMachine{
    start(){
        //call DB
        //FILTER VALUE

        return `Strating the machine`
    }

    brewCoffee(){
        //complex calculation

        return `Brewing coffee`
    }

    pressStartButton(){
        let msgone=this.start();
        let msgTwo= this.brewCoffee()

        return `${msgone} + ${msgTwo} `
    }
}

let myMachine = new CoffeMachine();

// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());


//polymorphism

class Bird{
    fly(){
        return `Flying.....`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()

// console.log(bird.fly());
// console.log(penguin.fly());


//static method
//static method is special method ony called by own class not others 

class Calculator{
    static add(a,b){
        return a+b
    }
}

// let miniCal = new Calculator()
// console.log(miniCal.add(1,2));


//how to use static method
//console.log(Calculator.add(1,2));


//GETTER AND SETTERS 

class Employee{

    #salary;
    constructor(name,salary){
        this.name= name 
        this.#salary= salary
    }

    //method
    get salary(){
        return `You are not allowed to see salary`
    }

    set salary(value){
        if(value<0){
            console.error("Invalid salary")
        }else{
            this._salary= value
        }
    }
}

let emp = new Employee("Alice",5000)

console.log(emp._salary);
