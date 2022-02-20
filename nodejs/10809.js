const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = "";
for (let i=97; i<123; i++) {
    answer += input.search(String.fromCharCode(i)) + " ";
}
console.log(answer);