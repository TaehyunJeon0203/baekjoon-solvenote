const [n, m, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);
let sortArr = arr.sort(function(a, b)  {
    return a - b;
});
let finalArr = new Array();
let answer = 0;
let M = Number(m);
let a, b, c;
let sum;
for (let i=0; i<sortArr.length; i++) {
    a = Number(sortArr[i]);
    for (let j=i+1; j<sortArr.length; j++) {
        b = Number(sortArr[j]);
        for (let k=j+1; k<sortArr.length; k++) {
            c = Number(sortArr[k]);
            sum = a + b + c;
            finalArr.push(sum);
        }
    }
}
finalArr.sort(function(a, b)  {
    return a - b;
});
for (let i=0; i<finalArr.length; i++) {
    answer = Number(finalArr[i]);
    if (answer > M) {
        answer = Number(finalArr[i-1]);
        break;
    }
    if (answer == M) {
        break;
    }

}
console.log(answer);