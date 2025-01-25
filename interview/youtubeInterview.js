// //write a function to calculate the frequency of the character

// function frequencyOfChar(str) {
//   let frequency = {};
//   //['R','a','k','e','s','h']
//   for (let char of str) {
//     console.log(`${char} , ${typeof char}`);
    
//     if (frequency[char]) {
//       frequency[char] += 1;
//     } else {
//       frequency[char] = 1;
//     }
//   }
//   return frequency;
// }

// console.log(frequencyOfChar("Rakesh"));

// let frequency = {
//   R: 2,
//   a: 1,
//   k: 1,
//   e: 1,
//   s: 1,
//   h: 1,
//   " ": 1,
// };

// console.log(frequency["R"]);


//char frequncy 

// function charFrequency(str){
//     let frequncy= {}
//     for(let char of str){
//       if(frequncy[char]){
//         frequncy[char]+=1
//       }else{
//         frequncy[char]=1
//       }
//     }
//     return frequncy
// }

//console.log(charFrequency("Rakesh"));

//----------------------------------------

let arr1=[1,2,3,4]
let arr2=[2,4,6]

// let comArray = arr1.filter(element=>arr2.includes(element))
// console.log(comArray);

let comArray =[]

for(let i=0; i<arr1.length; i++){
  for(let j=0; j<arr2.length; j++){
    if(arr1[i]===arr2[j]){
      comArray.push(arr1[i])
    }
  }
}

console.log(comArray);

