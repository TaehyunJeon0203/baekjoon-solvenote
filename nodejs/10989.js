const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(n);
let answer = "";
arr.sort(function(a, b)  {
    return a - b;
  });
for (let i=0; i<N; i++) {
    answer += `${arr[i]}\n`;
}
console.log(answer);