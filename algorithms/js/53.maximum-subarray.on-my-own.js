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
    // [1,2,-1,3,4]
    // [1,3, 2,5,9]

    // [1,2,-1,-4,3,4]
    // [1,3,2,-2,3,7]
    // k[n] = Max(k[n-1],k[n-1]+a[n])

    // [-1,3,4,-6,10]
    // [-1,3,7,+1,11]

    // [-1,-2]
    // [-1,-1]
    /*
    if (nums.length === 1) {
        return nums[0];
    }
    let ans = nums[0];

    let memo = nums.slice();
    for (let i = 1; i < nums.length; i++) {
        memo[i] = Math.max(memo[i - 1] + nums[i], nums[i]);
        ans = Math.max(memo[i], ans);
    }
    */

    if (nums.length === 1) {
        return nums[0];
    }

    let ans = nums[0];
    let currSubMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currSubMax = Math.max(currSubMax + nums[i], nums[i]);
        ans = Math.max(ans, currSubMax);
    }

    return ans;
};
// @lc code=end
