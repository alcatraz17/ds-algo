/*
 * Explanation
 * -----------
 * Approach: Single pass through the array keeping track of the largest (max) and second largest (secondMax) values seen so far.
 * How it works:
 * 1. Initialize max to the first element and secondMax to -1.
 * 2. If the current element beats max, the old max becomes secondMax and the element becomes max.
 * 3. Else if it is smaller than max but bigger than secondMax, it becomes the new secondMax.
 * 4. Return [max, secondMax] (secondMax stays -1 if no second maximum exists).
 * Example: mSMax([10, 5, 8]) -> max becomes 10, secondMax becomes 8, returns [10, 8].
 * Time Complexity: O(n)
 * Auxiliary Space: O(1)
 */
function mSMax(arr) {
  let max = arr[0];
  let secondMax = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }

  return [max, secondMax];
}

console.log(
  mSMax([30, 11, 49, 41, 29, 15, 12, 46, 27, 6, 21, 50, 45, 6, 22, 38, 5])
);
