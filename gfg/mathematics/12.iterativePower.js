const binaryExponentiation = (x, y) => {
  let result = 1;

  while (y > 0) {
    if (y & 1) {
      result = result * x;
    }

    y = y >> 1;
    x = x * x;
  }

  return result;
};

console.log(binaryExponentiation(2, 3));
