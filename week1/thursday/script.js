// Statements are single commands
// eg.
console.log("Hello World");

// Expressions are things that have meaning (or return something)
// eg
console.log(1+1);

// constants can be objects

const person = {
    name: "Simon",
    age: 38,
    canDrive: true
}

person.name = "Al Bundy";

person.says = (function () {
    console.log("Hello, my name is Al Bundy...");
});

person.inventory = {
    pocket: "keys",
    body: "backpack"
}

console.log(person.inventory.body);

person.says();

// arrays in javascript are an object

const myArray = [9, 5, 3, 8, 11];

console.log(myArray[0]);

// methods associated with arrays

// myArray.sort();

// console.log(myArray);

// access properties of the array

console.log(myArray.length);

// loops
// while loop
let count = 0;

// while (count < 3) {
//     console.log("hi!");
//     count++;
// }

do {
    console.log("hi!");
    count++;
} while (count <3);

// for loop
for (let i=0; i<5; i++) {
    console.log(`${i}`);
}

const person2 = {
    name: "John",
    age: 34
}

for (let prop in person2) {
    console.log(`${prop}: ${person2[prop]}`);
}

const ingredients = ["onions", "garlic", "meat"];

for (let item in ingredients) {
    console.log(item);
}

for (let item of ingredients) {
    console.log(item);
}

// Booleans
// truthyness and falsyness
// string is empty
let myString = "";
// checks if string is empty (falsy) and puts hi if it is
while (!myString) {
    myString = "hi";
}

console.log(myString);

// array is empty
let myList = [];
// checks if string is empty (falsy) and puts hi if it is
while (!myList.length) {
    myList.push("hi");
}

console.log(myList);

// switch case
// switch(expression) {
//     case x:
//         console.log("hi friend");
//         // break statement needs to go at the end of each block in a case statement
//         break;
//     case y:
//         console.log("hello mate");
//         break;
//     // include default at the end
//     default
//         console.log("no match");
// }

function alphabetPosition(text) {
    let output = "";
    const aToZ = "abcdefghijklmnopqrstuvwxyz";
    
    for (let character of text.toLowerCase()) {
        let indexNum = aToZ.indexOf(character)+1;
        if (indexNum) {
          output += `${indexNum} `;
        }
    }
    return output.trim();
  }
  
  
  alphabetPosition("Ahi")   