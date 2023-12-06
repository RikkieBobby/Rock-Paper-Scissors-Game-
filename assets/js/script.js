const buttons = document.querySelectorAll("button");
const playerChoiceBox = document.getElementById("player-choice");
const computerChoiceBox = document.getElementById("computer-choice");
const messages = document.getElementById("game-info");
let playerChoice;
let playerMessage;

buttons.forEach(button => button.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerInput();
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

function displayPlayerRock() {
    document.getElementById("player-image").src = "assets/images/rock.png";
}

function displayPlayerPaper() {
    document.getElementById("player-image").src = "assets/images/paper.png";
}

function displayPlayerScissors() {
    document.getElementById("player-image").src = "assets/images/scissors.png";
}