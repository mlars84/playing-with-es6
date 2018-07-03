let someNumbers = [2, 4, 6, 8, 10]

console.log(someNumbers.find((item) => item > 2))

console.log(someNumbers.findIndex((item) => item > 2))

class User {
  constructor(name, isAdmin) {
    this.name = name
    this.isAdmin = isAdmin
  }
}

let users = [
  new User('Jeff', false),
  new User('Matt', true),
  new User('Sarah', true)
]

console.log(users.find((user) => user.isAdmin === true))