// some input stuff
const fs = require('fs');
let numbers = fs.readFileSync('./input.txt', {encoding: 'utf-8'}).slice(0,-1).split('\n').map(x => parseInt(x));
// end input stuff

let adapters = {0: true}; // add the wall adapter as well
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    adapters[numbers[i]] = true;
    max = Math.max(max, numbers[i]);
}

 // dictionary mapping adapter to number of paths to finish
let paths = {[max]: 1};

// helper
const get = (index, offset) => paths[index + offset] ? paths[index + offset] : 0;

for (let i = max - 1; i >= 0; i--) {
    if (adapters[i]) {
        // sum all possible paths for an index
        paths[i] = [1,2,3].map((jump) => get(i,jump))
            .reduce((a,b) => a + b)
    }
}

console.log(paths[0]);