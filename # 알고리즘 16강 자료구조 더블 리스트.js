// Double linked list
// Single에 비해 memory가 더 든다 (next와 prev까지 저장해야 된다)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;  
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      
    }
  }
}


