/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
let globalCnt;

var maximalSquare = function (matrix) {
    globalCnt = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            checkRecursive(i, j, matrix, 0);
        }
    }

    return Math.pow(globalCnt, 2);
};

const checkRecursive = (i, j, matrix, step = 0) => {
    for (let ki = i; ki <= i + step; ki++) {
        if (!isValid(ki, j + step, matrix) || matrix[ki][j + step] === '0') {
            return;
        }
    }

    for (let kj = j; kj <= j + step; kj++) {
        if (!isValid(i + step, kj, matrix) || matrix[i + step][kj] === '0') {
            return;
        }
    }

    globalCnt = Math.max(step + 1, globalCnt);
    checkRecursive(i, j, matrix, step + 1);
};

const isValid = (i, j, matrix) => {
    if (i >= matrix.length || j >= matrix[0].length) {
        return false;
    }
    return true;
};
// @lc code=end
