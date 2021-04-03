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
    // 제일 높은 코인으로 다 채울때 못채우는 경우..
    // 3 4, 9
    // a[i][w] = Math.min(a[i-1][w-wi*n]+n), n=1,2,...,

    // a[2][9] = Math.min(a[1][9]+0,a[1][5]+1,a[1][1]+2)
    // a[1][9] = Math.min(a[0][9],a[1][6])
    coins.sort((a, b) => a - b);

    if (amount === 0) return 0;

    let m = coins.length;

    let memo = Array.from(Array(m + 1), () => Array(amount + 1).fill(-1));

    for (let i = 1; i <= m; i++) {
        for (let j = 0; j <= amount; j++) {
            if (j === 0) {
                memo[i][j] = 0;
            }
            if (i === 1) {
                if (j % coins[i - 1] === 0) {
                    memo[i][j] = Math.floor(j / coins[i - 1]);
                } else {
                    memo[i][j] = -1;
                }
            } else {
                let temp = memo[i][j];
                memo[i][j] = Infinity;
                let cnt = 0;
                while (j - coins[i - 1] * cnt >= 0) {
                    // console.log('---');
                    // console.log(j - coins[i - 1] * cnt);
                    // if (j - coins[i - 1] * cnt === 0) {
                    //     memo[i - 1][j - coins[i - 1] * cnt] = 0;
                    // }
                    // ex. 2 5 10 1
                    if (memo[i - 1][j - coins[i - 1] * cnt] === -1) {
                        // console.log('AA');
                        cnt++;
                        continue;
                    }
                    // console.log(`i: ${i}`);
                    // console.log(`j: ${j}`);
                    // console.log(`coin: ${coins[i - 1]}`);
                    // console.log(`cnt: ${cnt}`);
                    // console.log(memo[i - 1][j - coins[i - 1] * cnt]);
                    memo[i][j] = Math.min(
                        memo[i][j],
                        memo[i - 1][j - coins[i - 1] * cnt] + cnt
                    );
                    cnt++;
                }
                // console.log('--');
                // console.log(cnt);
                // console.log(coins[i - 1]);
                // console.log(j - coins[i - 1] * cnt);
                if (memo[i][j] === Infinity) {
                    memo[i][j] = temp;
                }
            }
        }
        // console.log(memo);
    }

    if (memo[m][amount] === 0) return -1;

    return memo[m][amount];

    // knapsack 0/1
    // a[i][w] = max(a[i-1][k],a[i-1][w-wi]+vi)
};
// @lc code=end
