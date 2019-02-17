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

// Complete the repeatedString function below.
function repeatedString(s, n) {

    // this function returns the number of occurrances of 'a' in a given string
    function countOfa(string) {
        return string.split('').filter((element) => element == 'a').length;
    }


    // get the number of occurrances of 'a' in the string
    let a_inString = countOfa(s);

    // reminder = 0 then all characters of the given string  fit perfectly in the given length of n. if remainder > 0 then you need to remove some elements from the last of the string as those will not fit into the given n.

    let remainder = n%s.length;
    console.log('reminder: ', remainder)

    var lastTuple; // that will not fit into the n spaces
    var countInLastTuple = 0;   // count of 'a' in that last tuple

    if (remainder != 0) { // if it's not a perfect fit

        lastTuple = s.slice(0, remainder); // get what fits, leave the rest
        countInLastTuple = countOfa(lastTuple); // get the count of 'a' in that part of the last tuple.
    }

    // get the number of times the string will actually fit into the n spaces.
    var leastMultiple = Math.floor(n / s.length); 

    
    console.log('leastMultiple: ', leastMultiple)
    
    

    console.log('s: ', s)
    console.log('count of a in s: ', a_inString)
    console.log('count of a in s*leastMultiple: ', Math.ceil(a_inString*leastMultiple))
    console.log('count of total elements:', (Math.ceil(a_inString * leastMultiple) + countInLastTuple))

    
    return (Math.ceil(a_inString * leastMultiple) + countInLastTuple)
    

    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
