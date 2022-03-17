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
// 닫히는 괄호가 먼저 나오고 열리는 괄호가 나오는 경우를 생각해야 함..
