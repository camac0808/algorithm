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
    // newNode를 만든다
    // current를 root로 잡아준다
    // 만약 root가 없다면 root를 newNode로 넣어준다
    // root가 있다면 value와 current value값의 크기를 비교한다
    // value가 current value보다 작았을때
      // 만약 current.left가 없다면 current.left에 value를 넣어주고 return한다
      // 만약 current.left가 있다면 current에 current.left를 넣어준다

    let newNode = new Node(val);
    let current = this.root;

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      while (current) {
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
    while (current) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    // 너비 탐색
    // queue = [] data = []
    // left와 right 값을 queue에 push 이전값을 shift해서 data에 push한다
    var queue = []
    var data = [];
    var node = this.root;
    queue.push(node);
    
    while (queue.length) {
      // 큐 선입선출 shift push
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSpreOrder() {
    var data = [];
    function traversal(node) {
      data.push(node.val);
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
    }
    traversal(this.root);
    return data;
  }
  DFSpostOrder() {
    var data = [];

    function traversal(node) {
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
      data.push(node.val);
    }
    traversal(this.root);
    return data;
  }
  DFSinOrder() {
    var data = [];

    function traversal(node) {
      if (node.left) traversal(node.left);
      data.push(node.val);
      if (node.right) traversal(node.right);
    }
    traversal(this.root);
    return data;
}}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
console.log(tree.BFS()) // [10, 6, 3, 8, 15, 20]
console.log(tree.DFSpreOrder()); // [10, 6, 3, 8, 15, 20]
console.log(tree.DFSpostOrder()); // [3, 8, 6, 20, 15, 10]
// console.log(tree.DFSinOrder()); // [10, 6, 3, 8, 15, 20]