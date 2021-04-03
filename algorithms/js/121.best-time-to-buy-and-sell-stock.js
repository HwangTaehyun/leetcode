/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = 10000;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    // 최소값 갱신
    minPrice = Math.min(minPrice, prices[i]);
    // maxProfit 갱신
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
};
// @lc code=end
