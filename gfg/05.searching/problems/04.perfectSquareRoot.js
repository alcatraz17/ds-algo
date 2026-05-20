function perfectSquareRoot(num) {
  if (num === 0 || num === 1) return num;
  let end = Math.floor(num / 2);

  let start = 1;
  let ans;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sq = mid * mid;
    if (sq === num) {
      return mid;
    } else if (sq < num) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }

  return ans;
}

console.log(perfectSquareRoot(20));
