// # 기수 정렬 radix sort
// # 기존 비교 정렬 방식은 O(n^2)이거나 O(nlogn)으로 만들어주는 정렬 방식
// # 기수 정렬은 특정한 상황에서 조금 더 빠르다



// 자릿수에 해당하는 숫자 알아내는 헬퍼함수부터 구현한다
function getDigit(num, i) {
  // 10의 제곱수를 활용한 방법
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(getDigit(12345, 0)); // 5
console.log(getDigit(12345, 1)); // 4
console.log(getDigit(12345, 2)); // 3



// 최대 자릿수를 구하는 식
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
console.log(digitCount(1245)); // 4



// 최대 자릿수가 높은 숫자의 자릿수를 구하는 식
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log(mostDigits([1, 56, 1231])); // 4


// 최종 구현
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
    console.log(nums);
  }

}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))
