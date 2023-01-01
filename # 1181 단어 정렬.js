word = [1, 'but', 'i', 'wont', 'wont', 'hesitate', 'no', 'ao', 'ax', 14, 13, 10]
let filterNumber = word.filter(el => typeof(el) !== 'number')
// // filterNumber = ["but", "hesitate", "i", "no", "wont"]

sort_list = new Set(filterNumber)
let arr = [...sort_list]
// let arr = Array.from(new Set(filterNumber))

// 숫자를 정렬하거나 단어를 길이순으로 정렬할 때는 이 방식으로 해줘야 한다.
console.log(arr.sort((a,b) => {
  // 길이순 정리
  if (a.length > b.length) return 1
  if (a === b) return 0;
  if (a.length < b.length) return -1
  // 사전순 정리
  if (a > b) return 1;
  if (a < b) return -1;
}))

// arr.forEach(el => console.log(el))