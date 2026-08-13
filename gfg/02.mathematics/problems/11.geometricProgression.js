/*
 * Question: Nth Term of GP
 * Given the first term a, the second term b, and an integer n of a geometric
 * progression, find the n-th term of the GP.
 *
 * Examples:
 * Input: a = 2, b = 6, n = 3
 * Output: 18
 * (GP: 2, 6, 18, ...)
 *
 * Constraints:
 * 1 <= a, b <= 10^5
 * 1 <= n <= 10
 */
class result {
  gp(a, b, n) {
    const ratio = b / a;
    return a * Math.pow(ratio, n - 1);
  }
}

/*
 * Explanation
 * -----------
 * Approach: Find the n-th term of a geometric progression (GP) using the closed-form
 *   formula: nth term = first term * (common ratio)^(n-1).
 * How it works:
 *   1. Compute the common ratio from the first two terms: ratio = b / a.
 *   2. Return a * ratio^(n - 1) using Math.pow.
 * Example: gp(2, 6, 3) -> ratio = 3, so 2 * 3^2 = 18 (GP: 2, 6, 18).
 * Time Complexity: O(log n) — Math.pow uses exponentiation by squaring internally
 * Auxiliary Space: O(1)
 */
