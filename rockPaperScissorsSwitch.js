window.addEventListener("DOMContentLoaded", function(){
    document.getElementById("rockoption").addEventListener("click", playRock);
    document.getElementById("paperoption").addEventListener("click", playPaper);
    document.getElementById("scissorsoption").addEventListener("click", playScissors);

    let playingGameDiv = document.getElementById("game-playing-div")
    let finalWinner = document.getElementById("final-winner")
    let restartButton = document.getElementById("restart")
    restartButton.addEventListener("click",restartGame);

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

    function restartGame(){
        restartButton.classList.remove("appearInline");
        restartButton.classList.add("dissappear");
        let yourScoreToDelete = document.getElementById("yourscore");
        let machineScoreToDelete = document.getElementById("machinescore");
        let whoWins = document.getElementById("who-wins")
        
        yourScoreToDelete.textContent = "0";
        machineScoreToDelete.textContent = "0";
        whoWins.textContent = ""; //estos tres borran el puntaje y lo dejan en 0, se volvió a traer del documento por el scope de la otra función no alcanza.
        playingGameDiv.classList.remove("dissappear"); //devuelve los botones a la normalidad
        finalWinner.textContent = "";
    }

    function playGame(user){
        let machine = Math.floor(Math.random() * (4 - 1) + 1); // guarda un número aleatorio: 1 = rock; 2 = paper; 3 = scissors
        /* console.log(machine); */
        let yourScore = document.getElementById("yourscore").textContent;
        let machineScore = document.getElementById("machinescore").textContent;
        let whoWins = document.getElementById("who-wins");
        /* console.log(whoWins) */

        switch(user){ //revisa quién de los dos ganó o si empataron, lo escribe y actualiza el puntaje con la otra función
            case "rock":
                switch(machine){
                    case 1:
                        whoWins.textContent = "Draw";
                        break;
                    case 2:
                        whoWins.textContent = "The machine wins, paper consumes rock";
                        machineWins(machineScore);
                        break;
                    case 3:
                        whoWins.textContent = "You win, rock smashes scissors";
                        userWins(yourScore);
                        break;
                }
            case "paper":
                switch(machine){
                    case 1:
                        whoWins.textContent = "You win, paper consumes rock";
                        userWins(yourScore);
                        break;
                    case 2:
                        whoWins.textContent = "Draw";
                        break;
                    case 3:
                        whoWins.textContent = "The machine wins, scissors cut paper";
                        machineWins(machineScore);
                        break;
                }
            case "scissors":
                switch(machine){
                    case 1:
                        whoWins.textContent = "The machine wins, rock smashes scissors";
                        machineWins(machineScore);
                        break;
                    case 2:
                        whoWins.textContent = "You win, scissors cut paper";
                        userWins(yourScore);
                        break;
                    case 3:
                        whoWins.textContent = "Draw";
                        break;
                }
        }

        function machineWins(scoreString){
            let machineScoreNum = Number(scoreString, 10); //se pasa a un número el texto que dice la puntuación
            machineScoreNum++;
            let machineScoreToString = machineScoreNum.toString();
            /* console.log(machineScoreToString); */
            document.getElementById("machinescore").textContent = machineScoreToString; //se devuelve el nuevo resultado de la puntuación
            if(machineScoreNum >= 5){
                restartButton.classList.remove("dissappear");
                restartButton.classList.add("appearInline");
                playingGameDiv.classList.add("dissappear");
                finalWinner.textContent = "You were destroyed by the machine!";
            }
        }

        function userWins(scoreString){
            let yourScoreNum = Number(scoreString, 10);
            yourScoreNum++;
            let yourScoreToString = yourScoreNum.toString();
            /* console.log(yourScoreToString); */
            document.getElementById("yourscore").textContent = yourScoreToString;
            if(yourScoreNum >= 5){
                restartButton.classList.remove("dissappear");
                restartButton.classList.add("appearInline");
                playingGameDiv.classList.add("dissappear");
                finalWinner.textContent = "You destroyed the machine!";
            }
        }
    }
});