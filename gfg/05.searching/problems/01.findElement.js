/*
 * Explanation
 * -----------
 * Approach: Linear search - scan the array from left to right and compare each
 * element with the target, since the array is unsorted.
 * How it works: Loop through every index i; if arr[i] equals the target element,
 * return i immediately. If the loop finishes without a match, return -1.
 * Example: findElement([1, 2, 45, 4, 89, 8], 2) -> 1 (2 is found at index 1).
 * Time Complexity: O(n)
 * Auxiliary Space: O(1)
 */
function findElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }

  return -1;
}

console.log(findElement([1, 2, 45, 4, 89, 8], 2));
