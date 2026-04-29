function sumOfDigits(n) {
  if (n === 0) return 0;

  return (n % 10) + sod(Math.floor(n / 10));
}

console.log(sod(110));
