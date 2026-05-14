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
