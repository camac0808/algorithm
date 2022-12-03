// //input
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
// let [N, nums, count] = input.split(" ");

// let counter = nums.filter(el => count === el).length
// console.log(counter);

function fibonacciGenerator (n) {
    if (n===1){
        arr = [0]
    } else if (n===2) {
        arr = [0, 1]
    } else {
        arr = [0, 1]
        previous = 0
        current = 1
        
        for (i=2; i<n; i++){
            next = previous + current;
            previous = current;
            current = next;
            arr.push(next);
        }
    }
    return arr;
}

fibonacciGenerator(20)