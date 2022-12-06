// 첫번째 문제 빈도수 세기
function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length != num2.length) {
    return false;
  }

  let obj1 = {};

  for (let i of num1) {
    obj1[i] = ++obj1[i] || 1;
  }

  for (let i of num2) {
    if (!obj1[i]) {
      return false;
    } else {
      obj1[i] -= 1;
    }
  }

  return true;
}

console.log(sameFrequency(1822, 2281)); // true




// 두번째 문제 빈도수 / 다중 포인터

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)

// 중복된 값이 있으면 true 없으면 false 1. 빈도수세기
function areThereDuplicates(...input) {
  if (!input.length) return false;
  // 빈도수세기 = input을 빈 객체로 옮긴다
  let obj1 = {};
  for (const i of input) {
    obj1[i] = ++obj1[i] || 1;
  }
  
  for (let i in obj1) {
    if (obj1[i] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 1, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
console.log(areThereDuplicates()) // false

// 2. 다중포인터
function AnotherAreThereDuplicates(...input) {
  if (!input.length) return false;

  let i = 0;
  for (let j = 1; j < input.length; j++) {
    if (input[i] - input[j] < 0 || input[i] !== input[j]) {
      i++;
      input[i] = input[j];
    } else {
      return true;
    }
  }
  return false;
}

console.log(AnotherAreThereDuplicates(1, 2, 3, 4, 5, 6, 7, 8, 8)) // true
console.log(AnotherAreThereDuplicates('a', 'b', 'c', 'c', 'd', 'd')) // true
console.log(AnotherAreThereDuplicates('a', 'b', 'c', 'd')) // false



// 한줄 클리어 arguments를 객체로 바꾼다 (index는 0부터) { '0': 1, '1': 2, '2': 3, '3': 7, '4': 7, '5': 7 }
// Set는 겹치는 인수 없이 객체로 정리한다 { 1, 2, 3, 7 }
function oneliner(){
  let setter = new Set(arguments)
  console.log(arguments, arguments.length);
  console.log(setter, setter.size)
}

console.log(oneliner(1,2,3,7,7,7))