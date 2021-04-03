/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((interval1, interval2) => {
        return interval1[0] - interval2[0];
    });

    let newIntervals = [];

    for (let i = 0; i < intervals.length; i++) {
        // push
        if (
            newIntervals.length === 0 ||
            intervals[i][0] > newIntervals[newIntervals.length - 1][1]
        ) {
            newIntervals.push(intervals[i].slice());
        } else {
            newIntervals[newIntervals.length - 1][1] = Math.max(
                newIntervals[newIntervals.length - 1][1],
                intervals[i][1]
            );
        }
    }

    return newIntervals;
};
// @lc code=end
