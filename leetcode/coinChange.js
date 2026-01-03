function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (const coin of coins)
    for (let i = coin; i <= amount; i++)
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
  return dp[amount] === Infinity ? -1 : dp[amount];
}
console.log(coinChange([1, 5, 11], 15));

const _v = 139;
