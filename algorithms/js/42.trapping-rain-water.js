/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // 0 1 0 2 1 0 1 3 2
    // 현재 높이보다 높은 크거나 높이의 턱을 찾는 경우
    // (j-i-1)*heigh[i]-sum(height[i+1,...,j-1])

    // 못찾으면 다음 elevation으로 넘어감

    let ans = 0;
    let i = 0;

    search: while (i < height.length) {
        // console.log(i);
        if (height[i] === 0) {
            i++;
            continue;
        }

        let max = 0;
        let maxLoc = -1;
        for (let j = i + 1; j < height.length; j++) {
            if (height[j] >= height[i]) {
                max = height[j];
                maxLoc = j;
                break;
            } else {
                if (height[j] > max) {
                    max = height[j];
                    maxLoc = j;
                }
            }
        }
        // console.log(`maxLoc: ${maxLoc}`);

        if (maxLoc !== -1) {
            ans += (maxLoc - i - 1) * Math.min(max, height[i]);
            for (let k = i + 1; k < maxLoc; k++) {
                ans -= height[k];
            }
            // console.log(`ans: ${ans}`);
            i = maxLoc;
            continue;
        }
        i++;
    }

    return ans;
};
// @lc code=end
