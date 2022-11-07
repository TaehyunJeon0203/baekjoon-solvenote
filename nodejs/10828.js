const [n, ...arr] = require('fs').readFileSync('test.txt').toString().trim().split(/\s+/);
const N = n;

let stack = [];
const answer = [];

const cmdObj = {
    push: x => {
        stack.push(x);
    },
    pop: () => {
        return stack.length === 0 ? -1 : stack.pop();
    },
    size: () => {
        return stack.length;
    },
    empty: () => {
        return stack.length === 0 ? 1 : 0;
    },
    top: () => {
        return stack.length === 0 ? -1 : stack[stack.length - 1];
    }
}
for(let i=0; i<=N; i++) {
    const [cmd, num] = arr[i].trim().split(/\s/g);
    if (cmd === `push`) {
        cmdObj.push(parseInt(num));
    } else {
        answer.push(cmdObj[cmd]());
        answer += `\n`
    }
}

console.log(cmd);