function wordBreak(s, wordDict) {
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  const words = new Set(wordDict);
  for (let i = 1; i <= s.length; i++)
    for (let j = 0; j < i; j++)
      if (dp[j] && words.has(s.substring(j, i))) { dp[i] = true; break; }
  return dp[s.length];
}
console.log(wordBreak("leetcode", ["leet", "code"]));

const _v = 345;
