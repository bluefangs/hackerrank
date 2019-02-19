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

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {

    // limiting condition:
    // if a kroo begins further from another AND hops faster than the other,
    // then there is no way the other can catch up. So print NO.
    if ((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1)){
       return "NO"
    }

    // if they are jumping equally from the same point thent it's always a YES
    if (x1 == x2 && v1 == v2) {
        return 'YES'
    }
    // if they are starting from the same place and one of them hops higher than the other then its a NO
    if (x1 == x2 && (v1 != v2)) {
        return 'NO'
    }


    //// THIS IS BRUTEFORCE. EXPECT LARGE TEST CASES TO TIMEOUT/////
    // let found = false;
    // let steps = 0;
    // while (!found) {
    //     console.log('not found yet.');
    //     x1 += v1;
    //     console.log('x1+v1: ', x1);
    //     x2 += v2;
    //     console.log('x2+v2: ', x2);
    //     ++steps;
    //     if (x1 == x2) {
    //         found = true;
    //         console.log('found something after steps: ', steps)
    //         return "YES"
    //     }
    // }
    //////////////////////////////////////////////////////////////

    // for YES, x2 - x1 and v2 - v1 must be positive
    if ((x2 - x1) % (v2 - v1) == 0) {
        return 'YES'
    }
    else return 'NO'


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x1V1X2V2 = readLine().split(' ');

    const x1 = parseInt(x1V1X2V2[0], 10);

    const v1 = parseInt(x1V1X2V2[1], 10);

    const x2 = parseInt(x1V1X2V2[2], 10);

    const v2 = parseInt(x1V1X2V2[3], 10);

    let result = kangaroo(x1, v1, x2, v2);

    ws.write(result + "\n");

    ws.end();
}
