// 합병 정렬, 시간복잡도는 O(n log n)

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let array = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      array.push(arr1[i]);
      i++;
    } else {
      array.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    array.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    array.push(arr2[j]);
    j++;
  }
  return array;
}

console.log(merge([1,10,50], [2,14,99,100]));

// 새로운 빈배열을 만들고 arr1과 arr2의 수를 각각 비교하면서 작은 수를 빈배열에 하나씩 집어 넣는다
// [1,2,10,14,50...] 그리고 arr1의 배열이 끝나면 나머지도 넣는다 99, 100



// 재귀를 사용하는 방법
// 배열의 길이가 1 미만이 될 때까지 반으로 계속 쪼갠다 (재귀)
// base case 배열의 길이가 1 미만 되면 합병 함수로 다시 합친다
function mergeSort(arr){
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10,24,76,73,72,1,9]));
