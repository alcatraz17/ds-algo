/*
 * Question: Digital Root
 * Given a positive integer num, find its digital root — the single digit
 * obtained by repeatedly summing the digits of the number until only one
 * digit remains.
 *
 * Examples:
 * Input: num = 9999
 * Output: 9
 * Explanation: 9+9+9+9 = 36, then 3+6 = 9.
 *
 * Constraints:
 * 1 <= num <= 10^7
 */
function digitalRoot(num) {
  if (num <= 9) return num;

  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }

  return digitalRoot(sum);
}

console.log(digitalRoot(9999));

/*
 * Explanation
 * -----------
 * Approach: Digital root — repeatedly replace the number by the sum of its
 * digits until only a single digit remains; the recursion applies "sum the
 * digits, then recurse on the result".
 * How it works: If num is a single digit (<= 9), return it (base case).
 * Otherwise, a while loop sums the digits of num by taking num % 10 and
 * dividing by 10, then the function calls itself on that sum.
 * Example: digitalRoot(9999) -> digit sum 36 -> digitalRoot(36) -> 9 -> returns 9.
 * Time Complexity: O(d) per digit-summing pass (d = number of digits); very few passes needed
 * Auxiliary Space: O(p) where p is the small number of recursive passes
 */
