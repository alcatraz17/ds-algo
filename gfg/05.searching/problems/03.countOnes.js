/*
 * Explanation
 * -----------
 * Approach: Binary search on a sorted binary array (all 1s followed by all 0s) to
 * find the index of the last 1; the count of 1s is that index + 1.
 * How it works: Compute mid; if arr[mid] is 0, all 1s are to the left so set
 * right = mid - 1. Otherwise arr[mid] is 1, record it in foundIndex and keep
 * looking right (left = mid + 1) for a later 1. Return foundIndex + 1.
 * Example: countOnes([1, 1, 1, 1, 1, 1, 1, 0, 0, 0]) -> 7 (last 1 at index 6).
 * Time Complexity: O(log n)
 * Auxiliary Space: O(1)
 */
function countOnes(arr) {
  const length = arr.length;

  let left = 0;
  let right = length - 1;
  let foundIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
      foundIndex = mid;
    }
  }

  return foundIndex + 1;
}

console.log(countOnes([1, 1, 1, 1, 1, 1, 1, 0, 0, 0]));
