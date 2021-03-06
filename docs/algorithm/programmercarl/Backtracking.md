## ð¥åæº¯ç®æ³



### [ç»å](https://leetcode-cn.com/problems/combinations/)

#### Solution

<img src="/Users/zhanghao/Pictures/img/20201123195242899-1494987.png" alt="77.ç»å1" style="zoom: 50%;" />

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



##### åªæä¼å

> **å¯ä»¥åªæçå°æ¹å°±å¨éå½ä¸­æ¯ä¸å±çforå¾ªç¯æéæ©çèµ·å§ä½ç½®**ã
>
> **å¦æforå¾ªç¯éæ©çèµ·å§ä½ç½®ä¹åçåç´ ä¸ªæ° å·²ç»ä¸è¶³ æä»¬éè¦çåç´ ä¸ªæ°äºï¼é£ä¹å°±æ²¡æå¿è¦æç´¢äº**ã

<img src="/Users/zhanghao/Pictures/img/20210130194335207-1494987.png" alt="77.ç»å4" style="zoom:50%;" />

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



### [ç»åæ»å III](https://leetcode-cn.com/problems/combination-sum-iii/)

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





### [çµè¯å·ç çå­æ¯ç»å](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)

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





### [ç»åæ»å](https://leetcode-cn.com/problems/combination-sum/)

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





### [ç»åæ»å II](https://leetcode-cn.com/problems/combination-sum-ii/)

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





### [åå²åæä¸²](https://leetcode-cn.com/problems/palindrome-partitioning/)

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





### [å¤å IP å°å](https://leetcode-cn.com/problems/restore-ip-addresses/)

#### Solution

```js
/**
 *
 * è¾å¥ï¼s = "25525511135"
 * è¾åºï¼["255.255.11.135","255.255.111.35"]
 *
 * è¾å¥ï¼s = "101023"
 * è¾åºï¼["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 *
 * è¾å¥ï¼s = "0000"
 * è¾åºï¼["0.0.0.0"]
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



### [å­é](https://leetcode-cn.com/problems/subsets/)

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



### [å­é II](https://leetcode-cn.com/problems/subsets-ii/)

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



### [éå¢å­åºå](https://leetcode-cn.com/problems/increasing-subsequences/)

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
    // ä½¿ç¨setå¯¹æ¬å±åç´ è¿è¡å»é
    let uset = new Set();
    for (let i = startIndex; i < nums.length; i++) {
      if (path.length === 0) {
        pre = Number.MIN_SAFE_INTEGER;
      }
      if (nums[i] >= pre && !uset.has(nums[i])) {
        let tmp = pre;
        pre = nums[i];
        // è®°å½è¿ä¸ªåç´ å¨æ¬å±ç¨è¿äºï¼æ¬å±åé¢ä¸è½åç¨äº
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



##### ä¼å

> æ°å¼èå´[-100,100]ï¼æä»¥å®å¨å¯ä»¥ç¨æ°ç»æ¥ååå¸

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
    // è¿éä½¿ç¨æ°ç»æ¥è¿è¡å»éæä½ï¼é¢ç®è¯´æ°å¼èå´[-100, 100]
    let uset = new Array(201).fill(0);
    for (let i = startIndex; i < nums.length; i++) {
      if (path.length === 0) {
        pre = Number.MIN_SAFE_INTEGER;
      }
      if (nums[i] >= pre && !uset[nums[i] + 100]) {
        let tmp = pre;
        pre = nums[i];
        // è®°å½è¿ä¸ªåç´ å¨æ¬å±ç¨è¿äºï¼æ¬å±åé¢ä¸è½åç¨äº
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





### [å¨æå](https://leetcode-cn.com/problems/permutations/)

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



### [å¨æå II](https://leetcode-cn.com/problems/permutations-ii/)

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
    // ä½¿ç¨setå¯¹æ¬å±åç´ è¿è¡å»é
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





### [éæ°å®æè¡ç¨](https://leetcode-cn.com/problems/reconstruct-itinerary/)

#### Solution

```js
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  // åå°å­ç¬¦ä¸²è½¬åä¸ºå¯¹åºæ°å­
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
  // æå»ºé»æ¥ç©éµ
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



### [N çå](https://leetcode-cn.com/problems/n-queens/)

#### Solution

```js
/**
 * è¾å¥ï¼n = 4
 * è¾åºï¼[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * è§£éï¼å¦ä¸å¾æç¤ºï¼4 çåé®é¢å­å¨ä¸¤ä¸ªä¸åçè§£æ³ã
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
  // sè¡¨ç¤ºå·²ç»æ¾ä¸å»ççåä¸ªæ°
  const backtracking = function (x, y, s) {
    if (s > n) {
      return;
    }
    // å¤çè¶åºè¾¹ççæåµ
    if (y === n) {
      y = 0;
      x++;
    }
    // x==nè¯´æå·²ç»æä¸¾å®n^2ä¸ªä½ç½®äº
    if (x === n) {
      // s==nè¯´ææåæ¾ä¸å»äºnä¸ªçå
      if (s === n) {
        for (let i = 0; i < n; i++) {
          tmp[i] = board[i].join("");
        }
        res.push(tmp.concat());
      }
      return;
    }
    // åæ¯1ï¼æ¾çå
    if (!row[x] && !col[y] && !dg[x - y + n] && !bdg[x + y]) {
      board[x][y] = "Q";
      row[x] = col[y] = dg[x - y + n] = bdg[x + y] = true;
      backtracking(x, y + 1, s + 1);
      row[x] = col[y] = dg[x - y + n] = bdg[x + y] = false;
      board[x][y] = ".";
    }
    // åæ¯2ï¼ä¸æ¾çå
    backtracking(x, y + 1, s);
  };
  backtracking(0, 0, 0);
  return res;
};
```



### [è§£æ°ç¬](https://leetcode-cn.com/problems/sudoku-solver/)

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

