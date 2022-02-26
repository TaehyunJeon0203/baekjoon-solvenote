const [...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let triangle = new Array();
for (let i=0; i<arr.length-1; i++) {
    triangle[i] = arr[i].split(' ');
    triangle[i].sort(function(a, b)  {
        return a - b;
      });
    let a = triangle[i][2] * triangle[i][2];
    let b = triangle[i][0] * triangle[i][0];
    let c = triangle[i][1] * triangle[i][1];
    if (a == b + c) {
        console.log("right");
    }
    else {
        console.log("wrong");
    }
}
