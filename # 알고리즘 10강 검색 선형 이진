// Linear search
// indexOf, includes, find, findIndex 자바스크립트 내장 검색 함수

// indexOf 구현해보기
function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === num) return i;
  }
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
linearSearch([100], 200); // -1

// Binary search

// This function accepts a sorted array and value
// Create a left pointer at the start of the array and a right pointer at the end of the array
// While the left pointer comes before the right pointer:
// Create a pointer in the middle of the array
// If you find the value you want, then return the index
// If the value is too small, then move the left pointer up
// If the value is too large, then move the right pointer down
// If there is no value, then return -1

function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (arr[mid] !== num) {
    if (num < arr[mid]) {
      right = mid - 1;
    } else if (num > arr[mid]) {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);

    if (left > right) return -1;
  }
  return mid;
}

console.log("binarySearch", binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log("binarySearch", binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log("binarySearch", binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log("binarySearch", binarySearch([1, 2, 3, 4, 5], 6)); // -1

binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10); // 2
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95); // 16
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100); // -1

// Naive Search

function NaiveSearch(long, short) {
  // long string loop over
  // short string loop
  // check if short first string matches long string
  // count it
  // if not then move on to the next string

  let count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (long[i] === short[j]) {
        count += 1;
        i += 1;
        if (count === short.length) {
          return true;
        }
      } else if (long[i] !== short[j]) {
        count = 0;
        break;
      }
    }
  }
  return false;
}

console.log("Naive Search", NaiveSearch("lorie edlol", "lol"));
