// if/else statements

function canUserEnter(age) {
    if (age < 18) {
        return false;
    } else if (age > 100) {
        return false;
    } else
        return true;
}

// ternary operators

function doesItBlend(boolean) {
    console.log("Will it blend?")
    console.log("Lets find out!")
    return (boolean === true ? "IT BLENDS!" : "IT DOESN'T BLEND!!")
}

// switch statements

function canItFly(bird) {
    switch (bird.toLowerCase()) {
        case "penguin":
        case "ostrich":
        case "kiwi":
        case "cassowary":
            return false;
        case "cockatiel":
        case "finch":
        case "dove":
        case "parrot":
            return true;
        default:
            return false;
    }
}

