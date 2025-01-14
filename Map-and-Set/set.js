//A Set is a special type collection – “set of values” (without keys), where each value may occur only once.


const mySet = new Set();
// console.log(mySet)

const numbers = new Set(["🚀","🔥","🚀"])
numbers.add("💥")
numbers.delete("🚀")
console.log(numbers.has("🔥"))
console.log(numbers.size)
console.log(numbers)


