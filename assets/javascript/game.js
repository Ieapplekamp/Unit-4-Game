$(document).ready(function () {
    
    var wins = 0;
    var losses = 0;
    var initialScore = "";
    var playerScore = 0;
    
    //test idea - 6/10 shit started to work 
    // var purple = Math.floor((Math.random() * 12) + 1);
    // // //var blue = Math.floor((Math.random() * (12 - 1)) + 1);
    // // //console.log('this is blue' + blue);
    // var red = Math.floor((Math.random() * 12) + 1);
    // var orange = Math.floor((Math.random() * 12) + 1);
    // var green = Math.floor((Math.random() * 12) + 1);
    // var yellow = Math.floor((Math.random() * 12) + 1);
    // // initialScore = Math.floor((Math.random() * (120 - 19)) + 19);

    function start() {
        
        purple = Math.floor((Math.random() * 12) + 1);
        // //var blue = Math.floor((Math.random() * (12 - 1)) + 1);
        // //console.log('this is blue' + blue);
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
 
    }

    start();

    function restart() {

        if (playerScore > 0) {
            purple = Math.floor((Math.random() * 12) + 1);
            red = Math.floor((Math.random() * 12) + 1);
            orange = Math.floor((Math.random() * 12) + 1);
            yellow = Math.floor((Math.random() * 12) + 1);
            green = Math.floor((Math.random() * 12) + 1);
            initialScore = Math.floor((Math.random() * (120 - 19)) + 19);
            $("#target-number").html(initialScore);
            return playerScore = 0; 
        }

    }

});
