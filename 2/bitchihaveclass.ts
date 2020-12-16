/*
         < Advent of Code >
< --- Day 2: Password Philosophy --- > 
< ---          TASK 1            --- > //=> main()
< ---          TASK 2            --- > //=> task2()

*/
import fs from 'fs';
import { filestuff } from './Password';

function main() {

   const input = new filestuff().readfile();
   
   for (const data of input) {
      
    const sections = data.split(' ');
    const numbers = sections[0].split('-');
    
    const first = numbers[0]; const second = numbers[1]; 
    const wantedChar = sections[1].replace(':', '')
    const password = sections[2]
    
     
   }

}

main()