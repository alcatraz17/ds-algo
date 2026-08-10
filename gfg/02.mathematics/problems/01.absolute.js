/*
 * Explanation
 * -----------
 * Approach: Return the absolute value by checking the sign of the number.
 * How it works: If n is negative, multiply it by -1 to flip it positive;
 *   otherwise return n unchanged (it is already zero or positive).
 * Example: absolute(-10) -> -10 < 0, so returns -10 * -1 = 10; absolute(10) -> 10.
 * Time Complexity: O(1)
 * Auxiliary Space: O(1)
 */
class Sol {
  absolute(n) {
    if (n < 0) {
      return n * -1;
    }

    return n;
  }
}
const sol = new Sol();
console.log(sol.absolute(10));
