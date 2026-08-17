/*
 * Question: Lucky Numbers
 * Start with the list of natural numbers 1, 2, 3, ... In round 2 delete every
 * 2nd number, in round 3 delete every 3rd remaining number, and so on. A
 * number that survives all such rounds is "lucky". Given n, return true if n
 * is a lucky number, otherwise false.
 *
 * Examples:
 * Input: n = 19
 * Output: true
 * Input: n = 6
 * Output: false
 *
 * Constraints:
 * 1 <= n <= 10^5
 */
// 1,2,3,4,5,6,7,8,9,10
function luckyNum(n, counter = 2) {
  if (n < counter) {
    return true;
  }

  if (n % counter === 0) {
    return false;
  }

  n = n - Math.floor(n / counter);
  counter++;

  return luckyNum(n, counter);
}

console.log(luckyNum(19));

/*
 * Explanation
 * -----------
 * Approach: Lucky Number (GFG) — simulate the lucky-number sieve with recursion:
 * at each step check whether the position n survives deletion by the current
 * counter (starting at 2).
 * How it works: If n < counter, n survived every round, so return true (base
 * case). If n % counter === 0, n gets deleted this round, so return false.
 * Otherwise n survives but shifts to its new position n - floor(n / counter);
 * increment counter and recurse.
 * Example: luckyNum(19) -> 19 survives counters 2, 3, 4 -> new position 13 survives counter 5 -> returns true.
 * Time Complexity: O(√n) rounds in the worst case
 * Auxiliary Space: O(√n) (recursion call stack)
 */
