const fs = require('fs')
const file = 'values.txt'

let data = fs.readFileSync(file, 'utf-8').split('\r\n').map(Number)


console.log(typeof data[1]);

for (let i = 0; i < data.length; i++) 
   for(let j = 0; j < data.length; j++) 
       if (data[i] + data[j] === 2020) return ( console.log(`POGGERS: Numbers are ${data[i]} and ${data[j]} = ${ data[i] + data[j] }. That means the solution is ${ data[i] * data[j] }`) )
