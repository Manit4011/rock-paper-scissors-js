const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");

const computerDisplay = document.getElementById("computerDisplay");

const resultDisplay = document.getElementById("resultDisplay");

let playerScoreDisplay = document.getElementById("PlayerScoreDisplay");

let computerScoreDisplay = document.getElementById("ComputerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "ITS A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result=(computerChoice==="scissors")? "you win!":"you loose!";
                break;
            case "paper":
                result = (computerChoice==="rock")? "you win!":"you loose!";
                break;
            case "scissors":
                result = (computerChoice==="paper")? "you win!":"you loose!";
                break;
        }
    }

    if(result==="you win!"){
        playerScore+=1;
        playerScoreDisplay.textContent=playerScore;
        resultDisplay.style.color= "green";
        
    }
    else if(result ==="you loose!"){
        computerScore+=1;
        computerScoreDisplay.textContent=computerScore;
        resultDisplay.style.color= "red";
        
    }
    else if(result ==="ITS A TIE!"){
        resultDisplay.style.color= "yellow"
    }

    playerDisplay.textContent = `PLAYER:${playerChoice}`;
    computerDisplay.textContent = `COMPUTER:${computerChoice}`;
    resultDisplay.textContent= result;
}