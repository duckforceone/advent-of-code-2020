let fs = require("fs");
let text = fs.readFileSync("input.txt", "utf-8");
let numbers = text.split('\r\n').map((num) => parseInt(num));
let invalidNum = 556543474;

