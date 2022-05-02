## 🍦数组

### [二分查找](https://leetcode-cn.com/problems/binary-search/)

#### Solution

##### [left, right]

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let middle = left + Math.floor((right-left)/2);;
        if(nums[middle] < target){
            left = middle + 1;
        }else if(nums[middle] > target){
            right = middle - 1;
        }else{
            return middle;
        }
    }
    return -1;
};
```



##### [left, right)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length;
    while(left < right){
        let middle = left + Math.floor((right - left) >> 1);
        if(nums[middle] < target){
            left = middle + 1;
        }
        else if(nums[middle] > target){
            right = middle;
        }
        else{
            return middle;
        }
    }
    return -1;
};
```





### [移除元素](https://leetcode-cn.com/problems/remove-element/)

#### Solution

##### 暴力

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length;
    for(let i = 0; i < len; i ++){
        if(nums[i] === val){
            for(let j = i + 1; j < len; j ++){
                nums[j-1] = nums[j];
            }
            i--;
            len--;
        }
    }
    return len;
};
```



##### 快慢指针，不改变相对位置

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let slowIndex = 0;
    for(let fastIndex = 0; fastIndex < nums.length; fastIndex ++){
        if(nums[fastIndex]!==val){
            nums[slowIndex++] = nums[fastIndex];
        }
    }
    return slowIndex;
};
```



##### 相对快慢指针，改变相对位置

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    while(leftIndex <= rightIndex){
        while(leftIndex <= rightIndex && nums[leftIndex]!==val){
            leftIndex ++;
        }
        while(leftIndex <= rightIndex && nums[rightIndex]===val){
            rightIndex --;
        }
        if(leftIndex < rightIndex){
            nums[leftIndex ++] = nums[rightIndex --];
        }
    }
    return leftIndex;
};
```





### [有序数组的平方](https://leetcode-cn.com/problems/squares-of-a-sorted-array/)

#### Solution

##### 暴力

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(let i = 0; i < nums.length; i++){
        nums[i] = nums[i] * nums[i];
    }
    nums.sort((a,b)=>a-b);
    return nums;
};
```



##### 双指针

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = new Array(nums.length);
    let i = 0;
    let j = nums.length - 1;
    let k = nums.length - 1;
    while(i<=j){
        if(nums[i] * nums[i] < nums[j] * nums[j]){
            res[k --] = nums[j] * nums[j];
            j--;
        }else{
            res[k --] = nums[i] * nums[i];
            i++;
        }
    }
    return res;
};
```





### [长度最小的子数组](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)

#### Solution

##### 暴力

```js
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let res = 2e9;
    for(let i = 0; i < nums.length; i ++){
        let sum = 0;
        for(let j = i; j < nums.length;j++){
            sum += nums[j];
            if(sum >= target){
                res = Math.min(j - i + 1, res);
                break;
            }
        }
    }
    if(res === 2e9){
        res = 0;
    }
    return res;
};
```



##### 滑动窗口

```js
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let res = 2e9;
    let sum = 0;
    let i = 0;
    for(let j=0;j<nums.length;j++){
        sum+=nums[j];
        while(sum >= target){
            res = Math.min(res, j - i + 1);
            sum -= nums[i++];
        }
    }
    if(res === 2e9){
        res = 0;
    }
    return res;
};
```







### [螺旋矩阵 II](https://leetcode-cn.com/problems/spiral-matrix-ii/)

#### Solution

```js
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let startX = 0;
    let startY = 0;
    let loop = Math.floor(n/2);
    let mid = Math.floor(n/2);
    let offset = 1;
    let count = 1;

    while(loop--){
        let i = startX;
        let j = startY;
        for(j = startY; j < startY + n - offset; j ++){
            res[startX][j] = count ++;
        }
        for(i = startX; i < startX + n - offset; i++){
            res[i][j] = count ++;
        }
        for(;j>startY;j--){
            res[i][j] = count ++;
        }
        for(;i>startX;i--){
            res[i][j] = count ++;
        }
        startX ++;
        startY ++;
        offset += 2;
    }
    if(n % 2){
        res[mid][mid] = count;
    }
    return res;
};
```

