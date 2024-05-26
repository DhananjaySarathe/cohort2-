## Counter without setInterval

<!-- Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. -->

let time = 0;

function logTime() {
console.log(time);
time++;
setTimeout(logTime, 1000); // Schedule the next call after 1 second
}

logTime(); // Start the process

(Hint: setTimeout)
