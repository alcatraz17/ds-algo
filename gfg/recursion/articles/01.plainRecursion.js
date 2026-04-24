// class Test {
//   recursion(num) {
//     if (num < 1) {
//       return num;
//     }

//     console.log(num);
//     return this.recursion(num - 1);
//   }
// }

// const rec = new Test();

// console.log(rec.recursion(5));

function recur(num) {
  if (num < 1) {
    return 0;
  }

  console.log(num);
  return recur(num - 1);
}

console.log(recur(5));
