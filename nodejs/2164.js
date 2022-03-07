const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = Number(input);
if (N == 1) {
    console.log(1);
}
else {
    let card = new Array(N-1);
    for (let i=0; i<N; i++) {
        card[i] = i+1; 
    }
    card = card.map(v => ({num: parseInt(v), status: ""}))
    const stat = ['del', 'move'];
    let delCount = 0;
    let now;
    if (N % 2 == 0) {
        now = stat[0];
    }
    else {
        now = stat[1];
    }
    for (let i=0; i<N; i+=2) {
        card[i].status = stat[0];
        delCount++;
    }
    for (let i=1; i<N; i+=2) {
        card[i].status = stat[1];
    }
    while (delCount < N-1) {
        for (let i=0; i<N; i++) {
            if (card[i].status == "del") {
                continue;
            }
            else {
                card[i].status = now;
                if (now == "del") {
                    delCount++;
                    now = stat[1];
                }
                else {
                    now = stat[0];
                }
            } 
        }
    }
    function findAnswer(v) {
        if (v.status === 'move') return true;
    };
    console.log(card.findIndex(findAnswer)+1);
}