/*
 * Question: Leftmost Index of an Element in a Sorted Array
 * Given a sorted array arr[] (may contain duplicates) and a target X, find the
 * index of the leftmost (first) occurrence of X. If X is not present, return -1.
 *
 * Examples:
 * Input: arr[] = [1, 1, 2, 2, 2, 3, 4, 5], X = 2
 * Output: 2
 *
 * Constraints:
 * 1 <= arr.length <= 10^5
 * 1 <= arr[i], X <= 10^6
 */
function leftMostIndex(arr, X) {
  const length = arr.length;

  let left = 0;
  let right = length - 1;
  let foundIndex = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === X) {
      foundIndex = mid;
      if (mid === 0) {
        return mid;
      } else {
        right = mid - 1;
      }
    } else if (arr[mid] < X) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return foundIndex;
}

console.log(leftMostIndex([1, 1, 2, 2, 2, 3, 4, 5], 2));

/*
 * Explanation
 * -----------
 * Approach: Modified binary search on a sorted array - when the target is found,
 * keep searching the left half to make sure we get the first (leftmost) occurrence.
 * How it works: Compute mid; if arr[mid] === X, record mid in foundIndex and
 * shrink the search to the left (right = mid - 1), returning early if mid is 0.
 * Otherwise do normal binary search: go right if arr[mid] < X, else go left.
 * Example: leftMostIndex([1, 1, 2, 2, 2, 3, 4, 5], 2) -> 2 (first 2 is at index 2).
 * Time Complexity: O(log n)
 * Auxiliary Space: O(1)
 */
