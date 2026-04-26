function digitsOfAFactorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;

  let digits = 0;
  for (let i = 2; i <= num; i++) {
    digits += Math.log10(i);
  }

  return Math.floor(digits) + 1;
}

console.log(digitsOfAFactorial(4));
