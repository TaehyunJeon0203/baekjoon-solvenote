const [n, x, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);
let hourNow = parseInt(n);
let minNow = parseInt(x);
let needTime = parseInt(arr);

let totalNow = (hourNow * 60) + minNow;
let finishTime = totalNow + needTime;

let hourFinish = parseInt(finishTime / 60);
let minFinish = finishTime - (60 * hourFinish);
if (hourFinish >= 24) {
    hourFinish = hourFinish - 24; 
}
console.log(`${hourFinish} ${minFinish}`);