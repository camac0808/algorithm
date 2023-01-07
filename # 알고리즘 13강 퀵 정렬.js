// 퀵정렬 : pivot(중심점)을 정하고 작은수를 왼쪽으로, 큰수를 오른쪽으로 정렬하는 방식 (재귀)

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let index = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      index++;
      swap(arr, index, i);
    }
  }

  swap(arr, start, index);

  return index;
}

console.log(pivot([3, 4, 1, 2, 5, 1])); // arr[start]의 인덱스값이 나와야한다

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([3, 4, 1, 2, 5, 1]));
