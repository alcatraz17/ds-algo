function sieveOfEratosthenes(n) {
  const arr = new Array(n).fill(true);
  let results = [];

  // for (let i = 0; i < n; i++) {
  //   arr[i] = true;
  // }

  arr[0] = false;
  arr[1] = false;

  for (let p = 2; p * p < n; p++) {
    if (arr[p]) {
      for (let j = p * p; j <= n; j += p) {
        arr[j] = false;
      }
    }
  }

  for (let k = 0; k < n; k++) {
    if (arr[k]) {
      results.push(k);
    }
  }

  return results;
}

console.log(sieveOfEratosthenes(10));
