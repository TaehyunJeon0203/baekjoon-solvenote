const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let remainder = new Array();
for (let i=0; i<input.length; i++) {
    remainder[i] = parseInt(input[i]) % 42;
}
let remainderSet = new Set(remainder);
let answer = [...remainderSet];
console.log(answer.length);