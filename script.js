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
    if(humanScore === 5){
        return "You win the game!";
    }
    else if(computerScore === 5){
        return "You lose the game!";
    }

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

// function playGame() {
    // for(let i = 0; i < 5; i++) {
    //     let humanSelection = getHumanChoice();
    //     let computerSelection = getComputerChoice();
    //     console.log(playRound(humanSelection, computerSelection));
    //     console.log("Current scores are: Human: " + humanScore + " Computer: " + computerScore);
    // }
// }

// playGame();

const btn = document.querySelectorAll('.btn');

const result = document.querySelector('#result');

btn.forEach(button => {
    button.addEventListener("click", () => {
        let humanSelection = button.id;
        let computerSelection = getComputerChoice();

        const roundp = document.createElement("p");
        roundp.textContent = playRound(humanSelection, computerSelection);
        result.appendChild(roundp);

        const scorep = document.createElement("p"); 
        scorep.textContent = "Current scores are: Human: " + humanScore + " Computer: " + computerScore;
        result.appendChild(scorep);
        // console.log(playRound(humanSelection, computerSelection));
        // console.log("Current scores are: Human: " + humanScore + " Computer: " + computerScore);
    })
})

// const finalp = document.createElement("p"); 
// finalp.textContent = "Final scores are: Human: " + humanScore + " Computer: " + computerScore;
// result.appendChild(finalp);
// console.log("Final scores are: Human: " + humanScore + " Computer: " + computerScore);
