console.log("Hello World!")

// Functions

function add(x, y) {
    return x + y;
}

add(1,2);

// In Ruby it would look like
// def add(x,y)
//  x + y
// end

function add(a,b) {
    console.log("a",a);
    console.log("b",b);
    console.log("a+b",a+b);
    return a+b;
}

// call with 2 args
add(1,2);       // returns 3
//call with 1 arg
add(1);         // returns NaN (not a number)
// call with 3 args
add(1,2,3);     // returns 3

// extra arguments / variable arguments

function myArgs() {
    console.log(arguments);
}

myArgs(1,2,3,4);

// if we want the arguments that are not defined

function myOtherArgs(x,y, ...args) {
    // this means that x and y are required arguments and then any other argment value is also passed in. '...' means the rest of
    console.log(x, y, args);
}

myOtherArgs(11,22,33,44,55,66);

// x = 11, y = 22, args = (33,44,55,66)


// First-class functions or first class objects are treated like objects and can be 
// assigned to variables
// nested in other objects
// passed as parameters
// returned from other functions

// Anonymous functions (it is unnamed. ie. a function without a name)
//eg

const myCoolFunction = function(input) {
    // function(input) is stored inside of a constant (myCoolfunction)
    console.log(input);
}

myCoolFunction("This is a cool function");

// fat arrows alternative syntax

const myCoolFunction = (input) => {
    console.log(input);
}

myCoolFunction("This is also a cool function")

//eg

const myArray = [1,2,3];
const myArrayIncremented = myArray.map(
    function(item) {
        return item + 1
    }
);
console.log(myArrayIncremented);

// regular syntax
let multiplier = function(x, y) {
    return x * y;
}
// fat arrow syntax
let multiplier = (x, y) => x * y;


// Callback functions
// any function that is passed as an argument to another function and which is invoked by that function

// eg.
function add(a,b) {
    console.log("a+b =", a+b);
    return a+b;
}

function subtract(a,b) {
    console.log("a-b =", a-b);
    return a-b;
}

function calculate(callback,a,b) {
    callback(a,b);
}

calculate(add,5,3);
calculate(subtract,5,3);