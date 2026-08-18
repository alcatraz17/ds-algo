/*
 * Explanation
 * -----------
 * Approach: Classic recursive Fibonacci — fibo(n) = fibo(n - 1) + fibo(n - 2),
 * with the first two Fibonacci numbers as base cases.
 * How it works: If n <= 0, return 0. If n is 1 or 2, return 1 (base cases).
 * Otherwise return the sum of the two previous Fibonacci numbers computed
 * recursively. Note: this recomputes the same values many times (no memoization).
 * Example: fibo(5) -> fibo(4) + fibo(3) -> 3 + 2 -> 5.
 * Time Complexity: O(2^n) (exponential, because calls repeat work)
 * Auxiliary Space: O(n) (maximum recursion depth)
 */
function fibo(n) {
  if (n <= 0) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(5));
