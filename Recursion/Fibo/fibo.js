function fibo(number) {
  if (number < 2) {
    return 1;
  }
  return fibo(number - 1) + fibo(number - 2);
}

let example = fibo(10); // expected 89
console.log(example);
