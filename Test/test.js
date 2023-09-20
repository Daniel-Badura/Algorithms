function solution(number) {
  if (number <= 3) {
    return 0;
  }
  let m3 = number / 3;
  let m5 = number / 5;
  let sum = 0;
  for (let i = 1; i < m3; i++) {
    console.log(i * 3);
    sum += i * 3;
  }
  for (let i = 1; i < m5; i++) {
    console.log(i * 5);
    if (!((i * 5) % 3 == 0)) {
      sum += i * 5;
    }
  }

  return sum;
}
