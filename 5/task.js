const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf-8').split('\n')

    /*--- Advent of Code ---*/   
/*--- Day 5: Binary Boarding ---*/

/*TASK 1 --> What are all the seat IDs? */

let reee = []
input.forEach(boardingPass => {
           const binaryPass = boardingPass.replace(/F/g, '0').replace(/B/g, '1').replace(/L/g, '0').replace(/R/g, '1');
           const backToDecimal = parseInt(binaryPass, 2)
           reee.push(backToDecimal)
           //console.log( Math.min(...reee) );

});


/* TASK 2 --> Whatis my seat ID? */

const sortedBoardingPasses = reee.sort( function(a, b) {      /* Sort all the IDs correctly */
    return a - b;
  } )


for (let i = 1; i < sortedBoardingPasses.length; i++)                       /* Find the missing ID in the array */
    if ( sortedBoardingPasses[i] - sortedBoardingPasses[i - 1] != 1)        /* Missing ID is the one where its predecessor doesn't subtract to 1 */
        console.log(`My Seat is: ${sortedBoardingPasses[i] - 1}`);          /* Yay! I have found my Seat :D */