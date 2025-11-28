function countingSort(arr) {
  const max = Math.max(...arr);
  const count = Array(max + 1).fill(0);
  for (const num of arr) count[num]++;
  const result = [];
  for (let i = 0; i < count.length; i++)
    while (count[i]-- > 0) result.push(i);
  return result;
}
console.log(countingSort([4, 2, 8, 3, 2, 1, 5]));

const _v = 41;
