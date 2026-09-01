const nums = [2, 4, 6, 7];

const hasOdd = nums.some(n => n % 2 !== 0);
const allEven = nums.every(n => n % 2 == 0);

console.log(hasOdd, allEven);