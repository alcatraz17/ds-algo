const checkPrime = (function isPrimeNumber(num) {
  if (num < 2) {
    return false;
  }

  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i < num; i += 6) {
    if (n % i === 0 || (n % i) + 2 === 0) {
      return false;
    }
  }

  return true;
})(13);

console.log(checkPrime);
