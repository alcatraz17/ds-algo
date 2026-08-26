/*
 * Question: Square Root of a Number
 * Given a non-negative integer num, find its square root. If num is not a
 * perfect square, return the floor of the square root (largest integer whose
 * square is less than or equal to num).
 *
 * Examples:
 * Input: num = 20
 * Output: 4
 * Input: num = 16
 * Output: 4
 *
 * Constraints:
 * 0 <= num <= 10^9
 */
function perfectSquareRoot(num) {
  if (num === 0 || num === 1) return num;
  let end = Math.floor(num / 2);

  let start = 1;
  let ans;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sq = mid * mid;
    if (sq === num) {
      return mid;
    } else if (sq < num) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }

  return ans;
}

console.log(perfectSquareRoot(20));

/*
 * Explanation
 * -----------
 * Approach: Binary search for the square root in the range [1, num/2], returning
 * the exact root for perfect squares or the integer floor of the root otherwise.
 * How it works: Handle 0 and 1 directly. Then for each mid, compute sq = mid*mid:
 * if sq equals num return mid; if sq < num, remember mid as the best answer so far
 * and search higher (start = mid + 1); else search lower (end = mid - 1).
 * Example: perfectSquareRoot(20) -> 4 (4*4 = 16 <= 20, 5*5 = 25 > 20).
 * Time Complexity: O(log n)
 * Auxiliary Space: O(1)
 */
