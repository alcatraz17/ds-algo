/*
 * Question: Least Common Multiple (LCM)
 * Write a function that finds the least common multiple of two numbers
 * using their greatest common divisor.
 *
 * Examples:
 * Input: 5, 11
 * Output: 55
 */
function lcm(a, b) {
  const gcdValue = (function gcd(d, f) {
    if (f === 0) {
      return d;
    }

    return gcd(f, d % f);
  })(a, b);

  return (a * b) / gcdValue;
}

console.log(lcm(5, 11));
