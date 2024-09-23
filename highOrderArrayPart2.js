
//for of : array , string , TypedArray, map, set 

//array 

let arr = [1,2,3,4];

for(let num of arr){
    num +=1
    //console.log(num);
    
}

//string

let greeting = "Hello World !"

for(let greet of greeting){
    //console.log(`charter is ${greet}`);   
}

//TypedArrya
//!!!

//Map

const map = new Map()
map.set('In','India')
map.set('Rus','Russia')
map.set('Rus','Russia') //doublicate is not allowed 

for(const [code,country] of map){
    //console.log(`${country} code is ${code}`);   
}

//[code,country] is called array destructure

for (const code of map ){
    //console.log(code);   
}

//set

const num = new Set([1,2,3,4,4,5,5])

for(const value of num){
    //console.log(value);   
}

//***********************objects *****************/

//for in 

const myObject = {
    js:"Javascript",
    cpp:"c++",
    rb:"ruby"
}

for(const key in myObject){
    //console.log(key); //for key 
    //console.log(myObject[key]); //for value
    
}

const programming = [ "js","cpp","java","python"]

for(const key in programming){
    //console.log(programming[key]);
    
}

//for each loop is high order

const coding = [ "js","cpp","java","python"]

coding.forEach(function (value){
    //console.log(value);
    
})

// coding.forEach((value)=>{
//     console.log(value);
    
// })

// coding.forEach((value)=> console.log(value))

function printMe(item){
    //console.log(item);   
}

coding.forEach(printMe)

function primeMeAll(item,index,arr){
    //console.log(item,index,arr);
    
}

coding.forEach(primeMeAll)


const myCodding =[
    {
        languageNmae : "javascript",
        languageFileName : "js"
    },
    {
        languageNmae : "python",
        languageFileName : "py"
    },
    {
        languageNmae : "java",
        languageFileName : "java"
    },
]

myCodding.forEach((items,index)=>{
    console.log(myCodding[index]);
    
})