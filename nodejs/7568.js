const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(n);
let answer = "";
let dungchi = arr.map(v => ({weight: parseInt(v.split(' ')[0]), height: parseInt(v.split(' ')[1]), rank: 1}));
for (let i=0; i<N; i++) {
    for (let j=0; j<N; j++) {
        if (dungchi[i].height < dungchi[j].height && dungchi[i].weight < dungchi[j].weight) {
            dungchi[i].rank++;
        }
    }
    answer += `${dungchi[i].rank} `;
}
console.log(answer);