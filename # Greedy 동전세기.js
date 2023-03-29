// Greedy 동전세기
// 800원 동전 있고 500원 100원 50원 10원으로 거스름돈을 줄 때 동전의 갯수를 최소로 줄이는 방법을 구하시오

// 풀이 : 가장 큰 동전부터 거슬러 준다

function coinChange(money, coin) {
  // 풀이 : 가장 큰 동전부터 거슬러 준다
  // coin을 내림차순으로 정렬한다
  // coin의 길이만큼 반복문을 돌린다
  // money를 coin[i]로 나눈 몫을 count에 더한다
  // money를 coin[i]로 나눈 나머지를 money에 저장한다
  // count를 반환한다

  var count = 0;
  coin.sort((a, b) => b - a);
  for (let i = 0; i < coin.length; i++) {
    count += Math.floor(money / coin[i]);
    money %= coin[i];
    if (money === 0) break;
  }
  return count;
}

console.log(coinChange(800, [500, 100, 50, 10])); // return 4
console.log(coinChange(950, [500, 100, 50, 10])); // return 6

// 프로그래머스 : 체육복 문제

// 풀이 : 먼저 여벌의 체육복을 가진 학생을 찾는다 reserve
// 그 다음에 여벌의 체육복을 가진 학생의 앞뒤 학생이 체육복을 잃어버렸는지 확인한다
// 체육복을 잃어버린 학생이 여벌의 체육복을 가지고 있으면 체육복을 빌려준다
// 체육복을 빌려준 학생은 lost 배열에서 제거한다
// lost 배열의 길이를 반환한다

function solution(n, lost, reserve) {
  var answer = n;
  // 여벌의 체육복을 가진 학생을 찾는다
  let reserveStudent = reserve.filter((r) => !lost.includes(r));
  let lostStudent = lost.filter((l) => !reserve.includes(l));
  console.log(lostStudent, reserveStudent); // [2, 4] [1, 3, 5]

  // 여벌의 체육복을 가진 학생의 앞뒤 학생이 체육복을 잃어버렸는지 확인한다
  for (let i = 0; i < reserveStudent.length; i++) {
    let front = reserveStudent[i] - 1;
    let back = reserveStudent[i] + 1;

    if (lostStudent.includes(front)) {
      lostStudent.splice(lostStudent.indexOf(front), 1);
    } else if (lostStudent.includes(back)) {
      lostStudent.splice(lostStudent.indexOf(back), 1);
    }
  }
  answer -= lostStudent.length;
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // return 5
console.log(solution(5, [2, 4], [3])); // return 4
console.log(solution(3, [3], [1])); // return 2
