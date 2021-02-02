const num1 = [10, 12, 10, 14, 15, 16];
const num2 = [13, 2, 1, 4, 5, 6];
const num3 = [32, 22, 31, 14, 25, 26];
const num = num1.concat(num2).concat(num3);

console.log(num);

const numbers = [num1, num2, 5, num3];
const numbers2 = [...num1, ...num2, 5, ...num3];

console.log(numbers);
console.log(numbers2);

n1 = 125;
n2 = 235;
n3 = 492;
console.log(Math.max(n1, n2, n3));

console.log(...numbers2);
console.log(Math.max(...numbers2));