// 시간복잡도


// 글자 거꾸로 출력하기
let word = "apple"
let rev = [];
let len = 5;
for (var i=1; i<=len; i++) {
  rev.push(word.charAt(len - i))
}

rev.join('')

// 팩토리얼 구하기 
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function adding(n) {
  return n * (n + 1) / 2;
}


let time1 = performance.now();
adding(1000)
let time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1)/1000} seconds.`)

// n이 커질수록 값이 계속 커진다 O(n)
n = 1
for (let i = 0; i < Math.max(5, n); i++) {
  console.log(i);
}

// n이 아무리 커져도 5로 유지된다 O(n)
for (let j = 0; j < Math.min(5, n); j++) {
  console.log(j);
}




// 공간 복잡도
function sum(array) {
  let total = 0;
  for (let index = 0; index < array.length; index++) {
    total += array[index]
  }
  return total
}
// array가 아무리 커져도 total자체값은 하나이니 공간복잡도는 O(1)이다 constant space complexity

function double(array){
  let subArray = [];
  for (let index = 0; index < array.length; index++) {
    subArray.push(array[i] * 2)
  }
  return subArray;
}
// 입력된 array가 커질수록 공간이(length) 늘어나므로 O(n)
