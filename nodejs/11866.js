const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let N = Number(input[0]);
let K = Number(input[1]);
let circle = new Array();
let josephus = new Array();
if (K == 1 && N == 1) {
    console.log(`<1>`);
}
else {
    let KCount = 0;
    for (let i=0; i<N; i++) {
        circle[i] = i + 1;
    }
    circle = circle.map(v => ({num: parseInt(v), stat: "remain"}));
    while (josephus.length < N) {
        for (let i=0; i<N; i++) {
            if (circle[i].stat != "del") {
                KCount++;
            }
            if (KCount == K) {
                if (circle[i].stat === "del") {
                    continue;
                }
                else {
                    circle[i].stat = "del"; 
                    josephus.push(Number(circle[i].num));
                    KCount = 0;
                }
            }
        }
    }
    let answer = `<${josephus[0]}, `;
    for (let i=1; i<josephus.length-1; i++) {
        answer += `${josephus[i]}, `;
    }
    answer += `${josephus[josephus.length-1]}>`
    console.log(answer);
}