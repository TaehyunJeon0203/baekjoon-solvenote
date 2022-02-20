const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);
let N = parseInt(n);
let M = 0;
let sum = 0;
let score = new Array();
for (let i=0; i<N; i++) {
    score[i] = parseInt(arr[i]);
}
for (let i=0; i<N; i++) {
    if (score[i] > M) {
        M = score[i];
    }
}
for (let i=0; i<N; i++) {
    score[i] = (score[i] / M) * 100;
    sum += score[i];
}
let everage = sum / N;
console.log(everage);
