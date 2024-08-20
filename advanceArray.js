const myArray=[]
//%DebugPrint(myArray)

//continious(packed) , Holy

//SMI (SMALL INTEGER)
//PACKED ELEMENT
//dOUBLE (float, string, function)

const arrTwo =[ 1,2,3,4,5]
//packed smi element --> best elemnt 

arrTwo.push(6.0)
//packed double element 

arrTwo.push('7')
//packed element 

// ager eek bar packed smi element sai packed double element baan jata hai to wass nhi ja skta ---->  eek baar ho gya ho gya 

arrTwo[10]=11
// now HOLY_ELEMENT --> BEACOUSE MULTIPLE TYPE 

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[19]);

//how array check value
//bound check
//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype,10)---> very expensive check in js
//hasOwnProperty(Object.prototype,10)


// holes are very expenesive in js


const arrThree = [1,2,3,4,5]
console.log(arrThree[3]);

// SMI > DOUBLE > PACKED
//HOLES_SMI  > HOLES_DOUBLE  > HOLES_PACKED

const arrFour = new Array(3)
//just 3 holes . HOLEY_SMI_ELEMENT
arrFour[0]='1' // HOLEY_ELEMENT
arrFour[1]='2' // HOLEY_ELEMENT
arrFour[2]='3' // HOLEY_ELEMENT

//ABOVE BETTER WAY

const arrFive = []
arrFive.push('1') //PACKED ELEMENT
arrFive.push('2') //PACKED ELEMENT
arrFive.push('3') //PACKED ELEMENT


const arrSix = [1,2,3,4,5]
arrSix.push(NaN) //packed doubled
arrSix.push(Infinity) //packed doubled


//RECOMEMEDED

//for, for-of , forEach ---> use default method