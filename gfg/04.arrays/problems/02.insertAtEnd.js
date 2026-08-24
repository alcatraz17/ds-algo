/*
 * Explanation
 * -----------
 * Approach: Use the fact that writing at arr[arr.length] (one past the last index) automatically grows the array by one element.
 * How it works:
 * 1. Assign ele to position arr.length, which is the first free slot at the end.
 * 2. The array's length increases by 1 automatically.
 * 3. Return the modified array.
 * Example: insertAtEnd([1, 2, 3], 5) -> arr[3] = 5, returns [1, 2, 3, 5].
 * Time Complexity: O(1)
 * Auxiliary Space: O(1)
 */
function insertAtEnd(arr, ele) {
  arr[arr.length] = ele;

  return arr;
}

console.log(insertAtEnd([1, 2, 3], 5));
