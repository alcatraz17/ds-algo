/*
 * Explanation
 * -----------
 * Approach: Count the digits of a number recursively by chopping off one digit
 * per call and adding 1 for each chop.
 * How it works: If n is a single digit (0–9), return 1 (base case). Otherwise
 * strip the last digit with Math.floor(n / 10) and return 1 + the count of the
 * remaining digits, computed recursively.
 * Example: countDigits(19999) -> 1 + count(1999) -> ... -> 1+1+1+1+1 = 5.
 * Time Complexity: O(d) where d is the number of digits, i.e. O(log10 n)
 * Auxiliary Space: O(d) (recursion call stack)
 */
function countDigits(n) {
  if (n >= 0 && n <= 9) {
    return 1;
  }

  const digitsLeft = Math.floor(n / 10);

  return 1 + countDigits(digitsLeft);
}

console.log(countDigits(19999));
