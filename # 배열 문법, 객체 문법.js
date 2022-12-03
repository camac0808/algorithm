/////////////////////////// Array /////////////////////////////

const arr = [1, 2, 3, 4, 3];
// 배열 안에 포함되어 있는지 확인
const item1 = arr.includes(1); // true
const item2 = arr.includes(5); // false

// 배열 안 인덱스 찾기
const idx1 = arr.indexOf(3)
const idx2 = arr.lastIndexOf(3)
console.log(idx2)

// 배열 안 요소 삭제
let popResult = arr.pop(); // 3
let shiftResult = arr.shift() // 1 
console.log(popResult, shiftResult, arr) // [2, 3, 4]

// splice 메소드는 배열의 기존 요소를 삭제하거나 추가한다 기존배열이 변경된다
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

const array = [1, 2, 3, 4]
const spliceResult = array.splice(1, 2) // 1인덱스부터 2개 / 2, 3
const spliceResult1 = array.splice(0) // 0인덱스부터 다 삭제 
console.log(array) // null

// 배열 안 특정요소 삭제 
let arrays = [1,2,3,4,5,6,7,8,9,10]

for(let i=0; i<arrays.length; i++){
    if(arrays[i]===5){
        arrays.splice(i, 1);
    }
}
console.log(arrays)

// slice메소드는 begin부터 end까지 새로운 배열을 반환한다. 원본배열은 변하지 않는다
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]



/////////////////////////// Object /////////////////////////////

var obj = {a: 1, b: 2}
Object.keys(obj) // ['a','b']
Object.keys(obj).includes('a') // true
obj.hasOwnProperty('a') // true
Object.hasOwn(obj, 'a') // true
Object.values(obj) // [1, 2]