let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "It's a tie!";
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else{
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log("Current scores are: Human: " + humanScore + " Computer: " + computerScore);
    }
}

playGame();
console.log("Final scores are: Human: " + humanScore + " Computer: " + computerScore);
