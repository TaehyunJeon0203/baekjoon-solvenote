const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let A = Number(input[0]);
let B = Number(input[1]);
let V = Number(input[2]);
let oneDayClimb = A - B;
let count = parseInt(V / oneDayClimb) - A;
let presentWeight = oneDayClimb * count;
while (true) {
    presentWeight += A;
    if (presentWeight >= V) {
        count++;
        break;
    }
    else {
        presentWeight -= B;
    }
    count++;
}
console.log(count);