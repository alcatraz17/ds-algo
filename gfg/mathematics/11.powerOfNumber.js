// function power(x, y) {
//   if (y === 0) return 1;

//   let temp = power(x, Math.floor(y / 2));

//   if (y % 2 === 0) return temp * temp;
//   else return x * temp * temp;
// }

// console.log(power(2, 3));

function pow(a, b) {
  if (b === 0) return 1;

  let temp = pow(a, Math.floor(b / 2));

  if (b % 2 === 0) {
    return temp * temp;
  }

  return a * temp * temp;
}

console.log(pow(2, 3));
