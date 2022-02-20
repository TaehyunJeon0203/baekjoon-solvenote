const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = "";
arr.sort();
arr.sort((x, y) => x.length-y.length);
let answerSet = new Set(arr);
let answerArr = [...answerSet];
for (let i=0; i<answerArr.length; i++) {
    answer += `${answerArr[i]}\n`;
}
console.log(answer);