// Plus Minus

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to
// are acceptable.

"use strict";

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//   inputString = inputString.split('\n');

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zer = 0;
  const n = arr.length;
  arr.map((el) =>
    el > 0 ? (pos += 1 / n) : el < 0 ? (neg += 1 / n) : (zer += 1 / n)
  );
  return console.log(
    pos.toFixed(6),
    "\n",
    neg.toFixed(6),
    "\n",
    zer.toFixed(6)
  );
}

plusMinus([1, 1, 0, -1, -1]);

// function main() {
//   const n = parseInt(readLine().trim(), 10);
//   const arr = readLine()
//     .replace(/\s+$/g, '')
//     .split(' ')
//     .map((arrTemp) => parseInt(arrTemp, 10));
//   plusMinus(arr);
// }
