// const [num1, num2] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let num1 = 18;
let num2 = 24;

let N = 0;
if (num1 > num2) {
  N = num1;
} else {
  N = num2;
}

let 최대공약수 = []
let 최소공배수 = []

for (let i = 1; i <= N; i++) {
  if (num1 % i === 0 && num2 % i ===0) {
    최대공약수.push(i);    
  }
}

for (let j = N; j <= num1*num2; j++) {
  if (j % num1 === 0 && j % num2 === 0) {
    최소공배수.push(j);
  }
}

console.log(Math.max(...최대공약수))
console.log(Math.min(...최소공배수))