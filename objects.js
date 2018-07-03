// Laracasts

// Objects
function getPerson() {
  let name = 'John'
  let age = 25

  return { 
    name, 
    age,
    greet () {
      return `Hello ${this.name}`
    } 
  }
}

// console.log(getPerson().greet())

// object destructuring 
let person = {
  name: 'Karen',
  age: 32,
  results: ['foo', 'bar', 'baz'],
  count: 333
}

// let { name, age } = person

let { results, count } = person
 
// console.log(results)

function greet ({ name, age }) {
  console.dir(`Hello ${name}, you are ${age} years old!`)
}

greet({ name: 'Jim', age: 12 });

// Classes 
