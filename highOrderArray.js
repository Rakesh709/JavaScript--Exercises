let arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  //console.log(num);
}

let greeting = "Good Morning";

for (const greet of greeting) {
  //console.log(greet);
}

// Maps

// const map = new Map();
// map.set('IN',"India")
// map.set('US',"USA")
// map.set('UK',"United Kingdom")

// console.log(map)

// for (const [key,value] of map) {
//     console.log(key , '-',value);
// }

//myGames is not iterable for below
// const myGames = {
//     "Game1": "  gta",
//     "Game2": "nfs",
// }
// for( let game of myGames){
//     //console.log(game);
// }

//for the object

const codingLanguage = {
  js: "javascript",
  py: "python",
  rb: "ruby",
};

for (const key in codingLanguage) {
  //console.log(key, codingLanguage[key]);
}

const proggram = ["js", "ruby", "java"];

for (const keys in proggram) {
  //console.log(proggram[keys]);
}

//conn't perform the iteration to map

// const map = new Map();
// map.set('IN',"India")
// map.set('US',"USA")
// map.set('UK',"United Kingdom")

// for(const key in map){
//     console.log(key);
// }

//+++++++++++++++++++++++++++++++++++++for each ++++++++++++++++++++

const coding = ["js", "ruby", "java"];

// coding.forEach( function (items) {
//     console.log(items);
// })

// coding.forEach((items) =>{
//     console.log(items);
// })

// function printMe(items){
//     console.log(items);
// }

// coding.forEach(printMe) // need to give only refrence not printMe() like thatb

// coding.forEach((items, index, arr ) =>{
//     console.log(items, index, arr);
// })

const myCode = [
  {
    languageNamee: "Javascript",
    languageFileName: "js",
  },
  {
    languageNamee: "Ruby",
    languageFileName: "ruby",
  },
  {
    languageNamee: "Java",
    languageFileName: "java",
  },
];


myCode.forEach((items ) =>{
    console.log(items.languageFileName);
})