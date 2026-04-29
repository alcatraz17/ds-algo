function nToOne(n) {
  if (n === 1) {
    return 1;
  }

  console.log(n);
  return nToOne(n - 1);
}

console.log(nToOne(5));
