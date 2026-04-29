function digitalRoot(num) {
  if (num <= 9) return num;

  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }

  return digitalRoot(sum);
}

console.log(digitalRoot(9999));
