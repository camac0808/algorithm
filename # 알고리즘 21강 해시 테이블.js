"z".charCodeAt(0) - 96;
let total = 0;
let char = "hello";
for (let i = 0; i < char.length; i++) {
  total += char.charCodeAt(i) - 96;
  console.log(char[i], i, total);
}

// key - value "hello"
function hash(key, arrayLen) {
  let total = 0;
  let primeNumber = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * primeNumber + value) % arrayLen;
  }
  return total;
}

// console.log(hash("hello", 10));
// console.log(hash("world", 10));
// console.log(hash("my", 10));
// console.log(hash("name", 10));
// console.log(hash("choi", 10));

// 충돌 처리를 어떻게 할까 Dealing with Collision
// 1. 배열 중첩 저장
// 2. 직선 탐색법 (저장데이터가 없는 곳까지 탐색하고 저장)

// Hash Table set/get

class HashTable {
  constructor(size=5) {
    this.size = size;
    this.table = new Array(size);
  }
  hash(key) {
    let total = 0;
    let primeNumber = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * primeNumber + value) % this.table.length;
    }
    return total;
  }
  set(key, value) {
    // accept the key and value
    // hashes the key
    // stores the key-value in the hash table array via seperate chaining

    let index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]); 
  }

  get(key) {
    // accept the key
    // hashes the key
    // retrieves the key-value from the hash table
    // if the key is not in the hash table, return undefined

    let index = this.hash(key);
    if (!this.table[index]) {
      return undefined;
    } 
    for (let value of this.table[index]) {
      if (value[0] === key) {
        return value[1];
      }
    }
  }
}

let hashTable = new HashTable();
hashTable.set("hello", "world")
hashTable.set("abc", "worddd")
hashTable.set("ddd", "worddd")
hashTable.set("hel", "worddd")
hashTable.set("hell", "worl")
console.log(hashTable.table);
console.log(hashTable.get("hellooo"));
