// Given an array arr[]. Find the majority element in the array. If no majority element exists, return -1.

// Note: A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.

// Examples:

// Input: arr[] = [1, 1, 2, 1, 3, 5, 1]
// Output: 1
// Explanation: Since, 1 is present more than 7/2 times, so it is the majority element.
// Input: arr[] = [7]
// Output: 7
// Explanation: Since, 7 is single element and present more than 1/2 times, so it is the majority element.
// Input: arr[] = [2, 13]
// Output: -1
// Explanation: Since, no element is present more than 2/2 times, so there is no majority element.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 105

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

// COMMENTED SOLUTION (Uses O(n) space with Map - violates constraint)
// function majorityElement(arr) {
//   let myMap = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];

//     myMap.set(num, myMap.get(num) + 1 || 1);
//   }

//   let largestKey = 0;
//   let largestValue = 0;

//   for (let [key, value] of myMap) {
//     if (value > largestValue) {
//       largestKey = key;
//       largestValue = value;
//     }
//   }

//   if (largestValue >= arr.length / 2) {  // Should be > not >=
//     return largestKey;
//   }

//   return -1;
// }

// CORRECT SOLUTION (Boyer-Moore Voting Algorithm - O(1) space)
function majorityElement(arr) {
  let candidate = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else if (arr[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  count = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === candidate) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return candidate;
  }

  return -1;
}

console.log(majorityElement([1, 1, 1, 1, 1, 2, 3, 4]));
