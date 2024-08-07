// let age = Math.floor(Math.random()*90)

// if (age < 18) {
//     console.log(`Child ticket`)
// } else if (18 <= age && age < 60) {
//     console.log(`Adult ticket`) 
// } else { 
//     console.log(`Senior`)
// }

// let coffeeIsGrinding = false;
// const pressGrindBeans = () => {
//     console.log(`Gridining for 20 seconds`);
// }

// pressGrindBeans();

// const favColor = () => {
//     console.log(`myfavColor is turquiose`)
// }

// favColor()





let coffeeIsGrinding = false;
const pressGrindBeans = () => {
    if (coffeeIsGrinding){
        coffeeIsGrinding = false
        console.log(`continue grinding`)
    } else {
        console.log(`stopTheGrinding`)
        coffeeIsGrinding = true
    }
    }
    pressGrindBeans();
    pressGrindBeans();
    pressGrindBeans();