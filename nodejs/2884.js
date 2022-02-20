const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let H = parseInt(input[0]);
let M = parseInt(input[1]);

if (M < 45) { // H가 바뀌어야 함
    if (H == 0) { // 전날로 돌아가야 함
        H = 23;
        M = 60 - (45 - M);
        console.log(`${H} ${M}`);
    }
    else { // H가 1 줄어야 함
        H--;
        M = 60 - (45 - M);
        console.log(`${H} ${M}`);
    }
}
else { // H가 변하지 않아도 됨
        M = M - 45;
        console.log(`${H} ${M}`);
}
