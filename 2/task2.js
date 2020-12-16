// --- Day 2: Password Philosophy --- (TASK 2)
const fs = require('fs'), 
input = fs.readFileSync('passwords.txt', 'utf8').trim().split('\r\n');

console.log(input.filter(line => {
    const [e,minNum, maxNum, wantedChar, pass,] = line.split(/(\d+)-(\d+) (\w): (\w+)/);
    //console.log(e,minNum, maxNum, wantedChar, pass,)
    return [...pass][minNum - 1] === wantedChar ^ [...pass][maxNum -1] === wantedChar;
}).length);