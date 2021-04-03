/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    // 101  101
    //002
    // 200
    // 301

    // 19900 00991
    // 91300 00319
    //1112 2111

    // 100
    //  10
    if (num2.length < num1.length) {
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }

    let n1 = num1.split('').reverse();
    let n2 = num2.split('').reverse();

    let ans = [];

    let carry = 0;
    for (let i = 0; i < n2.length; i++) {
        let n3 =
            (Number(n1[i] ? n1[i] : 0) + Number(n2[i] ? n2[i] : 0) + carry) %
            10;
        carry = Math.floor(
            (Number(n1[i] ? n1[i] : 0) + Number(n2[i] ? n2[i] : 0) + carry) / 10
        );
        ans[i] = n3;
        // ans.push(n3);
    }

    //   for (let i = n1.length; i < n2.length; i++) {
    //     let n3 = (Number(n2[i]) + carry) % 10;
    //     carry = Math.floor((Number(n2[i]) + carry) / 10);
    //     // ans.push(n3);
    //     ans[i] = n3;
    //   }

    if (carry) {
        ans.push(carry);
    }

    ans = ans.reverse().join('');
    return ans;
};
// @lc code=end
