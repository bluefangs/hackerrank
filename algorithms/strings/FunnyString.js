'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the funnyString function below.
function funnyString(s) {

    // 1a. convert to array
    // 1b. get back ascii values via map
    // 2a. reverse original array
    // 2b. get back ascii value via map for reverse.

    let originalStringAsciiArray = s.split('').map(char => char.charCodeAt());
    let reverseStringAsciiArray = s.split('').reverse().map(char => char.charCodeAt());

    console.log(originalStringAsciiArray, reverseStringAsciiArray)


    // 1. get absolute val of first elem - second elem.
    // 2. when you hit the last elem, you will try to do step1 which will result in Nan

    // originalStringAsciiArray[last index + 1 ] won't exist and you will end up with NaN
    let originalAbsValueArray = originalStringAsciiArray.map((elem, index) => Math.abs(elem - originalStringAsciiArray[index + 1]));

    let reverseAbsValueArray = reverseStringAsciiArray.map((elem, index) => Math.abs(elem - reverseStringAsciiArray[index + 1]));

    
    console.log("one: ", originalAbsValueArray.join(','))
    console.log("two: ", reverseAbsValueArray.join(','))
    if (originalAbsValueArray.join(',') == reverseAbsValueArray.join(',')) {
        return "Funny"
    }
    return "Not Funny"
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = funnyString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
