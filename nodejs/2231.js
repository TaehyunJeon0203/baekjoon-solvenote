const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = Number(input);
let eachNum = new Array;
let nowNum;
let mader = 0;
let maded = 0;
let sumEachNum = 0;

for (let i=0; i<=N; i++) {
    nowNum = mader;
    for (let j=0; j<String(mader).length; j++) {
        eachNum[j] = nowNum % 10;
        nowNum = parseInt(nowNum / 10);
    }
    for (let j=0; j<eachNum.length; j++) {
        sumEachNum += Number(eachNum[j]);
    }
    maded = mader + sumEachNum;
    if (maded == N) {
        console.log(mader);
        break;
    }
    if (mader == N) {
        console.log(0);
        break;
    }
    sumEachNum = 0;
    mader++
}
