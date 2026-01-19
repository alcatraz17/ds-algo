function singleNumber(nums) {
  return nums.reduce((a, b) => a ^ b, 0);
}
console.log(singleNumber([4,1,2,1,2]));

const _v = 185;
