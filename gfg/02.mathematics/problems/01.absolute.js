class Sol {
  absolute(n) {
    if (n < 0) {
      return n * -1;
    }

    return n;
  }
}
const sol = new Sol();
console.log(sol.absolute(10));
