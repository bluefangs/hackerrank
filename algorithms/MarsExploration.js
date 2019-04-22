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

// Complete the marsExploration function below.
function marsExploration(s) {

    let howManyFlipped = 0;
    // every 3 chars corresponds to an 'SOS'
    for (let i = 0; i < s.length; i = i + 3){
        let setOfSOS = s.substr(i, 3); // take the first set
        if (setOfSOS[0] != 'S') howManyFlipped++;
        if (setOfSOS[1] != 'O') howManyFlipped++;
        if (setOfSOS[2] != 'S') howManyFlipped++;

    }
    return howManyFlipped;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = marsExploration(s);

    ws.write(result + "\n");

    ws.end();
}
