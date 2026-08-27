/*
 * Question: Binary Search
 * Given a sorted array arr[] and an element ele, find the index of ele using
 * binary search. If ele is not present in the array, return -1.
 *
 * Examples:
 * Input: arr[] = [1, 2, 3, 4, 5], ele = 3
 * Output: 2
 *
 * Constraints:
 * 1 <= arr.length <= 10^5
 * 1 <= arr[i], ele <= 10^6
 */
function binarySearch(arr, ele) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === ele) {
      return mid;
    } else if (arr[mid] > ele) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));

/*
 * Explanation
 * -----------
 * Approach: Classic iterative binary search on a sorted array - repeatedly halve
 * the search range until the element is found or the range is empty.
 * How it works: Compute mid; if arr[mid] equals ele return mid. If arr[mid] is
 * greater, the element must be in the left half (end = mid - 1); otherwise it is
 * in the right half (start = mid + 1). Return -1 if the range empties out.
 * Example: binarySearch([1, 2, 3, 4, 5], 3) -> 2 (3 is found at index 2).
 * Time Complexity: O(log n)
 * Auxiliary Space: O(1)
 */
