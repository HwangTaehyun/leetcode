/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */
// @lc code=start

const dirs = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let answer = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (check(i, j, grid)) {
        backtrack(i, j, grid);
        answer++;
      }
    }
  }
  return answer;
};

/*
[1,1,1,1]
[1,0,0,1]
*/

const backtrack = (i, j, grid) => {
  // mark vistedIsland
  grid[i][j] = "x";

  // base condition
  // 탈출 조건 따로 없음. 아래 루프 실패가 base condition

  // search
  dirs.forEach((dir) => {
    // 가능하면..
    let iN = i + dir[0];
    let jN = j + dir[1];
    if (check(iN, jN, grid)) {
      backtrack(iN, jN, grid);
    }
  });
};

const check = (i, j, grid) => {
  //   console.log(`check in [${i}, ${j}] is called`);
  // 여기서 로그 찍으면 터진다.. grid[i]가 undefined여서 [j] 접근시 에러
  //   console.log(grid[i][j]);
  //   console.log(visitedIsland[i][j]);
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] === "0" ||
    grid[i][j] === "x"
  ) {
    return false;
  } else {
    return true;
  }
};
// @lc code=end
