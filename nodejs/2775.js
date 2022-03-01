const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = Number(input[0]);
let k = 0;
let n = 0;
let needPerson = 0;
for (let i=1; i<T*2+1; i+=2) {
    k = Number(input[i]);
    n = Number(input[i+1]);
    const building = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

    for (let floor=0; floor<=k; floor++) { 
        for (let unit=1; unit<=n; unit++) {
            for (let nowUnit=1; nowUnit<=unit; nowUnit++) {
                if (floor == 0) {
                    needPerson = nowUnit;
                }
                else {
                    needPerson += Number(building[floor-1][nowUnit]);
                }
            }
            building[floor][unit] = needPerson;
            needPerson = 0;
        }
    }
    console.log(building[k][n]);
}