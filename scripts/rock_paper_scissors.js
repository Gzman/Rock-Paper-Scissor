
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const isValid = (input = "") => {
    input = input.toLowerCase();
    return input === ROCK || input === PAPER || input === SCISSORS;
}

const userPlay = (e) => {
    const btn = e.target;
    const selection = btn.getAttribute("data-selection");
    game(selection);
}

const computerPlay = () => {
    const minOptions = 1;
    const maxOptions = 3;
    const selection = Math.floor(Math.random() * (maxOptions - minOptions + 1)) + minOptions;
    switch (selection) {
        case 1: return ROCK;
        case 2: return PAPER;
        case 3: return SCISSORS;
    }
}

const hasCanceled = (playerSelection) => playerSelection === null;

const hasWon = (playerSelection, computerSelection) =>
    (playerSelection == ROCK     && computerSelection == SCISSORS) ||
    (playerSelection == PAPER    && computerSelection == ROCK) ||
    (playerSelection == SCISSORS && computerSelection == PAPER);

const isDraw = (playerSelection, computerSelection) => playerSelection === computerSelection;

const playRound = (playerSelection, computerSelection) => {
    if (hasCanceled(playerSelection))                return null;
    if (isDraw(playerSelection, computerSelection))  return `Draw! ${playerSelection} === ${computerSelection}`;
    if (hasWon(playerSelection, computerSelection))  return `You won! ${playerSelection} beats ${computerSelection}`;
    return `You lost! ${computerSelection} beats ${playerSelection}`;
}

const game = (userSelection) => {
        const playerSelection = userSelection;
        const computerSelection = computerPlay();
        const outcome = playRound(playerSelection, computerSelection);
        const resultList = document.querySelector(".result ul");
        const result = document.createElement("li");
        result.textContent = outcome;
        resultList.append(result);
}

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
    btn.addEventListener("click", userPlay);
});



