/*
    Can you explain the order in which the log messages are printed?

    Play with the code!
*/

function log(msg) {
    console.log(msg);
}

function returnLogCall(msg) {
    return () => {
        console.log(msg);
    }
}

log('This one is easy');

const call = returnLogCall('This one is delayed');
call();



setTimeout(() => {
    log('after 500ms');
}, 500);

setTimeout(returnLogCall('after 1000ms'), 1000);

log('directly');


let x = 0;

// setInterval returns an id that can be used to clear the interval
let interval = setInterval(() => {
    x++;
    log('setInterval: ' + x);
    if (x > 5) {
        clearInterval(interval);
    }
}, 200);