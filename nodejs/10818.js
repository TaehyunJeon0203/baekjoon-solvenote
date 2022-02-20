const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);
let N = parseInt(n);
let min = 1000001;
let max = -1000001;
for (let i=0; i<N; i++) {
    if (parseInt(arr[i]) < min) {
        min = parseInt(arr[i]);
    }
    if (parseInt(arr[i]) > max) {
        max = parseInt(arr[i]);
    }
}
console.log(`${min} ${max}`);