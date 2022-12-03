// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// input.shift();

numbers = [9, 2, 3, 4, 5, 5, 2, 6, 8]

// numbers.sort();
// numbers.map(num => console.log(num))

const max = Math.max(...numbers);

const array = new Array(max+1)
array.fill(0)

for (let i = 0; i < numbers.length; i++) {
  array[numbers[i]]++
}
// [0, 0, 2, 1, 1, 2, 1, 0, 1, 1]

let newArr = []
for (let i = 0; i < array.length; i++) {
  if(array[i]){
    for (let j = 0; j < array[i]; j++) {
      newArr.push(i)
    }
  }
}
console.log(array)
console.log(newArr)