// 자료구조란
// 데이터를 효율적으로 관리하기 위한 데이터의 구조

class Student {
  constructor(name, age, year) {
    this.name = name;
    this.age = age;
    this.grade = year;
    this.scores = [];
    this.late = 0;
  }
  // 인스턴스 메소드
  showInfo() {
    return `${this.name} ${this.age} ${this.grade}`;
  }
  addScores(score) {
    this.scores.push(score);
    return this.scores;
  }
  lateAtSchool() {
    this.late += 1;
    if (this.late >= 3) {
      return "You are expelled";
    }
    return `${this.name} has been late ${this.late} times`;
  }
  average() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
}

const student1 = new Student("김철수", 20, 1);
console.log(student1.name);
console.log(student1.age);
console.log(student1.grade);
console.log(student1.lateAtSchool());
console.log(student1.lateAtSchool());
console.log(student1.lateAtSchool());

console.log(student1.showInfo());
console.log(student1.addScores(100));
console.log(student1.addScores(90));
console.log(student1.addScores(80));
console.log(student1.average());

// Singly linked list
// 리스트는 인덱스가 없이 데이터를 저장하는 자료구조

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
console.log(first); // Node { val: 'Hi', next: Node { val: 'there', next: Node { val: 'how', next: null } } }

class SinglyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val); // newNode = { val, next = null }
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // tail의 next에 newNode를 연결
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  travel(val) {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    this.head = this.head.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return this;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head; // pointer to the next (newNode => head)
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    // while 루프를 통해 next를 반복시킨다
    // counter를 하나씩 증가시킨다
    // counter가 원하는 인덱스값에 도달했을때 값을 반환한다
    if (index < 0 || index >= this.length) return false;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(val, index) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);
    let insertNode = new Node(val);
    let prevNode = this.get(index - 1);
    let afterNode = prevNode.next;
    prevNode.next = insertNode;
    insertNode.next = afterNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.pop();
    if (index === 0) return this.shift();

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    if (this.length === 0) return null;
    return true;
  }
  reverse() {
    // tail head prev next
    // tail과 head를 바꾼다
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    let current = this.head;
    let arr = []
    while (current) {
      arr.push(current.val)
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4)
list.reverse();
list.print()
