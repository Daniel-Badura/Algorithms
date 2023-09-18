const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let left = [];
  let right = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let merged = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      merged.push(left.shift());
    } else {
      if (left[0] > right[0]) {
        merged.push(right.shift());
      }
    }
  }
  while (left.length > 0) {
    merged.push(left.shift());
  }
  while (right.length > 0) {
    merged.push(right.shift());
  }
  return merged;
}

const answer = mergeSort(numbers);
console.log(answer);
