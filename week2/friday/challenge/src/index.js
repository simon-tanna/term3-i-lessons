
const aliceAndBob = (arr,n) => {
    // This is best practice
    // if(!Array.isArray(arr)) {
    //     return "Bad Argument!"
    // }
    if ((Math.sign(n) === -1) || !Number.isInteger(n)) {
        throw "Bad number Hombre";
    }

    try {
        const resultObject = {};
        const resultArray = [];
        for (let element of arr) {
            if (typeof element !== "number") {
                return "Invalid array elements";
            }

            resultObject[element] = resultObject[element] +1 || 1;

            if (resultObject[element]<=n) {
                resultArray.push(element);
            }
        }
        return resultArray;
    }
    catch (error) {
        return "Bad Argument!"
    }

    // for (let element of arr) {
    //     if (typeof element !== "number")
    //         return null;
    // }

//     if (typeof n !== "number" || n < 1) {
//         return null;
//     }

//     const counts = {};
//     arr.forEach((x) => {
//         counts[x] = (counts[x] || 0) + 1;
//     });

//     console.log(counts);
// }

// console.log(aliceAndBob([1, 1, 1, 2, 2, 3, 3, 3, 3], "Yo"))

module.exports = aliceAndBob;