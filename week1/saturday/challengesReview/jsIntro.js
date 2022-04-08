// variables

function declareVariables() {
    // Your code here. Start by declaring name and age
    let age = 38
    const name = "simon"
    return {name, age}
}

function updateName() {
    const name = declareVariables().name
    // Your code here. Start by updating the value of name
    // name = "simon_t"
    return name
}

function updateAge() {
    let age = declareVariables().age
    // Your code here. Start by updating the value of age
    age = 37
    return age


}

updateName()
updateAge()

// blocks and scoping

let x = "sarah";
{
  console.log(x);
}

console.log(x);

  let y = "mary";
{
  console.log(y);
}

console.log(y);

