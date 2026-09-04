/*
 * Question: Plain Recursion Demo
 * Demonstrate a simple recursive function that prints numbers from n down to 1 and then returns 0 once the base case (num < 1) is reached.
 *
 * Examples:
 * Input: recur(5)
 * Output: 5 4 3 2 1 0
 */

// class Test {
//   recursion(num) {
//     if (num < 1) {
//       return num;
//     }

//     console.log(num);
//     return this.recursion(num - 1);
//   }
// }

// const rec = new Test();

// console.log(rec.recursion(5));

function recur(num) {
  if (num < 1) {
    return 0;
  }

  console.log(num);
  return recur(num - 1);
}

console.log(recur(5));
