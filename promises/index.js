/*
    Note: we need to put all code into an async function to make it work
    top level async/await is not supported (yet)

    Try to let some promises "run" in parallel
*/

const wait = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}


async function main() {

    console.log('First');
    await wait(200);

    console.log('Second');
    await wait(500);

    console.log('Third');
    // we can also assign promises
    const prom = wait(1000);
    // and wait later for them
    await prom;
}


main().then(() => {
    // program is finished
}, (err) => {
    // an error has occured
    console.error(err);
});

