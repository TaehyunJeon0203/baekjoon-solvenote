const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = "";
let sum = 0;
let everage;
let count = 0;
for (let i=1; i<=parseInt(input[0]); i++) {
    let cases = input[i].split(' ');
    for (let j=1; j<=parseInt(cases[0]); j++) {
        sum += parseInt(cases[j]);
    }
    everage = sum / parseInt(cases[0]);
    for (let j=1; j<=parseInt(cases[0]); j++) {
        if (parseInt(cases[j]) > everage) {
            count++
        }
    }
    let rate = (count / (cases.length -1)) * 100
    answer += `${(rate.toFixed(3))}%\n`;
    sum = 0;
    count = 0;
}git 
console.log(answer);