const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
for (let i=0; i<input.length; i++) {
    input[i] = parseInt(input[i]);
}
let diceSet = new Set(input);
let finalInput = [...diceSet];
let same;
let max;
let reward;

if (finalInput.length == 1) {
    reward = 10000 + (finalInput[0] * 1000);
}
else if(finalInput.length == 2) { 
    if (input[0] == input [1]) {  
        same = input[0];
    }
    else if (input[0] == input[2]) {
        same = input[0];
    }
    else if (input[1] == input[2]) {
        same = input[1];
    }
    reward = 1000 + (same * 100);
}
else {
    max = Math.max(...finalInput);
    reward = max * 100;
}
console.log(reward);

// 처음부터 same을 리턴하는 방식으로 전체 알고리즘을 짰다면 편했겠지만
// 문제 조건을 잘못 읽고 최댓값만 구하려고 짜다가 수정한 코드.. input을 a, b, c로 선언하고 세 경우의 수를
// 각각 비교하는 것이 더 편해보임