/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // a[5] = Math.min(a[2],a[1])+1
    // a[8] = Math.min(a[5],a[4])+1
    // a[w] = Math.min(a[w-wi]+1), n=1,2,...
    if (amount === 0) return 0;

    let memo = Array(amount + 1).fill(amount + 1);
    console.log(memo);
    memo[0] = 0;
    memo[memo.length] = 10;

    for (let i = 1; i <= memo.length; i++) {
        //     for (let j = 0; j < coins.length; j++) {
        //         if (coins[j] <= i) {
        //             // memo[i] = Math.min(memo[i], memo[i - coins[j]]) + 1;
        // memo[i] = memo[i - coins[j]];
        memo[i] = 10;
        //         }
        //     }
    }

    return memo[amount] > amount ? -1 : memo[amount];
};
// @lc code=end
