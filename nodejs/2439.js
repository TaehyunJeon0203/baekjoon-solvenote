const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input);
let answer = "";
for (let i=1; i<=N; i++) {
    for (let k=N-1; k>=i; k--) {
        answer += " ";
    }
    for (let j=1; j<=i; j++) {
        answer += "*";
    }
    answer += "\n";
}
console.log(answer);