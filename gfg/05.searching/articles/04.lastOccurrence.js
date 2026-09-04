/*
 * Question: Last Occurrence in a Sorted Array
 * Write a function that finds the index of the last occurrence of an element
 * in a sorted array (which may contain duplicates), or -1 if it is not present.
 *
 * Examples:
 * Input: arr = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7], element = 7
 * Output: 10
 */

function lastOccurrence(arr, element) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === element) {
      if (mid === arr.length - 1 || arr[mid + 1] !== element) {
        return mid;
      } else {
        low = mid + 1;
      }
    } else if (arr[mid] < element) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

console.log(lastOccurrence([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7], 7));
