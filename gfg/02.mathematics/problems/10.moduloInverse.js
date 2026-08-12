/*
 * Question: Modular Multiplicative Inverse
 * Given two integers n and m, find the modular multiplicative inverse of n
 * under modulo m, i.e. a number x such that (n * x) % m == 1. If no such
 * inverse exists, return -1.
 *
 * Examples:
 * Input: n = 10, m = 17
 * Output: 12
 * (Because (10 * 12) % 17 = 1)
 *
 * Constraints:
 * 1 <= n, m <= 10^5
 */
class Solution {
  modInverse(n, m) {
    // code here
    let a = n,
      b = m;
    let x0 = 1,
      x1 = 0;
    while (b > 0) {
      let q = Math.floor(a / b);
      [a, b] = [b, a % b];
      [x0, x1] = [x1, x0 - q * x1];
    }

    if (a !== 1) return -1;
    return ((x0 % m) + m) % m;
  }
}

const m = new Solution();
const modInv = console.log(m.modInverse(10, 17));

/*
 * Explanation
 * -----------
 * Approach: Find the modular inverse of n under modulo m (a number x such that
 *   (n * x) % m === 1) using the Extended Euclidean Algorithm.
 * How it works:
 *   1. Run Euclid's GCD loop on (n, m) while tracking the Bezout coefficients x0, x1.
 *   2. Each step computes quotient q and updates remainders and coefficients.
 *   3. If the final gcd is not 1, no inverse exists -> return -1.
 *   4. Otherwise x0 is the inverse; normalize it into [0, m-1] with ((x0 % m) + m) % m.
 * Example: modInverse(10, 17) -> inverse is 12 because (10 * 12) % 17 = 120 % 17 = 1.
 * Time Complexity: O(log(min(n, m)))
 * Auxiliary Space: O(1)
 */
