/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let currSubMax = nums[0];
  let max = nums[0];

  // -2 1 3 4 -1 -2 -10 4
  // -2 1 4 7  6  4 -6  4

  for (let i = 1; i < nums.length; i++) {
    currSubMax = Math.max(nums[i], nums[i] + currSubMax);
    max = Math.max(max, currSubMax);
  }

  // java
  // int n = nums.length, maxSum = nums[0];
  //   for(int i = 1; i < n; ++i) {
  //     if (nums[i - 1] > 0) nums[i] += nums[i - 1];
  //     maxSum = Math.max(nums[i], maxSum);
  //   }
  //   return maxSum;

  return max;
};
// @lc code=end
