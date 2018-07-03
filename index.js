// Objects

let obj = {}

obj.cats = ['Gus', 'Hugo']
obj.dogs = ['Fritz', 'Turtle Bean']

// delete property from object (returns an empty item.)
delete obj.cats[0]

// console.log({obj})

let french = Object.create(null)

french['yes'] = 'oui'
french['no'] = 'non'

// console.log({french})

// make the object immutable
let freeze = Object.freeze(null)

// freeze['face'] = 'yourMama'

// console.log({freeze})

// Object.keys() can be used to iterate over all properties
const logProperty = name => {
  console.log(name)
  console.log(obj[name])
}
// Object.keys(obj).forEach(logProperty)

// Primitives are immutable, and objects are mutable.

// for of loop
const arr = ['1', '2', '3']

for (const elem of arr) {
  console.log(elem)
}

// The scope of a variable declared outside any function is global.
// const freezes a variable, Object.freeze freezes/mutes and object
// const cat = 'Gus' // available anywhere
let cat = 'Gus'
// cat = 'Hugo'

const someFunc = cat => console.log({cat})

someFunc(cat)

// Arrays 
let stack = []
stack.push(1)
stack.push(2)
let last = stack.pop()
// console.log(last)

// console.log(stack)

let queue = []
queue.push('Gus')
queue.push('Hugo')
let first = queue.shift()
// console.log(first)

// Function - objects, can be assigned to variables, stored in objects or arrays

/* Function Declaration */
function doSomething () {} //can be used before definition, is hoisted to top of scope

/* Function Express */
const doSomethingElse = function () {} 
// or
const doSomethingElser = () => {} // can be anonymous or named

this.stuff = 'stuff'
// console.log('this: ', this)

function getObject () {
  return {
  }
}

console.log('getObject', getObject)

// console.log(typeof(getObject))

if (typeof(getObject) != 'function') {
  console.log('ehh!')
} else {
  console.log('cool')
}

let object = Object.freeze()
// object.message = 'text'
//  Cannot set property 'message' of undefined

// Default parameters
const applyDiscount = (cost = 10, discount = .10) => {
  return cost - (cost * discount)
}

console.log(applyDiscount(100))

// Rest and Spread operators 
const restSum = (...numbers) => {
  return numbers.reduce((prev, current) => prev + current)
}

// Can add as many numbers as you want and  they will all 
// become a numbers array inside restSum()
console.log('REST: ', restSum(1, 2, 3, 4, 5, 6))


const spreadSum = (x, y, z, a) => {
  return x + y + z + a;
}

let numsers = [1, 3, 6, 9]

console.log('SPREAD: ', spreadSum(...numsers))
