const piValue = Math.PI

//console.log(piValue);

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

//Own method defined 
const chai ={
    name:"ginger chai",
    prince: 300,
    isAvailable: true
}


console.log(Object.getOwnPropertyDescriptor(chai,"name"));

//name can't be itterable because we sett he value false
Object.defineProperty(chai,'name',{
       writable: false,
       enumerable: false,
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
 

for (let [key,value] of Object.entries(chai)){
    console.log(`${key} : ${value}`);
    
}