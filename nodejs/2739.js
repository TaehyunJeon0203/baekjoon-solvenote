const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let a = input;
for (let i=1; i<10; i++) {
    console.log(`${a} * ${i} = ${a * i}`);
}