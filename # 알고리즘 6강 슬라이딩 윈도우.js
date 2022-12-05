// Sliding window
// 연속된 부분 배열의 합이 특정 숫자가 되는 경우의 수를 구하는 문제 O(n^2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;
  for (let i=0; i<arr.length-num+1; i++) {
    temp = 0;
    for (let j=0; j<num; j++) {
      temp += arr[i+j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// O(n) 방법

function AnotherMaxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - num];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

console.log(AnotherMaxSubarraySum([2,6,9,2,1,5,6,3], 3)); 