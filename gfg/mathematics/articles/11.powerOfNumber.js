const computePower = (x, y) => {
  if (y === 0) return 1;

  let temp = computePower(x, Math.floor(y / 2));

  if (y % 2 === 0) {
    return temp * temp;
  }

  return x * temp * temp;
};

console.log(computePower(2, 7));
