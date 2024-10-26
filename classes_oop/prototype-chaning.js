//In JavaScript, prototype chaining allows you to inherit properties and methods from other objects

function Animal(name){
    this.name= name
}

Animal.prototype.speak=function(){
    return `make sound`
}

