var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0]];
var dojoDiv = document.querySelector("#the-dojo");

// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    var elligibleCoords = [];
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
            // Check if we CAN add a ninja
            if(theDojo[i][j] <= 1) {
                // add to a table of some sort
                elligibleCoords.push([i, j]);
            }
        }
    }
    // console.log(elligibleCoords);
    randomlyAddNinjas(elligibleCoords);
    return result;
}

function randomlyAddNinjas(coords) {
    for(var i = 0; i < 10; i++) {
        var randI = Math.floor(Math.random() * coords.length); // select a random set of coordinates from the coords array passed in
        var coordsToAdd = coords[randI];
        var newI = coordsToAdd[0];
        var newJ = coordsToAdd[1];
        console.log(coordsToAdd);
        theDojo[newI][newJ]++;

        if(theDojo[newI][newJ] > 1) {
            for(var j = randI; j < coords.length - 1; j++) {
                var temp = coords[randI];
                coords[randI] = coords[randI + 1];
                coords[randI + 1] = temp;
            }
            coords.pop();
        }
    }
    console.table(theDojo);
}

// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    if(theDojo[i][j] > 0) { // If we clicked on a cell that HAS a ninja, it should be game over
        dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`
    }

    var totalNinjas = 0;
    for(var k = i - 1; k <= i + 1; k++) { // row above, row of, and row below
        if(k >= 0 && k <= 9) {
            for(var l = j - 1; l <= j + 1; l++) { // column before, column of, and column after
                if((l >= 0 && l <= 9) && !(i == k && j == l)) {
                    totalNinjas += theDojo[k][l];
                }
            }
        }
    }

    element.innerText = totalNinjas;
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);

