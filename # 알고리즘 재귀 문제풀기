function power(num, pow) {
  // base case
  if (pow === 0) return 1;
  // recursion case
  return num * power(num, pow - 1);
}

console.log("power", power(2, 0)); // 1
console.log("power", power(2, 2)); // 4
console.log("power", power(2, 4)); // 16

function factorial(num) {
  if (num < 0) return 0;
  // base case
  if (num <= 1) return 1;
  // recursion case
  return num * factorial(num - 1);
}

console.log("factorial", factorial(1)); // 1
console.log("factorial", factorial(2)); // 2
console.log("factorial", factorial(4)); // 24
console.log("factorial", factorial(7)); // 5040

function productOfArray(arr) {
  // base case
  if (arr.length === 0) return 1;
  // recursion case
  return arr[0] * productOfArray(arr.slice(1));
}

console.log("productOfArray", productOfArray([1, 2, 3])); // 6
console.log("productOfArray", productOfArray([1, 2, 3, 10])); // 60

function recursiveRange(num) {
  // base case
  if (num === 1) return 1;
  // recursive case
  return num + recursiveRange(num - 1);
}

console.log("recursiveRange", recursiveRange(6)); // 21
console.log("recursiveRange", recursiveRange(10)); // 55

function fib(num) {
  // base case
  if (num <= 2) return 1;
  // recursion case
  return fib(num - 1) + fib(num - 2);
}

// 1, 1, 2, 3, 5, 8, 13, ...
console.log("fib", fib(4)); // 3
console.log("fib", fib(10)); // 55
console.log("fib", fib(28)); // 317811
console.log("fib", fib(35)); // 9227465

function reverse(str) {
  // base case
  if (str.length <= 1) return str;
  // recursion case
  return reverse(str.slice(1)) + str[0];
}

console.log("reverse", reverse("awesome"));
console.log("reverse", reverse("rithmschool"));
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function isPalindrome(str) {
  // base case
  if (str[0] !== str[str.length - 1]) return false;
  if (str.length <= 1) return true;
  // recursion case
  return isPalindrome(str.slice(1, -1));
}

console.log("isPalindrome", isPalindrome("awesome")); // false
console.log("isPalindrome", isPalindrome("tacocat")); // true
console.log("isPalindrome", isPalindrome("amanaplanacanalpanama")); // true
console.log("isPalindrome", isPalindrome("amanaplanacanalpandemonium")); // false

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const isOdd = (val) => val % 2 !== 0; // 홀수

function someRecursive(arr, func) {
  // base case
  if (arr.length === 0) return false;
  if (func(arr[0])) return true;
  // recursion case
  return someRecursive(arr.slice(1), func);
}

console.log("someRecursive", someRecursive([1, 2, 3, 4], isOdd));
console.log("someRecursive", someRecursive([4, 6, 8, 9], isOdd));
console.log("someRecursive", someRecursive([4, 6, 8], isOdd));
console.log(
  "someRecursive",
  someRecursive([4, 6, 8], (val) => val > 10)
);

function flatten(arr) {
  let newArr = [];

  for (const i of arr) {
    if (Array.isArray(i) === true) {
      newArr = newArr.concat(flatten(i));
    } else if (Array.isArray(i) === false) {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// 각 문자의 앞글자를 대문자로 바꾸세요
function capitalizeFirst(arr) {
  let newArr = [];

  // base case
  if (arr.length === 0) return newArr;
  
  let upper = arr[0].charAt(0).toUpperCase();
  let rest = arr[0].slice(1);
  upper = upper.concat(rest);
  newArr.push(upper);
  console.log(newArr);

  // recursion case
  return newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']



// 객체가 포함된 짝수의 합을 구하시오 
function nestedEvenSum (obj) {
  let sum = 0;
  for (let i in obj) {
    if (typeof(obj[i]) === 'object') {
      sum = sum + nestedEvenSum(obj[i]);
    }
    else if (typeof(obj[i]) === 'number') {
      if (obj[i] % 2 === 0) {
        sum += obj[i];
      }
    }
  }
  return sum;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
nestedEvenSum(obj2); // 10


// 문자가 담긴 배열을 파라미터로 보내고 대문자로 바꾸세요
function capitalizeArray(arr) {
  let newArr = [];
  // base case
  if (arr.length === 0) return newArr;
  
  // recursive case
  if (arr.length > 0) {
    newArr.push(arr[0].toUpperCase());
    return newArr = newArr.concat(capitalizeArray(arr.slice(1)));
  }
}

console.log(capitalizeArray(['apple', 'orange', 'banana'])); // [ 'APPLE', 'ORANGE', 'BANANA' ]



// 객체를 넣어서 숫자를 다 문자로 바꾸세요

function stringifyNumbers(obj) {
  let newObj = {};

  for (let key in obj) {
      let value = obj[key];

      if (typeof(value) === 'object' && !Array.isArray(value)) {
        newObj[key] = stringifyNumbers(value);
      }

      else if (typeof(value) === 'number') {
        newObj[key] = value.toString();
      }
      else {
        newObj[key] = value
      }
  }
  return newObj;
}

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/


// 객체를 받고 문자열만 추출해서 배열을 리턴한다 

function collectStrings(obj) {
  let arr = [];

  for (const key in obj) {
    let value = obj[key];

    if (typeof(value) == "string") {
      arr.push(value);
    }
    // recurse
    else if (typeof(value) == "object") {
      arr = arr.concat(collectStrings(value))
    }
    // base case
  }
  return arr;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])

