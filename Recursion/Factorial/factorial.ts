function factorialRecursive (number: number): number {
    if (number === 2) {
      return 2;
    }
    return number * factorialRecursive(number - 1);
  }
  
  let examples: number = factorialRecursive(5);
  console.log(examples);