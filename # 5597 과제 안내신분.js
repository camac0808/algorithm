// 학생 명부엔 각 학생별로 1번부터 30번까지 출석번호가 붙어 있다.
// 교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 제출 안 한 학생 2명의 출석번호를 구하는 프로그램을 작성하시오.

let total = 10;
let student = [];
for(let i=1; i<=total; i++){
  student.push(i);
}

// student 에서 28명 한명씩 input 받을때마다 삭제해준다
let input = [1,2,4,5,6,7,8,10]
for (let j=0; j<input.length; j++){
  let idx = student.indexOf(input[j]);
  student.splice(idx, 1);
}

// 최대값 찾기 직접 구현
let max = 0;
for (z=0; z<student.length; z++){
  if (max < student[z]){
    max = student[z];
  } 
}

// 최소값 찾기 직접 구현
let min = student[0];
for (z=0; z<student.length; z++){
  if (min > student[z]){
    min = student[z];
  }
}

console.log(min, max)

// 최대값 최소값 함수사용
console.log(Math.min(1,2,3,4), Math.max(1,2,3,4))
console.log(Math.min(...student), Math.max(...student))

