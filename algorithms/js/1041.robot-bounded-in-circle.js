/*
 * @lc app=leetcode id=1041 lang=javascript
 *
 * [1041] Robot Bounded In Circle
 */

// @lc code=start
/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
    let dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    let idx = 0;

    let x0 = 0;
    let y0 = 0;

    Array.from(instructions).forEach((instruction) => {
        if (instruction === 'R') {
            idx = (idx + 1) % 4;
        } else if (instruction === 'L') {
            idx = (idx + 3) % 4;
        } else {
            x0 += dirs[idx][0];
            y0 += dirs[idx][1];
        }
    });

    if ((x0 === 0 && y0 === 0) || idx !== 0) {
        return true;
    } else {
        return false;
    }
};
// @lc code=end
