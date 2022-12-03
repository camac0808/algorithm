let n = 6
let r = 2

let num1 = 1;
let num2 = 1;
for (let i = 0; i < r; i++) {
  num1 *= (n - i)
  num2 *= (i + 1)
}

console.log(num1 / num2)