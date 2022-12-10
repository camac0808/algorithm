// multiply pointer 배열이 sorted 되어있어야 한다
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 4]));

// countUniqueValues
// 정렬된 숫자배열, 배열에서 고유값이 몇개 있는지 세기, 음수 있을 수 있음
function countUniqueValues(arr) {
  let i = 0;
  let count = 1;

  // if there is no values in array, or only one value
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return 1;
  }
  // while arr[i] to the end
  while (i < arr.length) {
    // compare each numbers and if negative then count + 1
    if (arr[i] - arr[i + 1] < 0) {
      count++;
      i++;
    } else {
      // if not, just progress i++
      i++;
    }
  }
  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1])); // 1
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([1, 2, 3, 4, 5, 5, 5, 12, 13, 14, 14])); // 8



// arr[i]의 값을 바꾸면서 올라가는 방법
function AnotherCountUniqueValues(arr) {
  let i = 0;

  if (arr.length === 0) {
    return 0;
  }
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] - arr[j] < 0) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(AnotherCountUniqueValues([1,2,3,3])); // 2
