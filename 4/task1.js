const fs = require('fs');


const input = fs.readFileSync('input.txt', 'utf-8').trim().split(/(\r\n){2,}/g);
let validPassports = [];
input.forEach(passport => {
    let data = passport.split( /\r?\n|\r/g ).join(' ');
    let passports = data.split(' ').filter(x => x.length > 0)
    if (passports.length == 0) return;
    let sorted = passports.sort().join(' ');
    if (sorted.includes('byr') && sorted.includes('iyr') && sorted.includes('eyr') && sorted.includes('hgt') && sorted.includes('hcl') && sorted.includes('ecl') && sorted.includes('pid') ) validPassports.push('all fields valid')
    else if (!sorted.includes('cid') && sorted.includes('byr') && sorted.includes('iyr') && sorted.includes('eyr') && sorted.includes('hgt') && sorted.includes('hcl') && sorted.includes('ecl') && sorted.includes('pid')) validPassports.push('north pole creds')
    else console.error(`INVALID DOCUMENT ==> D E T A I N E D`)
    //console.log(passports.length);
    
})

console.log( validPassports.length );
