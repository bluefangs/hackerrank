'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    var minRecordsBrokenCount = 0;
    var maxRecordsBrokenCount = 0;
    var minScore = 0;
    var maxScore = 0;
    var seenScores = [];

    for (let score of scores) {
        // initial
        if (!seenScores.length) {
            seenScores.push(score);
            minScore = score;
            maxScore = score;
            continue; // next iteration
        }

        if (seenScores.length && seenScores.includes(score)) {
            continue; // this will already have been accounted for.
        }

        // if it's not the first season score, and the same score hasn't been repeated
        if (seenScores.length && !seenScores.includes(score)) {
            seenScores.push(score);
            // if the currently seen score is the least score
            if (Math.min(...seenScores) == score) {
                minRecordsBrokenCount++;
            }
            if (Math.max(...seenScores) == score) {
                maxRecordsBrokenCount++;
            }
        }
        
    }
    // console.log('minScore: ', minScore);
    // console.log('maxScore: ', maxScore);
    // console.log('minRecordsBrokenCount: ', minRecordsBrokenCount);
    // console.log('maxRecordsBrokenCount: ', maxRecordsBrokenCount);


    // console.log(maxRecordsBrokenCount, minRecordsBrokenCount)
    return [maxRecordsBrokenCount, minRecordsBrokenCount]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
