let instructor = {
  name: "Jane",
  age: 19,
  favoriteNumber: [1, 2, 3],
  isInstructor: true
}

// 선형 O(n)
Object.keys(instructor)
Object.values(instructor)
Object.entries(instructor)

// O(1)
instructor.hasOwnProperty("age")

// 배열은 입력 제거는 상황에 따라 다르고 탐색은 O(n) 접근은 O(1)
// push pop은 마지막 인덱스만 수정하면 되니 O(1) (가장 빠름)
// shift unshift는 첫인덱스 수정이므로 전체가 바껴서 O(n)
// concat slice splice도 마찬가지로 전체 인덱스가 바뀌므로 O(n)
// forEach, map, reduce, filter... 등 탐색류 배열함수는 O(n)
// sort는 O(N*log N)이다 (가장 느림)





// 3강. 문제해결능력

// 나만의 방식으로 문제를 재해석해라

// ex. Write a function which takes in a string and returns counts of each character in the string
// count the string for each character

// 1) simple input : charCount("aaaa") // {a: 4}
// 2) complex input : charCount("Hello there") // {h: 2, e: 3, l: 2, o: 1, t: 1, r: 1}


function charCount(str) {
  // make object to return at end
  let result = {};
  // loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    
    // if is something else (period/space/uppercase) don't do anything
    if (/[a-z0-9]/.test(char)) {
      // if the char is a number/letter AND is a key in object, then add on to value count
      if (result[char] > 0) {
        result[char]++;
      }
      // if not, add key and and set value count to 1
      else {
        result[char] = 1;
      }
    }
  }
  // return object at end
  return result;  
}

charCount("Your PIN number is 1234!")

// refactoring

function reCharCount(str) {
  let result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1
    }
  }
  // return object at end
  return result;  
}

reCharCount("Your PIN number is 1234!")

// one more refactoring 유니코드 활용하기
function reCharCountMore(str) {
  let result = {}
  for (let char of str) {
    if (isAlphaNumber(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result
}

function isAlphaNumber(char) {
  // 문자열의 index 위치의 유니코드 나타냄
  let code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // 0-9
     !(code > 64 && code < 91) && // A-Z
     !(code > 96 && code < 123)) { // a-z
    return false
    } else {
    return true;
  }
}

reCharCountMore("Your PIN number is 1234!")