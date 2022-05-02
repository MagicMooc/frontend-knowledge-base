## 🍪贪心算法



### [分发饼干](https://leetcode-cn.com/problems/assign-cookies/)

#### Solution

```js
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);
  console.log(g);
  console.log(s);
  let res = 0;
  let i = 0;
  let j = 0;
  while (i < g.length && j < s.length) {
    while (g[i] > s[j] && i < g.length) {
      i++;
    }
    if (i < g.length) {
      i++;
      j++;
      res++;
    }
  }
  return res;
};
```



### [摆动序列](https://leetcode-cn.com/problems/wiggle-subsequence/)

#### Solution

##### 贪心

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length <= 1) {
    return nums.length;
  }
  let curDiff = 0; // 当前对差值
  let preDiff = 0; // 前一对差值
  let res = 1; // 默认最右边有一个峰值
  for (let i = 0; i < nums.length - 1; i++) {
    curDiff = nums[i + 1] - nums[i];
    if ((curDiff < 0 && preDiff >= 0) || (curDiff > 0 && preDiff <= 0)) {
      res++;
      preDiff = curDiff;
    }
  }
  return res;
};
```



##### 动态规划

> - 设dp状态`dp[i][0]`，表示考虑前i个数，第i个数作为山峰的摆动子序列的最长长度
> - 设dp状态`dp[i][1]`，表示考虑前i个数，第i个数作为山谷的摆动子序列的最长长度
>
> 则转移方程为：
>
> - `dp[i][0] = max(dp[i][0], dp[j][1] + 1)`，其中`0 < j < i`且`nums[j] < nums[i]`，表示将nums[i]接到前面某个山谷后面，作为山峰。
> - `dp[i][1] = max(dp[i][1], dp[j][0] + 1)`，其中`0 < j < i`且`nums[j] > nums[i]`，表示将nums[i]接到前面某个山峰后面，作为山谷。
>
> 初始状态：
>
> 由于一个数可以接到前面的某个数后面，也可以以自身为子序列的起点，所以初始状态为：`dp[0][0] = dp[0][1] = 1`。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  let dp = new Array(1010);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(2);
    for (let j = 0; j < 2; j++) {
      dp[i][j] = 0;
    }
  }
  dp[0][0] = 1;
  dp[0][1] = 1;
  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = 1;
    dp[i][1] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[i]) {
        dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1);
      }
    }
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
      }
    }
  }
  return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1]);
};
```



### [最大子数组和](https://leetcode-cn.com/problems/maximum-subarray/)

#### Solution

##### 贪心

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    res = Math.max(sum, res);
    if (sum < 0) {
      sum = 0;
    }
  }
  return res;
};
```



##### 动态规划

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // dp[i]表示以nums[i]结尾的最大连续子序列和
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  let res = dp[0];
  for (let i = 1; i < nums.length; i++) {
    res = Math.max(res, dp[i]);
  }
  return res;
};
```



### [买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)

#### Solution

##### 贪心

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    res += Math.max(prices[i] - prices[i - 1], 0);
  }
  return res;
};

```

##### 动态规划

> ```cpp
>         // dp[i][1]第i天持有的最多现金
>         // dp[i][0]第i天持有股票后的最多现金
> ```

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length;
  let dp = new Array(n);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(2);
    for (let j = 0; j < 2; j++) {
      dp[i][j] = 0;
    }
  }
  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }
  return dp[n - 1][1];
};
```



### [跳跃游戏](https://leetcode-cn.com/problems/jump-game/)

<img src="/Users/zhanghao/Pictures/img/20201124154758229-20220502203913199.png" alt="55.跳跃游戏" style="zoom: 50%;" />

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) {
    return true;
  }
  let cover = nums[0];
  for (let i = 1; i <= cover; i++) {
    cover = Math.max(cover, i + nums[i]);
    if (cover >= nums.length - 1) {
      return true;
    }
  }
  return false;
};
```



### [跳跃游戏 II](https://leetcode-cn.com/problems/jump-game-ii/)

#### Solution

<img src="/Users/zhanghao/Pictures/img/20201201232309103-20220502203913189.png" alt="45.跳跃游戏II" style="zoom:50%;" />

##### 方法一

> 从图中可以看出来，就是移动下标达到了当前覆盖的最远距离下标时，步数就要加一，来增加覆盖距离。最后的步数就是最少步数。
>
> 这里还是有个特殊情况需要考虑，当移动下标达到了当前覆盖的最远距离下标时
>
> - 如果当前覆盖最远距离下标不是是集合终点，步数就加一，还需要继续走。
> - 如果当前覆盖最远距离下标就是是集合终点，步数不用加一，因为不能再往后走了。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) {
    return 0;
  }
  // 当前覆盖最远距离下标
  let curDistance = 0;
  // 下一步覆盖最远距离下标
  let nextDistance = 0;
  // 记录走的最大步数
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    // 更新下一步覆盖最远距离下标
    nextDistance = Math.max(i + nums[i], nextDistance);
    // 遇到当前覆盖最远距离下标
    if (i === curDistance) {
      // 如果当前覆盖最远距离下标不是终点
      if (curDistance !== nums.length - 1) {
        // 需要走下一步
        res++;
        // 更新当前覆盖最远距离下标（相当于加油了）
        curDistance = nextDistance;
        // 下一步的覆盖范围已经可以达到终点，结束循环
        if (nextDistance >= nums.length - 1) {
          break;
        }
      }
      // 当前覆盖最远距离下标是集合终点，不用做res++操作了，直接结束
      else {
        break;
      }
    }
  }
  return res;
};
```



##### 方法二

> **针对于方法一的特殊情况，可以统一处理**，即：移动下标只要遇到当前覆盖最远距离的下标，直接步数加一，不考虑是不是终点的情况。
>
> 由于必然可到达最后一个下标

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let curDistance = 0;
  let nextDistance = 0;
  let res = 0;
  // 注意这里是小于nums.size() - 1，这是关键所在
  for (let i = 0; i < nums.length - 1; i++) {
    nextDistance = Math.max(nextDistance, i + nums[i]);
    if (i === curDistance) {
      res++;
      curDistance = nextDistance;
    }
  }
  return res;
};
```



### [K 次取反后最大化的数组和](https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations/)

#### Solution

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  let count = 0;
  nums.forEach((item) => {
    if (item < 0) {
      count++;
    }
  });
  nums.sort((a, b) => a - b);

  if (k <= count) {
    for (let i = 0; i < k; i++) {
      nums[i] = -nums[i];
    }
  } else {
    for (let i = 0; i < count; i++) {
      nums[i] = -nums[i];
    }
    nums.sort((a, b) => a - b);
    let t = k - count;
    while (t--) {
      nums[0] = -nums[0];
    }
  }
  let res = nums.reduce((total, cur) => {
    return total + cur;
  }, 0);
  return res;
};
```



### [加油站](https://leetcode-cn.com/problems/gas-station/)

#### Solution

#####  贪心算法（方法一）

> 直接从全局进行贪心选择，情况如下：
>
> - 情况一：如果gas的总和小于cost总和，那么无论从哪里出发，一定是跑不了一圈的
> - 情况二：rest[i] = gas[i]-cost[i]为一天剩下的油，i从0开始计算累加到最后一站，如果累加没有出现负数，说明从0出发，油就没有断过，那么0就是起点。
> - 情况三：如果累加的最小值是负数，汽车就要从非0节点出发，从后向前，看哪个节点能这个负数填平，能把这个负数填平的节点就是出发节点。

```js
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let n = gas.length;
  let f = new Array(n);
  for (let i = 0; i < n; i++) {
    f[i] = gas[i] - cost[i];
  }
  let total = 0;
  let min = f[0];
  for (let i = 0; i < n; i++) {
    total += f[i];
    min = Math.min(min, total);
  }
  if (total < 0) {
    return -1;
  }
  if (min >= 0) {
    return 0;
  }
  for (let j = n - 1; j >= 0; j--) {
    min += f[j];
    if (min >= 0) {
      return j;
    }
  }
  return -1;
};
```





##### 贪心算法（方法二）

> 每个加油站的剩余量rest[i]为gas[i] - cost[i]。
>
> i从0开始累加rest[i]，和记为curSum，一旦curSum小于零，说明[0, i]区间都不能作为起始位置，起始位置从i+1算起，再从0计算curSum。
>
> 那么为什么一旦[i，j] 区间和为负数，起始位置就可以是j+1呢，j+1后面就不会出现更大的负数？
>
> 如果出现更大的负数，就是更新j，那么起始位置又变成新的j+1了。
>
> 而且j之前出现了多少负数，j后面就会出现多少正数，因为耗油总和是大于零的（前提我们已经确定了一定可以跑完全程）。
>
> **那么局部最优：当前累加rest[j]的和curSum一旦小于0，起始位置至少要是j+1，因为从j开始一定不行。全局最优：找到可以跑一圈的起始位置**。

```js
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let n = gas.length;
  let f = new Array(n);
  for (let i = 0; i < n; i++) {
    f[i] = gas[i] - cost[i];
  }
  let total = 0;
  let curSum = 0;
  let start = 0;
  for (let i = 0; i < n; i++) {
    total += f[i];
    curSum += f[i];
    if (curSum < 0) {
      curSum = 0;
      start = i + 1;
    }
  }
  if (total < 0) {
    return -1;
  }
  return start;
};
```



### [分发糖果](https://leetcode-cn.com/problems/candy/)

#### Solution

```js
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let n = ratings.length;
  let candy = new Array(n).fill(1);
  // 从前向后
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candy[i] = candy[i - 1] + 1;
    }
  }
  // 从后向前
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i + 1] < ratings[i]) {
      candy[i] = Math.max(candy[i + 1] + 1, candy[i]);
    }
  }
  // 统计结果
  let res = candy.reduce((total, cur) => {
    return total + cur;
  }, 0);
  return res;
};

```



### [柠檬水找零](https://leetcode-cn.com/problems/lemonade-change/)

#### Solution

> 有如下三种情况：
>
> - 情况一：账单是5，直接收下。
> - 情况二：账单是10，消耗一个5，增加一个10
> - 情况三：账单是20，优先消耗一个10和一个5，如果不够，再消耗三个5

```js
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let count1 = 0; // 5
  let count2 = 0; // 10
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      count1++;
    } else if (bills[i] === 10) {
      if (count1 > 0) {
        count1--;
        count2++;
      } else {
        return false;
      }
    } else {
      if (count1 > 0 && count2 > 0) {
        count1--;
        count2--;
      } else if (count1 > 2) {
        count1 -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
```



### [根据身高重建队列](https://leetcode-cn.com/problems/queue-reconstruction-by-height/)

#### Solution

<img src="/Users/zhanghao/Pictures/img/20201216201851982-20220502203913150.png" alt="406.根据身高重建队列" style="zoom:50%;" />

按照身高排序之后，优先按身高高的people的k来插入，后序插入节点也不会影响前面已经插入的节点，最终按照k的规则完成了队列。

```js
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let n = people.length;
  let res = new Array(n);
  people.sort((a, b) => {
    if (b[0] !== a[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  for (let i = 0; i < people.length; i++) {
    if (people[i][1] < i) {
      for (let k = i; k > people[i][1]; k--) {
        res[k] = [...res[k - 1]];
      }
      res[people[i][1]] = people[i].concat();
    } else {
      res[i] = people[i].concat();
    }
  }
  return res;
};
```

