const input = require('fs').readFileSync('test.txt').toString().trim().split('');
let count = new Array();
let sumCount = new Array();
for (let i=65; i<91; i++) {
    count[i] = 0;
}
for (let i=97; i<123; i++) {
    count[i] = 0;
}
for (let i=0; i<input.length; i++) { // 배열은 객체이므로 parseInt로 형변환을 해주어야 함
    count[input[i].charCodeAt(0)] = parseInt(count[input[i].charCodeAt(0)]) + 1;
}
for (let i=65; i<91; i++) {
    sumCount[i] = parseInt(count[i]) + parseInt(count[i + 32]);
}
let countSet = new Set(sumCount);
set countSetArr = [...countSet];
if ()
console.log(input[0].charCodeAt(0));
console.log(count);