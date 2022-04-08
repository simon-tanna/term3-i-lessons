# Code Activities Week One

## JS Intro

### Variables

Variables
Lets first start our journey into Javascript and look at how we can assign a value to a variable.

Unlike Ruby, Javascript has certain keywords when declaring a variable.

var a = 1
a = 2     // a has now been updated to equal 2

let b = 2
b = 4     // b has been updated to now equal 4
let b = 5 // ERROR! cannot re-declare b

const c = 3
c = 5     // ERROR! cannot change a constant

var is the precursor to the new ES6 declarative statements let and const.

For now to keep things simple, lets just remember that let variables can be updated with new values but the value of const is constant.

To complete this challenge:

1. Inside the declareVariables function, create a variable using let called age and give it the value of your age then create a constant variable using const called name. You can now un-comment the return statement and run tests.

2. Now inside the updateName function, the name you created in declareVariables is being saved to a const, on the line below try to update the value of name. What happens if you try to run or mark the challenge? You should get an error, because you can't change a constant, you can comment out that line of code that you wrote or remove it.

3. Inside the updateAge function, we have done the same thing with age, but have used the let keyword. Try updating the value on a line below. What happens when you run the challenge? Do you see an error?

Make sure all of the tests pass.

### Blocks and scoping

Blocks in JavaScript are denoted by curly braces and are normally used in control flow statements (loops & conditionals).  The scaffold has the following code:

let x = "sarah";
{
  console.log(x);
}

console.log(x);

{
  let y = "mary";
  console.log(y);
}

console.log(y);

Running the code in your terminal with node blocks.js we can see variables defined inside the curly braces (or blocks) with let are scoped only within those blocks. How can we tell that? You should see an error when you try to run the code, and that error occurs because y is defined with let inside of a code block, and we are trying to access it outside of the code block in the last line.

This makes sense, just like in ruby we have the concept of scope. But Javascript has a little known and dangerous feature; If we replace the let y = "mary" with var y = "mary" and re-run the code we have an unexpected result. Try it!

This is a concept called hoisting where the declaration is moved out of the block and declared at the top of the file, hoisting is a concept that is covered later but it is easy to see how this could be dangerous, and how it could be difficult to debug hoisted code. This is the main reason that the best practice is to always use let or const.

## Control Structures

### If/else statements

If / Else Statements

let age = 25

if (age >= 20) {
  console.log("You're an adult")
} else if (age < 20 && age >= 13) {
  console.log("You're a teenager")
} else {
  console.log("You're a child")
}

Activity:
The function canUserEnter takes an age and exists to return a true or false based on the following conditions:

If they are below 18, they are not allowed into the casino (return false)

If the user's age is 18 or above, they are allowed into the casino (return true)

If their age is above 100, return false as well

Ternary Operators
Activity:
The function doesItBlend takes a boolean and exists to return a string based on the boolean provided. The function is already using an 'if' statement but you should change it to a ternary instead.

### Ternary Operators

let weather = "hot"

let clothing = weather === "hot" ? "singlet" : "jacket"

console.log(`It is ${weather}, wear a #{weather == "hot" ? "singlet" : "jacket"}!`)


#=> "It is hot, wear a singlet!"

### Switch Statements

Activity:
The function canItFly takes a string (bird) and returns a true or false based on whether that bird can fly or not. This exercise should be written as a switch statement, no ifs allowed.

In this exercise the only birds that CANNOT fly are: 

penguin

ostrich

kiwi

cassowary 

And the birds that can fly are 

cockatiel

finch

dove

parrot

For everything else, we say that it can't fly. Capital letters in the bird should not affect the result. ie dove and Dove should both return false

Switch Statements

input = prompt(
    "What would you like do?\n
    Options: balance, deposit, withdrawal, exit
) # structured this way for your viewing pleasure.

switch (input) {
    case "balance":
        displayBalance()
        break
    case "deposit":
        depositFunds()
        break
    case "withdraw":
        withdrawFunds()
        break
    case exit:
        exitProgram()
        break
    default:
       console.log("Invalid Input!"
}