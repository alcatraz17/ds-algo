function sumOfDigits(n) {
  if (n < 9) {
    return n;
  }

  let lastDigit = n % 10;
  let remaining = Math.floor(n / 10);

  return sumOfDigits(remaining) + lastDigit;
}

console.log(sumOfDigits(253));
