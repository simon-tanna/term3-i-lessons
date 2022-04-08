const highestNumber = require("./index");

test('Returns null from empty array', () => {
    // this is executing the highestNumber function for the test   
    expect(highestNumber([])).toBe(null);
})

test('Returns highest number from the array', () => {
    expect(highestNumber([1, 2, 5])).toBe(5);
})

test('Handles negative numbers', () => {
    expect(highestNumber([-1, -2, -5])).toBe(-1);
})

test('Ignores array elements that are non numerical', () => {
    expect(highestNumber(['eleven', 1, 2, 5, true])).toBe(5);
})
    
test('Array of only non numbers returns null', () => {
    expect(highestNumber(["john", "nine", null, true])).toBe(null);
})

test('Throws an exception when handed non array', () => {
    // The anonymous function below is used to be passed to expect
    // It is checking "if i DID execute the highestNumber number function"
    expect(() => { highestNumber("hi") }).toThrow();
})

test('REALLY throws an exception when handed non-array', () => {
    expect(() => { highestNumber( {hello: "hello", goodbye: "GB"} ) }).toThrow();
})