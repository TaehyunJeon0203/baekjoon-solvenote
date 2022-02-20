const input = require('fs').readFileSync('dev/stdin').toString().trim();
const croatiaRegex = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g; 
let answer = input.replace(croatiaRegex, " ");
console.log(answer.length);

// C알파벳 각각을 정규식으로 변환하여 반복문으로 각각 지우려했지만 한 번에 지우는 방식이 더 깔끔했다.