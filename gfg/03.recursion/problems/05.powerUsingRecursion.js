/*
 * Explanation
 * -----------
 * Approach: Compute a^n with simple linear recursion — multiply a by itself
 * n times, one multiplication per recursive call.
 * How it works: pow is a method of a `mathematics` class. If n is 0, return 1;
 * if n is 1, return a (base cases). Otherwise return a * pow(a, n - 1),
 * peeling off one factor per call until a base case is hit.
 * Example: pow(2, 3) -> 2 * pow(2, 2) -> 2 * 2 * pow(2, 1) -> 2 * 2 * 2 = 8.
 * Time Complexity: O(n)
 * Auxiliary Space: O(n) (recursion call stack)
 */
class mathematics {
  pow(a, n) {
    if (n === 0) {
      return 1;
    } else if (n === 1) {
      return a;
    }

    return a * this.pow(a, n - 1);
  }
}

const mth = new mathematics();
const power = mth.pow(2, 3);
console.log(power);
