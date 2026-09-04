/*
 * Question: Tail Recursion Demo
 * Demonstrate tail recursion: print numbers from n down to 1, and compute the factorial of n using a tail-recursive function with an accumulator.
 *
 * Examples:
 * Input: print(5), fact(5)
 * Output: 5 4 3 2 1, 120
 */

function print(n) {
  if (n == 0) return;
  console.log(n);

  print(n - 1);
}

print(5);

function fact(n, acc = 1) {
  if (n === 0) {
    return acc;
  }

  return fact(n - 1, acc * n);
}

console.log(fact(5));
