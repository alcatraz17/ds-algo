function print(n) {
  if (n == 0) return;
  console.log(n);

  print(n - 1);
}

print(5);

function fact(n, acc = 1) {
  if (n === 0) {
    return acc;
  }

  return fact(n - 1, acc * n);
}

console.log(fact(5));
