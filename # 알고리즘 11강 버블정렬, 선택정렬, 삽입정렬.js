// 자바스크립트 기본 정렬 함수 sort
// 기본문자열은 정렬되지만 숫자는 유니코드에 의해 제대로 정렬되지 않음

function numberCompare(a,b){
  return a - b; // 양수값이면 뒤로 가고 음수면 앞으로 0이면 그대로, b - a 하면 반대로
  
}

let arr = [6, 4, 15, 10]
console.log(arr.sort(numberCompare))



// 문자열 길이순으로 정렬도 가능
function strCompare(a,b){
  return a.length - b.length;
}

let strArr = ['abc', 'abcd', 'a', 'ab'];
console.log(strArr.sort(strCompare));






// 버블 정렬 구현해보기 
// 최적화까지 구현
function bubbleSort(arr) {
  // loop i
  // loop j (which i+1)
  // compare i and j 
  // if i is greater than j then [a,b] = [b,a]
  for (var i = arr.length; i > 0; i--) {
    let swap = 0;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        swap++;
      }
      console.log(arr, arr[j], arr[j+1], swap);
    }
    // 만약 swap을 하지 않는다면 for문을 끝낸다
    if (swap === 0) { 
      break;
    }
  }
  return arr
}

console.log(bubbleSort([5,1,2,3,4])); // [1,2,3,4,5];





// 선택 정렬: 최소값을 저장해두고 앞으로 옮긴다

function selectionSort(arr) { 
  // loop i
  // arr first item = min
  // compare numbers and if its smaller than the minimum replace to array first item

  for (let i = 0; i < arr.length; i++) {
    let min = i; // 0
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j; // 1
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr
}

console.log(selectionSort([8,2,5,3,4,2,1]));

// 삽입 정렬 

function insertSort(arr){
  // 2번째 요소를 선택한다
  // 이전 요소와 비교하고 필요하면 스왑한다
  // 다음 요소로 넘어가고 반복한다
  // 배열이 정렬될 때까지 반복한다 
  for (var i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j+1] = arr[j];
      console.log('inside', j);
    }
    console.log(j);
    arr[j+1] = currentValue;
  }
  return arr;
}

console.log(insertSort([1,2,3,5,4])); // [2, 1, 3, 5] currentValue = 4