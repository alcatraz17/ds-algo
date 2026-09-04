/*
 * Question: Remove Duplicates from a Sorted Array
 * Write a function that removes duplicates from a sorted array in place and returns the count of unique elements.
 *
 * Examples:
 * Input: [1, 1, 1, 2, 3, 4]
 * Output: [1, 2, 3, 4]
 */

function remDup(arr) {
  let temp = [arr[0]];
  let res = 1;

  for (let i = 1; i < arr.length; i++) {
    if (temp[res - 1] !== arr[i]) {
      temp[res] = arr[i];
      res++;
    }
  }

  for (let i = 0; i < res; i++) {
    arr[i] = temp[i];
  }

  return res;
}

let arr = [1, 1, 1, 2, 3, 4];
console.log(arr);

const lastDup = remDup(arr);

console.log(arr.slice(0, lastDup));
