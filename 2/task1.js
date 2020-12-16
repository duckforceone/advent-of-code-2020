// --- Day 2: Password Philosophy --- (TASK 1)
const fs = require('fs'), 
input = fs.readFileSync('passwords.txt', 'utf8').trim().split('\r\n');

//console.log(input.toString().split(/(\d+)-(\d+) (\w): (\w+)/));

console.log(input.filter(line => {
    console.log( line );
    //const [,minNum, maxNum, letter, password,] = line.split(/(\d+)-(\d+) (\w): (\w+)/);
    //const filteredArray = [...password].filter(chk => chk === letter)
    //console.log(filteredArray);
    //return  filteredArray.length >= minNum && filteredArray.length <= maxNum;
       // return [...password].filter(chk => chk === letter).length >= minNum && [...password].filter(chk => chk === letter).length <= maxNum;
}).length);

