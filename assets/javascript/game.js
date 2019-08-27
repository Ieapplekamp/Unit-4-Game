// what variables do I need?
// don't forget a reset

var wins = 0;
var losses = 0;
var initialScore = "";
var playerScore = 0;

//      Math.floor(Math.Random() * x)

// the randomly generated initialScore needs to be between 19 & 120
// each crystal needs to hold a random value (probably between 1 and 12). When the crystal is clicked push/add that to the playerScore.
// when the playerScore matches the initial score, player wins
// if player score goes over initialScore, player loses
// when the game is won or loss have a reset to generate a new initialScore and set the playerScore back to 0 WITHOUT changed the wins or losses 