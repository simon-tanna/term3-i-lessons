const aliceAndBob = require("../src/index");
// - output error message if first arg is not array
// - output error message contains non-numbers
// - throw exception is second arg is not positive integer
// - returns array
// - output contains no more than n(second arg) repeats
// - output contains all input motifs

test('returns error message if first arg is not an array', () => {
    expect(aliceAndBob(3,3)).toBe("Bad Argument!");
})

test('accepts only numbers as input in array', () => {
    expect(aliceAndBob([1, 2, "photo"],4)).toBe("Invalid array elements");
});

test('accepts only a positive integer as n', () => {
    expect(() => { aliceAndBob([1, 2, 2, 4],-3) }).toThrow();
    // expect(() => { aliceAndBob([1, 2, 2, 4],true) }).toThrow();
})

test('returns an array with no more than n repeats', () => {
    expect(aliceAndBob([1, 1, 2, 3, 3, 3],2)).toStrictEqual([1, 1, 2, 3, 3]);
});

test('returns an array', () => {
    expect(aliceAndBob([1, 2, 3],4)).toEqual(expect.arrayContaining([]));
});

test('doesnt cull unnecessarily', () => {
    expect(aliceAndBob([1,1,1,1,1,3,2,4,4,5,6],3)).toEqual(expect.arrayContaining([2,4,5]));
});