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

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let seaLevel = 0;
    let mountains = 0;
    let valleys = 0;
    let currentAltitude = 0;
    let stepsSeen = [];


    for (let step of s) {
        
        step == 'U' ? (++currentAltitude && stepsSeen.push(1)) : (--currentAltitude && stepsSeen.push(-1));

        if (currentAltitude == seaLevel) {
            // we have finished a mountain or a valley.
            let positiveTotal = stepsSeen.filter((element) => element > 0).length
            let negativeTotal = stepsSeen.filter((element) => element < 0).length

            if (positiveTotal > negativeTotal) {
                ++mountains;
            }
            if (positiveTotal < negativeTotal) {
                ++valleys;
            }
            if (positiveTotal == negativeTotal) {
                if (stepsSeen[0] > 1) {
                    ++mountains
                }
                else {
                    ++valleys
                }
            }
            stepsSeen = []; // reset;
        }
       

    }
    console.log('Mountains seen: ', mountains)
    console.log('Valleys seen: ', valleys)
    return valleys;
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
