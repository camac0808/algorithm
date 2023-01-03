// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
// input.sort((a,b) => a-b);
// console.log(input[1])

// 세 정수가 주어진다. 두번째로 큰 정수를 출력하시오

function test(arr) {
  // for loop 
  // 가장 큰 값을 max로 설정
  // 가장 작은 값을 min으로 설정
  // 나머지 값 구하기
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    } else if (arr[i] > max) {
      max = arr[i]
    }
  }
  // arr.splice(min, 1)
  // arr.splice(max, 1);
  // return arr
  let filterArr = arr.filter(element => element !== min && element !== max);
  return filterArr
}

console.log(test([3,2,1]));