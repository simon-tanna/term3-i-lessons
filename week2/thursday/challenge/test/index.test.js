const hashGen = require("../src/index");    

test('Empty string returns false value', () => {
    expect(hashGen("")).toBe(false);
})

test('String length greater than 140 characters returns false value', () => {
    expect(hashGen("Today we live in a society in which spurious realities are manufactured by the media, by governments, by big corporations, by religious groups, political groups... So I ask, in my writing, What is real? Because unceasingly we are bombarded with pseudo-realities manufactured by very sophisticated people using very sophisticated electronic mechanisms. I do not distrust their motives; I distrust their power. They have a lot of it. And it is an astonishing power: that of creating whole universes, universes of the mind. I ought to know. I do the same thing. Yeah...")).toBe(false);
})

test('Non empty string results in # to be inserted in front', () => {
    expect(hashGen("H")).toBe("#H");
})

test('Output removes spaces from input', () => {
    expect(hashGen("A B").includes(" ")).toBe(false);
})

test('Function capitalizes first letter of each word', () => {
    expect(hashGen("hello world")).toBe("#HelloWorld");
})

test('Function handles weird input', () => {
    expect(hashGen("Hi  6  I think this will    ?   fail...")).toBe("Hi6IThinkThisWill?Fail...");
})