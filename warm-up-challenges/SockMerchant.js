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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let count = 0
    let alreadySeen = [];
    for (let i = 0; i < n; i++){
        let initial = ar[i];
        // console.log('current sock : ', initial);
        if (!alreadySeen.includes(initial)) {
            let matches = ar.filter((element) => element == initial).length;
            // console.log('individual sock matches: ', matches)
            matches = matches % 2 ? --matches : matches;
            // console.log('matches after removing odd : ', matches)
            matches = matches / 2;
            // console.log('Pair of socks: ', matches)
            count += matches;
            alreadySeen.push(initial);
            // console.log('total pairs: ', count)    
        }
        
    }

    // console.log('count: ', count)
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
