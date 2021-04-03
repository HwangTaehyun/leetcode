/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    if (k === 1) {
        return nums;
    }
    let ans = [];
    // 0 1 2 3
    let max = -Infinity;
    for (let j = 0; j < k; j++) {
        max = Math.max(nums[j], max);
    }
    ans[0] = max;
    for (let i = k; i <= nums.length - 1; i++) {
        // 나가면?
        let max = -Infinity;
        if (nums[i - k] === ans[i - k]) {
            for (let j = i - k + 1; j < i + 1; j++) {
                max = Math.max(nums[j], max);
            }
        } else {
            // 만약에 최댓값이 슬라이딩 밖으로 안나가면
            max = Math.max(ans[i - k], nums[i]);
        }
        ans[i - k + 1] = max;
    }
    return ans;
};
// @lc code=end
