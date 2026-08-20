/*
 * Question: Mean and Median of Array
 * Given an array arr[] of size n, find the mean and the median of its elements. The mean is the average of all elements; the median is the middle element after sorting (for even n, the floor of the average of the two middle elements).
 *
 * Examples:
 * Input: arr[] = [1, 2, 3]
 * Output: mean = 2, median = 2
 *
 * Constraints:
 * 1 ≤ n ≤ 10^5
 * 1 ≤ arr[i] ≤ 10^5
 */

// function meanMedian(arr) {
//   let middleElement = Math.floor(arr.length / 2);
//   const median = (arr[middleElement] + arr[middleElement + 1]) / 2;

//   const sum = arr.reduce((acc, ele) => {
//     return acc + ele;
//   }, 0);

//   return [sum / arr.length, middleElement];
// }

// console.log(
//   meanMedian([30, 11, 49, 41, 29, 15, 12, 46, 27, 6, 21, 50, 45, 6, 22, 38, 5])
// );

class Sol {
  mean(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum / arr.length;
  }

  median(arr) {
    const sortedArr = arr.sort((a, b) => a - b);

    if (sortedArr.length % 2 === 1) {
      return sortedArr[Math.floor(sortedArr.length / 2)];
    } else {
      return Math.floor(
        (sortedArr[length / 2 - 1] + sortedArr[length / 2]) / 2
      );
    }
  }
}

const sol = new Sol();
console.log(
  sol.mean([30, 11, 49, 41, 29, 15, 12, 46, 27, 6, 21, 50, 45, 6, 22, 38, 5])
);
console.log(
  sol.median([30, 11, 49, 41, 29, 15, 12, 46, 27, 6, 21, 50, 45, 6, 22, 38, 5])
);

/*
 * Explanation
 * -----------
 * Approach: The active Sol class computes the mean by summing all elements and dividing by the count, and the median by sorting the array and picking the middle element(s). (A commented-out first attempt at the same problem exists above.)
 * How it works:
 * 1. mean(arr): loop through the array, accumulate the sum, then return sum / arr.length.
 * 2. median(arr): sort a copy of the array in ascending order.
 * 3. If the length is odd, return the middle element; if even, return the floor of the average of the two middle elements.
 * Example: mean([1, 2, 3]) -> 6 / 3 = 2; median([1, 2, 3]) -> sorted middle element = 2.
 * Time Complexity: O(n) for mean, O(n log n) for median (due to sorting).
 * Auxiliary Space: O(1) extra (sorting is done in place on a reference copy).
 */
