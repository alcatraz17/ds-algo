/*
 * Question: Count 1s in a Sorted Binary Array
 * Write a function that counts the number of 1s in a binary array sorted
 * in non-increasing order (all 1s come before all 0s) using binary search.
 *
 * Examples:
 * Input: arr = [1, 1, 1, 1, 0, 0, 0, 0, 0]
 * Output: 4
 */

function countOnes(arr) {
  let left = 0;
  let right = arr.length - 1;
  let firstZero = arr.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === 0) {
      firstZero = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return firstZero;
}

console.log(countOnes([1, 1, 1, 1, 0, 0, 0, 0, 0]));
