/*
 * Explanation
 * -----------
 * Approach: Shift every element one position to the right, starting from the end, to make room at the target index, then place the value there.
 * How it works:
 * 1. Loop from the end of the array (i = arr.length) backwards until i > index.
 * 2. Copy each element one slot forward: arr[i] = arr[i - 1].
 * 3. Write val into the now-free slot arr[index].
 * Example: insertAtIndex([1, 2, 3, 4, 5], 2, 4) -> shifts elements, index 4 gets 2, returns [1, 2, 3, 4, 2, 5].
 * Time Complexity: O(n) — in the worst case all n elements are shifted.
 * Auxiliary Space: O(1)
 */
function insertAtIndex(arr, val, index) {
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }

  arr[index] = val;

  return arr;
}

let myArr = [1, 2, 3, 4, 5];

console.log(insertAtIndex(myArr, 2, 4));
