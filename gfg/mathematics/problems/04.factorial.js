class Mathematics {
  getFactorial(n) {
    if (n < 0) {
      return 'Please enter a whole number';
    }

    let fact = 1;

    for (let i = n; i >= 2; i--) {
      fact = fact * i;
    }

    return fact;
  }
}

const mathematics = new Mathematics();

const factorial = mathematics.getFactorial(0);
console.log(factorial);
