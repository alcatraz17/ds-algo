function sumTail(n, acc = 0) {
  if (n == 0) {
    return acc;
  }

  return sumTail(n - 1, n + acc);
}

console.log(sumTail(5));

function sumRec(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumRec(n - 1);
}

console.log(sumRec(5));
