/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // minus value
  if (x < 0) {
    let s = String(x).split("").slice(1).reverse().join("");
    if (-1 * Number(s) < -1 * Math.pow(2, 31)) {
      return 0;
    }
    return -1 * Number(s);
  } else if (x > 0) {
    let s = String(x).split("").reverse().join("");
    if (Number(s) > Math.pow(2, 31) - 1) {
      return 0;
    }
    return Number(s);
  }
  return 0;
};
// @lc code=end
