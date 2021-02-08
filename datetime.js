const start = new Date();
let sum = 0;
for (let i = 0; i < 10000000000; i++) {
    sum++;
}
const end = new Date();
console.log(end - start)