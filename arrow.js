// function doubleIt(num) {
//     return num * 2;
// }
// console.log(doubleIt(5));

const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const gta5 = () => 5;

console.log(add(2, 7));
console.log(gta5());

const doMath = (x, y) => {
    const sum = x + y;
    const sub = x - y;
    const result = sum * sub;
    return result;
}
console.log(doMath(7, 5));