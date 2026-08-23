/*
 * Question: Matchsticks Game
 * Two friends, A and B, are playing the game of matchsticks. A group of N matchsticks is placed on the table, and the players can pick 1 to 4 matchsticks (both inclusive) per turn; the player who takes the last matchstick wins.
 * If A starts first and both play optimally, return how many matchsticks A should pick on his 1st turn to be guaranteed a win, or -1 if it is impossible for A to win.
 *
 * Examples:
 * Input: N = 48
 * Output: 3
 * Input: N = 15
 * Output: -1
 *
 * Constraints:
 * 1 ≤ N ≤ 10^18
 */
function matchsticks(n) {
  if (n % 5n === 0n) {
    return -1;
  }

  return n % 5n;
}

console.log(matchsticks(12n));

/*
 * Explanation
 * -----------
 * Approach: This is a Nim-style game where the losing positions are multiples of 5 — after A picks 1-4 sticks, B can always pick enough to make the round total 5.
 * How it works:
 * 1. If N % 5 === 0, whatever A picks, B can respond so the pile drops by 5 each round; A loses, so return -1.
 * 2. Otherwise, A picks N % 5 sticks, leaving a multiple of 5 for B — a guaranteed losing position for B.
 * 3. BigInt (n-suffixed) arithmetic is used to support very large values of N.
 * Example: matchsticks(48n) -> 48 % 5 = 3, returns 3; matchsticks(15n) -> 15 % 5 = 0, returns -1.
 * Time Complexity: O(1)
 * Auxiliary Space: O(1)
 */
