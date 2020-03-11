/*
    if statement
    
    Exercise 1: Check if value is even and print "even number" or "odd number" otherwise
    Exercise 2: Check if value is between 50 and 100 and print either "Between 50 and 100" or "Between 0 and 49" otherwise
    Exercise 3: Check if value is between 50 and 100 or if its an odd number and print either "Between 50 and 100 or odd". Else print "No match"
    Exercise 4: Check if value is between 50 and 100 and print either "Between 50 and 100", else check if value is odd and print "odd number".
*/
const value = Math.floor(Math.random() * 100);

if (value % 2 === 0) {
    console.log('even number');
} else {
    console.log('odd number');
}

if (value >= 50) {
    console.log('Between 50 and 100');
} else {
    console.log('Between 0 and 49');
}

if (value >= 50 || value % 2 !== 0) {
    console.log('Between 50 and 100 or odd');
} else {
    console.log('no match');
}

if (value >= 50) {
    console.log('Between 50 and 100');
} else {
    if (value % 2 !== 0) {
        console.log('odd number');
    }
}

/*
    switch statement
    
    Print these texts if direction matches a value

    direction is 0 -> "Go forward"
    direction is 1 -> "Go right"
    direction is 2 -> "Go backwards"
    direction is 3 -> "Go left"
    else -> "stay"
*/
const direction = Math.round(Math.random() * 3)

switch (direction) {
    case 0:
        console.log('Go forward');
        break;
    case 1:
        console.log('Go right');
        break;
    case 2:
        console.log('Go backwards');
        break;
    case 3:
        console.log('Go left');
        break;
    default:
        console.log('stay');
        break;
}
/*
    ternary operator

    Exercise 1: If value is between 50 and 100, print "between 50 and 100" else print "between 0 and 49"
    Exercise 2: If value is an even number, print the number divide by 2 else print the value multiplied by 2
*/

console.log(value >= 50 ? "between 50 and 100" : "between 0 and 49");
console.log(value % 2 === 0 ? value / 2 : value * 2);



