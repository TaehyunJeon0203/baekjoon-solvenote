const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
totalScale = "";
for (i=0; i<input.length; i++) {
    totalScale += input[i];
}
if (totalScale == "12345678") {
    console.log("ascending");
}
else if (totalScale == "87654321") {
    console.log("descending");
}
else {
    console.log("mixed");
}