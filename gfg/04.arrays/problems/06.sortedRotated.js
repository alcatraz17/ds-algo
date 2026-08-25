/*
 * Explanation
 * -----------
 * Approach: An array that is sorted and then rotated changes direction (ascending to descending or vice versa) at exactly one point — so just count those direction changes.
 * How it works:
 * 1. Loop over adjacent pairs and count descents (arr[i] > arr[i + 1]) and ascents (arr[i] < arr[i + 1]).
 * 2. If there is exactly 1 descent and the last element is smaller than the first, it is an ascending sorted array rotated once — return true.
 * 3. If there is exactly 1 ascent and the last element is greater than the first, it is a descending sorted array rotated once — return true.
 * 4. Otherwise return false.
 * Example: sortedRotated([3, 4, 5, 1, 2]) -> one descent (5 > 1) and last < first -> true.
 * Time Complexity: O(n)
 * Auxiliary Space: O(1)
 */
function sortedRotated(arr) {
  const n = arr.length;
  let descents = 0;
  let ascents = 0;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) descents++;
    else ascents++;
  }

  return (
    (descents === 1 && arr[n - 1] < arr[0]) ||
    (ascents === 1 && arr[n - 1] > arr[0])
  );
}
