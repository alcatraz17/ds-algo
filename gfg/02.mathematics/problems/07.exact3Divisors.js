/*
 * Question: Exactly 3 Divisors
 * Given a positive integer n, count how many numbers less than or equal to n
 * have exactly 3 divisors.
 *
 * Examples:
 * Input: n = 6
 * Output: 1
 * (Only 4 has exactly 3 divisors: 1, 2, 4)
 *
 * Constraints:
 * 1 <= n <= 10^9
 */
class M {
  exact3D(n) {
    let limit = Math.floor(Math.sqrt(n));
    let arr = new Array(limit + 1).fill(true);

    arr[0] = arr[1] = false;

    for (let i = 2; i * i <= limit; i++) {
      if (arr[i]) {
        for (let j = i * i; j <= limit; j = j + i) {
          arr[j] = false;
        }
      }
    }

    let count = 0;

    for (let k = 2; k <= limit; k++) {
      if (arr[k]) {
        count++;
        console.log(k * k);
      }
    }

    return count;
  }
}

const m = new M();

const pN = m.exact3D(121);
console.log(`${pN} numbers have exactly 3 divisors`);

/*
 * Explanation
 * -----------
 * Approach: A number has exactly 3 divisors only if it is the square of a prime
 *   (divisors: 1, p, p^2). So count primes up to sqrt(n) using the Sieve of Eratosthenes.
 * How it works:
 *   1. Build a boolean sieve for numbers 0..floor(sqrt(n)).
 *   2. Cross out multiples of each prime starting from 2 (standard sieve).
 *   3. Count remaining primes; each prime k contributes k*k as a number with exactly 3 divisors.
 * Example: exact3D(121) -> primes up to 11 are 2,3,5,7,11 -> squares 4,9,25,49,121 -> returns 5.
 * Time Complexity: O(sqrt(n) * log log sqrt(n)) sieve, effectively O(sqrt(n))
 * Auxiliary Space: O(sqrt(n))
 */
