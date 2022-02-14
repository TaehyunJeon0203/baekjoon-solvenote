const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = parseInt(input[0]);
let arr = [...input[1]];
let sum = 0;
for (let i=0; i<n; i++) {
    sum += parseInt(arr[i]);
}
console.log(sum);