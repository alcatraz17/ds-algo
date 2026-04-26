class result {
  gp(a, b, n) {
    const ratio = b / a;
    return a * Math.pow(ratio, n - 1);
  }
}
