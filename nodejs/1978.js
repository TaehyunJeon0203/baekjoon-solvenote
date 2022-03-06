const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);
const N = Number(n);
let count = 0;
for (let i=0; i<N; i++) {
    if (arr[i] != 1) {
        let j = 2
        let trueFalse;
        while (j * j <= arr[i]) {
            if (arr[i] % j == 0) {
                trueFalse = false;
            } 
            j++;  
        }
        if (trueFalse != false) {
            count++;
        }
    }
}
console.log(count);