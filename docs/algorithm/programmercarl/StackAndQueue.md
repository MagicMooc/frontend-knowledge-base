## ð¥æ åéå



### [ç¨æ å®ç°éå](https://leetcode-cn.com/problems/implement-queue-using-stacks/)

#### Solution

> å¨pushæ°æ®çæ¶åï¼åªè¦æ°æ®æ¾è¿è¾å¥æ å°±å¥½ï¼**ä½å¨popçæ¶åï¼æä½å°±å¤æä¸äºï¼è¾åºæ å¦æä¸ºç©ºï¼å°±æè¿æ æ°æ®å¨é¨å¯¼å¥è¿æ¥ï¼æ³¨ææ¯å¨é¨å¯¼å¥ï¼**ï¼åä»åºæ å¼¹åºæ°æ®ï¼å¦æè¾åºæ ä¸ä¸ºç©ºï¼åç´æ¥ä»åºæ å¼¹åºæ°æ®å°±å¯ä»¥äºã
>
> æåå¦ä½å¤æ­éåä¸ºç©ºå¢ï¼**å¦æè¿æ ååºæ é½ä¸ºç©ºçè¯ï¼è¯´ææ¨¡æçéåä¸ºç©ºäºã**

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



### [ç¨éåå®ç°æ ](https://leetcode-cn.com/problems/implement-stack-using-queues/)

#### Solution

> **ä¸ä¸ªéåå¨æ¨¡ææ å¼¹åºåç´ çæ¶ååªè¦å°éåå¤´é¨çåç´ ï¼é¤äºæåä¸ä¸ªåç´ å¤ï¼ éæ°æ·»å å°éåå°¾é¨ï¼æ­¤æ¶å¨å»å¼¹åºåç´ å°±æ¯æ çé¡ºåºäºã**

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



### [ææçæ¬å·](https://leetcode-cn.com/problems/valid-parentheses/)

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



### [å é¤å­ç¬¦ä¸²ä¸­çææç¸é»éå¤é¡¹](https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/)

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



### [éæ³¢å°è¡¨è¾¾å¼æ±å¼](https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/)

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



### [æ»å¨çªå£æå¤§å¼](https://leetcode-cn.com/problems/sliding-window-maximum/)

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
    // ç»´ææ»å¨çªå£çå¤§å°
    //å½éåä¸ä¸ºç©º(hh <= tt) ä¸ å½å½åæ»å¨çªå£çå¤§å°(i - q[hh] + 1)>æä»¬è®¾å®ç
    //æ»å¨çªå£çå¤§å°(k),éåå¼¹åºéåå¤´åç´ ä»¥ç»´ææ»å¨çªå£çå¤§å°
    if (hh <= tt && i - q[hh] + 1 > k) {
      hh++;
    }
    //æé åè°éåéå
    //å½éåä¸ä¸ºç©º(hh <= tt) ä¸ å½éåéå°¾åç´ <=å½ååç´ (nums[i])æ¶,é£ä¹éå°¾åç´ 
    //å°±ä¸å®ä¸æ¯å½åçªå£æå¤§å¼,å å»éå°¾åç´ ,å å¥å½ååç´ (q[ ++ tt] = i)
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



### [ å K ä¸ªé«é¢åç´ ](https://leetcode-cn.com/problems/top-k-frequent-elements/)

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

