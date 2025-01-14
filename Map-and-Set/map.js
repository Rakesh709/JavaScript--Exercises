//Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type

const myMap = new Map();

myMap.set("name","Rakesh")
myMap.set("age",33)
myMap.set('city', 'Wonderland');

// for(let [key,kyahai] of myMap.entries()){
//     console.log(key,kyahai)
// }

//console.log(myMap);



function getKeyByValue(map,value){
    for(let [key,val] of map.entries()){
        if(value===val){
            return key
        }
    }
    return null
}

let key = getKeyByValue(myMap,"Wonderland")

//console.log(key);

const user = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland'
};

console.log(user);
