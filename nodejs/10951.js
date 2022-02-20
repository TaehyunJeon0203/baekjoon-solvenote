const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 1;
let answer = "";
while (i <= input.length) {
    let a = parseInt(input[i-1].split(' ')[0]);
    let b = parseInt(input[i-1].split(' ')[1]);
    if (a == null && b == null) {
        break;
    } 
    else {
        answer += `${a + b}\n`
    }
    i++;
}
console.log(answer);

// try-catch를 이용한 풀이
//while(true) {
//    try{
//        let numbers = input[i].split(' ');
//        console.log(Number(numbers[0]) + Number(numbers[1]))
//        i++;    
//    } catch {
//        break;    
//    }