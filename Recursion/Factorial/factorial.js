function factorial(number) {
  if (number === 2) {
    return 2;
  }
  return number * factorial(number - 1);
}

let example = factorial(5);
console.log(example);
