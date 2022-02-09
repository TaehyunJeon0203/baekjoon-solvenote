const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = input[0] * input[1][2];
let d = input[0] * input[1][1];
let e = input[0] * input[1][0];

console.log(c);
console.log(d);
console.log(e);
console.log(input[0] * input[1]);


