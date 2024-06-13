function add(a, b) {
    return a + b;
}

function square(val) {
    return val * val;
}

function addTwoandSquare(a, b) {
    return square(add(a, b))
}

console.log(addTwoandSquare(3, 6));