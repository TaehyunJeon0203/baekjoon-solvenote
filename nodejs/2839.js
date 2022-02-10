const input = require('fs').readFileSync('test.txt').toString().trim();
let a = parseInt(input);
let countFive = 0;
let countThree = 0;
let remain = a;

if (a % 5 != 0 && a % 3 == 0) {
    for (let j=1; 3*j<=remain; j++) {
        countThree = j;
    }
    if (remain % (3 * countThree) == 0) {
        console.log(countFive + countThree);
    }
    else {
        console.log(-1);
    }
}
else {
    for (let i=1; 5*i<=a; i++) {
        countFive = i;
    }
    remain = a - (5 * countFive);
    for (let j=1; 3*j<=remain; j++) {
        countThree = j;
    }
    if (remain % (3 * countThree) == 0) {
        console.log(countFive + countThree);
    }
    else {
        console.log(-1);
    }
}