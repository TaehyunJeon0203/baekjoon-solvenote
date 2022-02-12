const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input);
let a, b;
let count = 0;
let firstN = N;
do {
    if (N < 10) {
        N * 10;
        b = N % 10;
        a = (N - b) / 10;
        N = (b * 10) + ((a + b) % 10);
        if (N < 10) {
            a = 0;
            b = N;
        }
    }
    else {
        b = N % 10;
        a = (N - b) / 10;
        N = (b * 10) + ((a + b) % 10);
        if (N < 10) {
            a = 0;
            b = N;
        }
    }
    count++;
} while(N != firstN)
console.log(count);