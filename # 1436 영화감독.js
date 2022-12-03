// let input = require('fs').readFileSync('/dev/stdin').toString().trim()
// let n = Number(input)

let n = 187; // input값
let startNum = 665
// 666을 포함하는 숫자가 나올때마다 n값을 하나씩 빼준다
while (n > 0) {
  startNum++;
  if (startNum.toString().includes("666")) {
    n--;
  }
}

console.log(startNum)
