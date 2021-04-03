/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let ans = '';
    if (strs.length === 0) {
        return ans;
    }
    let firstStr = strs[0];
    for (let i = 0; i < firstStr.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== firstStr[i]) {
                return ans;
            }
        }
        ans += firstStr[i];
    }

    return ans;
};
// @lc code=end
