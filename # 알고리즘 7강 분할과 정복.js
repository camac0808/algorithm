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

console.log(search([1,2,3,4,5,6], 4)) // 5, 
// 배열이 수만개가 있다고 한다면 앞에서부터 하나씩 선형탐색 하면 오래걸리니 
// 중간지점부터 탐색한다 = 이진 탐색
// 이진 탐색 Binary Search

function binarySearch(arr, num) {
  
}
