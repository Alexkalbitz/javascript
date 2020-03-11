/*
    Exercise 1: Create a function returns the sum of 2 numbers (e.g. sum (1,2) returns 3)
    Exercise 2: Create a function that multiplies 2 numbers (e.g. multiply (2,3) returns 6)
    Exercise 3: Create a function that divides 2 numbers (e.g. divide (6,3) returns 2)
    Exercise 4: Create a function that checks if value is a odd number (e.g. isOdd(3) returns true)
    Exercise 5: Create a function that halves a number if its even or multiplies the number by 2 if its odd, using the functions from the previous exercises (e.g. halveOrDouble(3) returns 6, halveOrDouble(4) returns 2)
*/

function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function isOdd(a) {
    return a % 2 !== 0;
}

function isEven(a) {
    return !isOdd(a);
}

function halveOrDouble(a) {
    return isOdd(a) ? multiply(a, 2) : divide(a, 2);
}

console.log('sum:', sum(1, 2));
console.log('multiply:', multiply(4, 2));
console.log('divide:', divide(4, 2));
console.log('isOdd:', isOdd(3));
console.log('isOdd:', isOdd(4));
console.log('isEven:', isEven(2));
console.log('isEven:', isEven(3));
console.log('halveOrDouble:', halveOrDouble(4));
console.log('halveOrDouble:', halveOrDouble(3));

