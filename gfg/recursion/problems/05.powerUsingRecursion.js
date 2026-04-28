class mathematics {
  pow(a, n) {
    if (n === 0) {
      return 1;
    } else if (n === 1) {
      return a;
    }

    return a * this.pow(a, n - 1);
  }
}

const mth = new mathematics();
const power = mth.pow(2, 3);
console.log(power);
