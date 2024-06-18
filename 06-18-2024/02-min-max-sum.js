// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// arr = [1,3,5,7,9]
// The minimum sum is 1+3+5+7=16 and the maximum sum 3+5+7+9=24 . The function prints 16,24

'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  let miniSum = 0;
  let maxSum = 0;
  const sortedArr = arr.sort((a, b) => a - b);

  for (let index = 0; index < sortedArr.length - 1; index++) {
    miniSum += arr[index];
  }

  for (let index = 1; index < sortedArr.length; index++) {
    maxSum += arr[index];
  }

  return console.log(miniSum, maxSum);
}

miniMaxSum([1, 3, 5, 7, 9]);
miniMaxSum([1, 2, 3, 4, 5]);

// function main() {

//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     miniMaxSum(arr);
// }
