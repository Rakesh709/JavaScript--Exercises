//Code 1: Remove Duplicate characters from String
function duplicateStr(str) {
  let arrString = [...new Set(str)].join("");
  return arrString;
}

//console.log(duplicateStr("raakkeshh iss thhe"));

function dublicateStr2(str) {
  let newStr = "";
  let strObj = {};

  for (let char of str) {
    if (!strObj[char]) {
      newStr += char;
      strObj[char] = true;
    }
  }
  return newStr;
}

// console.log(dublicateStr2("hello"));
// Initialize result = '' and seen = {}.

// Loop through each character:

// char = 'h': seen['h'] is undefined, so add 'h' to result and set seen['h'] = true.
// char = 'e': seen['e'] is undefined, so add 'e' to result and set seen['e'] = true.
// char = 'l': seen['l'] is undefined, so add 'l' to result and set seen['l'] = true.
// char = 'l': seen['l'] is true, so skip adding 'l' again.
// char = 'o': seen['o'] is undefined, so add 'o' to result and set seen['o'] = true.
// The final result is "helo".


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Code 2: Remove Duplicate characters from array of element and find the count of an elements using set object

function arrDublicate(arr){
    let newArray = [...new Set(arr)]
    console.log(newArray.length)
    return newArray
}

//console.log(arrDublicate([1,3,4,4,6]));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Code 3: Remove Duplicate characters from array of element using filter
var myArray = ['a', 1, 'a', 2, '1'];

const uniqe = myArray.filter((value,index,arr)=> arr.indexOf(value) === index)

//console.log(uniqe);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Code 4-5:String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then join().

function revWord(){
  let string ="India is my country"
  let newString = string.split('').reverse().join('').split(' ').reverse().join(' ')
  return newString
}

//console.log(revWord());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Code 6:String reverse without using inbult 

function revWordWithouInBuild(str){
  let revStr=''
  for(let i=str.length-1; i>=0; i--){
    revStr+=str[i]
  }
  return revStr
}

//console.log(revWordWithouInBuild("India is my country"));

