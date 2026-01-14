const factorial = (num) => {
  let factorial = 1;
  while (num > 0) {
    factorial = num * factorial;
    num--;
  }

  return factorial;
};

console.log(factorial(5));
