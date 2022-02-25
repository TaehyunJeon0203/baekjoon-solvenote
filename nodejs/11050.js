const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let n = Number(input[0]);
let k = Number(input[1]);
let nf = 1;
let kf = 1;
let nmf = 1;
let answer;
if (0 <= k  && k <= n) {
    for (let i=1; i<=n; i++) {
        nf *= i;
    }
    for (let i=1; i<=k; i++) {
        kf *= i;
    }
    for (let i=1; i<=n-k; i++) {
        nmf *= i;
    }
    answer = nf / (kf * nmf);
    console.log(answer);
}
else {
    console.log(0);
}
