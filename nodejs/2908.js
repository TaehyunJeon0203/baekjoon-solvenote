const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let a = parseInt(input[0].split("").reverse().join(""));
let b = parseInt(input[1].split("").reverse().join(""));
if (a < b) {
    console.log(b);
}
else if (a > b) {
    console.log(a);
}

