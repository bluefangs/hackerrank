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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    const ampm = s[s.length - 2] + s[s.length - 1]; // last two chars will always represent AM / PM

    const givenTime = s.slice(0, s.length - 2).split(':'); // ['07','05','45']
    
    const hours = givenTime[0];   // '07'
    const mins = givenTime[1];    // '05'
    const sec = givenTime[2];     // '45'

    // initialize a date object with any date followed by the time that we need.    
    const someDate = new Date(`1970-01-01 ${hours}:${mins} ${ampm}`);
    someDate.setSeconds(sec);

    let finalHours;
    let finalMins;
    let finalSec;

    // add padding of leading 0 in case the dight is < 10
    someDate.getHours() < 10 ? (finalHours = '0' + someDate.getHours()) : (finalHours = someDate.getHours());

    // add padding of leading 0 in case the dight is < 10
    someDate.getMinutes() < 10 ? finalMins = '0' + someDate.getMinutes() : finalMins = someDate.getMinutes();

    // add padding of leading 0 in case the dight is < 10
    someDate.getSeconds() < 10 ? finalSec = '0' + someDate.getSeconds() : (finalSec = someDate.getSeconds());


    return `${finalHours}:${finalMins}:${finalSec}`
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
