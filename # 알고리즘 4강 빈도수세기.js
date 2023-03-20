// frequency count for문 안에 indexOf(탐색) 있기때문에 O(n^2)

function same(arr1, arr2) {
  // arr1과 arr2의 길이가 같아야 한다
  if (arr1.length !== arr2.length) {
    return false;
  }
  // 길이가 같다면 arr1을 for loop해서 값을 꺼낸 뒤 제곱한다
  for (let i of arr1) {
    let square = i ** 2;
    // 굳이 includes를 쓸필요가 없었다. indexOf가 어차피 찾기 때문에
    let index = arr2.indexOf(square);
    // index가 -1이라면 (존재하지 않는다면) return false
    if (index === -1) {
      return false;
    }
    // 존재한다면 arr2에서 존재값을 하나 제거한다
    console.log(arr2);
    arr2.splice(index, 1);
  }
  return true;
}

// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,1,4]) // false
same([1, 2, 3], [4, 1, 9]); // true

// O(n) 방법 : for loop을 두번 쓰더라고 O(2n)이므로 square보다는 좋다

function anotherSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let object1 = {};
  let object2 = {};

  for (let value of arr1) {
    // object1 안에 arr1에서 꺼낸 값이 key로 존재한다면 1을 증가해주고 없다면 1을 넣어준다.
    // object1[value] = object1.hasOwnProperty(value) ? ++object1[value] : 1;
    object1[value] = ++object1[value] || 1;
  }
  for (let value of arr2) {
    // object2[value] = (object2[value] || 0) + 1
    object2[value] ? object2[value] += 1 : object2[value] = 1;
  }
  console.log(object1);
  console.log(object2);

  // object1 의 key값이 나옴 1, 2, 3
  // 두 객체의 key값이 같은지 확인한다
  for (let key in object1) {
    let square = key ** 2;
    // object2 안에 제곱key가 없다면
    // if(!(square in object2)) 로도 표현 가능.
    if (!object2.hasOwnProperty(square)) {
      console.log("hasOwnProperty");
      return false;
    }
    // 같다면 value값도 같은지 확인한다
    if (object1[key] !== object2[square]) {
      return false;
    }
  }
  return true;
}

anotherSame([1, 2, 3, 2], [1, 4, 9, 4]); // true



// 두 문자열 받아서 비교하기 - 아나그램
// 빈도수 세기로 풀기
function validAnagram(str1, str2) {
  // 두 문자 간 길이가 다르면 false
  if (str1.length !== str2.length) {
    return false;
  }
  // 빈도수를 세기 위해 문자를 객체로 옮긴다
  let obj1 = {};

  for (let i of str1) {
    // 만약 객체에 이미 존재한다면 1을 증가시킨다 없다면 1을 넣어준다
    obj1[i] = ++obj1[i] || 1;
  }
  console.log(obj1);
  
  // str2의 문자를 하나씩 꺼내서 obj1에 존재하는지 확인한다 없으면 false 있으면 1을 감소시킨다
  for (let j of str2) {
    if (!obj1[j]) {
      return false;
    } else {
      obj1[j] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram"))



// 복습
function counting(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let newArr1 = {};
  let newArr2 = {};
  for (const val of arr1) {
    newArr1[val] = newArr1.hasOwnProperty(val) ? ++newArr1[val] : 1;
    // newArr1[val] = ++newArr1[val] || 1;
    // newArr1[val] ? newArr1[val] += 1 : newArr1[val] = 1;
  }
  for (const val of arr2) {
    newArr2[val] = newArr2.hasOwnProperty(val) ? ++newArr2[val] : 1;
  }

  for (const key in newArr1) {
    if (Object.hasOwnProperty.call(newArr1, key)) {
      const value = newArr1[key];
      let square = key ** 2;
      if (!newArr2.hasOwnProperty(square)) {
        return false;
      }
      if (newArr1[key] !== newArr2[square]) {
        return false;
      }
    }
  }
  return true;
}

console.log(counting([1,2,3], [9,4,1]));


function anagramCount(str1, str2) {
  if (str1.length !== str2.length) return false;
  let obj1 = {};
  for (const key of str1) {
    obj1[key] ? obj1[key] += 1 : obj1[key] = 1;
  }
  for (const i of str2) {
    if (!obj1[i]) {
      return false;
    } else {
      obj1[i] -= 1;
    }
  }
  return true;
}

console.log(anagramCount('', '')); // true;
console.log(anagramCount('aaz', 'zza')); // false
console.log(anagramCount("anagram", "nagaram")); // true;
 
