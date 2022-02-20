const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = Number(input);
let plusRoom = 6;
let now = 1;
let count = 1;

while (now<N) {
    now += plusRoom
    plusRoom += 6;
    count++;
}
console.log(count);