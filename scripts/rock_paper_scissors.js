

const SELECTIONS = ["rock", "paper", "scissors"];
const ROCK = SELECTIONS[0];
const PAPER = SELECTIONS[1];
const SCISSORS = SELECTIONS[2];
const MAX_POINTS = 5;

const playerPointsElement = document.querySelector(".player-points");
const computerPointsElement = document.querySelector(".computer-points");
const playerSelectionElement = document.querySelector(".player-selection");
const computerSelectionElement = document.querySelector(".computer-selection");
const outcomeElement = document.querySelector(".outcome");

function play(event) {
    const playerSelection = event.target.getAttribute("data-selection");
    const computerSelection = computerPlay();
    displaySelections(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    if (isGameOver()) {
        (playerPointsElement.textContent > computerPointsElement.textContent) ?
            alert("Congratulations! You won the game") : alert("You lost the game");
        resetGameState();
    }
}

function computerPlay() { return SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)]; }

function displaySelections(player, computer) {
    playerSelectionElement.classList.remove(ROCK, PAPER, SCISSORS);
    playerSelectionElement.classList.add(player);
    playerSelectionElement.classList.add("selection-changed-animation");
    computerSelectionElement.classList.remove(ROCK, PAPER, SCISSORS);
    computerSelectionElement.classList.add(computer);
    computerSelectionElement.classList.add("selection-changed-animation");
}

function playRound(playerSelection, computerSelection) {
    if      (isDraw(playerSelection, computerSelection)) drawRound();
    else if (hasWon(playerSelection, computerSelection)) playerWonRound();
    else    computerWonRound();
}

const hasWon = (playerSelection, computerSelection) =>
    (playerSelection === ROCK       && computerSelection === SCISSORS) ||
    (playerSelection === PAPER      && computerSelection === ROCK) ||
    (playerSelection === SCISSORS   && computerSelection === PAPER);

const isDraw = (playerSelection, computerSelection) => playerSelection === computerSelection;

const drawRound = () => outcomeElement.textContent = "Draw";

const playerWonRound = () => {
    let points = parseInt(playerPointsElement.textContent);
    playerPointsElement.textContent = ++points;
    playerPointsElement.classList.add("player-points-animation");
    outcomeElement.classList.add("player-points-animation");
    outcomeElement.textContent = "You won";
}

const computerWonRound = () => {
    let points = parseInt(computerPointsElement.textContent);
    computerPointsElement.textContent = ++points;
    computerPointsElement.classList.add("computer-points-animation");
    outcomeElement.classList.add("computer-points-animation");
    outcomeElement.textContent = "You lost";
}

function resetGameState() { window.location.reload(); }

function isGameOver() {
    const pPoints = parseInt(playerPointsElement.textContent);
    const cPoints = parseInt(computerPointsElement.textContent);
    return pPoints === MAX_POINTS || cPoints === MAX_POINTS;
}

function animationEnd(event) {
    if (event.propertyName !== "transform") return;
    const element = event.target;
    if (element.matches(".player-selection") || element.matches(".computer-selection")) element.classList.remove("selection-changed-animation");
    if (element.matches(".selection-button")) element.classList.remove("selection-button-animation");
    if (element.matches(".outcome")) {
        element.classList.remove("player-points-animation");
        element.classList.remove("computer-points-animation");
    }
    if (element.matches(".player-points") || element.matches(".computer-points")) {
        element.classList.remove("player-points-animation");
        element.classList.remove("computer-points-animation");
    }
}

function initGame() {
    document.querySelectorAll(".selection-button").forEach((button) => {
        button.addEventListener("click", play);
        button.addEventListener("click", e => e.target.classList.add("selection-button-animation"));
        button.addEventListener("transitionend", animationEnd);
    });
    playerPointsElement.addEventListener("transitionend", animationEnd);
    playerSelectionElement.addEventListener("transitionend", animationEnd);
    computerSelectionElement.addEventListener("transitionend", animationEnd);
    computerPointsElement.addEventListener("transitionend", animationEnd);
    outcomeElement.addEventListener("transitionend", animationEnd);
}

initGame();