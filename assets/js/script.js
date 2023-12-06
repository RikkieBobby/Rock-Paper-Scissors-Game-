const buttons = document.querySelectorAll("button");
const playerChoiceBox = document.getElementById("player-choice");
const computerChoiceBox = document.getElementById("computer-choice");
const messages = document.getElementById("game-info");
let result;
let playerChoice;
let computerChoice;
let playerScore;
let computerScore;
let playerMessage;
let computerMessage;
let drawCount
let roundCount

buttons.forEach(button => button.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    disableButtons();
    playerInput();
    setTimeout(computerMessages, 2000);
    setTimeout(computerInput, 4000);
    setTimeout(generateResult, 6000);
    setTimeout(incrementRoundCounter, 6000);
    setTimeout(clearImages, 7000);
}));



function playerInput() {

    if (playerChoice === "Rock") {
        playerMessage = `You chose ${playerChoice}`;
        displayPlayerRock();
    }
    if (playerChoice === "Paper") {
        playerMessage = `You chose ${playerChoice}`;
        displayPlayerPaper();
    }
    if (playerChoice === "Scissors") {
        playerMessage = `You chose ${playerChoice}`;
        displayPlayerScissors();
    }

    messages.innerHTML = playerMessage;
}

function computerMessages() {

    computerMessage = "The Computer is deciding...";
    messages.innerHTML = computerMessage;

}

function computerInput() {

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = "Rock";
        messages.innerHTML = `The Computer chose ${computerChoice}`;
        displayComputerRock();
    }
    if (randomNumber === 2) {
        computerChoice = "Paper";
        messages.innerHTML = `The Computer chose ${computerChoice}`;
        displayComputerPaper();
    }
    if (randomNumber === 3) {
        computerChoice = "Scissors";
        messages.innerHTML = `The Computer chose ${computerChoice}`;
        displayComputerScissors();
    }

}

function generateResult() {
    if (computerChoice === playerChoice) {
        result = "It's a Draw";
        incrementDrawCount();
    }
    if (computerChoice === "Rock" && playerChoice === "Paper") {
        result = "The Player Wins!";
        incrementPlayerScore();
    }
    if (computerChoice === "Rock" && playerChoice === "Scissors") {
        result = "The Computer Wins!";
        incrementComputerScore();
    }
    if (computerChoice === "Scissors" && playerChoice === "Rock") {
        result = "The Player Wins!";
        incrementPlayerScore();
    }
    if (computerChoice === "Scissors" && playerChoice === "Paper") {
        result = "The Computer Wins!";
        incrementComputerScore();
    }
    if (computerChoice === "Paper" && playerChoice === "Scissors") {
        result = "The Player Wins!";
        incrementPlayerScore();
    }
    if (computerChoice === "Paper" && playerChoice === "Rock") {
        result = "The Computer Wins!";
        incrementComputerScore();
    }

    enableButtons();

    messages.innerHTML = result;

}

function incrementPlayerScore() {
    playerScore = parseInt(document.getElementById("player-count").innerText);
    document.getElementById("player-count").innerText = ++playerScore;
}

function incrementComputerScore() {
    computerScore = parseInt(document.getElementById("computer-count").innerText);
    document.getElementById("computer-count").innerText = ++computerScore;
}

function incrementDrawCount() {
    drawCount = parseInt(document.getElementById("draw-count").innerText);
    document.getElementById("draw-count").innerText = ++drawCount;
}

function incrementRoundCounter() {
    roundCount = parseInt(document.getElementById("round-count").innerText);
    document.getElementById("round-count").innerText = ++roundCount;
}

function clearImages() {
    document.getElementById("player-image").src = "assets/images/rps.jpg";
    document.getElementById("computer-image").src = "assets/images/rps.jpg";
}

function displayPlayerRock() {
    document.getElementById("player-image").src = "assets/images/rock.png";
}

function displayPlayerPaper() {
    document.getElementById("player-image").src = "assets/images/paper.png";
}

function displayPlayerScissors() {
    document.getElementById("player-image").src = "assets/images/scissors.png";
}

function displayComputerRock() {
    document.getElementById("computer-image").src = "assets/images/computer-rock.png";
}

function displayComputerPaper() {
    document.getElementById("computer-image").src = "assets/images/computer-paper.png";
}

function displayComputerScissors() {
    document.getElementById("computer-image").src = "assets/images/computer-scissors.png";
}

function disableButtons() {
    document.querySelectorAll("button.btn").forEach(button => button.disabled = true); 
}

function enableButtons() {
    document.querySelectorAll("button.btn").forEach(button => button.disabled = false); 
}