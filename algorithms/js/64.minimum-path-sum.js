/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length - 1;
    let n = grid[0].length - 1;

    for (let i = m; i >= 0; --i) {
        for (let j = n; j >= 0; --j) {
            if (i === m && j === n) {
                continue;
            }
            if (i === m) {
                grid[i][j] += grid[i][j + 1];
            } else if (j === n) {
                grid[i][j] += grid[i + 1][j];
            } else {
                grid[i][j] += Math.min(grid[i + 1][j], grid[i][j + 1]);
            }
        }
    }

    return grid[0][0];
};
// @lc code=end
