const input = require('fs').readFileSync('test.txt').toString().trim().split(' ');
let min = parseInt(input[0]);
let max = parseInt(input[1]);
let count = 0;
let numOfSquare = 0;
let numOfNonSquare = 0;

for (let i=min; i<=max; i++) { // i = 어떤 정수
    for (let j=2; j*j<=i; j++) { // j*j == 1보다 큰 제곱수
        numOfSquare++; // i보다 작은 제곱수의 개수
        if (i % (j * j) != 0) {
            count++;     
        }
        if (i == (j * j)) {
            numOfNonSquare--;
        }
    }
    if (numOfSquare == 0 && count == 0) {
        numOfNonSquare--;
    }
    if (count = numOfSquare) {
        numOfNonSquare++;
    }
    numOfSquare = 0;
    count = 0;
}
console.log(numOfNonSquare);