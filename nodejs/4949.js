const input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

for (let i=0; i<input.length; i++) {
    if (input[i] === ".") {
        console.log("yes");
    }
    else if (input[i].match(/\(/g)?.length === input[i].match(/\)./g)?.length && input[i].match(/\[/g)?.length === input[i].match(/\]/g)?.length) {
        console.log("yes");
    }
    else {
        console.log("no");
    }

    
}
