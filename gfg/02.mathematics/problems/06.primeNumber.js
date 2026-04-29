class Mathematics {
  isPrime(num) {
    if (num < 2) {
      return false;
    }

    if (num == 2 || num === 3) {
      return true;
    }

    for (let i = 1; i * i <= num; i += 6) {
      if (num % i === 0) {
        return false;
      }

      if ((num % i) + 2 === 0) {
        return false;
      }
    }

    return true;
  }
}

const mathematics = new Mathematics();
const isPrime = console.log(mathematics.isPrime(2));
