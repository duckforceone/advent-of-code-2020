var fs = require('fs');

try {  
    var mapArray = fs.readFileSync('task.txt', 'utf-8').split('\n').map(x => x.split(''));
} catch(e) { console.log('Error loading file:', e.stack) }

function tobogganWithPath(deltaX, deltaY) {
    let x = 0, treesEncountered = 0;
    for(y = 0; y < mapArray.length; x += deltaX, y += deltaY) 
        if(mapArray[y][x = x >= mapArray[0].length ? x - mapArray[0].length : x] === '#') { treesEncountered++ }

    return treesEncountered;
}

console.log(tobogganWithPath(1, 1) * tobogganWithPath(3, 1) * tobogganWithPath(5, 1) * tobogganWithPath(7, 1) * tobogganWithPath(1, 2));