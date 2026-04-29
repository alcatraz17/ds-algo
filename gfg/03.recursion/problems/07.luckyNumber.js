// 1,2,3,4,5,6,7,8,9,10

function luckyNum(n, counter = 2) {
  if (n < counter) {
    return true;
  }

  if (n % counter === 0) {
    return false;
  }

  n = n - Math.floor(n / counter);
  counter++;

  return luckyNum(n, counter);
}

console.log(luckyNum(19));
