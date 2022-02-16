const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let output = 0;
for (let i=0; i<input.length; i++) {
    if (input[i] == "A" || input[i] == "B" || input[i] == "C") {
        output += 3;
    }
    else if (input[i] == "D" || input[i] == "E" || input[i] == "F") {
        output += 4;
    }
    else if (input[i] == "G" || input[i] == "H" || input[i] == "I") {
        output += 5;
    }
    else if (input[i] == "J" || input[i] == "K" || input[i] == "L") {
        output += 6;
    }
    else if (input[i] == "M" || input[i] == "N" || input[i] == "O") {
        output += 7;
    }
    else if (input[i] == "P" || input[i] == "Q" || input[i] == "R" || input[i] == "S") {
        output += 8;
    }
    else if (input[i] == "T" || input[i] == "U" || input[i] == "V") {
        output += 9;
    }
    else if (input[i] == "W" || input[i] == "X" || input[i] == "Y" || input[i] == "Z") {
        output += 10;
    }
}
console.log(output);