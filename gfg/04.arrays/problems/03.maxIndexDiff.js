/*
 * Explanation
 * -----------
 * Approach: Precompute prefix minimums and suffix maximums, then use two pointers to find the maximum j - i such that arr[i] <= arr[j].
 * How it works:
 * 1. leftMinimum[i] stores the minimum of arr[0..i]; rightMaximum[j] stores the maximum of arr[j..n-1].
 * 2. Walk two pointers: if leftMinimum[leftIndex] <= rightMaximum[rightIndex], a valid pair exists — record the distance and move rightIndex to try a wider gap.
 * 3. Otherwise move leftIndex to try a smaller left element.
 * Example: maxIndexDiff([2, 1, 1, 4, 2, 6, 4, 5, 1]) -> best pair is i=0 (value 2) and j=7 (value 5), returns 7.
 * Time Complexity: O(n)
 * Auxiliary Space: O(n) for the two precomputed arrays.
 */
function maxIndexDiff(arr) {
  let length = arr.length;

  let leftMinimum = new Array(length);
  let rightMaximum = new Array(length);

  leftMinimum[0] = arr[0];
  rightMaximum[length - 1] = arr[length - 1];

  let leftIndex = 0;
  let rightIndex = 0;
  let maxDistance = -1;

  for (let i = 1; i < length; i++) {
    leftMinimum[i] = Math.min(leftMinimum[i - 1], arr[i]);
  }
  for (let j = length - 2; j >= 0; j--) {
    rightMaximum[j] = Math.max(rightMaximum[j + 1], arr[j]);
  }

  while (leftIndex < length && rightIndex < length) {
    if (leftMinimum[leftIndex] <= rightMaximum[rightIndex]) {
      maxDistance = Math.max(maxDistance, rightIndex - leftIndex);
      rightIndex++;
    } else {
      leftIndex++;
    }
  }

  return maxDistance;
}

console.log(maxIndexDiff([2, 1, 1, 4, 2, 6, 4, 5, 1]));
