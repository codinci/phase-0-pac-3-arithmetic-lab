function add (a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b === 0) {
        return "Division by zero not allowed";
    } else {
        return a/b;
    }
}

function increment(n) {
    n++;
    return n;
}

function decrement(n) {
    n--;
    return n;
}

function makeInt(n) {
    return parseInt(n, 10);
}

function preserveDecimal(n) {
    return parseFloat(n);
}

console.log(add(3,4));
console.log(subtract(10,33));
console.log(divide(6,7));
console.log(increment(7));
console.log(decrement(40));
console.log(makeInt(20.4455));
console.log(preserveDecimal(8.77777765));
//parseFloat strange design of ignoring characters and outputting number
console.log(preserveDecimal("8ihh9.yhsj")); //=> 8