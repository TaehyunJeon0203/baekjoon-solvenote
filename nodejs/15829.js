const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let L = Number(input[0]);
let str = [...input[1]];
let r = 31n;
let M = 1234567891n;
let hash = 0n;
let answer = 0n;
let pow = BigInt(1);
for (let i=0; i<L; i++) {
    hash = BigInt(str[i].charCodeAt(0) - 96) * pow;
    pow *= r;
    answer += hash;
}
if (answer >= M) {
    answer %= M;
}
console.log(Number(answer));