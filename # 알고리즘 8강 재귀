// Recursion 재귀
// 1. 재귀란?
// - 함수가 자기 자신을 호출하는 것

function countDown(num) {
  // base case
  if (num <= 0) {
    console.log('Done!');
    return;
  }

  // recursive case
  console.log(num);
  num--;
  countDown(num);
}

console.log('countDown', countDown(5));

function sumRange(num) {
  if (num === 1 ) return 1;
  return num + sumRange(num - 1);
}

console.log('sumRange', sumRange(4));

function factorial(num) {
  // base case
  if (num === 1 ) return 1;
  // recursive case
  return num * factorial(num - 1);
}

console.log('factorial', factorial(4));


// 헬퍼 사용법 helper method recursion
function collectOddValues(arr) {
  let result = [];
  
  function helper(arr) {
    // base case
    if (arr.length === 0) return;

    // recursive case
    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }
    helper(arr.slice(1));
  }

  helper(arr);

  return result;
}

console.log('collectOddValues', collectOddValues([1,2,3,4,5,6,7,8,9]));



// 순수 재귀 사용법 pure recursion
function collectOddValuesPure(arr) {
  let result = [];

  // base case
  if (arr.length === 0) return result;

  // recursive case
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  result = result.concat(collectOddValuesPure(arr.slice(1)));

  return result;
}

console.log('collectOddValuesPure', collectOddValuesPure([1,2,3,4,5,6,7,8,9]));


