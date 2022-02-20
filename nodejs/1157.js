const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let count = new Array();
let sumCount = new Array();
for (let i=0; i<26; i++) {
    count[i] = 0;
}
for (let i=32; i<58; i++) {
    count[i] = 0;
}
for (let i=0; i<input.length; i++) {
    count[input[i].charCodeAt(0) - 65] = parseInt(count[input[i].charCodeAt(0) - 65]) + 1;
}
for (let i=0; i<26; i++) {
    sumCount[i] = parseInt(count[i]) + parseInt(count[i + 32]);
}
let maxOfSumCount = Math.max(...sumCount);
let Cnt = 0;
let charCode;
for (let i=0; i<sumCount.length; i++) {
    if (sumCount[i] == maxOfSumCount) {
        Cnt++;
        charCode = i;
    }
}

if (Cnt == 1) {
    console.log(String.fromCharCode(charCode+65));
}
else {
    console.log("?");
}
 