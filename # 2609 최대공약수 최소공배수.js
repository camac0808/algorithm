// const [num1, num2] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let num1 = 18;
let num2 = 24;

let N = 0;
if (num1 > num2) {
  N = num1;
} else {
  N = num2;
}

let 최대공약수 = [];
let 최소공배수 = [];

for (let i = 1; i <= N; i++) {
  if (num1 % i === 0 && num2 % i === 0) {
    최대공약수.push(i);
  }
}

for (let j = N; j <= num1 * num2; j++) {
  if (j % num1 === 0 && j % num2 === 0) {
    최소공배수.push(j);
  }
}

console.log(Math.max(...최대공약수));
console.log(Math.min(...최소공배수));

// 유클리드 호제법 활용
// 분자를 분모로 나눈 나머지가 0이면 최대공약수
// 나머지가 0이 아니면 분모를 나머지로 나눈 나머지를 분자로 나눈 나머지를 분모로 나눈 나머지가 0이면 최대공약수
// function 최대공약수(a, b) {
//   return a % b === 0 ? b : 최대공약수(b, a % b);
// }

function solution(numer1, denom1, numer2, denom2) {
  // 분모
  let denom = denom1 * denom2;
  // 분자
  let numer = numer1 * denom2 + numer2 * denom1;
  let gcb = 최대공약수(numer, denom);
  return [numer / gcb, denom / gcb];
}

