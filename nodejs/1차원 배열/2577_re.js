const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let sum = parseInt(input[0]) * parseInt(input[1]) * parseInt(input[2]);
let sumArr = sum.toString().split('').map((str) => Number(str));
let count0 = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
for (let i=0; i<sumArr.length; i++) {
    if (sumArr[i] == 0) {
        count0++;
    }
    if (sumArr[i] == 1) {
        count1++;
    }
    if (sumArr[i] == 2) {
        count2++;
    }
    if (sumArr[i] == 3) {
        count3++;
    }
    if (sumArr[i] == 4) {
        count4++;
    }
    if (sumArr[i] == 5) {
        count5++;
    }
    if (sumArr[i] == 6) {
        count6++;
    }
    if (sumArr[i] == 7) {
        count7++;
    }
    if (sumArr[i] == 8) {
        count8++;
    }
    if (sumArr[i] == 9) {
        count9++;
    }
}
console.log(`${count0}\n${count1}\n${count2}\n${count3}\n${count4}\n${count5}\n${count6}\n${count7}\n${count8}\n${count9}\n`)