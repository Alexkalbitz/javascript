/*
    var
*/

var variable;

console.log(variable);

// 1. Assign a value to variable and print it

// 2. Scope: vars are scoped to the global or function scope. The following example shows a variable assigned to the global scope

var name = 'Joe';

function getName() {
    return name;
}

// Remove comment
// console.log(getName());
// console.log(name);

// 3. vars can be used within the scope

function getName2() {
    var name2 = 'Joe';

    function toLowerCase() {
        return name2.toLowerCase();
    }

    return toLowerCase();
}

// Remove comment
// console.log(getName2());
// console.log(name2);

// 4. Hoisting: Javascript interpreter will initialize the variables, with the value of undefined, during the creation phase

function hoistingExample(input) {
    // var result = undefined;
    if (input < 5) {
        var result = 1;
    }

    return result;
}

// Remove comment
// console.log(hoistingExample(4));

/*
    let
*/

// 1. Unlike var, let is not hoisted, so its only available inside the block where it has been created
function letExample(input) {
    if (input < 5) {
        let result = true;
    }

    return result;
}

// Remove comment and fix code
console.log(letExample(4));

// 2. Can be used in nested blocks
function letExample2(input) {
    if (input < 5) {
        let result = true;

        if (input === 4) {
            result = false;
        }
    }

    return result;
}

// Remove comment and fix code
// console.log(letExample2(3));
// console.log(letExample2(4));

/*
    const
*/

// 1. Same as let, but cannot be reassigned

function constExample() {
    const number = 42;

    try {
        number = 99;
    } catch(err) {
        console.log(err);
      // expected output: TypeError: invalid assignment to const `number'
      // Note - error messages will vary depending on browser
    }
    
    return number;
}

// Remove comment
// console.log(constExample);

