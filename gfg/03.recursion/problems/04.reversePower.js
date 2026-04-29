function ReverseExponentiation(num) {
  function reverseNumber(num, currentRev = 0) {
    if (num === 0) return currentRev;

    const lastDigit = num % 10;
    const remainingNumber = Math.floor(num / 10);

    currentRev = currentRev * 10 + lastDigit;

    return reverseNumber(remainingNumber, currentRev);
  }

  const reversedNumber = reverseNumber(num);

  return Math.pow(num, reversedNumber);
}

console.log(ReverseExponentiation(11));
