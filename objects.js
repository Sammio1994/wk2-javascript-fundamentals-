let newPerson = {
    name: "Effy",
    age: 33,
    sayHi(){
        console.log(this.name)
        return `I am ${this.name}`
    }
}
console.log(newPerson.sayHi())

// console.log(person.age)
// let chosenKey = "name"
// console.log(person[chosenKey])
// person.age = 200
// person.favSongs = ["we will rock you"]

// console.log (person)