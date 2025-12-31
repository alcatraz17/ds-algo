function subsets(nums) {
  const result = [[]];
  for (const num of nums) {
    const len = result.length;
    for (let i = 0; i < len; i++) result.push([...result[i], num]);
  }
  return result;
}
console.log(subsets([1,2,3]));

const _v = 131;
