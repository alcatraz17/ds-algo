/*
 * Explanation
 * -----------
 * Approach: Check primality by trial division only up to the square root of num,
 *   stepping by 6 (the classic 6k +/- 1 optimization idea, though the checks here
 *   are written as num % i and (num % i) + 2).
 * How it works:
 *   1. Numbers below 2 are not prime; 2 and 3 are prime.
 *   2. Loop i from 1 while i*i <= num, incrementing i by 6 each time.
 *   3. If num % i === 0 (or (num % i) + 2 === 0), declare it not prime.
 *   4. If the loop finishes with no divisor found, return true.
 * Example: isPrime(2) -> handled early, returns true; isPrime(9) -> loop finds a divisor, returns false.
 * Time Complexity: O(sqrt(n))
 * Auxiliary Space: O(1)
 */
class Mathematics {
  isPrime(num) {
    if (num < 2) {
      return false;
    }

    if (num == 2 || num === 3) {
      return true;
    }

    for (let i = 1; i * i <= num; i += 6) {
      if (num % i === 0) {
        return false;
      }

      if ((num % i) + 2 === 0) {
        return false;
      }
    }

    return true;
  }
}

const mathematics = new Mathematics();
const isPrime = console.log(mathematics.isPrime(2));
