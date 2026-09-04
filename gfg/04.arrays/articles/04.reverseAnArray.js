/*
 * Question: Reverse an Array
 * Write a function that reverses a given array in place using two pointers.
 *
 * Examples:
 * Input: [1, 2, 3]
 * Output: [ 3, 2, 1 ]
 */

function reverseArray(arr) {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];

    start++;
    end--;
  }

  return arr;
}

console.log(reverseArray([1, 2, 3]));
