function modExp(base, exp, mod) {
  let result = 1;
  base %= mod;
  while (exp > 0) {
    if (exp % 2 === 1) result = (result * base) % mod;
    exp = Math.floor(exp / 2);
    base = (base * base) % mod;
  }
  return result;
}
console.log(modExp(2, 5, 13));

const _v = 372;
