const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const nNum = input[1].split(' ');
const mNum = input[3].split(' ');
let answer = "";
nNum.sort(function(a, b) {
    return a - b;
})
mNum.forEach(element => {
    let left = 0;
    let right = nNum.length;
    let result = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (element === nNum[mid]) {
            result = 1;
            break;
        }
        if (Number(element) < Number(nNum[mid])) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    answer += `${result}\n`;
})
console.log(answer);
