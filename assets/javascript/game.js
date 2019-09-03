$(document).ready(function () {
    
    var wins = 0;
    var losses = 0;
    var initialScore = "";
    var playerScore = 0;

    function start() {
        
        purple = Math.floor((Math.random() * 12) + 1);
        yellow = Math.floor((Math.random() * 2) + 1);
        red = Math.floor((Math.random() * 12) + 1);
        orange = Math.floor((Math.random() * 12) + 1);
        green = Math.floor((Math.random() * 12) + 1);
        blue = Math.floor((Math.random() * 12) + 1);
        
        initialScore = Math.floor((Math.random() * 102) + 19);
       
        $("#target-number").html(initialScore);

        $("#purple").on("click", function () {
            playerScore += purple;
            $("#player-score").html(playerScore);
            condtionals();
        })

        $("#blue").on("click", function () {
            playerScore += blue;
            $("#player-score").html(playerScore);
            condtionals();
        })

        $("#red").on("click", function () {
            playerScore += red;
            $("#player-score").html(playerScore);
            condtionals();
        })

        $("#orange").on("click", function () {
            playerScore += orange;
            $("#player-score").html(playerScore);
            condtionals();
        })

        $("#green").on("click", function () {
            playerScore -= green;
            $("#player-score").html(playerScore);
            condtionals();
        })
        
        $("#yellow").on("click", function () {
            if (yellow > 1) {
                wins++;
                $("#wins").html(wins);
                alert("You Survived");
                restart();
            } else {
                if (yellow < 2) {
                    losses++;
                    $("#losses").html(losses);
                    alert("You're dead");
                    restart();
                }
            }
        })

        function condtionals() {
            if (playerScore === initialScore) {
                wins++;
                $("#wins").html(wins);
                alert("You Won!");
                restart();
            } else if (playerScore < -13) {
                losses++;
                $("#losses").html(losses);
                alert("You went too far back, don't ignore the laws of physics..");
                restart();
            } else {
                if (playerScore > initialScore) {
                    losses++;
                    $("#losses").html(losses);
                    alert("You Lost!");
                    restart();
                }
            }
        }
 
    }

    start();

    function restart() {

        yellow = Math.floor((Math.random() * 2) + 1);

        if (playerScore > 0 || playerScore < -13) {

            purple = Math.floor((Math.random() * 12) + 1);
            red = Math.floor((Math.random() * 12) + 1);
            orange = Math.floor((Math.random() * 12) + 1);
            blue = Math.floor((Math.random() * 12) + 1);
            green = Math.floor((Math.random() * 12) + 1);
            initialScore = Math.floor((Math.random() * (120 - 19)) + 19);
            $("#target-number").html(initialScore);
            $("#player-score").html(0);
            return playerScore = 0;

        }

    }

});