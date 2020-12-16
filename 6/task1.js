const data = require('fs').readFileSync('input.txt', 'utf-8')
var input = require('fs').readFileSync("./input.txt", { encoding: "utf-8" }).split("\r\n\r\n").map(x => x.split("\r\n").sort((a, b) => b.length - a.length))
console.log(input);
/* --- Advent of Code --- */
/* --- Day 6: Custom Customs --- */

const groups = data.replace(/\r\n/g, '\n').split('\n\n')

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

const task1 = () => {
    const groups = data.replace(/\r\n/g, '\n').split('\n\n')


        const nonDupes = []

        groups.map(group => {
                const groupSize = group.split('\n').length
                const groupAnswer = group.split('\n')
                /* All unique answers, as every answer can only be valid once  */
                let answerArray = groupAnswer.join('').replace(/,/g, '').split('')
                let  uniqueAnswers = answerArray.filter(onlyUnique);
                nonDupes.push(uniqueAnswers.length)

        })

        var sum = nonDupes.reduce(function(pv, cv) { return pv + cv; }, 0);

        return sum;

}


const task2 = () => {
    
var everyoneCount = 0;

input.forEach(x => {
    for(let i = 0; i < x[0].length; i++) {
        if( x.every( y => y.includes( x[0][i] ) ) ) 
            everyoneCount++;
    }
});
    
    return everyoneCount
}

/* TASK 1 */
/*Find all unique answers */
console.log(`There are ${task1()} questions where anyone answered yes!`);


/* TASK 2 */
/* Find all duplicate answers of every group */
console.log(`There are ${task2()} questions where everyone answered yes!`);