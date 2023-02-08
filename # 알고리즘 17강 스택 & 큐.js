// Stack 후입선출 (LIFO) 재귀 실행취소 라우팅 히스토리
// Stack은 상수 시간의 값을 가져야 하므로 push와 pop을 뒤에서 제거하는 것이 아닌 앞에 추가하고 제거한다
// 삽입 제거 O(1) 검색 접근 O(n) 배열과 달리 스택은 인덱스가 없다 (인덱스를 사용하면 O(n)이 된다)
// 스택은 배열보다 빠르다 (배열은 인덱스를 사용해야 하므로)
// 검색 접근을 할거면 차라리 배열을 사용하는게 더 빠르다
// 스택은 삽입 제거를 가장 우선시한다

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();

console.log(stack);

// Queue 선입선출
// 배열 push <-> shift , unshift <-> pop
// stack이든 queue든 insertion과 removal을 위한 것 (빅오 상수값을 가지기 위해) searching과 access는 배열로

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }
  dequeue() {
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      let current = this.first;
      this.first = current.next;
      current.next = null;
    }
    this.size--;
    return this;
  }
}

let list = new Queue();
list.enqueue(1);
list.enqueue(2);
list.enqueue(3);

list.dequeue();
list.dequeue();
list.dequeue();

console.log(list);
