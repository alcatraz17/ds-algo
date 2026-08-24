/*
 * Question: Rotate Array
 * Given an array arr[], rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the change in place, considering the array as circular.
 *
 * Examples:
 * Input: arr[] = [1, 2, 3, 4, 5], d = 2
 * Output: [3, 4, 5, 1, 2]
 * Input: arr[] = [7, 3, 9, 1], d = 9
 * Output: [3, 9, 1, 7]
 *
 * Constraints:
 * 1 ≤ arr.size(), d ≤ 10^5
 * 0 ≤ arr[i] ≤ 10^5
 */
function rotateArr(arr, d) {
  let n = arr.length;
  d = d % n;

  if (d === 0) return arr;

  reverse(arr, 0, d - 1);
  reverse(arr, d, n - 1);
  reverse(arr, 0, n - 1);

  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
}

/*
 * Explanation
 * -----------
 * Approach: Left-rotate in place using the reversal algorithm — three reversals produce the rotation without any extra array.
 * How it works:
 * 1. Reduce d with d = d % n so rotating by more than n wraps correctly; if d becomes 0 nothing to do.
 * 2. Reverse the first d elements, then the remaining n - d elements, then the whole array.
 * 3. The inner reverse helper swaps elements from both ends toward the middle.
 * Example: rotateArr([1, 2, 3, 4, 5], 2) -> [2, 1, 3, 4, 5] -> [2, 1, 5, 4, 3] -> [3, 4, 5, 1, 2].
 * Time Complexity: O(n)
 * Auxiliary Space: O(1)
 */
