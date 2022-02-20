const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);
let j = 1;
let answer = "";
for (let i=1; i<=n; i++) {
    answer += `Case #${i}: ${parseInt(arr[j-1]) + parseInt(arr[j])}\n`;
    j += 2;
}
console.log(answer);