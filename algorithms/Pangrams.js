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

// Complete the pangrams function below.
function pangrams(s) {

    s = s.toLowerCase(); // "the quick brown fox jumps over the lazy dog"
    s = [...new Set(s)]; // removes duplicate letters, creates a new array where each element is a character of the sentence. ["t", "h", "e", " ", "q", "u", "i", "c", "k", "b", "r", "o", "w", "n", "f", "x", "j", "m", "p", "s", "v", "l", "a", "z", "y", "d", "g"]

    // s.sort() will give [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    // s.sort().join("") will give " ,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
    // trim() removes leading and trailing white spaces.
    s = s.sort().join("").trim(); // "abcdefghijklmnopqrstuvwxyz"

    return s == 'abcdefghijklmnopqrstuvwxyz' ?  'pangram' :  'not pangram'

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = pangrams(s);

    ws.write(result + "\n");

    ws.end();
}
