let arr = [13, 32, 533, 1, 2];
let arr2 = arr.map((item) => item * 2);
console.log(arr, arr2);
console.log(arr.forEach((item) => item * 2));
console.log(arr.filter((item) => item % 2 == 0));
arr.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});
console.log(arr);
