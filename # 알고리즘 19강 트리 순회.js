// Tree Traversal
// 모든 트리 순회법

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    // val이 root보다 작은지 큰지 비교
    // 작으면 left 크면 right
    // left에 값이 있는지 없는지 없으면 val 넣고 있으면 크기 비교
    // while 반복
    else {
      let current = this.root;
      while (true) {
        if (val == current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(val) {
    let current = this.root;
    if (current === null) return false;
    while (current) {
      if (val < current.val) {
        current = current.left;
      } 
      else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    var queue = [];
    var visited = [];
    var node = this.root;

    queue.push(node);
    while (queue.length) {
      // 큐 선입선출 push하고 shift
      node = queue.shift();
      visited.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(25);
tree.insert(15);
console.log(tree.BFS());