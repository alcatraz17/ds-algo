// Smallest Positive Missing
// Difficulty: MediumAccuracy: 27.97%Submissions: 30K+Points: 4
// You are given an integer array arr[]. Your task is to find the smallest positive number missing from the array.

// Note: Positive number starts from 1. The array can have negative integers too.

// Examples:

// Input: arr[] = [2, -3, 4, 1, 1, 7]
// Output: 3
// Explanation: Smallest positive missing number is 3.
// Input: arr[] = [5, 3, 2, 5, 1]
// Output: 4
// Explanation: Smallest positive missing number is 4.
// Input: arr[] = [-8, 0, -1, -4, -3]
// Output: 1
// Explanation: Smallest positive missing number is 1.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// -106 ≤ arr[i] ≤ 106

// Expected Complexities
// Time Complexity: O(log n)
// Auxiliary Space: O(1)

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
