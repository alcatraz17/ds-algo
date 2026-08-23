/*
 * Question: Rearrange an Array with O(1) Extra Space
 * Given an array arr[] of size n where every element is in the range from 0 to n-1, rearrange the array so that the transformed array arrT[i] becomes arr[arr[i]].
 * NOTE: arr and arrT are both same variables, representing the array before and after transformation respectively.
 *
 * Examples:
 * Input: arr[] = [1, 0]
 * Output: [0, 1]
 * Input: arr[] = [4, 0, 2, 1, 3]
 * Output: [3, 4, 2, 0, 1]
 *
 * Constraints:
 * 1 ≤ n ≤ 10^5
 * 0 ≤ arr[i] < n
 */
function rev(arr) {
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    arr[i] = arr[i] + (arr[arr[i]] % length) * length;
  }

  for (let j = 0; j < length; j++) {
    arr[j] = Math.floor(arr[j] / length);
  }

  return arr;
}

console.log(rev([4, 0, 2, 1, 3]));

/*
 * Explanation
 * -----------
 * Approach: Encode both the old value and the new value arr[arr[i]] into a single number so the transformation can be done in place, then decode it.
 * How it works:
 * 1. First pass: set arr[i] = arr[i] + (arr[arr[i]] % length) * length. The old value is preserved as (new value) % length, and arr[arr[i]] % length recovers the still-encoded target's original value.
 * 2. Second pass: divide each element by length (floor) to extract the new value arr[arr[i]].
 * Example: rev([4, 0, 2, 1, 3]) -> first pass encodes, second pass decodes to [3, 4, 2, 0, 1].
 * Time Complexity: O(n)
 * Auxiliary Space: O(1)
 */
