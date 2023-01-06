function getComputerChoice(){
    let randomNo = Math.floor(Math.random()*3);
    switch (randomNo){
        case 0 : return "rock";
        case 1 : return "paper";
        case 2 : return "scissors";
    }
}




const selection = "Rock"

function playRound(computerChoice, playerChoice){
    
    console.log(computerChoice);
    
    if (playerChoice.toLowerCase() === "rock"){
        switch (computerChoice){
            case "rock" : return 0;
            case "paper" : return 1;
            case "scissors" : return 2;
        }
    }else if (playerChoice.toLowerCase() === "paper"){
        switch (computerChoice){
            case "paper" : return 0;
            case "scissors" : return 1;
            case "rock" : return 2;
        }
    }else if (playerChoice.toLowerCase() === "scissors"){
            switch (computerChoice){
                case "scissors" : return 0;
                case "rock" : return 1;
                case "paper" : return 2;
            }
    }else{
        return 3
    }
}

switch (playRound(getComputerChoice(),selection)){
    case 0 : console.log("A Draw");
    break
    case 1 : console.log("You Lose");
    break
    case 2 : console.log("You win");
    break
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++){
        let roundResult = playRound(getComputerChoice(), selection);
        if  (roundResult === 1){
            computerScore++;
        }else if (roundResult === 2){
            playerScore++;
        }
    }
    
    return (`Player - ${playerScore} : ${computerScore} - Computer`)
}

console.log(game());
