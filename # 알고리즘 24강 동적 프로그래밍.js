// 동적 프로그래밍
// 피보나치 수열을 동적 프로그래밍으로 구현
// 큰 문제를 하위 문제로 나누어 푸는 방식
// Memoization : 하위 문제의 답을 저장해두는 방식
// 시간복잡도는 O(2^n)이지만 Memoization을 통해 O(n)으로 줄일 수 있다.

// 피보나치 수열
function fib(n) {
  // n이 1일 경우 1을 반환해라
  if (n <= 1) return n;
  // n이 2 이상일 경우 n-1과 n-2의 합을 반환해라
  if (n >= 2) return fib(n - 1) + fib(n - 2);
}

function DinamicFib(n, memo=[]){
  if (memo[n] !== undefined) return memo[n]
  if (n <= 2) return 1;
}