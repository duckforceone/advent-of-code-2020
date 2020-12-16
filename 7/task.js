    /* ---Advent of Code--- */
/*--- Day 7: Handy Haversacks --- */

const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf-8').split('\r\n')

input.forEach(bagLines => {
    const [bag, container] = bagLines.split(' bags contain ')
    if ( /no other bags/.test(container) === true)
        console.log(container);
})
