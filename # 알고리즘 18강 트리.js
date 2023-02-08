// Tree : 부모와 자식으로 이루어진 구조
// 최상단 부모 Root 자식 없는 부모 Leaf 부모가 같은 자식들 Siblings
// HTML 네트워크 라우팅 인공지능트리 폴더구조

// Binary Tree : 자식이 최대 두개인 트리
// Binary Search Tree : 왼쪽 노드가 부모보다 작음 오른쪽 노드가 부모보다 큼
// Big O = O(log n);
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
  
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(1);
console.log(tree.find(1));
