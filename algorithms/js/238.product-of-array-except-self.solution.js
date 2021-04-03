/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let leftProduct = Array(nums.length).fill(1);
    let rightProduct = Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            leftProduct[i] = 1;
        } else {
            leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
        }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            rightProduct[i] = 1;
        } else {
            rightProduct[i] = rightProduct[i + 1] * nums[i + 1];
        }
    }

    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        ans[i] = leftProduct[i] * rightProduct[i];
    }
    return ans;
};
// @lc code=end
