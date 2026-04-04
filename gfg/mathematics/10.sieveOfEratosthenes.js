const sieveOfEratosthenes = (num) => {
  let arr = new Array(num + 1).fill(true);

  let results = [];

  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i * i <= num; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= num; j += i) {
        arr[j] = false;
      }
    }
  }

  for (let k = 0; k <= num; k++) {
    if (arr[k]) {
      results.push(k);
    }
  }

  return results;
};

console.log(sieveOfEratosthenes(11));
