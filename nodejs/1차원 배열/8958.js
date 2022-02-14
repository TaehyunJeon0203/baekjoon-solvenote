const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;
let score = 0;
let answer = "";
for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr[i].length; j++) {
        if (arr[i].substring(j, j+1) == "O") {
            count++;
            score += count;
        }
        if (arr[i].substring(j, j+1) == "X") {
            count = 0;
        }
    }
    answer += `${score}\n`;
    count = 0;
    score = 0;
}
console.log(answer);
