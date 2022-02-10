const input = require('fs').readFileSync('test.txt').toString().trim().split(' ');
let min = parseInt(input[0]);
let max = parseInt(input[1]);
let numOfTotal = max - min + 1;
let count = 0;
let numOfNonSquare = 0;

if (min == 1) {
    min = 2;
}
// 4, 9, 16, 25, 36, 49, 64, 81, 100
for (let i=min; i*i<=max; i++) {
    for (let j=1; i*i*j<= max; j++) {
        count++;
    }
    for (let k=i; k>=min; k--) {
        if ((i * i) % (k * k) == 0) {
            count--;
        }
    }
    count++;
}

console.log(count);
numOfNonSquare = numOfTotal - count;
console.log(numOfNonSquare);