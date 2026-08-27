/*
 * Question: Floor in a Sorted Array
 * Difficulty: Easy  Accuracy: 33.75%  Submissions: 574K+  Points: 2  Average Time: 30m
 * Given a sorted array arr[] and an integer x, find the index (0-based) of the
 * largest element in arr[] that is less than or equal to x. This element is
 * called the floor of x. If such an element does not exist, return -1.
 * Note: In case of multiple occurrences of floor of x, return the index of the
 * last occurrence.
 *
 * Examples:
 * Input: arr[] = [1, 2, 8, 10, 10, 12, 19], x = 5
 * Output: 1
 * Explanation: Largest number less than or equal to 5 is 2, whose index is 1.
 * Input: arr[] = [1, 2, 8, 10, 10, 12, 19], x = 11
 * Output: 4
 * Explanation: Largest Number less than or equal to 11 is 10, whose indices are 3 and 4. The index of last occurrence is 4.
 * Input: arr[] = [1, 2, 8, 10, 10, 12, 19], x = 0
 * Output: -1
 * Explanation: No element less than or equal to 0 is found. So, output is -1.
 *
 * Constraints:
 * 1 <= arr.size() <= 10^6
 * 1 <= arr[i] <= 10^6
 * 0 <= x <= arr[n-1]
 * Expected Complexities: Time Complexity: O(log n), Auxiliary Space: O(1)
 */
function lessThanEqualToN(arr, N) {
  let num = -1;

  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] <= N) {
      num = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return num;
}

console.log(lessThanEqualToN([1, 2, 3, 4, 5, 6, 10], 8));

/*
 * Explanation
 * -----------
 * Approach: Binary search for the floor of N - the index of the last element that
 * is less than or equal to N in the sorted array.
 * How it works: Compute mid; if arr[mid] <= N, record mid as the current answer
 * (num = mid) and search the right half (low = mid + 1) for a later occurrence.
 * Otherwise the floor must be on the left, so set high = mid - 1. If no element
 * is <= N, num stays -1.
 * Example: lessThanEqualToN([1, 2, 3, 4, 5, 6, 10], 8) -> 5 (6 at index 5 is the
 * largest element <= 8).
 * Time Complexity: O(log n)
 * Auxiliary Space: O(1)
 */
