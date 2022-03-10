const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(n);
let answer = "";
let XY = arr.map(v => (
    { X: parseInt(v.split(' ')[0]), Y: parseInt(v.split(' ')[1])}
    ));
XY.sort((a, b) => a.Y - b.Y)
XY.sort(function(a, b) {
    if (a.Y == b.Y) {
        return a.X - b.X;
    }
})
for (let i=0; i<N; i++) {
    answer += `${XY[i].X} ${XY[i].Y}\n`;
}
console.log(answer);