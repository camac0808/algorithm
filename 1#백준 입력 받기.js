//한 줄 입력

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}

//여러 줄 입력

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// map(Number) 뒤에 붙이면 숫자로 변환

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i].split(' '));
  }
}

for (let i = 0; i < numbers.length; i++){
  let num1 = Number(numbers[i][0]);
  let num2 = Number(numbers[i][1]);

  console.log(num1 + num2);
}