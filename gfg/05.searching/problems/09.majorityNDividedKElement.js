// More than n/k Occurrences

// Given an array arr and an element k. The task is to find the count of elements in the array that appear more than n/k times and n is length of arr.

// Examples :

// Input: arr = [3, 1, 2, 2, 1, 2, 3, 3], k = 4
// Output: 2
// Explanation: In the given array, 3 and 2 are the only elements that appears more than n/k times.
// Input: arr = [2, 3, 3, 2], k = 3
// Output: 2
// Explanation: In the given array, 3 and 2 are the only elements that appears more than n/k times. So the count of elements are 2.
// Input: arr = [1, 4, 7, 7], k = 2
// Output: 0
// Explanation: In the given array, no element appears more than n/k times.
// Constraints:
// 1 <= arr.size() <= 106
// 0 <= arr[i] <= 108
// 1 <= k <= arr.size()

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

function majorityNbyKelElements(arr, k) {
  let myMap = new Map();
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    const num = arr[i];
    myMap.set(num, myMap.get(num) + 1 || 1);
  }

  let count = 0;

  for (let [key, value] of myMap) {
    if (value > length / k) {
      count++;
    }
  }
  return count;
}

console.log(majorityNbyKelElements([1, 1, 1, 2, 2, 2, 3, 3], 3));
