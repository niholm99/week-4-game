//Global Variables
//*******************************************

//Crystal Variables
var crystal = {
    blue:
    {
    	name: "Blue",
    	value: 0
    },
    green:
    {
    	name: "Green",
    	value: 0
    },
    red:
    {
    	name: "Red",
    	value: 0
    },
    silver:
    {
    	name: "Silver",
    	value: 0
    }    
};

//Scores (Current and Target)
var currentScore = 0;
var targetScore = 0; 

//Wins and Losses
var winCount = 0;
var lossCount = 0;

//Functions
//*******************************************
var getRandom = function(min,max){
    return Math.floor(Math.random()*(max-min +1)) + min;
}

//Start
var startGame = function() {
//reset the score
 currentScore = 0;
//Set a newTarget Score between 19 and 120
targetScore = getRandom(19,120);
//Set different values for each crystal (1 and 12)
crystal.blue.value = getRandom(1,12);
crystal.red.value = getRandom(1,12);
crystal.green.value = getRandom(1,12);
crystal.silver.value = getRandom(1,12);
//Change html to reflect all changes

$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);



//Testing
console.log("Target Score: " + targetScore);
console.log("Blue: " + crystal.blue.value + "| Red: " + crystal.red.value + "| Green: " + crystal.green.value + "| Silver: " + crystal.silver.value);
}

//Clicks on Crystals
var addValues = function(crystal) {

    currentScore = currentScore + crystal.value;

    //html
    $("#yourScore").html(currentScore);


    //call for win check
    winCheck();

}

//check if won
var winCheck = function() {

    //check if currentScore is larget than targetScore
    if (currentScore > targetScore) {
        alert("You lost!");
        console.log("You lost!");

        //loss counter
        lossCount++;

        //html
        $("#lossCount").html(lossCount);

        //restart game
        startGame();

    }

    else if (currentScore == targetScore) {
        alert("You won!");
        console.log("You won!");

        //win counter
        winCount++;

        //html
        $("#winCount").html(winCount);

        //restart game
        startGame();
    }
}

//Main Process
//*******************************************

// Start
startGame();

$("#blue").click(function(){
	
    addValues(crystal.blue);
});

$("#green").click(function(){
	addValues(crystal.green);
});

$("#red").click(function(){
	addValues(crystal.red);
});

$("#silver").click(function(){
	addValues(crystal.silver);
});