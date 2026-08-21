/*
 * Question: Reverse Array in Groups
 * Given an array arr[] of size n and a positive integer k, reverse every subarray group of size k (the last group may be smaller if n is not a multiple of k). Return the modified array.
 *
 * Examples:
 * Input: arr[] = [1, 2, 3, 4, 5], k = 3
 * Output: [3, 2, 1, 5, 4]
 *
 * Constraints:
 * 1 ≤ n, k ≤ 10^5
 * 1 ≤ arr[i] ≤ 10^5
 */
function revArray(arr, k) {
  const length = arr.length;

  for (let i = 0; i < length; i += k) {
    let left = i;
    let right = Math.min(i + k - 1, length - 1);

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr;
}

console.log(revArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 6));

/*
 * Explanation
 * -----------
 * Approach: Split the array into consecutive groups of size k (the last group may be smaller) and reverse each group in place using two pointers.
 * How it works:
 * 1. The outer loop jumps through the array in steps of k, marking the start of each group.
 * 2. For each group, left starts at the group start and right at min(i + k - 1, length - 1) so the final short group is handled safely.
 * 3. Swap arr[left] and arr[right], moving the pointers toward each other until they meet.
 * Example: revArray([1, 2, 3, 4, 5], 3) -> groups [1,2,3] and [4,5] reverse to [3, 2, 1, 5, 4].
 * Time Complexity: O(n) — every element is swapped at most once.
 * Auxiliary Space: O(1)
 */
