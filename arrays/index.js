/*
    Count all items in the array that contain the letter 'e'"
*/

const arr_simple = [
    "Hello",
    "My name is John Doe",
    "Batman",
    "",
    "42"
]

console.log(arr_simple.filter(item => item.includes('e')).length);

const arr_mixed = [
    "Hello",
    "My name is John Doe",
    "Batman",
    null,
    42,
    ["dont count this one"]
]

console.log(arr_mixed.filter(item => typeof item === 'string' && item.includes('e')).length);


/*
    Create an array with the numbers [1..10] by using a for loop
*/

const arrWithNumbers = [];
for (let i = 1; i <= 10; i++) {
    arrWithNumbers.push(i);
}

console.log(arrWithNumbers);



/*
    Given an array with words, return an array with the word-lengths
*/

const arr_words = [
    "a",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "the",
    "lazy",
    "dog"
];

console.log(arr_words.map(word => word.length));

// [1, 5, 5, ...]
