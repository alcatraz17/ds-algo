// Two friends, A and B, are playing the game of matchsticks. In this game, a group of N matchsticks is placed on the table. The players can pick any number of matchsticks from 1 to 4 (both inclusive) during their chance. The player who takes the last match stick wins the game. If A starts first, how many matchsticks should he pick on his 1st turn such that he is guaranteed to win the game or determine if it's impossible for him to win. Return -1 if it's impossible for A to win the game, else return the number of matchsticks should he pick on his 1st turn such that he is guaranteed to win.
// Note : Consider both A and B play the game optimally.

// Example 1:

// Input:
// N = 48
// Output:
// 3
// Explanation:
// Player A is guaranteed a win if he
// picks 3 matchsticks first.
// Example 2:

// Input:
// N = 15
// Output:
// -1
// Explanation:
// Player A is guaranteed a loss no matter
// how many matches he picks at first.

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
function matchsticks(n) {
  if (n % 5n === 0n) {
    return -1;
  }

  return n % 5n;
}

console.log(matchsticks(12n));
