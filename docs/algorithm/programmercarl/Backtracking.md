## 🍥回溯算法



### [组合](https://leetcode-cn.com/problems/combinations/)

#### Solution

<img src="/Users/zhanghao/Pictures/img/20201123195242899-1494987.png" alt="77.组合1" style="zoom: 50%;" />

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  let path = [];
  const backtracking = function (n, k, startIndex) {
    if (path.length === k) {
      res.push(path.concat());
      return;
    }
    for (let i = startIndex; i <= n; i++) {
      path.push(i);
      backtracking(n, k, i + 1);
      path.pop();
    }
  };
  backtracking(n, k, 1);
  return res;
};

```



##### 剪枝优化

> **可以剪枝的地方就在递归中每一层的for循环所选择的起始位置**。
>
> **如果for循环选择的起始位置之后的元素个数 已经不足 我们需要的元素个数了，那么就没有必要搜索了**。

<img src="/Users/zhanghao/Pictures/img/20210130194335207-1494987.png" alt="77.组合4" style="zoom:50%;" />

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  let path = [];
  const backtracking = function (n, k, startIndex) {
    if (path.length === k) {
      res.push(path.concat());
      return;
    }
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backtracking(n, k, i + 1);
      path.pop();
    }
  };
  backtracking(n, k, 1);
  return res;
};
```



### [组合总和 III](https://leetcode-cn.com/problems/combination-sum-iii/)

#### Solution

```js
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let acc = 0;
  let path = [];
  let res = [];
  const backtracking = function (k, n, startIndex) {
    if (acc > n) {
      return;
    }
    if (path.length === k) {
      if (acc === n) {
        res.push(path.concat());
      }
      return;
    }

    for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
      acc += i;
      path.push(i);
      backtracking(k, n, i + 1);
      path.pop();
      acc -= i;
    }
  };
  backtracking(k, n, 1);
  return res;
};
```





### [电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)

#### Solution

```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }
  let res = [];
  let path = [];
  const map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const backtracking = function (num) {
    if (path.length === digits.length) {
      res.push(path.concat().join(""));
      return;
    }
    for (let i = 1; i <= map[num-2].length; i++) {
      path.push(map[num-2].charAt(i-1));
      backtracking(digits[path.length]);
      path.pop();
    }
  };
  backtracking(digits[0]);
  return res;
};
console.log(letterCombinations("23"));

```





### [组合总和](https://leetcode-cn.com/problems/combination-sum/)

#### Solution

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let acc = 0;
  let index = 0;
  let res = [];
  let path = [];
  const backtracking = function (index) {
    if (acc > target) {
      return;
    }
    if (acc === target) {
      res.push(path.concat());
      return;
    }
    for (let i = 0; i <= Math.floor(target / candidates[index]); i++) {
      acc += candidates[index] * i;
      for (let k = 1; k <= i; k++) {
        path.push(candidates[index]);
      }
      backtracking(index + 1);
      for (let k = 1; k <= i; k++) {
        path.pop();
      }
      acc -= candidates[index] * i;
    }
  };
  backtracking(0);
  return res;
};
```





### [组合总和 II](https://leetcode-cn.com/problems/combination-sum-ii/)

#### Solution

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  let path = [];
  let acc = 0;
  let count = new Map();
  let arr = [...new Set(candidates)];
  for (let i = 0; i < candidates.length; i++) {
    if (count.get(candidates[i])) {
      count.set(candidates[i], count.get(candidates[i]) + 1);
    } else {
      count.set(candidates[i], 1);
    }
  }
  const backtracking = function (index) {
    if (acc > target) {
      return;
    }
    if (acc === target) {
      res.push(path.concat());
      return;
    }
    for (let i = 0; i <= count.get(arr[index]); i++) {
      acc += arr[index] * i;
      for (let k = 1; k <= i; k++) {
        path.push(arr[index]);
      }
      backtracking(index + 1);
      for (let k = 1; k <= i; k++) {
        path.pop();
      }
      acc -= arr[index] * i;
    }
  };
  backtracking(0);
  return res;
};

```





### [分割回文串](https://leetcode-cn.com/problems/palindrome-partitioning/)

#### Solution

```js
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];
  let path = [];
  const judge = function (s, l, r) {
    while (l < r) {
      if (s[l] !== s[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  };
  const backtracking = function (startIndex, endIndex) {
    if (startIndex > endIndex) {
      res.push(path.concat());
      return;
    }
    for (let i = startIndex; i <= endIndex; i++) {
      if (judge(s, startIndex, i)) {
        path.push(s.slice(startIndex, i + 1));
        backtracking(i + 1, endIndex);
        path.pop();
      }
    }
  };
  backtracking(0, s.length - 1);
  return res;
};
```





### [复原 IP 地址](https://leetcode-cn.com/problems/restore-ip-addresses/)

#### Solution

```js
/**
 *
 * 输入：s = "25525511135"
 * 输出：["255.255.11.135","255.255.111.35"]
 *
 * 输入：s = "101023"
 * 输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 *
 * 输入：s = "0000"
 * 输出：["0.0.0.0"]
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let path = [];
  let res = [];
  const backtracking = function (startIndex, endIndex) {
    if (startIndex > endIndex && path.length === 4) {
      res.push(path.concat().join("."));
      return;
    }
    if (
      endIndex - startIndex + 1 > (4 - path.length) * 3 ||
      endIndex - startIndex + 1 < 4 - path.length
    ) {
      return;
    }
    if (s.charAt(startIndex) === "0") {
      path.push(s.charAt(startIndex));
      backtracking(startIndex + 1, endIndex);
      path.pop();
    } else {
      for (let i = startIndex; i <= endIndex; i++) {
        if (Number.parseInt(s.slice(startIndex, i + 1)) <= 255) {
          path.push(s.slice(startIndex, i + 1));
          backtracking(i + 1, endIndex);
          path.pop();
        }
      }
    }
  };
  backtracking(0, s.length - 1);
  return res;
};
```



### [子集](https://leetcode-cn.com/problems/subsets/)

#### Solution

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];
  let path = [];
  const backtracking = function (k, startIndex) {
    if (path.length === k) {
      res.push(path.concat());
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(k, i + 1);
      path.pop();
    }
  };
  for (let t = 0; t <= nums.length; t++) {
    path.length = 0;
    backtracking(t, 0);
  }
  return res;
};
```



### [子集 II](https://leetcode-cn.com/problems/subsets-ii/)

#### Solution

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [];
  let path = [];
  let count = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (count.get(nums[i])) {
      count.set(nums[i], count.get(nums[i]) + 1);
    } else {
      count.set(nums[i], 1);
    }
  }
  let arr = [...new Set(nums)];

  const backtracking = function (k, index) {
    
    if (path.length === k) {
      res.push(path.concat());
      return;
    }
    if (index >= arr.length) {
      return;
    }
    for (let i = 0; i <= count.get(arr[index]); i++) {
      for (let k = 1; k <= i; k++) {
        path.push(arr[index]);
      }
      backtracking(k, index + 1);
      for (let k = 1; k <= i; k++) {
        path.pop();
      }
    }
  };
  for (let t = 0; t <= nums.length; t++) {
    path.length = 0;
    backtracking(t, 0);
  }
  return res;
};
```



### [递增子序列](https://leetcode-cn.com/problems/increasing-subsequences/)

#### Solution

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let res = [];
  let path = [];
  let pre = Number.MIN_SAFE_INTEGER;
  const backtracking = function (k, startIndex) {
    if (path.length === k) {
      res.push(path.concat());
      return;
    }
    if (startIndex >= nums.length) {
      return;
    }
    // 使用set对本层元素进行去重
    let uset = new Set();
    for (let i = startIndex; i < nums.length; i++) {
      if (path.length === 0) {
        pre = Number.MIN_SAFE_INTEGER;
      }
      if (nums[i] >= pre && !uset.has(nums[i])) {
        let tmp = pre;
        pre = nums[i];
        // 记录这个元素在本层用过了，本层后面不能再用了
        uset.add(nums[i]);
        path.push(nums[i]);
        backtracking(k, i + 1);
        path.pop();
        pre = tmp;
      }
    }
  };
  for (let t = 2; t <= nums.length; t++) {
    pre = Number.MIN_SAFE_INTEGER;
    backtracking(t, 0);
  }
  return res;
};
```



##### 优化

> 数值范围[-100,100]，所以完全可以用数组来做哈希

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let res = [];
  let path = [];
  let pre = Number.MIN_SAFE_INTEGER;
  const backtracking = function (k, startIndex) {
    if (path.length === k) {
      res.push(path.concat());
      return;
    }
    if (startIndex >= nums.length) {
      return;
    }
    // 这里使用数组来进行去重操作，题目说数值范围[-100, 100]
    let uset = new Array(201).fill(0);
    for (let i = startIndex; i < nums.length; i++) {
      if (path.length === 0) {
        pre = Number.MIN_SAFE_INTEGER;
      }
      if (nums[i] >= pre && !uset[nums[i] + 100]) {
        let tmp = pre;
        pre = nums[i];
        // 记录这个元素在本层用过了，本层后面不能再用了
        uset[nums[i] + 100] = 1;
        path.push(nums[i]);
        backtracking(k, i + 1);
        path.pop();
        pre = tmp;
      }
    }
  };
  for (let t = 2; t <= nums.length; t++) {
    pre = Number.MIN_SAFE_INTEGER;
    backtracking(t, 0);
  }
  return res;
};
```





### [全排列](https://leetcode-cn.com/problems/permutations/)

#### Solution

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let path = [];
  let uset = new Set();
  const backtracking = function () {
    if (path.length === nums.length) {
      res.push(path.concat());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!uset.has(nums[i])) {
        uset.add(nums[i]);
        path.push(nums[i]);
        backtracking();
        path.pop();
        uset.delete(nums[i]);
      }
    }
  };
  backtracking();
  return res;
};
```



### [全排列 II](https://leetcode-cn.com/problems/permutations-ii/)

#### Solution

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];
  let path = [];
  let umap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (umap.get(nums[i])) {
      umap.set(nums[i], umap.get(nums[i]) + 1);
    } else {
      umap.set(nums[i], 1);
    }
  }
  const backtracking = function () {
    if (path.length === nums.length) {
      res.push(path.concat());
      return;
    }
    // 使用set对本层元素进行去重
    let uset = new Set();
    for (let i = 0; i < nums.length; i++) {
      if (umap.get(nums[i]) > 0 && !uset.has(nums[i])) {
        uset.add(nums[i]);
        umap.set(nums[i], umap.get(nums[i]) - 1);
        path.push(nums[i]);
        backtracking();
        path.pop();
        umap.set(nums[i], umap.get(nums[i]) + 1);
      }
    }
  };
  backtracking();
  return res;
};
```





### [重新安排行程](https://leetcode-cn.com/problems/reconstruct-itinerary/)

#### Solution

```js
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  // 先将字符串转化为对应数字
  let uset = new Set();
  for (let item of tickets) {
    uset.add(item[0]);
    uset.add(item[1]);
  }
  let arr = [...uset];
  arr.sort();
  let umap = new Map();
  for (let i = 0; i < arr.length; i++) {
    umap.set(arr[i], i);
  }
  for (let i = 0; i < tickets.length; i++) {
    tickets[i][0] = umap.get(tickets[i][0]);
    tickets[i][1] = umap.get(tickets[i][1]);
  }
  // 构建邻接矩阵
  let graph = new Array();
  for (let i = 0; i < arr.length; i++) {
    graph[i] = new Array();
    for (let j = 0; j < arr.length; j++) {
      graph[i][j] = 0;
    }
  }
  for (let i = 0; i < tickets.length; i++) {
    graph[tickets[i][0]][tickets[i][1]]++;
  }
  // console.log(graph);
  let res = [];
  let path = [];
  path.push("JFK");
  const backtracking = function (index) {
    if (path.length === tickets.length + 1) {
      res.push(path.concat());
      return true;
    }

    for (let i = 0; i < arr.length; i++) {
      if (graph[index][i] >= 1) {
        graph[index][i]--;
        path.push(arr[i]);
        if (backtracking(i)) {
          return true;
        }
        path.pop();
        graph[index][i]++;
      }
    }
    return false;
  };
  backtracking(umap.get("JFK"));
  return res[0];
};
```



### [N 皇后](https://leetcode-cn.com/problems/n-queens/)

#### Solution

```js
/**
 * 输入：n = 4
 * 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * 解释：如上图所示，4 皇后问题存在两个不同的解法。
 * */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let row = new Array(n).fill(false);
  let col = new Array(n).fill(false);
  let dg = new Array(n * 2).fill(false);
  let bdg = new Array(n * 2).fill(false);
  let tmp = new Array(n);
  let board = new Array(n);
  let res = [];
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      board[i][j] = ".";
    }
  }
  // s表示已经放上去的皇后个数
  const backtracking = function (x, y, s) {
    if (s > n) {
      return;
    }
    // 处理超出边界的情况
    if (y === n) {
      y = 0;
      x++;
    }
    // x==n说明已经枚举完n^2个位置了
    if (x === n) {
      // s==n说明成功放上去了n个皇后
      if (s === n) {
        for (let i = 0; i < n; i++) {
          tmp[i] = board[i].join("");
        }
        res.push(tmp.concat());
      }
      return;
    }
    // 分支1：放皇后
    if (!row[x] && !col[y] && !dg[x - y + n] && !bdg[x + y]) {
      board[x][y] = "Q";
      row[x] = col[y] = dg[x - y + n] = bdg[x + y] = true;
      backtracking(x, y + 1, s + 1);
      row[x] = col[y] = dg[x - y + n] = bdg[x + y] = false;
      board[x][y] = ".";
    }
    // 分支2：不放皇后
    backtracking(x, y + 1, s);
  };
  backtracking(0, 0, 0);
  return res;
};
```



### [解数独](https://leetcode-cn.com/problems/sudoku-solver/)

#### Solution

```js
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let flag = new Array(9);
  for (let i = 0; i < 9; i++) {
    flag[i] = new Array(9);
    for (let j = 0; j < 9; j++) {
      flag[i][j] = false;
    }
  }
  let row = new Array(9);
  for (let i = 0; i < 9; i++) {
    row[i] = new Array(9);
    for (let j = 0; j < 9; j++) {
      row[i][j] = false;
    }
  }
  let col = new Array(9);
  for (let i = 0; i < 9; i++) {
    col[i] = new Array(9);
    for (let j = 0; j < 9; j++) {
      col[i][j] = false;
    }
  }

  let count = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!isNaN(board[i][j])) {
        let num = Number.parseInt(board[i][j]) - 1;
        flag[Math.floor(i / 3) * 3 + Math.floor(j / 3)][num] = true;
        row[i][num] = true;
        col[j][num] = true;
      } else {
        count++;
      }
    }
  }
  const backtracking = function (x, y, s) {
    if (s === count) {
      return true;
    }

    if (y === 9) {
      y = 0;
      x++;
    }
    if (board[x][y] === ".") {
      for (let i = 0; i < 9; i++) {
        if (
          !flag[Math.floor(x / 3) * 3 + Math.floor(y / 3)][i] &&
          !row[x][i] &&
          !col[y][i]
        ) {
          board[x][y] = (i + 1).toString();
          flag[Math.floor(x / 3) * 3 + Math.floor(y / 3)][i] = true;
          row[x][i] = true;
          col[y][i] = true;
          if (backtracking(x, y + 1, s + 1)) {
            return true;
          }
          col[y][i] = false;
          row[x][i] = false;
          flag[Math.floor(x / 3) * 3 + Math.floor(y / 3)][i] = 0;
          board[x][y] = ".";
        }
      }
    } else {
      if (backtracking(x, y + 1, s)) {
        return true;
      }
    }
    return false;
  };
  backtracking(0, 0, 0);
  return board;
};

```

