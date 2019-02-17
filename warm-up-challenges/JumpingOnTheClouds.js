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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {

    
    let hops = 0;
    
    var initialIndex = 0;
    var finalIndex = initialIndex + 3;
    var subset = c.slice(initialIndex, 3);
    console.log('initial subset: ', subset)

        
    function hopCounter(subset) {
        if (subset[0] == 0 && subset[2] == 0) {
            initialIndex += 2;
            
        } else {
            initialIndex += 1;
           
        }
        finalIndex = initialIndex + 3;
        
        let nextSubset = c.slice(initialIndex, finalIndex)
        console.log('new Array to check: ', nextSubset);
        hops++;
        console.log('hopcount: ', hops)


        

        if (nextSubset.length == 3) {
            hopCounter(nextSubset);
            
        }
        else if (nextSubset.length != 1){
            console.log("the remaining elements: ", nextSubset)
            hops++
        }
    }
    hopCounter(subset);
    return hops;
    
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}

