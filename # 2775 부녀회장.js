const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const T = input.shift();

for (let j = 0; j < T; j++) {
  let floor = input.shift();
  let room = input.shift();
  apartment = [];

  // n층 i호
  for (let n = 0; n <= floor; n++) {
    apartment.push([1]);
    for (let i = 1; i < room; i++) {
      if (n === 0) {
        apartment[n].push(i + 1);
      } else {
        apartment[n].push(apartment[n][i - 1] + apartment[n - 1][i]);
      }
    }
  }

  room = room - 1;
  console.log(apartment[floor][room]);
}
