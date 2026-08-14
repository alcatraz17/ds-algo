/*
 * Explanation
 * -----------
 * Approach: Print 1 to N using recursion — recurse down to the base case first,
 * then print while the call stack unwinds so numbers come out in increasing order.
 * How it works: If n is 0, stop (base case). Otherwise call oneToN(n - 1) first;
 * only after that inner call finishes, print n. This means 1 is printed deepest
 * in the stack, and N is printed last as calls return.
 * Example: oneToN(5) -> prints 1 2 3 4 5 (each on its own line).
 * Time Complexity: O(n)
 * Auxiliary Space: O(n) (recursion call stack)
 */
function oneToN(n) {
  if (n === 0) {
    return;
  }

  oneToN(n - 1);
  console.log(n);
}

oneToN(5);
