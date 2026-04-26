function lcm(a, b) {
  const gcdValue = (function gcd(d, f) {
    if (f === 0) {
      return d;
    }

    return gcd(f, d % f);
  })(a, b);

  return (a * b) / gcdValue;
}

console.log(lcm(5, 11));
