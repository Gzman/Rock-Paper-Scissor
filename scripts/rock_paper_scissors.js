
const Rock = "rock";
const Paper = "paper";
const Scissors = "scissors";

const isValid = (input = "") => {
    input = input.toLowerCase();
    return input === Rock || input === Paper || input === Scissors;
}

const userPlay = () => {
    let selection = prompt("Rock, Paper or Scissors");
    while (selection !== null && !isValid(selection)) selection = prompt("Try again: Rock, Paper or Scissors");
    return selection === null ? selection : String(selection).toLowerCase();
}

const computerPlay = () => {
    const minOptions = 1;
    const maxOptions = 3;
    const selection = Math.floor(Math.random() * (maxOptions - minOptions + 1)) + minOptions;
    switch (selection) {
        case 1: return Rock;
        case 2: return Paper;
        case 3: return Scissors;
    }
}

const hasCanceled = (playerSelection) => playerSelection === null;

const hasWon = (playerSelection, computerSelection) =>
    (playerSelection == Rock     && computerSelection == Scissors) ||
    (playerSelection == Paper    && computerSelection == Rock) ||
    (playerSelection == Scissors && computerSelection == Paper);

const isDraw = (playerSelection, computerSelection) => playerSelection === computerSelection;

const playRound = (playerSelection, computerSelection) => {
    if (hasCanceled(playerSelection))                return "Canceled the game";
    if (isDraw(playerSelection, computerSelection))  return `Draw! ${playerSelection} === ${computerSelection}`;
    if (hasWon(playerSelection, computerSelection))  return `You won! ${playerSelection} beats ${computerSelection}`;
    return `You lost! ${computerSelection} beats ${playerSelection}`;
}

const playerSelection = userPlay();
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));



