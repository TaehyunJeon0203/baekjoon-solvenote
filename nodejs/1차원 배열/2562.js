const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let max = 0;
let count;
for (let i=0; i<9; i++) {
    if (parseInt(input[i]) > max) {
        max = parseInt(input[i]);
    }
}
for (let j=0; j<9; j++) {
    if (parseInt(input[j]) == max) {
        count = j + 1;
        break;
    }
}
console.log(`${max}\n${count}`);