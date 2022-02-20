const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = parseInt(input[0]);
let count = 0;
let finalword = new Array();
for (let i=1; i<=n; i++) {
    let word = input[i].split("");
    let wordSet = new Set(word);
    finalword.push(word[0]);
    for (let j=0; j<word.length-1; j++) {
        if (word[j] != word[j+1]) {
            finalword.push(word[j+1]);
        }
    }
    if (wordSet.size == finalword.length) {
        count++
    }
    finalword.splice(0, finalword.length);
}
console.log(count);