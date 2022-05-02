## 🥛栈和队列



### [用栈实现队列](https://leetcode-cn.com/problems/implement-queue-using-stacks/)

#### Solution

> 在push数据的时候，只要数据放进输入栈就好，**但在pop的时候，操作就复杂一些，输出栈如果为空，就把进栈数据全部导入进来（注意是全部导入）**，再从出栈弹出数据，如果输出栈不为空，则直接从出栈弹出数据就可以了。
>
> 最后如何判断队列为空呢？**如果进栈和出栈都为空的话，说明模拟的队列为空了。**

```js
var MyQueue = function () {
  this._stack = [];
  this._helper = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this._stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.empty()) {
    if (this._helper.length === 0) {
      while (this._stack.length !== 0) {
        this._helper.push(this._stack.pop());
      }  
    }
    return this._helper.pop();
  } else {
    return null;
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.empty()) {
    if (this._helper.length >= 1) {
      return this._helper[this._helper.length - 1];
    } else {
      while (this._stack.length !== 0) {
        this._helper.push(this._stack.pop());
      }
      return this._helper[this._helper.length - 1];
    }
  } else {
    return null;
  }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this._stack.length === 0 && this._helper.length === 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

```



### [用队列实现栈](https://leetcode-cn.com/problems/implement-stack-using-queues/)

#### Solution

> **一个队列在模拟栈弹出元素的时候只要将队列头部的元素（除了最后一个元素外） 重新添加到队列尾部，此时在去弹出元素就是栈的顺序了。**

```js
var MyStack = function () {
  this._queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this._queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (!this.empty()) {
    let k = this._queue.length - 1;
    while (k--) {
      this._queue.push(this._queue.shift());
    }
    let res = this._queue.shift();
    return res;
  } else {
    return null;
  }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (!this.empty()) {
    let item = this.pop();
    this._queue.push(item);
    return item;
  } else {
    return null;
  }
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  if (this._queue.length >= 1) {
    return false;
  } else {
    return true;
  }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

```



### [有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

#### Solution

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let sArr = s.split("");
  if (sArr.length % 2) {
    return false;
  }
  let _stack = [];
  for (let item of sArr) {
    if (item === "(" || item === "{" || item === "[") {
      _stack.push(item);
    } else {
      if (item === ")") {
        if (_stack.pop() !== "(") {
          return false;
        }
      } else if (item === "}") {
        if (_stack.pop() !== "{") {
          return false;
        }
      } else if (item === "]") {
        if (_stack.pop() !== "[") {
          return false;
        }
      }
    }
  }
  if (_stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

```



### [删除字符串中的所有相邻重复项](https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/)

#### Solution

```js
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let sArr = s.split("");
  let res = [];
  if (sArr.length <= 1) {
    return s;
  }
  res.push(sArr[0]);
  for (let i = 1; i < sArr.length; i++) {
    if (res[res.length - 1] === sArr[i]) {
      res.pop();
    } else {
      res.push(sArr[i]);
    }
  }

  return res.join("");
};

```



### [逆波兰表达式求值](https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/)

#### Solution

```js
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let _stack = [];
  for (let item of tokens) {
    if (item === "+" || item === "-" || item === "*" || item === "/") {
      let second = _stack.pop();
      let first = _stack.pop();
      let evalT = eval("(" + first + ")" + item + "(" + second + ")");
      let tmp = evalT >= 0 ? Math.floor(evalT) : Math.ceil(evalT);
      _stack.push(tmp);
    } else {
      _stack.push(Number.parseInt(item, 10));
    }
  }
  return _stack[0];
};

```



### [滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/)

#### Solution

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let q = new Array(nums.length);
  let res = [];
  let hh = 0,
    tt = -1;
  for (let i = 0; i < nums.length; i++) {
    // 维持滑动窗口的大小
    //当队列不为空(hh <= tt) 且 当当前滑动窗口的大小(i - q[hh] + 1)>我们设定的
    //滑动窗口的大小(k),队列弹出队列头元素以维持滑动窗口的大小
    if (hh <= tt && i - q[hh] + 1 > k) {
      hh++;
    }
    //构造单调递减队列
    //当队列不为空(hh <= tt) 且 当队列队尾元素<=当前元素(nums[i])时,那么队尾元素
    //就一定不是当前窗口最大值,删去队尾元素,加入当前元素(q[ ++ tt] = i)
    while (hh <= tt && nums[q[tt]] <= nums[i]) {
      tt--;
    }
    q[++tt] = i;
    if (i >= k - 1) {
      res.push(nums[q[hh]]);
    }
  }
  return res;
};

```



### [ 前 K 个高频元素](https://leetcode-cn.com/problems/top-k-frequent-elements/)

#### Solution

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const swap = function (nums, i, j) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};

const down = function (nums, u, cnt) {
  let t = u;
  if (u * 2 + 1 <= cnt - 1 && nums[u * 2 + 1] > nums[t]) {
    t = u * 2 + 1;
  }
  if (u * 2 + 2 <= cnt - 1 && nums[u * 2 + 2] > nums[t]) {
    t = u * 2 + 2;
  }
  if (u !== t) {
    swap(nums, u, t);
    down(nums, t, cnt);
  }
};

var heapSort = function (nums, k) {
  let res = [];
  let cnt = nums.length;
  for (let i = Math.floor(cnt / 2) - 1; i >= 0; i--) {
    down(nums, i, cnt);
  }
  while (k--) {
    res.push(nums[0]);
    nums[0] = nums[cnt - 1];
    cnt--;
    down(nums, 0, cnt);
  }
  return res;
};

var topKFrequent = function (nums, k) {
  let res = [];
  let count = new Map();
  for (let item of nums) {
    if (count.has(item)) {
      count.set(item, count.get(item) + 1);
    } else {
      count.set(item, 1);
    }
  }

  let s = heapSort(Array.from(count.values()), k);
  for (let e of count.entries()) {
    if (s.some((item) => item === e[1])) {
      res.push(e[0]);
    }
  }
  return res;
};


```

