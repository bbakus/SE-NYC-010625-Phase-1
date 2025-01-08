// write your code here

const butts = ['large', 'small', 'medium', 'dumptruck', 'shelf booty', 'flat']

butts.push('fatty') // adds element to end of array

butts.unshift('spankable') // adds element to the beginning of the array

butts.push(() => {}) // adding an anonymous function!

console.log(butts)

//console.log(butts[4])

//console.log(butts.length)

butts.slice(-2)

//if we want to call the function we need parentheses
//console.log(butts[8]()) //returns as undefined

//lets update a value
butts[0] = 'juicy'

//console.log(butts)

// lets change the function so it does something
butts[8] = (num) => num * 2

console.log(butts[8](5))
//this will return 10, as 5 is passed into the function as an argument
//I FUCKING LOVE THIS SHIT

butts.pop() //removes the last element

butts.shift() //removes the first element

//splice requires a start point (index point) and then the amount of deletions after that point
butts.splice(3,1) //this removes 'dumptruck' since we already removed the first element wih shift()

//console.log(butts)

// splice can also add an element
butts.splice(1,0, 'FAT')

//console.log(butts)

//slice() is nondestructive
butts.slice(4,6) //start at index 4, end at index 6. Returns a copy of the array with the changes.

//console.log(butts.slice(4,6)) // removes 'shelf booty' and 'flat', as a copy


//OBJECTS

const pokemon = {
    Charizard: "Fire",
    Blastoise: "Water",
    Venasaur: "Grass",
    MewTwo: "Psychic",
    Pikachu: "Electric",
    Arbok: "Poison",
    Articuno: 'Ice',
    Onyx: "Rock",
    Dugtrio: "Ground",
    Fearow: "Flying",
}

//console.log(pokemon)

pokemon.Clefairy = "Normal" //dot notation adds a key and then value

pokemon['Snorlax'] = "Sleepy" // we can also use square brackets to add a new key-value pair. note the string quotes in the brackets

//console.log(pokemon) 

//we cam change a value with dot notation
pokemon.Charizard = "Very Fire"

//we can also update a value with bracket notation and a variable
const type = 'Fearow'
pokemon[type] = 'Pidgey' //this assigns a variable to a key, then accessed via the bracket nnotation, then updated with the string, I just fucked up a little.

//we can also update a value like this too
pokemon['Charizard'] = 'Moltres'

//we can delete a key-value pair
delete pokemon['Snorlax'] // returns true

//now we can add a new key-value pair
pokemon.Zapdos = 'Electric' //you can also do this with a variable instead of a string

//console.log(pokemon)


//LOOPING - FUCK
// for and while loops

for(let counter = 0; counter < 10; counter++){ //the counter variable can be named anything
    console.log('Welcome to Miami')
} // prints the string 10 times
//for loops can also execute a function a repeated number of times

//While loops
let counter = 0
while(counter < 10){
    console.log('I\'m on fire!')
    counter++ //this is the only way that the loop stops, because it actually counts up to 10 and meet the condition.
}


//looping through Arrays

for(let index = 0; index < butts.length; index ++){
    console.log(butts)  // we can use [] to specify one index to loop, or we can use a variable like index to loop individual elements.
}

for(const name of butts){
    console.log(name) //this cycles through the array and prints each one individually

}

// Object Iteration with for...in

for (const creature in pokemon){
    console.log(creature) // this retrieves keys
    console.log(pokemon[creature]) // this retrieves values
}

//for...each array iteration
butts.forEach((booty) => {
    console.log(booty) // uses a callback function
})