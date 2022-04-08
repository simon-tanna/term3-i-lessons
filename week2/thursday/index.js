// JSON

// Able to be read by interpreters and compilers and humans as well!
// Javascript Object Notation (JSON)

// Is one of the most common document formats
// In javascript... example...
// let pikachu = {
//     name: "Pikachu",
//     element: ["Electric"],
//     level: 14
// }

// console.log(pikachu)
// console.log(typeof pikachu)

// This is converted to a string to print therefore an object
// The string created is not great for sending across

// let pikachu = {
//     name: "Pikachu",
//     element: ["Electric"],
//     level: 14
// }
// // convert to JSON format
// let pikachuString = JSON.stringify(pikachu);


// console.log(pikachuString);
// console.log(typeof pikachuString);

// // to javascript object

// let gyradosString = {"name":"Gyrados", "element":["Dragon"], "level":11};

// let gyrados = JSON.parse(gyradosString);

// console.log(gyrados);
// console.log(typeof gyrados);

let pokemans = require ('./pokemon.json');

console.log(pokemans);
console.log(typeof pokemans);

// do for in here