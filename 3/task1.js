/*
 <--- Advent of Code: Day 03: Toboggan Trajectory (TASK 1) --->
 */

const fs = require('fs');

// read todays task
const data = fs.readFileSync('task.txt', 'utf-8').trim();

// split each line, so we can have each row as a seperate array
const input = data.split('\r\n')

//console.log(line);

let playerPos = 0; 
let treesHit = 0;

input.forEach(line => {
    const char = line.split('');
    if (char[playerPos % 31] === '#')
        treesHit++;
    playerPos += 3
})

console.log(`You've hit ${treesHit} trees on the way down!`)
//console.log(allLines.length);

