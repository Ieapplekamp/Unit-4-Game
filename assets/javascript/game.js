$(document).ready(function () {
    
    var wins = 0;
    var losses = 0;
    var initialScore = "";
    var playerScore = 0;

    function start() {
        
        purple = Math.floor((Math.random() * 12) + 1);
        blue = Math.floor((Math.random() * 2) + 1);
        red = Math.floor((Math.random() * 12) + 1);
        orange = Math.floor((Math.random() * 12) + 1);
        green = Math.floor((Math.random() * 12) + 1);
        yellow = Math.floor((Math.random() * 12) + 1);
        
    

        initialScore = Math.floor((Math.random() * (120 - 19)) + 19);
       
        $("#target-number").html(initialScore);

        $("#purple").on("click", function () {
        
            playerScore += purple;
            
            $("#player-score").html(playerScore);
            if (playerScore === initialScore) {
                wins++;
                $("#wins").html(wins);
                alert("You Won!");
                restart();
            } else {
                if (playerScore > initialScore) {
                    losses++;
                    $("#losses").html(losses);
                    alert("You Lost!");
                    restart();
                }
            }

        })

        $("#yellow").on("click", function () {
        
            playerScore += yellow;

            $("#player-score").html(playerScore);
            if (playerScore === initialScore) {
                wins++;
                $("#wins").html(wins);
                alert("You Won!");
                restart();
            } else {
                if (playerScore > initialScore) {
                    losses++;
                    $("#losses").html(losses);
                    alert("You Lost!");
                    restart();
                }
            }

        })

        $("#red").on("click", function () {
        
            playerScore += red;

            $("#player-score").html(playerScore);
            if (playerScore === initialScore) {
                wins++;
                $("#wins").html(wins);
                alert("You Won!");
                restart();
            } else {
                if (playerScore > initialScore) {
                    losses++;
                    $("#losses").html(losses);
                    alert("You Lost!");
                    restart();
                }
            }

        })

        $("#orange").on("click", function () {
   
            playerScore += orange;

            $("#player-score").html(playerScore);
            if (playerScore === initialScore) {
                wins++;
                $("#wins").html(wins);
                alert("You Won!");
                restart();
            } else {
                if (playerScore > initialScore) {
                    losses++;
                    $("#losses").html(losses);
                    alert("You Lost!");
                    restart();
                }
            }

        })

        $("#green").on("click", function () {
    
            playerScore -= green;

            $("#player-score").html(playerScore);
            if (playerScore === initialScore) {
                wins++;
                $("#wins").html(wins);
                alert("You Won!");
                restart();
            } else {
                if (playerScore > initialScore) {
                    losses++;
                    $("#losses").html(losses);
                    alert("You Lost!");
                    restart();
                }
            }

        })

        $("#blue").on("click", function () {
            if (blue > 1) {
                wins++;
                $("#wins").html(wins);
                alert("You Survived");
                restart();
            } else {
                if (blue < 2) {
                    losses++;
                    $("#losses").html(losses);
                    alert("You're dead");
                    restart();
                }
            }
        })
 
    }

    start();

    function restart() {

        blue = Math.floor((Math.random() * 2) + 1);

        if (playerScore > 0) {
            purple = Math.floor((Math.random() * 12) + 1);
            red = Math.floor((Math.random() * 12) + 1);
            orange = Math.floor((Math.random() * 12) + 1);
            yellow = Math.floor((Math.random() * 12) + 1);
            green = Math.floor((Math.random() * 12) + 1);
            initialScore = Math.floor((Math.random() * (120 - 19)) + 19);
            $("#target-number").html(initialScore);
            $("#player-score").html(0);
            return playerScore = 0;
        }

    }

});
