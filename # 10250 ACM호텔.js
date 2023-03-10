const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const T = Number(input[0]);

// let H = 30
// let W = 50
// let N = 72
// 2차원 배열 만들어서 방을 배치해준다
// 차례로 for문 돌려서 count해준다
// count가 N값과 일치하면 콘솔

for (let t=1; t<=T; t++){
    const arr = input[t].split(' ').map(Number);
    const H = arr[0]
    const W = arr[1]
    const N = arr[2]
    let array = [];
    let count = 0;
    let row = 0;
    let col = 0;

    for (let i=0; i<W; i++){
        let room = [];
        for (let j=0; j<H; j++){
            room.push((j+1)*100 + (i+1)*1)
            count++
            if (count === N){
                row = i;
                col = j;
            }
        }
        array.push(room)
    }
    console.log(array[row][col])
}

// 더 좋은 방법
// let input = require("fs").readFileSync("ex.txt").toString().trim().split("\n");

// const T = parseInt(input[0]);
// let result = "";

for (i = 1; i <= T; i++) {
  let tmp = input[i].split(" ").map(Number);
  let H = tmp[0];
  let W = tmp[1];
  let N = tmp[2];

  num = 0;
  num = parseInt(Math.ceil(N / H)); //호수

  if (N % H === 0) {// 마지막 층은 따로 처리해야한다.
    num += H * 100; //층수
  } else {
    num += (N % H) * 100; // 층수
  }
  result += num + "\n";
}

// console.log(result);

console.log(Math.ceil(1/5))