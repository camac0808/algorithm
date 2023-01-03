// input 
// 5
// 5
// 2
// 3
// 4
// 1

// let arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
function test(arr) {
  // 중복된 값을 없앤다 
  // 1) set 이용한다
  // let set = new Set(arr)
  // let array = [...set];

  // 2) 정통 방식
  let array = [];
  for (var i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) {
      array.push(arr[i]);
      console.log(array);
    }
  }
  // 정렬한다
  array.sort((a, b) => a - b);
  console.log(array);
  // 하나씩 출력한다
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
console.log(test([10,5,5,2,3,4,1]));
// output
// 1
// 2
// 3
// 4
// 5
