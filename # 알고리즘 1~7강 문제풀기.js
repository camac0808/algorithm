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

  // arguments로 가져오는 방법
  // for (let val in arguments) {
  //   obj1[arguments[val]] = ++obj1[arguments[val]] || 1;
  // }

  for (let i in obj1) {
    if (obj1[i] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 1, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
console.log(areThereDuplicates()); // false

// 2. 다중포인터 두가지 방법
function AnotherAreThereDuplicates(...input) {
  if (!input.length) return false;

  input.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  });

  let i = 0;

  // 같은 값이 있으면 true 없으면 false;
  for (let j = 1; j < input.length; j++) {
    if (input[i] === input[j]) {
      return true;
    }
    i++;
    input[i] = input[j];
  }
  return false;
}

function AnotherAreThereDuplicates(...input) {
  input.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  });

  let start = 0;
  let next = 1;

  while (next < input.length) {
    if (input[start] === input[next]) {
      return true;
    }
    start++;
    next++;
    input[start] = input[next];
  }
  return false;
}

console.log(AnotherAreThereDuplicates(2, 1, 2, 3, 4, 5, 6, 7, 8, 8)); // true
console.log(AnotherAreThereDuplicates("b", "a", "b", "c", "c", "d", "d")); // true
console.log(AnotherAreThereDuplicates("d", "c", "b", "a")); // false

// 한줄 클리어 arguments를 객체로 바꾼다 (index는 0부터) { '0': 1, '1': 2, '2': 3, '3': 7, '4': 7, '5': 7 }
// Set는 겹치는 인수 없이 객체로 정리한다 { 1, 2, 3, 7 }
function oneliner() {
  let setter = new Set(arguments);
  console.log(arguments, arguments.length);
  console.log(setter, setter.size);
  return setter.size !== arguments.length;
}

console.log(oneliner(1, 2, 3, 7, 7, 7));





// 정렬된 정수 배열과 목표 평균이 주어지면 쌍의 평균이 목표 평균과 동일한 값 쌍이 배열에 있는지 확인합니다.
// 평균 목표와 일치하는 쌍이 둘 이상 있을 수 있습니다.
function averagePair(arr, num) {
  if (arr.length === 0) return false;

  // 두개의 포인터를 만든다
  // 두개의 포인터를 더한 값을 2로 나눈다
  // 나눈 값이 num과 같으면 true
  // 나눈 값이 num보다 크면 뒤의 포인터를 앞으로
  // 나눈 값이 num보다 작으면 앞의 포인터를 뒤로

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let average = (arr[start] + arr[end]) / 2;

    if (average === num) {
      return true;
    }
    if (average > num) {
      end--;
    } 
    else if (average < num) {
      start++;
    }
  }
  return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false


// O(N+M)
function isSubsequence(str1, str2) {
  // 왼쪽 문자열이 빈 문자열이 될 때까지 while 문을 반복한다
  // 왼쪽 문자열의 첫번째 문자와 오른쪽 문자열의 첫번째 문자를 비교한다
  // 같으면 왼쪽 문자열의 첫번째 문자를 제거하고 오른쪽 문자열의 첫번째 문자를 제거한다
  // 다르면 오른쪽 문자열의 첫번째 문자를 제거한다
  // 왼쪽 문자열이 빈 문자열이 되면 true를 반환한다
  // 왼쪽 문자열이 빈 문자열이 아니면 false를 반환한다
  let start = 0; 
  let arr1 = [...str1]
  let arr2 = Array.from(str2)
  
  while (arr2.length > 0) {
    if (arr1[start] === arr2[start]) {
      arr1.splice(start, 1)
      arr2.splice(start, 1)
    } else if (arr1[start] !== arr2[start]) {
      arr2.splice(start, 1)
    }
    
    if (!arr1.length) {
      return true;
    } 
  }
  return false;
}

console.log('isSubsequence', isSubsequence('hello', 'hello world')); // true
console.log('isSubsequence', isSubsequence('sing', 'sting')); // true
console.log('isSubsequence', isSubsequence('abc', 'abracadabra')); // true
console.log('isSubsequence', isSubsequence('abc', 'acb')); // false

