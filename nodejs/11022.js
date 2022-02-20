const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);
let j = 1;
let answer = "";
for (let i=1; i<=n; i++) {
    let a = parseInt(arr[j-1]);
    let b = parseInt(arr[j]);
    answer += `Case #${i}: ${a} + ${b} = ${a + b}\n`;
    j += 2;
}
console.log(answer);