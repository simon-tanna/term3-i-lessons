// try catch
// try {
//     throw "This is an error";
// } catch(e) {
//     console.log(`Error: ${e}`);
// } finally {
//     console.log("finally!");
// }

function subtract(num1, num2) {
    let answer

    try {
        answer = num1 - num2
        if (isNaN(answer)) {
            throw "Invalid input";
        }
        return answer;
    } catch(e) {
        console.log(`Error ${e}`);
    }
}

console.log(subtract(20, 15));
console.log(subtract(20, "hello"));