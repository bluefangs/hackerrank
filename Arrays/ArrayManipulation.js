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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    // console.log(n, queries)

    // initial approach is to fill an array with 0. DON'T DO THIS as an input for 10^9 might take a log time and is bad for memory / exec time and it's not necessary to have an array with 0s to begin with.


    var array = Array(n+1).fill(0); // we have an array of size 'n' all filled with 0s

    for (let query of queries) {
        console.log('query: ', query);
        let a = query[0];
        let b = query[1];
        let k = query[2];

        // apporach 1 ///////////////////////////////////////////////////
        // arrays start from 0 so initial i = a-1 to compensate for that.
        // include the limiting index also. So i<b.
        // for (let i = a - 1; i < b ; i++) {
        //     array[i] && (array[i] += k) || (array[i] = k);
        // }
        //////////////////////////////////////////////////////////////////
      
        // apporach 2 ///////////////////////////////////////////////////
        // let subArray = array.slice(a-1, b)
        // for (let index in subArray) {
        //     subArray[index] += k;
        // }
        // array.splice(a-1, subArray.length , ...subArray)
        //////////////////////////////////////////////////////////////////

        // apporach 3 ///////////////////////////////////////////////////
        // this is the accepted approach by many poeple. Only compute and maintain
        // by how much the current element is greater than the previous element.
        // Then compute the max
            array[a-1] += k;
            array[b] -= k;
        //////////////////////////////////////////////////////////////////

    }

    let max = 0;
    let sum = 0
    
    for (let i = 0; i < array.length; i++){
        sum += array[i]
        if (sum > max)
            max = sum;
    }
    console.log("final array: ", array)
    // remove out those elmenets from the array that are falsy
    // array = array.filter(Boolean);
    console.log('max: ', max)
    return max;
    // return the max element of the array
    // return Math.max(...array) 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}
