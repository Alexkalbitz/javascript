/*
    Exercise 1: Use a for loop to print all the even numbers between 0 and 5
    
    Exercise 2: Given a size of a table/matrix, use a nested loop to print to print each cell as the result of the sum between the row and the column index
    (e.g.)
        for(...) {
            for(...) {
                console.log(...)
            }
        }
        
        Table/matrix size 3 should print
            - 'row 0 column 0: 0'
            - 'row 0 column 1: 1'
            - 'row 0 column 2: 2'
            - 'row 1 column 0: 1'
            - 'row 1 column 1: 2'
            - 'row 1 column 2: 3'
            - 'row 2 column 0: 2'
            - 'row 2 column 1: 3'
            - 'row 2 column 2: 4'    
    
    Exercise 3: Exercise 1 using a while loop

    Exercise 4: Exercise 2 using a nested while loop
    (e.g.)
        while(...) {
            while(...)
        }
*/

for (let n = 0; n <= 5; n++) {
    console.log(n);
}

for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
        console.log(`row ${i} column ${j}: ${i + j}`);
    }
}

console.log('------------\n\n\n');

let n = 0
while (n <= 5) {
    console.log(n);
    n++;
}

console.log('------------\n\n\n');

let i = 0;
while (i <= 2) {
    let j = 0;
    while (j <= 2) {
        console.log(`row ${i} column ${j}: ${i + j}`);
        j++;
    }
    i++;
}