const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

// 1)
// create a loop that prints all
// the pokemons from the pokemons array
// invoke the function to see that it works

const printPokemons = () => {
for (const pokemon of pokemons) {
  console.log(pokemon)
 }
}
printPokemons()

// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.

const object = {
name: "Pikachu",
color: "Yellow",
element: "Strong Electric Attacks", 
personality: "friendly",
power: 40,
}


// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.

console.log(`${object.name} is an ${object.color} Pokemon with a strengths of ${object.power}. Has a ${object.personality} personality with ${object.element}`)

// 4)
// Add the property stillToCatch: true to the Pikachu object.

object.stillToCatch = true;

console.log(object)

// 5)
// change the value of the key strength in the Pikachu object.

object.power = 50

console.log(object)

// 6)
// Delete a property from the Pikachu object.

delete object.color;
console.log(object)
// 7)
// Fill up this array with a few more pokemons.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
const moreAboutPokemons = [
  {
    name: "Bulbasaur",
    element: "water",
    strength: 13
  },
  {
    name: "Charmander",
    element: "fire",
    strength: 32
  },
   {
    name: "Metapod",
    element: "bug",
    strength: 10
  },
   {
    name: "Pidgey",
    element: "flying",
    strength: 30
  },
   {
    name: "Charizard",
    element: "fire",
    strength: 85
  }
];

// 8)
// Print out all the NAMES of the pokemons in this new array.
for (const pokemon of moreAboutPokemons) {
console.log(pokemon.name)
 }

//this loop iterates each object in the 'moreAboutPokemons' array and prints the value of the 'name' property of each object

// 9)
// Print out something like
// 'Bulbasaur is a water pokemon with the strength of 32'
// Do this for all the pokemon

for (const pokemon of moreAboutPokemons) {
console.log(`${pokemon.name} is a ${pokemon.element} Pokemon with a strenght of ${pokemon.strength}`)
 };
