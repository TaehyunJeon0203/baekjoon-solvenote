const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
function gcd(a, b) {
    let r;
    while (b != 0) {
        r = a % b;
        a = b;
        b = r;
    }
    return a;
}
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
console.log(`${gcd(a, b)}\n${lcm(a, b)}`);