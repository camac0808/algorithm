// indexOf, includes, find, findIndex 자바스크립트 내장 검색 함수

// indexOf
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1



// includes

const arr = [1, 2, 3];

console.log(arr.includes(2)); // true
console.log(arr.includes(4)); // false



// find 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12



// findIndex 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환

console.log(array1.findIndex((element) => element > 13));
// expected output: 3