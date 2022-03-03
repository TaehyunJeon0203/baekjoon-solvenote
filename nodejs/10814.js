const [n, ...arr] = require('fs').readFileSync('test.txt').toString().trim().split('\n');
const N = Number(n);
let user = new Array();
for (let i=0; i<N; i++) {
    arr[i].split(' ');
}