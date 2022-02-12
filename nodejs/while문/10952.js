const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 1;
let answer = "";
while (i <= input.length-1) {
    let a = parseInt(input[i-1].split(' ')[0]);
    let b = parseInt(input[i-1].split(' ')[1]);
    if (a == 0 && b == 0) {
        break;
    } 
    else {
        answer += `${a + b}\n`
    }
    i++;
}
console.log(answer);