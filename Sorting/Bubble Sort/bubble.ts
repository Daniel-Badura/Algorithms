const array: number[] = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSorter(numbers:number[]) {
  let isSorted: boolean = false;
  while (!isSorted) {
    isSorted = true;

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < numbers[i - 1]) {
        [numbers[i], numbers[i - 1]] = [numbers[i - 1], numbers[i]];
        isSorted = false;
      }
    }
  }
}

bubbleSorter(array);
console.log(array);
