const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let R;
let answer = "";
for (let i=0; i<input.length; i++) {
    let inputArr = [...input[i]];
    R = parseInt(inputArr[0]);
    if (inputArr[2] != undefined) {
        for (let j=2; j<inputArr.length; j++) {
            for (let k=0; k<R; k++) {
                answer += inputArr[j];
            }
        }
        answer += "\n";
    }
}
console.log(answer);