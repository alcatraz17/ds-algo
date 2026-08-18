/*
 * Explanation
 * -----------
 * Approach: Reverse Exponentiation (GFG) — reverse the digits of num, then
 * return num raised to that reversed number.
 * How it works: The inner helper reverseNumber builds the reversed number
 * recursively: take the last digit (num % 10), append it to the running
 * reversed value (currentRev * 10 + lastDigit), and recurse on the rest until
 * num becomes 0. The outer function then returns Math.pow(num, reversedNumber).
 * Example: ReverseExponentiation(11) -> reversed is 11 -> 11^11 = 285311670611.
 * Time Complexity: O(d) where d is the number of digits, i.e. O(log10 n)
 * Auxiliary Space: O(d) (recursion call stack)
 */
function ReverseExponentiation(num) {
  function reverseNumber(num, currentRev = 0) {
    if (num === 0) return currentRev;

    const lastDigit = num % 10;
    const remainingNumber = Math.floor(num / 10);

    currentRev = currentRev * 10 + lastDigit;

    return reverseNumber(remainingNumber, currentRev);
  }

  const reversedNumber = reverseNumber(num);

  return Math.pow(num, reversedNumber);
}

console.log(ReverseExponentiation(11));
