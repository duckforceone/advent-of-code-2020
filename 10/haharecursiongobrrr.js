const fs = require('fs')
const task = fs.readFileSync('sample.txt', 'utf-8').trim().split('\r\n').map(num => parseInt(num))

let sorted = sort(task);


let dreierArray = [];
let einserArray = [];
for (let i = 0; i <= sorted.length; i++) {
    if (i === 0) {
        //console.log( `[Outlet Connection!] 0 - ${pls[i]} = ${pls[i] - 0} ` );
        einserArray.push(`uno`);
    }
       
    else if (i === sorted.length - 1) {
        //console.log( ` [Connection to Device!] ${pls[i]} + ${pls[i] + 3} = ${(pls[i] + 3) - pls[i]} ` );
        dreierArray.push(`DREI!`)
    }
        
    let diff = sorted[i + 1] - sorted[i]
    if (diff == 3)
        dreierArray.push('DREI!')
    else if (diff == 1)
        einserArray.push('uno')
    //console.log( ` ${pls[i]} - ${pls[i + 1]} = ${diff} [${i}]` );
}


function sort(arr) {
    var len = arr.length;
for (var i = 0; i < len ; i++) {
  for(var j = 0 ; j < len - i - 1; j++){ 
  if (arr[j] > arr[j + 1]) {
    // swap
    var temp = arr[j];
    arr[j] = arr[j+1];
    arr[j + 1] = temp;
  }
 }
}
return arr;
}