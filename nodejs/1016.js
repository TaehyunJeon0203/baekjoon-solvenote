const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let min = Number(input[0]);
let max = Number(input[1]);
let now = min;
let totalCount = max - min + 1;
let nums = new Array();
let start;

min = (min == 1) ? 2 : min;
for (let i=2; i*i<=max; i++) {
    start = parseInt(min / (i * i))
    if (i * i * start < min) {
        start++;
    }
    for (let j=start; i*i*j<=max; j++) {
        nums.push(i * i * j);
    }
}
let numsSet = new Set(nums);
let answer = [...numsSet];
console.log(totalCount - answer.length);