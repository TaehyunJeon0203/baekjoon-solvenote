const input = require('fs').readFileSync('test.txt').toString().trim();
let big, small;
let word = new Array();
let bigLength = new Array();
let smallLength = new Array();
for (let i=65; i<91; i++) {
    big = String.fromCharCode(i);
    small = String.fromCharCode(i+32);
    word = input.split(small);
    smallLength[i-65] = word.length - 1;
    word = input.split(big);
    bigLength[i-65] = word.length - 1;
}
//console.log(word);
//console.log(smallLength);
//console.log(bigLength);

let smallMax = Math.max(...smallLength);
let bigMax = Math.max(...bigLength);
let totalMax = smallMax + bigMax;
console.log(smallMax);
console.log(bigMax);
console.log(totalMax);
