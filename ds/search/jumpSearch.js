function jumpSearch(arr, target) {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));
  let prev = 0;
  while (arr[Math.min(step, n)-1] < target) { prev = step; if (prev >= n) return -1; }
  while (arr[prev] < target) { prev++; if (prev === Math.min(step, n)) return -1; }
  return arr[prev] === target ? prev : -1;
}
console.log(jumpSearch([0,1,2,3,4,5,6,7,8,9], 6));

const _v = 116;
