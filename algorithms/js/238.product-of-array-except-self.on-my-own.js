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
var productExceptSelf = function (nums) {
    let zeroLocs = [];
    let totalProduct = nums.reduce((acc, curr, i) => {
        if (curr === 0) {
            zeroLocs.push(i);
        }
        return acc * curr;
    }, 1);

    if (zeroLocs.length === 0) {
        let ans = nums.map((num) => totalProduct / num);
        return ans;
    } else if (zeroLocs.length === 1) {
        nums.splice(zeroLocs[0], 1);
        let totalProductExceptOneZero = nums.reduce((acc, curr, i) => {
            return acc * curr;
        }, 1);
        let ans = Array(nums.length + 1).fill(0);
        ans[zeroLocs[0]] = totalProductExceptOneZero;
        return ans;
    } else {
        return Array(nums.length).fill(0);
    }
};
// @lc code=end
