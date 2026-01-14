const isPalindrome = (num) => {
  let number = num;
  let reverse = 0;

  while (number > 0) {
    let mod = number % 10;

    reverse = reverse * 10 + mod;

    number = Math.floor(number / 10);
  }

  return reverse === num;
};

console.log(isPalindrome(1213));
