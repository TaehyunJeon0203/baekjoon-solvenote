const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const K = Number(n);
let money = new Array();
for (let i=0; i<K; i++) {
    if (arr[i] == 0) {
        money.pop();
    }
    else {
        money.push(Number(arr[i]));
    }
}
let sum = 0;
for (let i=0; i<money.length; i++) {
    sum += Number(money[i]);
}
console.log(sum);