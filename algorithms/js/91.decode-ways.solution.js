/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
let memo = [];
var numDecodings = function (s) {
    // 0으로 시작하면 끝남

    // 만약에 앞 두글자가 26보다 크면 무조건 쪼개야함

    // 만약에 앞 두글자가 26보다 작으면 두가지로 분기를 탈 수 있음

    // 반복적으로 로직을 수행하므로 재귀 가능

    memo = [];
    return recursiveWithMemo(s, 0);
};

const recursiveWithMemo = (s, i) => {
    if (memo[i]) {
        return memo[i];
    }

    if (s[i] === '0') {
        return 0;
    }

    if (i === s.length - 1 || i === s.length) {
        return 1;
    }

    // xxx1623
    // 1) xxx1 623
    let ans = recursiveWithMemo(s, i + 1);
    // xxx1623
    // 2) xxx16 23
    if (Number(s.slice(i, i + 2)) <= 26) {
        ans += recursiveWithMemo(s, i + 2);
    }

    memo[i] = ans;

    return memo[i];
};
// @lc code=end
