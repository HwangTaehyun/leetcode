/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    nums.sort((a, b) => {
        return a - b;
    });

    // -3 -1 0 1 2
    let cnt = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) {
            continue;
        }

        if (nums[i] === nums[i + 1]) {
            continue;
        }

        if (nums[i] === cnt) {
            cnt++;
        } else {
            break;
        }
    }

    return cnt;
};
// @lc code=end
