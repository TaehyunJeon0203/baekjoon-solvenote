const input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

for (let i=0; i<input.length; i++) {
    if (input[i] === ".") {
        console.log("yes");
    }
    else if (input[i].match(/\(/g)?.length === input[i].match(/\)./g)?.length && input[i].match(/\[/g)?.length === input[i].match(/\]/g)?.length) {
        console.log("yes");
    }
    else {
        console.log("no");
    }
}
// 닫히는 괄호가 먼저 나오고 열리는 괄호가 나오는 경우를 생각해야 함
// case1 : 문장이 .으로만 이루어진 경우
// case2 : )이 먼저 나오는 경우 (no)
// case3 : (이 나온 후 ) 이 나오는 경우 (yes)
// case4 : (이 나온 후 ) 이 나오지 않는 경우 (no)
// 대괄호도 마찬가지
