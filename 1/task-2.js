const fs = require('fs');
const file = 'values.txt'

let data = fs.readFileSync(file, 'utf-8').split('\r\n').map(Number)


console.log(typeof data[1]);
for (let i = 0; i < parsed.length; i++) 
    for(let j = 0; j < parsed.length; j++) 
        for(let k = 0; k < parsed.length; k++) 
            if (parsed[i] + parsed[j] + parsed[k] === 2020) return ( console.log(`POGGERS: Numbers are ${parsed[i]}, ${parsed[j]} and ${parsed[k]} = ${ parsed[i] + parsed[j] + parsed[k] }. That means the solution is ${ parsed[i] * parsed[j] * parsed[k] }`) )  