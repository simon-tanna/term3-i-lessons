const hashGen = (string) => {
    let returnString = "#";

    if (string === "" || string.length>140) {
        return false;
    }

    let inputArr = string.split(" ");

    for (let index in inputArr) {
        [firstLetter, ...theRest] = inputArr[index]
        inputArr[index] = [firstLetter.toUpperCase(), ...theRest].join("");
    }

    returnString += inputArr.join("");

    return returnString
}

console.log(hashGen("Hello world sup bras"));

module.exports = hashGen;