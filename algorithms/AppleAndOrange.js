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

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {

    var applesOnHouse = 0;
    var orangesOnHouse = 0;

    // apples should fall to the right side of the tree if it has a chance to
    // fall on the house. So filter out positive elements from the apples array
    apples = apples.filter(apple => apple >= 0);
    // Apples that have fallen are at a relative distance from the apple tree. 
    // The tree itself is at position 'a' So the absolute position of the
    // fruit fall will be tree location + fruit fall location
    apples = apples.map(apple => a + apple);

    // if the apple array contains any apple in the s,t range, increment applesOnHouse.
    applesOnHouse = apples.filter(apple => apple >= s && apple <= t && apple).length;
        

    console.log(applesOnHouse)

    // oranges should fall to the left side of the tree if it has a chance to 
    // fall on the house. So filter out negative elements from the oranges array
    oranges = oranges.filter(orange => orange <= 0);

    // Oranges that have fallen are at a relative distance from the orange tree.
    // The tree itself is at position 'b' So the absolute position of the
    // fruit fall will be tree location + fruit fall location
    // we don't need to subtract since the oranges array already has -ive elements.
    oranges = oranges.map(orange => b + orange);

    // if the oranges array contains any orange in the s,t range, increment orangesOnHouse.
    orangesOnHouse = oranges.filter(orange => orange >= s && orange <= t && orange).length;

    console.log(orangesOnHouse)
}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
