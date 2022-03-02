const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = Number(n);
let answerUnit = 0;
let answerFloor = 0;
for (let i=0; i<T; i++) {
    let HWN = arr[i].split(' ');
    let count = 0;
    for (let unit=1; unit<=HWN[1]; unit++) {
        for (let floor=1; floor<=HWN[0]; floor++) {
            count++
            if (count == HWN[2]) {
                answerFloor = floor;
                answerUnit = String(unit).padStart(2, '0');
                break;
            }
        }
    }
    console.log(`${answerFloor}${answerUnit}`);
}