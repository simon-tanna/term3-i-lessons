// Define a function that will accept an array as its input, 
// and return the largest number in that array, even if it is a negative number. 
// If there are no numbers in the array, it should return null. 
// The function should ignore non-numbers without throwing an error.

// -> Accepts an array as parameter
// -> Returns largest number in array
// -> Throws an exception of non-array is argument
// -> handles negative elements
// -> returns null if no numbers
// -> ignore non numerical elements, with no error  

// const highestNumber = (arr) => {
//         return null;

// }

// function highestNumber(arr) {
//     if (arr.length < 1) {
//         return null;
//     }

//     return Math.max(...arr);
// }

const highestNumber = (arr) => {

    if (!Array.isArray(arr)) {
        throw "The function argument must be an array";
    }

    let result = Number.NEGATIVE_INFINITY;

    for (let element of arr) {
        if ((typeof element === "number") && (element > result)) {
            result = element;
        }
    }

    return result>Number.NEGATIVE_INFINITY ? result : null;

    // let myArray = arr.filter((element) => {
    //     return typeof element === "number";
    // });

    // if (myArray.length < 1) {
    //     return null;
    // }

    // return Math.max(...myArray);
}



module.exports = highestNumber;