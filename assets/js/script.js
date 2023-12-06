const buttons = document.querySelectorAll("button");
const playerChoiceBox = document.getElementById("player-choice");
const computerChoiceBox = document.getElementById("computer-choice");
const messages = document.getElementById("game-info");
let playerChoice;
let computerChoice;
let playerMessage;
let computerMessage;

buttons.forEach(button => button.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerInput();
    setTimeout(computerMessages, 2000);
    setTimeout(computerInput, 4000);
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
        // displayComputerRock();
    }
    if (randomNumber === 2) {
        computerChoice = "Paper";
        messages.innerHTML = `The Computer chose ${computerChoice}`;
        // displayComputerPaper();
    }
    if (randomNumber === 3) {
        computerChoice = "Scissors";
        messages.innerHTML = `The Computer chose ${computerChoice}`;
        // displayComputerScissors();
    }

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