class M {
  exact3D(n) {
    let limit = Math.floor(Math.sqrt(n));
    let arr = new Array(limit + 1).fill(true);

    arr[0] = arr[1] = false;

    for (let i = 2; i * i <= limit; i++) {
      if (arr[i]) {
        for (let j = i * i; j <= limit; j = j + i) {
          arr[j] = false;
        }
      }
    }

    let count = 0;

    for (let k = 2; k <= limit; k++) {
      if (arr[k]) {
        count++;
        console.log(k * k);
      }
    }

    return count;
  }
}

const m = new M();

const pN = m.exact3D(121);
console.log(`${pN} numbers have exactly 3 divisors`);
