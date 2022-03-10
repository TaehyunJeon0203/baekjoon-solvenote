const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(n);
function everage() {
    let sum = 0;
    for (let i=0; i<N; i++) {
        sum += Number(arr[i]);
    }
    return Math.round(sum / N);
}
function midNum() {
    arr.sort(function(a, b)  {
        return a - b;
    });
    return arr[Math.floor(arr.length / 2)];
}
function mode() {
    const counts = arr.reduce((pv, cv) => {
        pv[cv] = (pv[cv] || 0) + 1;
        return pv;
    }, {});
    const result = [];
    for (let key in counts) {
        result.push([key, counts[key]]);
    }
    result.sort(function(a, b) {
        return b[1] - a[1];
    });
    result.sort(function(a, b) {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        }
    })
    if (result.length > 1) {
        if (result[0][1] === result[1][1]) {
            return result[1][0];
        }
        else {
            return result[0][0];
        }
    }
    else {
        return result[0][0];
    }
}
function range() {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}
let answer = `${everage()}\n${midNum()}\n${mode()}\n${range()}`;
console.log(answer);