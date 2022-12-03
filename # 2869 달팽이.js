// const [A, B, V] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let snail = 0;
let day = 1;

let A = 2
let B = 1
let V = 5

while (true) {
  snail += A;
  if (snail >= V) {
    console.log(day)
    break;
  }
  snail -= B;
  day++;
}

// 시간초과

console.log(Math.ceil((V - B) / (A - B)))