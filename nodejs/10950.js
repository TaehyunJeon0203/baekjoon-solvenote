const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);
let j = 1;
for (let i=1; i<=n; i++) {
    console.log(parseInt(arr[j-1]) + parseInt(arr[j]));
    j += 2;
}