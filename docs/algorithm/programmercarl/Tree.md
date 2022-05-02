## 🍰二叉树

### [二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

#### Solution

##### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let res = [];

    const dfs = function(u){
        if(!u){
            return;
        }
        res.push(u.val);
        dfs(u.left);
        dfs(u.right);
    }
    dfs(root);
    return res;
};
```



##### 迭代

> 前序遍历是中左右，每次先处理的是中间节点，那么先将根节点放入栈中，然后将右孩子加入栈，再加入左孩子。
>
> 为什么要先加入 右孩子，再加入左孩子呢？ 因为这样出栈的时候才是中左右的顺序。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  let _stack = [];
  let res = [];
  _stack.push(root);
  while (_stack.length) {
    let node = _stack.pop();
    res.push(node.val);
    if (node.right) {
      _stack.push(node.right);
    }
    if (node.left) {
      _stack.push(node.left);
    }
  }
  return res;
};
```





### [二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

#### Solution

##### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    const dfs = function(u){
        if(!u){
            return;
        }
        dfs(u.left);
        res.push(u.val);
        dfs(u.right);
    }
    dfs(root);
    return res;
};
```



##### 迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  let res = [];
  let _stack = [];
  let cur = root;
  while (cur || _stack.length > 0) {
    if (cur) {
      _stack.push(cur);
      cur = cur.left;
    } else {
      cur = _stack.pop();
      res.push(cur.val);
      cur = cur.right;
    }
  }
  return res;
};

```





### [二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

#### Solution

##### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let res = [];
    const dfs = function(u){
        if(!u){
            return;
        }
        dfs(u.left);
        dfs(u.right);
        res.push(u.val);
    }
    dfs(root);
    return res;
};
```



##### 迭代

<img src="/Users/zhanghao/Pictures/img/20200808200338924-1494862.png" alt="前序到后序" style="zoom:50%;" />

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  let _stack = [];
  let res = [];
  _stack.push(root);
  while (_stack.length) {
    let node = _stack.pop();
    res.push(node.val);
    if (node.left) {
      _stack.push(node.left);
    }
    if (node.right) {
      _stack.push(node.right);
    }
  }
  return res.reverse();
};

```



### [二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

#### Solution

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let res = [];
  let curLevel = [root];
  while (true) {
    let nextLevel = [];
    let values = [];
    for (let i = 0; i < curLevel.length; i++) {
      values.push(curLevel[i].val);
      if (curLevel[i].left) {
        nextLevel.push(curLevel[i].left);
      }
      if (curLevel[i].right) {
        nextLevel.push(curLevel[i].right);
      }
    }
    res.push(values);
    if (nextLevel.length === 0) {
      return res;
    }
    curLevel = nextLevel;
  }
};

```



### [翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)

#### Solution

##### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const swap = function (u) {
    let tmp = u.left;
    u.left = u.right;
    u.right = tmp;
  };

  const dfs = function (u) {
    if (!u) {
      return;
    }
    swap(u);
    dfs(u.left);
    dfs(u.right);
  };
  dfs(root);
  return root;
};

```



##### 迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return root;
  }
  let _stack = [];
  _stack.push(root);
  while (_stack.length) {
    let node = _stack.pop();
    let tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    if (node.right) {
      _stack.push(node.right);
    }
    if (node.left) {
      _stack.push(node.left);
    }
  }
  return root;
};

```



### [对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)

#### Solution

##### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const dfs = function (node1, node2) {
  if (node1 && node2) {
    return (
      node1.val === node2.val &&
      dfs(node1.left, node2.right) &&
      dfs(node1.right, node2.left)
    );
  } else if (node1 === null && node2 === null) {
    return true;
  }
  return false;
};

var isSymmetric = function (root) {
  if (!root) {
    return false;
  }
  return dfs(root.left, root.right);
};

```



##### 使用队列

> 通过队列来判断根节点的左子树和右子树的内侧和外侧是否相等

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  let _queue = [];
  _queue.push(root.left);
  _queue.push(root.right);
  while (_queue.length) {
    let node1 = _queue.shift();
    let node2 = _queue.shift();
    if (!node1 && !node2) {
      continue;
    } else if (!node1 || !node2 || node1.val !== node2.val) {
      return false;
    }
    _queue.push(node1.left);
    _queue.push(node2.right);
    _queue.push(node1.right);
    _queue.push(node2.left);
  }
  return true;
};

```



##### 使用栈

> 把左右两个子树要比较的元素顺序放进一个容器，然后成对成对的取出来进行比较，那么其实使用栈也是可以的。
>
> 只要把队列原封不动的改成栈就可以了

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSymmetric = function (root) {
  if (!root) {
    return [];
  }
  let _stack = [];
  _stack.push(root.left);
  _stack.push(root.right);
  while (_stack.length) {
    let node1 = _stack.pop();
    let node2 = _stack.pop();
    if (!node1 && !node2) {
      continue;
    } else if (!node1 || !node2 || node1.val !== node2.val) {
      return false;
    }
    _stack.push(node1.left);
    _stack.push(node2.right);
    _stack.push(node1.right);
    _stack.push(node2.left);
  }
  return true;
};

```



### [二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

#### Solution

##### 递归（后序遍历）

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const getDepth = function (u) {
  if (!u) {
    return 0;
  }
  return 1 + Math.max(getDepth(u.left), getDepth(u.right));
};

var maxDepth = function (root) {
  return getDepth(root);
};

```



##### 递归（前序遍历）

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function (root) {
  let res = 0;
  const dfs = function (u, depth) {
    res = Math.max(depth, res);
    if (u.left === null && u.right === null) {
      return;
    }
    if (u.left) {
      depth++;
      dfs(u.left, depth);
      depth--;
    }
    if (u.right) {
      depth++;
      dfs(u.right, depth);
      depth--;
    }
    return;
  };
  if (!root) {
    return 0;
  }
  dfs(root, 1);
  return res;
};

```



##### 迭代（层序遍历）

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let depth = 0;
  let _queue = [];
  _queue.push(root);
  while (_queue.length) {
    let size = _queue.length;
    depth++;
    for (let i = 0; i < size; i++) {
      let node = _queue.shift();
      if (node.left) {
        _queue.push(node.left);
      }
      if (node.right) {
        _queue.push(node.right);
      }
    }
  }
  return depth;
};

```



### [N 叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/)

#### Solution

##### 递归

```js
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  const dfs = function (u) {
    if (!u) {
      return 0;
    }
    let depth = 0;
    for (let i = 0; i < u.children.length; i++) {
      depth = Math.max(depth, dfs(u.children[i]));
    }
    return depth + 1;
  };

  return dfs(root);
};

```



##### 迭代

```js
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let depth = 0;
  let _queue = [];
  _queue.push(root);
  while (_queue.length) {
    depth++;
    let size = _queue.length;
    for (let i = 0; i < size; i++) {
      let node = _queue.shift();
      for (let j = 0; j < node.children.length; j++) {
        if (node.children[j]) {
          _queue.push(node.children[j]);
        }
      }
    }
  }
  return depth;
};

```





### [二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)

#### Solution

##### 递归（后序遍历）

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  const dfs = function (u) {
    if (!u) {
      return 0;
    }
    let leftDepth = dfs(u.left);
    let rightDepth = dfs(u.right);
    // 当一个左子树为空，右不为空，这时并不是最低点
    if (u.left === null && u.right) {
      return 1 + rightDepth;
    }
    // 当一个右子树为空，左不为空，这时并不是最低点
    if (u.right === null && u.left) {
      return 1 + leftDepth;
    }
    return 1 + Math.min(leftDepth, rightDepth);
  };
  return dfs(root);
};

```



##### 迭代（层序遍历）

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  let _queue = [];
  let depth = 0;
  _queue.push(root);
  while (_queue.length) {
    let size = _queue.length;
    depth++;
    for (let i = 0; i < size; i++) {
      let node = _queue.shift();
      if (node.left) {
        _queue.push(node.left);
      }
      if (node.right) {
        _queue.push(node.right);
      }
      // 当左右孩子都为空的时候，说明是最低点的一层了，退出
      if (!node.left && !node.right) {
        return depth;
      }
    }
  }
  return depth;
};

```



### [完全二叉树的节点个数](https://leetcode-cn.com/problems/count-complete-tree-nodes/)

#### Solution

##### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var countNodes = function (root) {
  if (!root) {
    return 0;
  }
  const dfs = function (u) {
    if (!u) {
      return 0;
    }
    return 1 + dfs(u.left) + dfs(u.right);
  };
  return dfs(root);
};

```



##### 迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var countNodes = function (root) {
  if (!root) {
    return 0;
  }
  let _queue = [];
  let count = 0;
  _queue.push(root);
  while (_queue.length) {
    let size = _queue.length;
    for (let i = 0; i < size; i++) {
      count++;
      let node = _queue.shift();
      if (node.left) {
        _queue.push(node.left);
      }
      if (node.right) {
        _queue.push(node.right);
      }
    }
  }
  return count;
};

```



##### 根据完全二叉树特点

> 完全二叉树只有两种情况，情况一：就是满二叉树，情况二：最后一层叶子节点没有满。
>
> 对于情况一，可以直接用 2^树深度 - 1 来计算，注意这里根节点深度为1。
>
> 对于情况二，分别递归左孩子，和右孩子，递归到某一深度一定会有左孩子或者右孩子为满二叉树，然后依然可以按照情况1来计算。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) {
    return 0;
  }
  let leftNode = root.left;
  let rightNode = root.right;
  let leftHeight = 0;
  let rightHeight = 0;
  while (leftNode) {
    leftNode = leftNode.left;
    leftHeight++;
  }
  while (rightNode) {
    rightNode = rightNode.right;
    rightHeight++;
  }
  if (leftHeight === rightHeight) {
    return (2 << leftHeight) - 1;
  }
  return countNodes(root.left) + countNodes(root.right) + 1;
};

```



### [平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/)

#### Solution

##### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const getHeight = function (u) {
  if (!u) {
    return 0;
  }
  let leftHeight = getHeight(u.left);
  let rightHeight = getHeight(u.right);
  if (leftHeight === -1) {
    return -1;
  }
  if (rightHeight === -1) {
    return -1;
  }
  return Math.abs(leftHeight - rightHeight) > 1
    ? -1
    : 1 + Math.max(leftHeight, rightHeight);
};

var isBalanced = function (root) {
  return getHeight(root) === -1 ? false : true;
};

```

##### 迭代

```js

```







### [二叉树的所有路径](https://leetcode-cn.com/problems/binary-tree-paths/)

#### Solution

##### 迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) {
    return null;
  }
  // 保存最终路径集合
  const res = [];
  // 保存遍历路径的节点
  const paths = [[root.val]];
  // 保存树的遍历节点
  const stack = [root];
  while (stack.length) {
    // 取出节点
    const node = stack.pop();
    // 取出该节点对应的路径
    const path = paths.pop();
    // 遇到叶子节点
    if (!node.left && !node.right) {
      res.push(path);
      continue;
    }

    if (node.left) {
      stack.push(node.left);      
      // 使用concat不改变原数组，相当于回溯
      paths.push(path.concat(node.left.val));
    }
    
    if (node.right) {
      stack.push(node.right);
      paths.push(path.concat(node.right.val));
    }
  }
  return res.map(item => {
    return item.join("->");
  })
};
```



##### 递归回溯

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root){
        return null;
    }

    const backTrace = function(root, path, res){
        if(!root.left && !root.right){
            path.push(root.val);
            res.push(path);
        }else{
            if(root.left){
                backTrace(root.left, path.concat(root.val), res);
            }
            if(root.right){
                backTrace(root.right, path.concat(root.val), res);
            }
        }
        
    }

    const res = [];
    backTrace(root, [], res);
    
    return res.map(item => {
        return item.join("->");
    })
};
```





### [相同的树](https://leetcode-cn.com/problems/same-tree/)

#### Solution

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const comp = function (node1, node2) {
  if (node1 && node2) {
    return (
      node1.val === node2.val &&
      comp(node1.left, node2.left) &&
      comp(node1.right, node2.right)
    );
  } else if (node1 === null && node2 === null) {
    return true;
  }
  return false;
};

var isSameTree = function (p, q) {
  return comp(p, q);
};
```





### [左叶子之和](https://leetcode-cn.com/problems/sum-of-left-leaves/)

#### Solution

##### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(!root) {
        return 0;
    }
    let leftCount = sumOfLeftLeaves(root.left);
    let rightCount = sumOfLeftLeaves(root.right);
    let midValue = 0;
    if(root.left && !root.left.left &&!root.left.right){
        midValue = root.left.val;
    }
    return midValue + leftCount + rightCount;
};
```



##### 迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0;
  }
  let _stack = [];
  let res = 0;
  _stack.push(root);
  while (_stack.length) {
    let node = _stack.pop();
    if (node.left && !node.left.left && !node.left.right) {
      res += node.left.val;
    }
    if (node.left) {
      _stack.push(node.left);
    }
    if (node.right) {
      _stack.push(node.right);
    }
  }
  return res;
};
```





### [找树左下角的值](https://leetcode-cn.com/problems/find-bottom-left-tree-value/)

#### Solution

##### 递归+回溯

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  if (!root) {
    return root;
  }
  let maxDepth = -1;
  let res = 0;

  const dfs = function (u, depth) {
    if (!u.left && !u.right) {
      if (depth > maxDepth) {
        maxDepth = depth;
        res = u.val;
      }
      return;
    }
    if (u.left) {
      depth++;
      dfs(u.left, depth);
      depth--;
    }
    if (u.right) {
      depth++;
      dfs(u.right, depth);
      depth--;
    }
    return;
  };

  dfs(root, 0);
  return res;
};
```



##### 迭代(层序遍历)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  if (!root) {
    return root;
  }
  let res = 0;
  let _queue = [];
  _queue.push(root);
  while (_queue.length) {
    let size = _queue.length;
    for (let i = 0; i < size; i++) {
      let node = _queue.shift();
      if (node.left) {
        _queue.push(node.left);
      }
      if (node.right) {
        _queue.push(node.right);
      }
      if (i === 0) {
        res = node.val;
      }
    }
  }
  return res;
};

```





### [路径总和](https://leetcode-cn.com/problems/path-sum/)

#### Solution

##### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }
  const dfs = function (u, count) {
    if (!u.left && !u.right && count === 0) {
      return true;
    }
    if (!u.left && !u.right) {
      return false;
    }
    if (u.left) {
      count -= u.left.val;
      if (dfs(u.left, count)) {
        return true;
      }
      count += u.left.val;
    }
    if (u.right) {
      count -= u.right.val;
      if (dfs(u.right, count)) {
        return true;
      }
      count += u.right.val;
    }
    return false;
  };
  return dfs(root, targetSum - root.val);
};
```



##### 迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }
  let _stack = [];
  _stack.push([root, root.val]);
  while (_stack.length) {
    let node = _stack.pop();
    // 如果该节点是叶子节点了，同时该节点的路径数值等于sum，那么就返回true
    if (!node[0].left && !node[0].right && node[1] === targetSum) {
      return true;
    }
    // 右节点，压进去一个节点的时候，将该节点的路径数值也记录下来
    if (node[0].right) {
      _stack.push([node[0].right, node[1] + node[0].right.val]);
    }
    // 左节点，压进去一个节点的时候，将该节点的路径数值也记录下来
    if (node[0].left) {
      _stack.push([node[0].left, node[1] + node[0].left.val]);
    }
  }
  return false;
};

```



### [路径总和 II](https://leetcode-cn.com/problems/path-sum-ii/)

#### Solution

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */

var pathSum = function (root, targetSum) {
  if (!root) {
    return [];
  }
  let res = [];
  let path = [];
  const dfs = function (u, count) {
    if (!u.left && !u.right && count === 0) {
      // 数组复制
      res.push(path.concat());
      return;
    }
    if (!u.left && !u.right) {
      return;
    }
    if (u.left) {
      path.push(u.left.val);
      count -= u.left.val;
      dfs(u.left, count);
      count += u.left.val;
      path.pop();
    }
    if (u.right) {
      path.push(u.right.val);
      count -= u.right.val;
      dfs(u.right, count);
      count += u.right.val;
      path.pop();
    }
    return;
  };
  path.push(root.val);
  dfs(root, targetSum - root.val);
  return res;
};

```



### [从中序与后序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

#### Solution

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let len = inorder.length;
  let pos = new Map();
  for (let i = 0; i < len; i++) {
    pos.set(inorder[i], i);
  }
  const build = function (il, ir, pl, pr) {
    if (il > ir) {
      return null;
    }
    let rootVal = postorder[pr];
    let k = pos.get(rootVal);
    let root = new TreeNode(rootVal);
    if (k > il) {
      root.left = build(il, k - 1, pl, pl + (k - 1 - il));
    }
    if (k < ir) {
      root.right = build(k + 1, ir, pl + (k - 1 - il) + 1, pr - 1);
    }
    return root;
  };

  let root = build(0, len - 1, 0, len - 1);
  return root;
};
```



### [从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

#### Solution

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let len = preorder.length;
  let pos = new Map();
  for (let i = 0; i < len; i++) {
    pos.set(inorder[i], i);
  }
  const build = function (il, ir, pl, pr) {
    if (il > ir) {
      return null;
    }
    let rootVal = preorder[pl];
    let k = pos.get(rootVal);
    let root = new TreeNode(rootVal);
    if (k > il) {
      root.left = build(il, k - 1, pl + 1, pl + 1 + (k - 1 - il));
    }
    if (k < ir) {
      root.right = build(k + 1, ir, pl + 1 + (k - 1 - il) + 1, pr);
    }
    return root;
  };
  let root = build(0, len - 1, 0, len - 1);
  return root;
};

```





### [最大二叉树](https://leetcode-cn.com/problems/maximum-binary-tree/)

#### Solution

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  let pos = new Map();
  for (let i = 0; i < nums.length; i++) {
    pos.set(nums[i], i);
  }

  const build = function (l, r) {
    if (l > r) {
      return null;
    }
    let maxValue = nums[l];
    for (let i = l; i <= r; i++) {
      if (nums[i] > maxValue) {
        maxValue = nums[i];
      }
    }

    let rootVal = maxValue;
    let k = pos.get(rootVal);
    let root = new TreeNode(rootVal);
    root.left = build(l, k - 1);
    root.right = build(k + 1, r);
    return root;
  };
  return build(0, nums.length - 1);
};

```



### [合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees/)

#### Solution



##### 递归(前序遍历)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) {
    return null;
  }
  let u;
  if (root1 && root2) {
    u =root1;
    root1.val += root2.val;
    u.left = mergeTrees(root1.left, root2.left);
    u.right = mergeTrees(root1.right, root2.right);
  } else if (root1 && !root2) {
    u = root1;
  } else if (!root1 && root2) {
    u = root2;
  }

  return u;
};

```



##### 迭代(层序遍历)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1) {
    return root2;
  }
  if (!root2) {
    return root1;
  }
  let _queue = [];
  _queue.push(root1);
  _queue.push(root2);
  while (_queue.length) {
    let node1 = _queue.shift();
    let node2 = _queue.shift();
    node1.val += node2.val;
    if (node1.left && node2.left) {
      _queue.push(node1.left);
      _queue.push(node2.left);
    }
    if (node1.right && node2.right) {
      _queue.push(node1.right);
      _queue.push(node2.right);
    }
    if (!node1.left && node2.left) {
      node1.left = node2.left;
    }
    if (!node1.right && node2.right) {
      node1.right = node2.right;
    }
  }
  return root1;
};

```



### [二叉搜索树中的搜索](https://leetcode-cn.com/problems/search-in-a-binary-search-tree/)

#### Solution

##### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) {
    return null;
  }
  if (root.val === val) {
    return root;
  }
  if (val < root.val) {
    return searchBST(root.left, val);
  }
  if (val > root.val) {
    return searchBST(root.right, val);
  }
};

```



##### 迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let p = root;
  while (p) {
    if (val < p.val) {
      p = p.left;
    } else if (val > p.val) {
      p = p.right;
    } else {
      return p;
    }
  }
  return null;
};
```





### [验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/)

#### Solution

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let res = [];
  const dfs = function (u) {
    if (!u) {
      return;
    }
    dfs(u.left);
    res.push(u.val);
    dfs(u.right);
  };
  dfs(root);
  for (let i = 1; i < res.length; i++) {
    if (res[i - 1] >= res[i]) {
      return false;
    }
  }
  return true;
};
```



> 我们把二叉树转变为数组来判断，是最直观的，但其实不用转变成数组，可以在递归遍历的过程中直接判断是否有序



```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let maxVal = Number.MIN_SAFE_INTEGER;
  const dfs = function (u) {
    if (!u) {
      return true;
    }
    let left = dfs(u.left);
    if (maxVal < u.val) {
      maxVal = u.val;
    } else {
      return false;
    }
    let right = dfs(u.right);
    return left && right;
  };
  return dfs(root);
};
```



##### 迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let _stack = [];
  let cur = root;
  let pre = null;
  while (cur || _stack.length) {
    if (cur) {
      _stack.push(cur);
      cur = cur.left;
    } else {
      cur = _stack.pop();
      if (pre && cur.val <= pre.val) {
        return false;
      }
      pre = cur;
      cur = cur.right;
    }
  }
  return true;
};
```



### [二叉搜索树的最小绝对差](https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/)

#### Solution

##### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let minVal = Number.MAX_SAFE_INTEGER;
  let pre = null;
  const dfs = function (u) {
    if (!u) {
      return;
    }
    dfs(u.left);
    if (pre) {
      minVal = Math.min(minVal, Math.abs(u.val - pre.val));
    }
    pre = u;
    dfs(u.right);
  };
  dfs(root);
  return minVal;
};
```



##### 迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let minVal = Number.MAX_SAFE_INTEGER;
  let pre = null;
  let _stack = [];
  let cur = root;
  while (cur || _stack.length) {
    if (cur) {
      _stack.push(cur);
      cur = cur.left;
    } else {
      cur = _stack.pop();
      if (pre) {
        minVal = Math.min(minVal, Math.abs(cur.val - pre.val));
      }
      pre = cur;
      cur = cur.right;
    }
  }
  return minVal;
};
```





### [二叉搜索树中的众数](https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/)

#### Solution

##### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let maxCount = 0;
  let count = 0;
  let res = [];
  // 记录前一个节点
  let pre = null;
  const dfs = function (u) {
    if (!u) {
      return;
    }
    dfs(u.left);
    if (!pre) {
      count = 1;
    } else if (pre.val === u.val) {
      count++;
    } else {
      count = 1;
    }
    pre = u;
    // 如果和最大值相同，放进res中
    if (count === maxCount) {
      res.push(u.val);
    }
    if (count > maxCount) {
      maxCount = count;
      // 很关键的一步，不要忘记清空res，之前res里的元素都失效了
      res.splice(0);
      res.push(u.val);
    }
    dfs(u.right);
    return;
  };
  dfs(root);
  return res;
};

```



##### 迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let maxCount = 0;
  let count = 0;
  let res = [];
  let pre = null;
  let cur = root;
  let _stack = [];
  while (cur || _stack.length) {
    if (cur) {
      _stack.push(cur);
      cur = cur.left;
    } else {
      cur = _stack.pop();
      if (!pre) {
        count = 1;
      } else if (pre.val === cur.val) {
        count++;
      } else {
        count = 1;
      }

      if (count === maxCount) {
        res.push(cur.val);
      }
      if (count > maxCount) {
        maxCount = count;
        res.splice(0);
        res.push(cur.val);
      }
      pre = cur;
      cur = cur.right;
    }
  }
  return res;
};

```



### [二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)

#### Solution

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === p || root === q || !root) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && !right) {
    return left;
  } else if (!left && right) {
    return right;
  } else if (left && right) {
    return root;
  } else {
    return null;
  }
};

```



### [二叉搜索树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

#### Solution

##### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const dfs = function (u, p, q) {
    if (!u) {
      return u;
    }
    if (u.val > p.val && u.val > q.val) {
      let left = lowestCommonAncestor(u.left, p, q);
      if (left) {
        return left;
      }
    }
    if (u.val < p.val && u.val < q.val) {
      let right = lowestCommonAncestor(u.right, p, q);
      if (right) {
        return right;
      }
    }
    return u;
  };
  return dfs(root, p, q);
};

```

##### 迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let t = root;
  while (t) {
    if (t.val > p.val && t.val > q.val) {
      t = t.left;
    } else if (t.val < p.val && t.val < q.val) {
      t = t.right;
    } else {
      return t;
    }
  }
  return null;
};

```



### [二叉搜索树中的插入操作](https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/)

#### Solution

##### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) {
    let node = new TreeNode(val);
    return node;
  }
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  }
  if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};
```



> 递归函数不用返回值也可以，找到插入的节点位置，直接让其父节点指向插入节点，结束递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  let parent = null;
  if (!root) {
    root = new TreeNode(val);
    return root;
  }
  const dfs = function (cur, val) {
    if (!cur) {
      let node = new TreeNode(val);
      if (parent.val > val) {
        parent.left = node;
      } else {
        parent.right = node;
      }
      return;
    }
    parent = cur;
    if (cur.val > val) {
      dfs(cur.left, val);
    }
    if (cur.val < val) {
      dfs(cur.right, val);
    }
  };
  dfs(root, val);
  return root;
};
```



##### 迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) {
    root = new TreeNode(val);
    return root;
  }
  let cur = root;
  let parent = root;
  while (cur) {
    parent = cur;
    if (cur.val < val) {
      cur = cur.right;
    } else {
      cur = cur.left;
    }
  }
  let node = new TreeNode(val);
  if (val < parent.val) {
    parent.left = node;
  }
  if (val > parent.val) {
    parent.right = node;
  }
  return root;
};
```



### [删除二叉搜索树中的节点](https://leetcode-cn.com/problems/delete-node-in-a-bst/)

#### Solution

> 有以下五种情况：
>
> - 第一种情况：没找到删除的节点，遍历到空节点直接返回了
> - 找到删除的节点
>   - 第二种情况：左右孩子都为空（叶子节点），直接删除节点， 返回NULL为根节点
>   - 第三种情况：删除节点的左孩子为空，右孩子不为空，删除节点，右孩子补位，返回右孩子为根节点
>   - 第四种情况：删除节点的右孩子为空，左孩子不为空，删除节点，左孩子补位，返回左孩子为根节点
>   - 第五种情况：左右孩子节点都不为空，则将删除节点的左子树头结点（左孩子）放到删除节点的右子树的最左面节点的左孩子上，返回删除节点右孩子为新的根节点。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  // 第一种情况：没找到删除的节点，遍历到空节点直接返回了
  if (!root) {
    return null;
  }
  if (root.val === key) {
    // 第二种情况：左右孩子都为空（叶子节点），直接删除节点， 返回NULL为根节点
    if (!root.left && !root.right) {
      return null;
    }
    // 第三种情况：其左孩子为空，右孩子不为空，删除节点，右孩子补位 ，返回右孩子为根节点
    else if (root.left && !root.right) {
      return root.left;
    }
    // 第四种情况：其右孩子为空，左孩子不为空，删除节点，左孩子补位，返回左孩子为根节点
    else if (!root.left && root.right) {
      return root.right;
    }
    // 第五种情况：左右孩子节点都不为空，则将删除节点的左子树放到删除节点的右子树的最左面节点的左孩子的位置
    // 并返回删除节点右孩子为新的根节点。
    else {
      // 找右子树最左面的节点
      let p = root.right;
      while (p.left) {
        p = p.left;
      }
      p.left = root.left;
      return root.right;
    }
  }
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  return root;
};
```



### [修剪二叉搜索树](https://leetcode-cn.com/problems/trim-a-binary-search-tree/)

#### Solution

##### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (!root) {
    return null;
  }
  if (root.val < low) {
    return trimBST(root.right, low, high);
  }
  if (root.val > high) {
    return trimBST(root.left, low, high);
  }
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
};

```



##### 迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (!root) {
    return null;
  }
  while (root && (root.val < low || root.val > high)) {
    if (root.val < low) {
      root = root.right;
    } else {
      root = root.left;
    }
  }
  let cur = root;
  while (cur) {
    while (cur.left && cur.left.val < low) {
      cur.left = cur.left.right;
    }
    cur = cur.left;
  }
  cur = root;
  while (cur) {
    while (cur.right && cur.right.val > high) {
      cur.right = cur.right.left;
    }
    cur = cur.right;
  }
  return root;
};
```



### [将有序数组转换为二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/)

#### Solution

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const dfs = function (u, left, right) {
    if (left > right) {
      return null;
    }
    let mid = left + Math.floor((right - left) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = dfs(nums, left, mid - 1);
    root.right = dfs(nums, mid + 1, right);
    return root;
  };
  let root = dfs(nums, 0, nums.length - 1);
  return root;
};
```





### [把二叉搜索树转换为累加树](https://leetcode-cn.com/problems/convert-bst-to-greater-tree/)

#### Solution

##### 反中序遍历(右中左)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let acc = 0;
  const dfs = function (u) {
    if (!u) {
      return;
    }
    dfs(u.right);
    acc += u.val;
    u.val = acc;
    dfs(u.left);
    return;
  };
  dfs(root);
  return root;
};

```



##### 迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  if (!root) {
    return null;
  }
  let acc = 0;
  let _stack = [];
  let cur = root;
  while (cur || _stack.length) {
    if (cur) {
      _stack.push(cur);
      cur = cur.right;
    } else {
      cur = _stack.pop();
      acc += cur.val;
      cur.val = acc;
      cur = cur.left;
    }
  }
  return root;
};

```

