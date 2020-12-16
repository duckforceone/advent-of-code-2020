let fs = require("fs");
let text = fs.readFileSync("input.txt", "utf-8");
let numbers = text.split('\r\n').map((num) => parseInt(num));
let invalidNum;

function getPermSums(arr) {
  let sums = [];
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const remainingNums = arr.slice(i + 1, arr.length);
    if (remainingNums !== []) {
      for (let j = 0; j < remainingNums.length; j++) {
        sums.push(currentNum + remainingNums[j]);
      }
    }
  }
  return sums;
}

numbers.forEach((num, index, numbers) => {
  let prevFive = numbers.slice(index - 25, index);
  if (prevFive.length > 0) {
    if (!getPermSums(prevFive).includes(num)) {
      console.log(`Part one invalid number is: ${num}`);
      invalidNum = num;
    }
  }
});

for (let i = 0; i < numbers.length; i++) {
  for (let k = numbers.length; k > 0; k--) {
    let sum = numbers.slice(i, k).reduce((a, b) => a + b, 0);
    if (numbers[i] !== invalidNum && sum === invalidNum) {
      console.log(`The correct range is ${i},${k}`);
      let found = numbers.slice(i, k).sort((a, b) => a - b);
      console.log(`Part two answer is: ${found[0] + found[found.length - 1]}`);
    }
  }
}