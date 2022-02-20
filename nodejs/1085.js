const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let x = Number(input[0]);
let y = Number(input[1]);
let w = Number(input[2]);
let h = Number(input[3]);
let xDistance = (x > w - x) ? w - x : x;
let yDistance = (y > h - y) ? h - y : y;
if (xDistance < yDistance) {
    console.log(xDistance);
}
else if (yDistance < xDistance) {
    console.log(yDistance);
}
else if (yDistance == xDistance) {
    console.log(xDistance);
}