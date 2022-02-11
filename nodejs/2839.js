const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let a = parseInt(input);
let countFive = 0;
let countThree = 0;
let remain = a;
// 총량에서 5킬로그램부터 빼는 방식으로 구현했지만 3킬로그램부터 빼는 것이 더 효율적이다..
if (a >= 5) {
    for (let i=1; 5*i<=a; i++) {
        countFive = i;
    }
    remain = a - (5 * countFive);
    if (remain == 0) {
        console.log(countFive);
    }
    else if (remain % 3 == 0) {
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
    else if (remain % 3 != 0) {
        while (remain % 3 != 0 && remain + 5 <= a) {
            remain += 5;
            countFive -= 1;
        }
        if (remain % 3 == 0) {
            for (let j=1; 3*j<=remain; j++) {
                countThree = j;
            }
            console.log(countFive + countThree);
        }
        else {
            console.log(-1);
        }
    }
}
else {
    if (a % 3 == 0) {
        console.log(1);
    }
    else {
        console.log(-1);
    }
}