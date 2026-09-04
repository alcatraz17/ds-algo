/*
 * Question: Count Occurrences in a Sorted Array
 * Write a function that counts how many times an element occurs in a sorted
 * array using binary search (first and last occurrence), returning -1 if the
 * element is not present.
 *
 * Examples:
 * Input: arr = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7], ele = 7
 * Output: 5
 */

function firstOccurrence(arr, ele) {
  const length = arr.length;

  let low = 0;
  let high = length - 1;
  let firstOccurrence = 0;
  let lastOccurrence = length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === ele) {
      if (mid === 0 || arr[mid - 1] !== ele) {
        return mid;
      } else {
        high = mid - 1;
      }
    } else if (arr[mid] > ele) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

function lastOccurrence(arr, ele) {
  const length = arr.length;

  let high = length - 1;
  let low = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === ele) {
      if (mid === length - 1 || arr[mid + 1] !== ele) {
        return mid;
      } else {
        low = mid + 1;
      }
    } else if (arr[mid] > ele) {
      high = mid + 1;
    } else {
      low = mid - 1;
    }
  }
  return -1;
}

function countOccurrences(arr, ele) {
  const first = firstOccurrence(arr, ele);
  const last = lastOccurrence(arr, ele);

  if (first === -1 || last === -1) {
    return -1;
  }

  return last - first + 1;
}

console.log(countOccurrences([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7], 7));

// console.log(firstOccurrence([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7], 7));
// console.log(lastOccurrence([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7], 7));
