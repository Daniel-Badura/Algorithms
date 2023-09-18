// const numbers: number[] = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function mergeSort(array: number[]): number[] {
//   if (array.length === 1) {
//     return array;
//   }
//   // Split Array into left and right
//   let left: number[] = [];
//   let right: number[] = [];
//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//       left.push(array[i]);
//     } else {
//       right.push(array[i]);
//     }
//   }
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left: number[], right: number[]): number[] {
//   let merged: number[] = [];
//   while (left.length > 0 && right.length > 0) {
//     if (left[0] <= right[0]) {
//       merged.push(left.shift() as number);
//     } else {
//       if (left[0] > right[0]) {
//         merged.push(right.shift() as number);
//       }
//     }
//   }
//   while (left.length > 0) {
//     merged.push(left.shift() as number);
//   }
//   while (right.length > 0) {
//     merged.push(right.shift() as number);
//   }
//   return merged;
// }

// const answer: number[] = mergeSort(numbers);
// console.log(answer);
