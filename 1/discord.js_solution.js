const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const file = 'values.txt'
const token = ``;

const prefix = `--`

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setPresence({ 
        status: "dnd",
        activity: { 
            type: "COMPETING",
            name: 'Advent of Code'
        }, 
        
    })
});

client.on("message", async (msg) => {
    if (msg.author.bot || !msg.content.startsWith(prefix)) return;


    const args = msg.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    const task = args.splice(0).join(' ');

    switch(command) {
        case 'day1task1':
            let richtig = " ";let richtigArr = [];let falsch = [];
            let data = fs.readFileSync(file, 'utf-8').split('\r\n').map(Number)
            for (let i = 0; i < data.length - 1; i++) 
                for(let j = 0; j < data.length - 1; j++)
                    if (data[i] + data[j] === 2020) {
                       richtig +=  `✅ MATCH: Numbers ${data[i]} and ${data[j]} = ${ data[i] + data[j] }. That means the solution is ${ data[i] * data[j] }\r\n`;
                       richtigArr.push(`✅ MATCH: Numbers ${data[i]} and ${data[j]} = ${ data[i] + data[j] }. That means the solution is ${ data[i] * data[j] }\r\n`);
                    } else {
                        falsch.push( `❌ NO MATCH: Numbers ${data[i]} and ${data[j]} = ${ data[i] + data[j] }. ` )
                    }

                    msg.channel.send(`The correct answers are:\n${richtig}`);
                    msg.channel.send(`And we went through ${ falsch.length } wrong answers!`)
                    
            
        break;

        case 'day4task1':
            let input = fs.readFileSync('../4/input.txt', 'utf-8').trim().split(/(\r\n){2,}/g);
            let validPassports = [];
            let invalidPassports = [];
            input.forEach(passport => {
                let data = passport.split( /\r?\n|\r/g ).join(' ');
                let passports = data.split(' ').filter(x => x.length > 0)
                if (passports.length == 0) return;
                let sorted = passports.sort().join(' ');
                if (sorted.includes('byr') && sorted.includes('iyr') && sorted.includes('eyr') && sorted.includes('hgt') && sorted.includes('hcl') && sorted.includes('ecl') && sorted.includes('pid') ) {validPassports.push('all fields valid')}
                else if (!sorted.includes('cid') && sorted.includes('byr') && sorted.includes('iyr') && sorted.includes('eyr') && sorted.includes('hgt') && sorted.includes('hcl') && sorted.includes('ecl') && sorted.includes('pid')) { validPassports.push('north pole creds')}
                else invalidPassports.push(`INVALID DOCUMENT ==> D E T A I N E D`)
                //console.log(passports.length);
            })
            msg.channel.send(new Discord.MessageEmbed().setAuthor(`Advent of Code`).setURL(`https://adventofcode.com`).setTitle(`--- Day 4: Passport Processing ---`).setURL(`https://adventofcode.com`).setDescription(`✅ ${validPassports.length} valid Passports\n\n\n :x: ${invalidPassports.length} invalid passports today`))
        break;
    }

})


client.login(token);

class Tasks {
        one() {
            let data = fs.readFileSync(file, 'utf-8').split('\r\n').map(Number)
            for (let i = 0; i < data.length; i++) 
                for(let j = 0; j < data.length; j++)
                    if (data[i] + data[j] === 2020) return (`Numbers are ${data[i]} and ${data[j]} = ${ data[i] + data[j] }. That means the solution is ${ data[i] * data[j] }`)
        }
}
