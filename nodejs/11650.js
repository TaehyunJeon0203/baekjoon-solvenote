const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(n);
let answer = "";
let XY = arr.map(v => (
    { X: parseInt(v.split(' ')[0]), Y: parseInt(v.split(' ')[1])}
    ));
XY.sort((a, b) => a.X - b.X)
XY.sort(function(a, b) {
    if (a.X == b.X) {
        return a.Y - b.Y;
    }
})
for (let i=0; i<N; i++) {
    answer += `${XY[i].X} ${XY[i].Y}\n`;
}
console.log(answer);