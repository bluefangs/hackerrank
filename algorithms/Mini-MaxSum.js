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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

    const sortedArray = arr.sort();
    // console.log('sorted: ', sortedArray)
    const min = sortedArray.slice(0, sortedArray.length - 1).reduce((a, b) => a + b, 0);
    const max = sortedArray.slice(1, sortedArray.length).reduce((a, b) => a + b, 0);
    console.log(min, max);


}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
