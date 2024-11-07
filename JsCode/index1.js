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