class Solution {
  modInverse(n, m) {
    // code here
    let a = n,
      b = m;
    let x0 = 1,
      x1 = 0;
    while (b > 0) {
      let q = Math.floor(a / b);
      [a, b] = [b, a % b];
      [x0, x1] = [x1, x0 - q * x1];
    }

    if (a !== 1) return -1;
    return ((x0 % m) + m) % m;
  }
}

const m = new Solution();
const modInv = console.log(m.modInverse(10, 17));
