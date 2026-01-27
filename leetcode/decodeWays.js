function numDecodings(s) {
  if (s[0] === "0") return 0;
  const dp = Array(s.length + 1).fill(0);
  dp[0] = 1; dp[1] = 1;
  for (let i = 2; i <= s.length; i++) {
    if (s[i-1] !== "0") dp[i] += dp[i-1];
    const two = parseInt(s.substring(i-2, i));
    if (two >= 10 && two <= 26) dp[i] += dp[i-2];
  }
  return dp[s.length];
}
console.log(numDecodings("226"));

const _v = 203;
