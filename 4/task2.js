const fs = require('fs');

class AoC {
    normalize(input) {
        let yeetTheNullSpaces = input.split( /\r?\n|\r/g ).filter(x => x.length > 0);
        return yeetTheNullSpaces.toString().split(',').join(' ')
    }
}

const input = fs.readFileSync('input.txt', 'utf-8').trim().split(/(\r\n){2,}/g);

let validPassports = []

const byrRegex = /byr:([0-9]{4})/i;
const iyrRegex = /iyr:([0-9]{4})/i;
const eyrRegex = /eyr:([0-9]{4})/i;
const hgtRegex = /hgt:([0-9]{2,3}(?:cm|in))/i;
const hclRegex = /hcl:(#[0-9a-f]{6})/i;
const eclRegex = /ecl:(amb|blu|brn|gry|grn|hzl|oth)/i;
const pidRegex = /pid:([0-9]{9})\b/i;


const passport = input.filter(p => {
    const expectedFields = p.byr && p.iyr && p.eyr && p.hgt && p.hcl && p.ecl && p.pid
    if(!expectedFields)
        return false;
})

console.log(passport);



console.log(validPassports.length);