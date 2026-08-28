/*
 * Question: Smallest Positive Missing
 * Difficulty: Medium  Accuracy: 27.97%  Submissions: 30K+  Points: 4
 * You are given an integer array arr[]. Your task is to find the smallest
 * positive number missing from the array.
 * Note: Positive number starts from 1. The array can have negative integers too.
 *
 * Examples:
 * Input: arr[] = [2, -3, 4, 1, 1, 7]
 * Output: 3
 * Explanation: Smallest positive missing number is 3.
 * Input: arr[] = [5, 3, 2, 5, 1]
 * Output: 4
 * Explanation: Smallest positive missing number is 4.
 * Input: arr[] = [-8, 0, -1, -4, -3]
 * Output: 1
 * Explanation: Smallest positive missing number is 1.
 *
 * Constraints:
 * 1 <= arr.size() <= 10^5
 * -10^6 <= arr[i] <= 10^6
 * Expected Complexities: Time Complexity: O(n), Auxiliary Space: O(1)
 */
class Solution {
  smallestPositiveMissing(arr) {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
      while (arr[i] > 0 && arr[i] <= length && arr[arr[i] - 1] !== arr[i]) {
        let correctIndex = arr[i] - 1;
        [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
      }
    }

    for (let i = 0; i < length; i++) {
      if (arr[i] !== i + 1) {
        return i + 1;
      }
    }

    return length + 1;
  }
}

const s = new Solution();
console.log(s.smallestPositiveMissing([-2, 1, 2, 4, 3]));

/*
 * Explanation
 * -----------
 * Approach: Cycle sort style in-place placement - put every value x (1 <= x <= n)
 * at index x - 1, then the first index not holding i + 1 reveals the answer.
 * How it works: First pass: while arr[i] is a positive number within [1, n] and is
 * not already at its correct slot, swap it with the element at index arr[i] - 1.
 * Second pass: return i + 1 for the first i where arr[i] !== i + 1. If every slot
 * is correct, all of 1..n are present, so the answer is n + 1.
 * Example: smallestPositiveMissing([-2, 1, 2, 4, 3]) -> 5 (after rearranging we
 * have 1, 2, 3, 4 present, so 5 is missing).
 * Time Complexity: O(n)
 * Auxiliary Space: O(1)
 */
