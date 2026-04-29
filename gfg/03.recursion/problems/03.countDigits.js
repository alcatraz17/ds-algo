function countDigits(n) {
  if (n >= 0 && n <= 9) {
    return 1;
  }

  const digitsLeft = Math.floor(n / 10);

  return 1 + countDigits(digitsLeft);
}

console.log(countDigits(19999));
