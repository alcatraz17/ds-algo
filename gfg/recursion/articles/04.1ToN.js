function oneToN(n) {
  if (n > 0) {
    oneToN(n - 1);
    console.log(n);
  }

  return;
}

oneToN(5);
