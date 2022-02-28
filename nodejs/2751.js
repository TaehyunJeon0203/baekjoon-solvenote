const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let num = [...arr];
let answer = "";
num.sort(function(a, b)  {
    return a - b;
  });
for (let i=0; i<n; i++) {
    answer += `${num[i]}\n`;
}
console.log(answer);