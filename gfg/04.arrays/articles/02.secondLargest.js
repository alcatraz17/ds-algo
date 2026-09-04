/*
 * Question: Second Largest Element in an Array
 * Write a function that finds and returns the second largest element in a given array.
 *
 * Examples:
 * Input: [1, 2, 3, 4, 5, 6, 7, 7, 7]
 * Output: 6
 */

function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(findSecondLargest([1, 2, 3, 4, 5, 6, 7, 7, 7]));
