
const input = require('fs').readFileSync('dev/stdin').toString().split(/\n/g);
const N = input[0];

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
for(let i=1; i<=N; i++) {
    const [cmd, num] = input[i].trim().split(/\s/g);
    if (cmd === `push`) {
        cmdObj.push(parseInt(num));
    } else {
        answer.push(cmdObj[cmd]());
    }
}
console.log(answer.join(`\n`));