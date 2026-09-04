/*
 * Question: Binary Search (Iterative)
 * Write a function that searches for an element in a sorted array using
 * binary search and returns its index, or -1 if the element is not found.
 *
 * Examples:
 * Input: arr = [1, 2, 3, 4, 5], element = 3
 * Output: 2
 */

function binarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === element) {
      return mid;
    } else if (arr[mid] > element) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
