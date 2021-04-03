/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
let memo;
var climbStairs = function (n) {
    memo = [];
    //    -
    //   -
    //  -
    // -
    // a[n] = a[n-1] + a[n-2];
    // a[1] = 1;
    // a[2] = 2;
    return recursiveWithMemo(n);
};

const recursiveWithMemo = (n) => {
    if (memo[n]) {
        return memo[n];
    }

    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }

    memo[n] = recursiveWithMemo(n - 1) + recursiveWithMemo(n - 2);

    return memo[n];
};
// @lc code=end
