$(document).ready(function () {
    
    var wins = 0;
    var losses = 0;
    var initialScore = "";
    var playerScore = 0;
    
    //test idea
    var purple = Math.floor((Math.random() * 12) + 1);
    console.log('purple' + purple);
    //var blue = Math.floor((Math.random() * (12 - 1)) + 1);
    //console.log('this is blue' + blue);
    var red = Math.floor((Math.random() * 12) + 1);
    console.log('red' + red);
    var orange = Math.floor((Math.random() * 12) + 1);
    console.log('orange' + orange);
    var green = Math.floor((Math.random() * 12) + 1);
    console.log('green' + green);
    var yellow = Math.floor((Math.random() * 12) + 1);
    console.log('yellow' + yellow);
    
    

    initialScore = Math.floor((Math.random() * (120 - 19)) + 19);


    function start() {
        
        // var playerScore = 0;
        // var purple = Math.floor((Math.random() * 12) + 1);
        // console.log('this is purple' + purple);
        // //var blue = Math.floor((Math.random() * (12 - 1)) + 1);
        // //console.log('this is blue' + blue);
        // var red = Math.floor((Math.random() * 12) + 1);
        // console.log('this is red' + red);
        // var orange = Math.floor((Math.random() * 12) + 1);
        // console.log('this is orange' + orange);
        // var green = Math.floor((Math.random() * 12) + 1);
        // console.log('this is green' + green);
        // var yellow = Math.floor((Math.random() * 12) + 1);
        // console.log('this is yellow' + yellow);
    
    

        //initialScore = Math.floor((Math.random() * (120 - 19)) + 19);

        $("#target-number").html(initialScore);

        $("#purple").on("click", function () {
        
            purple = parseInt(purple);
            playerScore += purple;
    
            $("#player-score").html(playerScore);
            if (playerScore === initialScore) {
                wins++;
                alert('You Won!');
                restart();
            } else {
                if (playerScore > initialScore) {
                    losses++;
                    alert('You Lose!');
                    restart();
                }
            }
        })

        $("#yellow").on("click", function () {
        
            yellow = parseInt(yellow)
            playerScore += yellow;

            $("#player-score").html(playerScore);
            if (playerScore === initialScore) {
                wins++;
                alert('You Won!');
                restart();
            } else {
                if (playerScore > initialScore) {
                    losses++;
                    alert('You Lose!');
                    restart();
                }
            }
        })

        $("#red").on("click", function () {
        
            red = parseInt(red)
            playerScore += red;

            $("#player-score").html(playerScore);
            if (playerScore === initialScore) {
                wins++;
                alert('You Won!');
                restart();
            } else {
                if (playerScore > initialScore) {
                    losses++;
                    alert('You Lose!');
                    restart();
                }
            }
        })

        $("#orange").on("click", function () {
        
            orange = parseInt(orange)
            playerScore += orange;

            $("#player-score").html(playerScore);
            if (playerScore === initialScore) {
                wins++;
                alert('You Won!');
                restart();
            } else {
                if (playerScore > initialScore) {
                    losses++;
                    alert('You Lose!');
                    restart();
                }
            }
        })

        $("#green").on("click", function () {
        
            green = parseInt(green)
            playerScore -= green;

            $("#player-score").html(playerScore);
            if (playerScore === initialScore) {
                wins++;
                alert('You Won!');
                restart();
            } else {
                if (playerScore > initialScore) {
                    losses++;
                    alert('You Lose!');
                    restart();
                }
            }
        })

        
    }

    start();

    function restart() {

        var playerScore = 0;

        $("#target-number").html(initialScore);
        $("#player-score").html(playerScore);

        var purple = Math.floor((Math.random() * 12) + 1);
        //console.log('this is purple' + purple);
        //var blue = Math.floor((Math.random() * (12 - 1)) + 1);
        //console.log('this is blue' + blue);
        var red = Math.floor((Math.random() * 12) + 1);
        //console.log('this is red' + red);
        var orange = Math.floor((Math.random() * 12) + 1);
        //console.log('this is orange' + orange);
        var green = Math.floor((Math.random() * 12) + 1);
        //console.log('this is green' + green);
        var yellow = Math.floor((Math.random() * 12) + 1);
        //console.log('this is yellow' + yellow);
    
    

        initialScore = Math.floor((Math.random() * (120 - 19)) + 19);
        
        
    }
});
