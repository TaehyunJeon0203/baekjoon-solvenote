const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input);
let answer = ""
for (let i=N; i>=1; i--) {
    answer += i + "\n";
}
console.log(answer);