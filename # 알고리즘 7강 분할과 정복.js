// Divide and Conquer
// 기본 배열 인덱스값 찾기; O(n) 선형탐색
function search(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); 

// 배열이 수만개가 있다고 한다면 앞에서부터 하나씩 선형탐색 하면 오래걸리니
// 중간지점부터 탐색한다 = 이진 탐색
// 이진 탐색 Binary Search; O(log n)
function binarySearch(arr, val) {
  let min = 0; // 0
  let max = arr.length - 1; // 13

  while (min <= max) {
    let mid = Math.floor((min + max) / 2); // 6
    if (arr[mid] < val) {
      min = mid + 1;
    } else if (arr[mid] > val) {
      max = mid - 1;
    } else {
      return mid
    }
  }
  // 없으면
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 14));
