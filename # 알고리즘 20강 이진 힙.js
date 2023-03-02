// Binary Heap(더미)
// Max Binary Heap 부모가 자식보다 무조건 크다 (왼쪽 오른쪽 순서 상관없이)
// Min Binary Heap 자식이 부모보다 무조건 크다

class BinaryHeap {
  constructor() {
    this.values = [99, 20, 15, 30, 40, 60];
  }
  insert(value) {
    this.values.push(value);
    var insertIndex = this.values.length - 1;
    var element = this.values[insertIndex];

    while (true) {
      var parentIndex = Math.floor((insertIndex - 1) / 2);
      if (this.values[parentIndex] < value) {
        this.values[insertIndex] = this.values[parentIndex];
        this.values[parentIndex] = element;
        insertIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMax() {
    // root 제거 배열의 첫번째 값
    // 배열의 마지막 값 root로 대입
    // 자식값 중 큰 값과 비교해서 작으면 swap 해주기
    // 크면 그대로 냅둠
    const end = this.values.pop();
    this.values[0] = end;

    let index = 0;
    let element = this.values[index];
    let largerSiblingIndex = 0;

    // swap
    while (true) {
      // element의 자식
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let leftChild = this.values[leftChildIndex];
      let rightChild = this.values[rightChildIndex];
      console.log(this.values, leftChildIndex, this.values.length);

      if (leftChildIndex < this.values.length) {
        if (rightChild === undefined) {
          rightChild = 0;
        }
        leftChild > rightChild
          ? (largerSiblingIndex = leftChildIndex)
          : (largerSiblingIndex = rightChildIndex);
        if (element > this.values[largerSiblingIndex]) break;
        this.values[index] = this.values[largerSiblingIndex];
        this.values[largerSiblingIndex] = element;
        index = largerSiblingIndex;
      } else {
        break;
      }
    }
  }
}

let heap = new BinaryHeap();
heap.insert(80);
console.log(heap.values);
heap.extractMax();
heap.extractMax();
console.log(heap.values);

// 우선순위 큐 Priority Queue
// Node : value, priority

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    let index = this.values.length - 1;

    // bubble up
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      let element = this.values[index];
      if (parent.priority < element.priority) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  dequeue() {
    let index = 0;
    this.values[index] = this.values.pop();

    // sink down
    while (true) {
      let element = this.values[index];
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let largerChildIndex;

      let leftChild = this.values[leftChildIndex];
      let rightChild = this.values[rightChildIndex];

      if (leftChildIndex < this.values.length) {
        if (rightChild === undefined) {
          rightChild.priority = 0;
        }
        leftChild.priority > rightChild.priority
          ? (largerChildIndex = leftChildIndex)
          : (largerChildIndex = rightChildIndex);
        if (element.priority > this.values[largerChildIndex].priority) break;
        this.swap(index, largerChildIndex);
        index = largerChildIndex;
      } else {
        break;
      }
    }
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue(2, 4);
priorityQueue.enqueue(55, 2);
priorityQueue.enqueue(1, 5);
priorityQueue.enqueue(20, 3);
priorityQueue.enqueue(15, 1);
console.log(priorityQueue.values);

priorityQueue.dequeue();
console.log(priorityQueue.values);
