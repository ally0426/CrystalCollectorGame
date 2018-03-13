// ========================
// GLOBAL VARIABLES
// ========================

var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    green: {
        name: "Green",
        value: 0
    },
    red: {
        name: "Red",
        value: 0
    },
    yellow: {
        name: "Yellow",
        value: 0
    }
}

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;


// ========================
// FUNCTIONS
// ========================

// function to get random number
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function to start the game
function startGame() {
    // reset the current scores
    currentScore = 0;

    // set a new target score (between 19 and 120)
    targetScore = randomRange(19, 120);

    // set different scores for crystals (between 1 and 12)
    crystal.blue.value = randomRange(1, 12);
    crystal.green.value = randomRange(1, 12);
    crystal.red.value = randomRange(1, 12);
    crystal.yellow.value = randomRange(1, 12);

    // change html to reflect these changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    // console log to see stats
    console.log("=============================");
    console.log("Target Score: " + targetScore + " Your Score: " + currentScore);
    console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
    console.log("=============================");

}


// function to add values to crystals
function addValues(crystal) {
    // change the current score
    currentScore += crystal.value;
    // change the html to reflect changes in currentScore
    $("#yourScore").html(currentScore);
    // call the checkIn function
    gameResult();
    // test console
    console.log("Your Score: " + currentScore);

}

// function if user won or lost and reset the game
function gameResult() {
    // check if currentScore is larger than targetScore
    if (currentScore > targetScore) {
        // alert the result and test console
        alert("You lost!");
        console.log("You lost!");
        // add to lossCount
        lossCount++;
        //change lossCount html
        $("#lossCount").html(lossCount);
        //restart the game
        startGame();

    } else if (currentScore == targetScore) {
        // alert the result and test console
        alert("You won!");
        console.log("You won!");
        // add to winCount
        winCount++;
        //change winCount html
        $("#winCount").html(winCount);
        //restart the game
        startGame();
    }
}


// ===============================
// Main Process
// ===============================

// start the game
startGame();

$("#blue").click(function () {
    addValues(crystal.blue);
});
$("#green").click(function () {
    addValues(crystal.green);
});
$("#red").click(function () {
    addValues(crystal.red);
});
$("#yellow").click(function () {
    addValues(crystal.yellow);
});




