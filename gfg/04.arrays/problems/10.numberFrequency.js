// Given an array arr[] and two elements x and y, return the element that occurs more frequently. If both elements have the same frequency, return the smaller one.

// Examples:

// Input: arr[] = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5], x = 4, y = 5
// Output: 4
// Explanation: frequency of 4 is 4.frequency of 5 is 1.Since 4>1 so return 4
// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], x = 1, y = 7
// Output: 1
// Explanation: frequency of 1 is 1.frequency of 7 is 1.Since 1 < 7, return 1.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 0 ≤ arr[i] , x , y ≤ 108

/*
 * Explanation
 * -----------
 * Approach: Count how many times x and y each appear in one pass over the array, then compare the counts.
 * How it works:
 * 1. Initialize a Map with x and y as keys, both starting at count 0.
 * 2. Loop through the array; whenever an element equals x or y, increment its count in the Map.
 * 3. If x's count is higher return x; if y's is higher return y; if equal return the smaller value.
 * Example: numFreq([1, 1, 1, 2, 2, 3, 4, 5, 9], 5, 4) -> 5 appears once, 4 appears once, so return min(5, 4) = 4.
 * Time Complexity: O(n)
 * Auxiliary Space: O(1) — the Map only ever holds two entries.
 */
function numFreq(arr, x, y) {
  let myMap = new Map();
  myMap.set(x, 0);
  myMap.set(y, 0);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x || arr[i] === y) {
      myMap.set(arr[i], myMap.get(arr[i]) + 1);
    }
  }

  if (myMap.get(x) > myMap.get(y)) {
    return x;
  } else if (myMap.get(x) === myMap.get(y)) {
    return Math.min(x, y);
  } else return y;
}

console.log(numFreq([1, 1, 1, 2, 2, 3, 4, 5, 9], 5, 4));
