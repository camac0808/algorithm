let M = 500;
total = [93, 181, 245, 315, 36, 185, 138, 216, 295]
sum = 0;
max = 0;
for (let i = 0; i < total.length; i++) {
  for (let j = i+1; j < total.length; j++) {
    for (let z= j+1; z < total.length; z++) {
      sum = total[i] + total[j] + total[z];
      if (max < sum && sum <= M) {
        max = sum;
      }
    }
  }
}

console.log(max)

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

// const [N, M] = input[0].split(' ').map(Number)
// const total = input[1].split(' ').map(Number);

// let sum = 0;
// let answer = 0;
// for (let i = 0; i < N; i++) {
//   for (let j = i+1; j < N; j++) {
//     for (let z= j+1; z < N; z++) {
//       sum = total[i] + total[j] + total[z];
//       if (answer < sum && sum <= M) {
//         answer = sum;
//       }
//     }
//   }
// }

// console.log(answer)