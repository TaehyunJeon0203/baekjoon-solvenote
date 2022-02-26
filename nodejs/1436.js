const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = Number(input);
let nowNum = 665;
let count = 0
while (count < N) {
    nowNum += 1;
    if (String(nowNum).includes("666") == true) {
        count++;
    }
}
console.log(nowNum);