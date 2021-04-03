/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = 0;
    let j = 0;

    while (!(i === m + n && j === n)) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else {
            nums1.splice(i, 0, nums2[j]);
            i++;
            j++;
        }
    }
    nums1.splice(m + n, n);
};
// @lc code=end
