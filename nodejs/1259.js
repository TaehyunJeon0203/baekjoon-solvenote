const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = "";
for (let i=0; i<input.length - 1; i++) {
    let str = input[i];
    let reversedStr = str.split('').reverse().join('')
    if (str == reversedStr) {
        answer += "yes\n";
    }
    else {
        answer += "no\n";
    }
}
console.log(answer);
