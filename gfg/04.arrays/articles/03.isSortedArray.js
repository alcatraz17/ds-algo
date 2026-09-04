/*
 * Question: Check if an Array is Sorted
 * Write a function that checks whether a given array is sorted in non-decreasing order.
 *
 * Examples:
 * Input: [1, 1, 2, 3, 4, 5]
 * Output: true
 */

const sortedArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
};

console.log(sortedArray([1, 1, 2, 3, 4, 5]));
