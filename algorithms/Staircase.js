'use strict';

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

// Complete the staircase function below.
function staircase(n) {
    // n = 6
    let staircase = Array(n).fill(' '); // [' ', ' ', ' ', ' ', ' ', ' ']
    // console.log('staircase initial: ', staircase.join(' ')) // __ __ __ __ __ __
    for (let i = n; i >= 1; i--){ 
        // console.log('iteration is: ', i)
        staircase[i - 1] = '#'; // [' ', ' ', ' ', ' ', ' ', '#']
        console.log(staircase.join('')) // __ __ __ __ __ #
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
