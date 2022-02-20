const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let nums = new Array();
for (let i=0; i<input.length; i++) {
    nums[i] = parseInt(input[i]);
}
let answer = ((nums[0] * nums[0]) + (nums[1] * nums[1]) + (nums[2] * nums[2]) + (nums[3] * nums[3]) + (nums[4] * nums[4])) % 10;
console.log(answer);