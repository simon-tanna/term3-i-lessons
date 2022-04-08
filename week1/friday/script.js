// functions
// eg
// function sayHi() {
//     console.log("hi");
// }

function sayHi(firstName) {
    console.log(`Hi ${firstName}`);
}

sayHi("Simon");
// javascript functions are called first class objects. ie a function is an object.
// a function can be assigned to a variable. eg...
// let myFunction = sayHi;
// calling sayHi
// sayHi;
// // or
// myFunction;
let myVariable = sayHi;
myVariable("Simon");

// passing variables

function saySomething(firstName, greetingFunction) {
    console.log(greetingFunction(firstName));
}

function sayHiHo(firstName) {
    return `Hi Ho ${firstName}!`
}

function sayGday(firstName) {
    return `G'day ${firstName}!`
}

saySomething("Simon", sayHiHo);

saySomething("Trevor Chappell", sayGday);

// Using a function as a return value of another function

function addArgs(firstNum, secondNum) {
    console.log("Performing Addition")
    return firstNum + secondNum;
}

function subtrArgs(firstNum, secondNum) {
    console.log("Performing Subraction")
    return firstNum - secondNum;
}

function arithmetic(operation) {
    switch (operation) {
        case "add":
            console.log("Returning addArgs Function")
            return addArgs;
        case "subtract":
            console.log("Returning subtrArgs Function")
            return subtrArgs;
        default:
            throw "Not valid. Dunno how ta do it bra";
    }
}

let operation1 = arithmetic("add");

let operation2 = arithmetic("subtract");

let operation3 = arithmetic("subtract");

console.log(operation1(1, 2));

console.log(operation2(1, 2));

console.log(operation3(1, "apple"));

// one line version of this
console.log(arithmetic("add")(2, 3));

// Anonymous functions
// a function is given a name and can be referred to later.
// if a function is being used only once and immediately, it can be anonymous (not named)
let functionVariable = function () {
    console.log("hey ho!");
}
// functionVariable is storing the value of the function not the name
functionVariable();

// let functionVariable2 = (someFunction) => {
//     someFunction();
// }
// // the arrow syntax is a more streamlined version of declaring a function
// functionVariable2();

// This line is the best practice
let functionVariable3 = (() => {console.log("hi");});

functionVariable3();

// Hoisting
// When declaring a function you give it a value
// it is callable at any point in that file but it is best practice to put it a the top
functionA();

function functionA() {
    console.log("oogggaaboogggaa");
}

// variable names are not hoisted before they have been initialized
// This will fail
// console.log(variableA);

// let variableA = 10;

// this will also fail as anonymous functions are not hoisted

// functionB();

// let functionB = () => {
//     console.log("This will fail");
// }

// this wont fail

let functionB = () => {
    console.log("This will not fail");
}

functionB();

// therefore it is best practice to have your functions at the top of the code....


// let and const lesson
// let and const has block scope
// greeting can only be used within the function block
function sayYo() {
    let greeting = "yo";
    console.log(greeting);
}

sayYo()

// this will fail
// console.log(greeting);

let greeting = "hello";

function sayHello() {
    console.log(greeting);
}

sayHello();

// scope for var

var middleName = "Peter"

function sayHo() {
    console.log(`Hi ${middleName}`);
}

sayHo();

// var is scoped to the function (this will fail)

// function sayHo() {
//     var middleName = "Peter";
// }

// console.log(`Hi ${middleName}`);

// sayHo();

// We want our values to be encapsulated within the functions. Global variables are not great....
let lastName = null;

function myFunction2() {
    // if let is not called before the lastName value, it becomes global...
    let lastName = "Chappell";
    console.log(`Hi ${lastName}`)
}

myFunction2();

console.log(lastName);

// if you want to modify a variable that is outside the local scope...
let count = 0;

function incrementCount() {
    count++
}

console.log(count);
incrementCount();
console.log(count);
incrementCount();
console.log(count);

// Summary
// Let and Const == Good
// Var == Not Good : Avoid despite it being correct syntax but can make it hard to identify bugs within the code
// when ever in a block, declare your variable with a let
// no keyword???(aka global variables   ) == Don't do it... Fks up shit