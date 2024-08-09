// let newPerson = {
//     name: "Effy",
//     age: 33,
//     sayHi(){
//         console.log(this.name)
//         return `I am ${this.name}`
//     }
// }
// console.log(newPerson.sayHi())

// console.log(person.age)
// let chosenKey = "name"
// console.log(person[chosenKey])
// person.age = 200
// person.favSongs = ["we will rock you"]

// console.log (person)

// Act2
// let pet = {
//     name: "Nova and Kenneth",
//     age: 1 & 2,
//     color: "black",
//     sayHi(){
//         return `My dogs are called ${this.name} they will${this.eat}`
//     }
//     }

// pet.eat = ("fruit")
// console.log(pet.sayHi())

// Act 3
let coffeeShop = {
    branch: "BigWhite",
    menu: {food: ["Carbonarra", 3.00, "Lasania", 2.50
    ], drink: ["Coffee", 4.00, "Wine", 6.00]},
    foodOne: "Carbonarra",
    drinkOne: "Wine",
    foodTwo: "Lasania",
    drinkTwo: "Coffee",

    Order(){    console.log(`Welcome to ${this.branch} coffee shop, what would you like?
      , \nI will demolish one ${this.foodTwo} and quench my thirst with one ${this.drinkTwo}`)
      
    let total = 0
    total += this.menu.food[this.menu.food.indexOf(this.foodTwo)+1]
    total += this.menu.drink[this.menu.drink.indexOf(this.drinkTwo)+1]
    console.log(` \nThat will come too ${total}`)
    }
        

// let orderTotal{(`Your' order comes too ${price} how will you be paying?`)
    }       
coffeeShop.Order()

