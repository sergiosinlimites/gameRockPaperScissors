window.addEventListener("DOMContentLoaded", function(){
    document.getElementById("rockoption").addEventListener("click", playRock);
    document.getElementById("paperoption").addEventListener("click", playPaper);
    document.getElementById("scissorsoption").addEventListener("click", playScissors);

    function playRock(){
        let selection = "rock";
        playGame(selection);
    }

    function playPaper(){
        let selection = "paper";
        playGame(selection);
    }

    function playScissors(){
        let selection = "scissors";
        playGame(selection);
    }

    function playGame(user){
        let machine = Math.floor(Math.random() * (4 - 1) + 1); // guarda un número aleatorio: 1 = rock; 2 = paper; 3 = scissors
        /* console.log(machine); */
        let yourScore = document.getElementById("yourscore").textContent;
        let machineScore = document.getElementById("machinescore").textContent;
        let whoWins = document.getElementById("who-wins");
        /* console.log(whoWins) */

        if (user === "rock" && machine === 1 || user === "paper" && machine === 2 || user === "scissors" && machine === 3){
            whoWins.textContent = "Draw";
        } else if(user === "rock" && machine === 2){
            whoWins.textContent = "The machine wins, paper consumes rock";
            machineWins(machineScore);
        } else if(user === "rock" && machine === 3){
            whoWins.textContent = "You win, rock smashes scissors";
            userWins(yourScore)
        } else if(user === "scissors" && machine === 1){
            whoWins.textContent = "The machine wins, rock smashes scissors";
            machineWins(machineScore);
        } else if(user === "scissors" && machine === 2){
            whoWins.textContent = "You win, scissors cut paper";
            userWins(yourScore)
        } else if(user === "paper" && machine === 1){
            whoWins.textContent = "You win, paper consumes rock";
            userWins(yourScore)
        } else if(user === "paper" && machine === 3){
            whoWins.textContent = "The machine wins, scissors cut paper";
            machineWins(machineScore);
        } else {
            console.log("There was an error oh-oh");
        }

        function machineWins(scoreString){
            let machineScoreNum = Number(scoreString, 10);
            machineScoreNum++;
            let machineScoreToString = machineScoreNum.toString();
            /* console.log(machineScoreToString); */
            document.getElementById("machinescore").textContent = machineScoreToString;
        }

        function userWins(scoreString){
            let yourScoreNum = Number(scoreString, 10);
            yourScoreNum++;
            let yourScoreToString = yourScoreNum.toString();
            /* console.log(yourScoreToString); */
            document.getElementById("yourscore").textContent = yourScoreToString;
        }
    }
});

