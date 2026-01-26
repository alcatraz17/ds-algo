function power(x, y) {
  if (y === 0) return 1;

  let temp = power(x, Math.floor(y / 2));

  if (y % 2 === 0) return temp * temp;
  else return x * temp * temp;
}

console.log(power(2, 3));
