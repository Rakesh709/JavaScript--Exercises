const coding = ["js", "ruby", "java", "python"];

// const values  = coding.forEach( (items)=> {
//     //   console.log(items)
//     return items
// })

// const myNumber = [ 1,2,3,4,5,6,7,8,9,10]

// const newNumns  = myNumber.filter( (num) => num >5 )

// console.log(newNumns);

//const newNumber  = []

// myNumber.forEach( (item) =>{
//     if (item > 5 ){
//         newNumber.push(item)
//     }
// })

// console.log(newNumber)

const books = [
  { title: " Book One ", genre: "Fiction", piblished: 1993 },
  { title: " Book Two ", genre: "Non Fiction", piblished: 2000 },
  { title: " Book Three ", genre: "History", piblished: 2004 },
  { title: " Book Four ", genre: "Non Fiction", piblished: 1885 },
  { title: " Book Five ", genre: "History", piblished: 2008 },
];

let userBook = books.filter((bk) => bk.genre === "History");
userBook = books.filter((bk) => bk.piblished > 1995 && bk.genre === "History");

// console.log(userBook);

//++++++++++++++++++++++++++++++++++++ Map ++++++++++++++++++++++++++++++++++++++

// const myNumber = [ 1,2,3,4,5,6,7,8,9,10]

// //const newNumber = myNumber.map( ( num ) => num +10 )

// const newNums  = myNumber
//                         .map( (num) => num * 10 )
//                         .map( (num ) => num +1 )
//                         .filter((num ) => num>40 )
// // console.log(newNums)

const myNumber = [1, 2, 3];

// const myTotal = myNumber.reduce( function ( acc, currentval ){
//     console.log(`acc : ${acc} and currentValue: ${currentval}`);
//     return acc + currentval
// },0)

const myTotal = myNumber.reduce((acc, curval) => acc + curval, 0);

console.log(myTotal);

const shoppingCart = [
  { name: "Course One", price: 100, duration: 5 },
  { name: "Course Two", price: 200, duration: 3 },
  { name: "Course Three", price: 300, duration: 4 },
];

const priceToPay = shoppingCart.reduce((acc, items ) =>  acc+items.price ,0)

console.log(priceToPay);