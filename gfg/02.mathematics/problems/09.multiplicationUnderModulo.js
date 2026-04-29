class Solution {
  multiplicationModulo(a, b, c) {
    return (a * b) % c;
  }
}

const solution = new Solution();
const multiplicationModulo = console.log(
  solution.multiplicationModulo(5, 8, 7)
);
