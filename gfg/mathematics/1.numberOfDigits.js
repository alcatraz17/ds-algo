const numberOfDigits = (num) => {
  let digits = 0;
  while (num > 0) {
    num = Math.floor(num / 10);

    digits++;
  }

  return digits;
};

console.log(numberOfDigits(1234));
