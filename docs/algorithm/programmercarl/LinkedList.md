## 🍩链表



### [移除链表元素](https://leetcode-cn.com/problems/remove-linked-list-elements/)

#### Solution

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummyListNode = new ListNode();
    dummyListNode.next = head;
    let cur = dummyListNode;
    while(cur.next !== null){
        if(cur.next.val === val){
            cur.next = cur.next.next;
        }else{
            cur = cur.next;
        }
    }
    head = dummyListNode.next;
    return head;
};
```





### [设计链表](https://leetcode-cn.com/problems/design-linked-list/)

#### Solution

##### 单链表

```js
/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

function Node(val) {
  this.val = val === undefined ? 0 : val;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = new Node();
  this.length = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this.length - 1) {
    return -1;
  }
  let cur = this.head.next;
  while (index--) {
    cur = cur.next;
  }
  return cur.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head.next;
  this.head.next = newNode;
  this.length ++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  let p = this.head;
  while (p.next !== null) {
    p = p.next;
  }
  p.next = newNode;
  this.length ++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index === this.length) {
    this.addAtTail(val);
  }
  else if (index < 0) {
    this.addAtHead(val);
  }
  else if (index >= 0 && index <= this.length - 1) {
    let newNode = new Node(val);
    let p = this.head;
    while (index--) {
      p = p.next;
    }
    newNode.next = p.next;
    p.next = newNode;
    this.length++;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= 0 && index <= this.length - 1) {
    let p = this.head;
    while (index--) {
      p = p.next;
    }
    p.next = p.next.next;
    this.length --;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

```



### [反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

#### Solution

##### 双指针

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) {
    return head;
  }
  let cur = head;
  let pre = null;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
```



##### 递归

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const helper = function (pre, cur) {
  if (!cur) {
    return pre;
  }
  let next = cur.next;
  cur.next = pre;
  return helper(cur, next);
}

var reverseList = function (head) {
  if (!head) {
    return head;
  }
  return helper(null, head);
};

```



### [ 两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

#### Solution

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummyNode = new ListNode();
    dummyNode.next = head;
    let p = dummyNode;
    while(p.next!==null && p.next.next!==null){
        let q = p.next;
        let r = p.next.next;
        let k = p.next.next.next;
        p.next = r;
        r.next = q;
        q.next = k;
        p = q;
    }
    return dummyNode.next;
};
```



### [删除链表的倒数第 N 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

#### Solution

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyNode = new ListNode();
    dummyNode.next = head;
    let p = dummyNode;
    let m = n;
    while(m--){
        p = p.next;
    }
    let q = dummyNode;
    while(p.next){
        p = p.next;
        q = q.next;
    }
    q.next = q.next.next;
    return dummyNode.next;
};
```



### [面试题 02.07. 链表相交](https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/)

#### Solution

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p = headA;
    let q = headB;
    let countA = 0, countB = 0;
    let a = headA;
    let b = headB;
    while(p){
        countA ++;
        p = p.next;
    }
    while(q){
        countB ++;
        q = q.next;
    }
    if(countA > countB){
        let dis = countA - countB;
        while(dis--){
            a = a.next;
        } 
    }else{
        let dis = countB - countA;
        while(dis--){
            b = b.next;
        } 
    }
    while(a!==b){
            a = a.next;
            b = b.next;
    }
    let c = a;
    while(a){
        if(a === b){
            a = a.next;
            b = b.next;
        }else{
            return null;
        }
    }
    return c;
};
```





### [环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/)

#### Solution

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast!==null && fast.next!==null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            break;
        }
    }
    if(fast===null || fast.next===null){
        return null;
    }
    slow = head;
    while(slow !== fast){
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};
```



### [有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)

#### Solution

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let mapS = new Array(26).fill(0);
  let mapT = new Array(26).fill(0);
  let base = "a".charCodeAt();
  for (let i = 0; i <= s.length - 1; i++) {
    mapS[s[i].charCodeAt() - base]++;
  }
  for (let i = 0; i <= t.length - 1; i++) {
    mapT[t[i].charCodeAt() - base]++;
  }
  for (let i = 0; i <= 25; i++) {
    if (mapS[i] !== mapT[i]) {
      return false;
    }
  }

  return true;
};

```



### [两个数组的交集](https://leetcode-cn.com/problems/intersection-of-two-arrays/)

#### Solution

##### 使用Set

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let mySet = new Set();
    let res = new Set();
    for(const item of nums1){
        mySet.add(item);
    }
    for(const item of nums2){
        if(mySet.has(item)){
            res.add(item);
        }
    }
    return Array.from(res);
};
```



```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let mySet = {};
    nums1.forEach(item => {
        mySet[item] = true;
    })

    return nums2.reduce((res, cur) => {
        if(mySet[cur]){
            res.push(cur);
            delete mySet[cur];
        }
        return res;
    },[]);

};
```



### [快乐数](https://leetcode-cn.com/problems/happy-number/)

#### Solution

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n===1){
        return true;
    }

    const helper = function(n, hash){
        let sum = 0;
        while(n > 0){
            sum += (n % 10)**2;
            n = n / 10 | 0;
        }
        if(sum === 1){
            return true;
        }
        if(hash[sum]){
            return false;
        }
        hash[sum] = true;
        return helper(sum, hash);
    }

    return helper(n, {[n]: true});
};
```





### [两数之和](https://leetcode-cn.com/problems/two-sum/)

#### Solution

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0; i < nums.length; i ++){
        if(map[target-nums[i]] !== undefined){
            return [map[target-nums[i]], i];
        }
        map[nums[i]] = i;
    }
};
```



### [四数相加 II](https://leetcode-cn.com/problems/4sum-ii/)

#### Solution

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map = {}
    let res = 0;
    for(let i of nums1){
        for(let j of nums2){
            if(map[i + j]){
                map[i + j] += 1;
            }else{
                map[i + j] = 1;
            }
        }
    }

    for(let i of nums3){
        for(let j of nums4){
            if(map[-(i + j)]){
                res += map[-(i + j)];
            }
        }
    }
    return res;
};
```



```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let myMap =new Map();
    let res = 0;
    for(let i of nums1){
        for(let j of nums2){
            myMap.set(i + j, (myMap.get(i + j) || 0) + 1);
        }
    }

    for(let i of nums3){
        for(let j of nums4){
            res += (myMap.get(-(i + j)) || 0);
        }
    }
    return res;
};
```



### [赎金信](https://leetcode-cn.com/problems/ransom-note/)

#### Solution

```js
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length){
        return false;
    }
    let cnt = new Array(26).fill(0);
    let base = "a".charCodeAt();
    for(let i = 0; i < magazine.length; i++){
        cnt[magazine[i].charCodeAt() - base] ++;
    }
    for(let i = 0; i < ransomNote.length; i++){
        cnt[ransomNote[i].charCodeAt() - base] --;
        if(cnt[ransomNote[i].charCodeAt() - base] < 0){
            return false;
        }
    }
    return true;
};
```



### [三数之和](https://leetcode-cn.com/problems/3sum/)

#### Solution

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  let index1 = 0;
  while (index1 < nums.length - 2) {
    let index2 = index1 + 1;
    let index3 = nums.length - 1;
    while (index2 < index3) {
      if (nums[index1] < -(nums[index2] + nums[index3])) {
        index2++;
      } else if (nums[index1] > -(nums[index2] + nums[index3])) {
        index3--;
      } else {
        res.push([nums[index1], nums[index2], nums[index3]]);
        let leftVal = nums[index2++];
        let rightVal = nums[index3--];
        while (index2 < index3 && nums[index2] === leftVal) {
          index2++;
        }
        while (index2 < index3 && nums[index3] === rightVal) {
          index3--;
        }
      }
      
    }
    let cur = nums[index1++];
    while (index1 < nums.length - 2 && nums[index1] === cur) {
      index1++;
    }
  }
  return res;
};

```



### [四数之和](https://leetcode-cn.com/problems/4sum/)

#### Solution

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let index1 = 0;
  let res = [];
  while (index1 < nums.length - 3) {
    let index2 = index1 + 1;
    while (index2 < nums.length - 2) {
      let index3 = index2 + 1;
      let index4 = nums.length - 1;
      while (index3 < index4) {
        let sum = nums[index1] + nums[index2] + nums[index3] + nums[index4];
        if (sum < target) {
          index3++;
        } else if (sum > target) {
          index4--;
        } else {
          res.push([nums[index1], nums[index2], nums[index3], nums[index4]]);
          let leftVal = nums[index3++];
          let rightVal = nums[index4--];
          while (index3 < index4 && leftVal === nums[index3]) {
            index3++;
          }
          while (index3 < index4 && rightVal === nums[index4]) {
            index4--;
          }
        }
      }
      let p = nums[index2++];
      while (index2 < nums.length - 2 && p === nums[index2]) {
        index2++;
      }
    }
    let q = nums[index1++];
    while (index1 < nums.length - 3 && q === nums[index1]) {
      index1++;
    }
  }
  return res;
};

```





### [反转字符串](https://leetcode-cn.com/problems/reverse-string/)

#### Solution

```js
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const swap = function(s, i, j) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
}

var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;
    while(i<j){
        swap(s, i, j);
        i ++;
        j --;
    }
};
```



### [反转字符串 II](https://leetcode-cn.com/problems/reverse-string-ii/)

#### Solution

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const reverse = function (s, left, right) {
  let temp;
  for (let i = left, j = right; i < j; i++, j--) {
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
};

var reverseStr = function (s, k) {
  let resArr = s.split("");
  for (let i = 0; i < s.length; i += k * 2) {
    if (i + k < s.length) {
      reverse(resArr, i, i + k - 1);
      continue;
    }
    reverse(resArr, i, s.length - 1);
  }
  return resArr.join("");
};

```



### [剑指 Offer 05. 替换空格](https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/)

#### Solution

```js
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let spaceNum = 0;
  let arr = s.split("");
  arr.map(item => {
    if (item === " ") {
      spaceNum++;
    }
  })
  let resArr = new Array(arr.length + spaceNum * 3);
  let p = arr.length - 1;
  let q = resArr.length - 1;
  while (p <= q && p >= 0) {
    if (arr[p] !== " ") {
      resArr[q] = arr[p];
    } else {
      resArr[q--] = "0";
      resArr[q--] = "2";
      resArr[q] = "%";
    }
    p--;
    q--;
  }
  return resArr.join("");
};

```



### [颠倒字符串中的单词](https://leetcode-cn.com/problems/reverse-words-in-a-string/)

#### Solution

##### 利用栈

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = [];
  let stack = [];
  let arr = s.split("");
  let index = s.length - 1;
  while (index > -1 && arr[index] === " ") {
    index--;
  }
  while (index > -1) {
    while (index > -1 && arr[index] !== " ") {
      stack.push(arr[index--]);
    }
    while (stack.length) {
      res.push(stack.pop());
    }
    res.push(" ");
    while (index > -1 && arr[index] === " ") {
      index--;
    }
  }
  res.pop();
  return res.join("");
};
```



##### 双指针

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let seq = s.split("");
  reverse(seq, 0, seq.length - 1);
  let index1 = 0;
  let index2 = 0;
  while (index2 < seq.length && seq[index2] === " ") {
    index2++;
  }
  while (index2 < seq.length) {
    let start = index2;
    while (index2 < seq.length && seq[index2] !== " ") {
      index2++;
    }
    reverse(seq, start, index2 - 1);
    while (start < index2) {
      seq[index1++] = seq[start++];
    }
    seq[index1++] = " ";
    while (index2 < seq.length && seq[index2] === " ") {
      index2++;
    }
  }
  seq.length = Math.max(index1 - 1, 0);
  return seq.join("");
};

const reverse = function (sequence, left, right) {
  let tmp;
  while (left < right) {
    tmp = sequence[left];
    sequence[left] = sequence[right];
    sequence[right] = tmp;
    left++;
    right--;
  }
};

```





### [剑指 Offer 58 - II. 左旋转字符串](https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/)

#### Solution

```js
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    let arrS = s.split("");
    reverse(arrS, 0, n - 1);
    reverse(arrS, n, arrS.length - 1);
    reverse(arrS, 0, arrS.length - 1);
    return arrS.join("");
};

const reverse = function (arr, left, right) {
    let tmp;
    while (left < right) {
        tmp = arr[left];
        arr[left] = arr[right];
        arr[right] = tmp;
        left++;
        right--;
    }
}

```



