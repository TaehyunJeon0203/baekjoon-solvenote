const [n, x, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);
let N = parseInt(n);
let X = parseInt(x);
let answer = "";
for (let i=1; i<=N; i++) {
    if (parseInt(arr[i-1]) < X) {
        answer += `${parseInt(arr[i-1])} `;
    }
}
console.log(answer);