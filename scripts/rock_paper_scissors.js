
const Rock = "rock";
const Paper = "paper";
const Scissors = "scissors";

const isValidInput = (input="") => {
    input = input.toLowerCase();
    return input === Rock || input === Paper || input === Scissors;
}

const getUserSelection = () => {
    let selection = prompt("Select: Rock, Paper or Scissors");
    while (!isValidInput(selection)) selection = prompt("Try again: Rock, Paper or Scissors");
    return String(selection).toLowerCase();
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

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection)  return   `Draw! ${playerSelection} == ${computerSelection}`;
    let win = `You won! ${playerSelection} beats ${computerSelection}`;
    switch (playerSelection) {
        case Rock:      if (computerSelection === Scissors)  return win; break;
        case Paper:     if (computerSelection === Rock)      return win; break;
        case Scissors:  if (computerSelection === Paper)     return win; break;
    }
    return `You lost! ${computerSelection} beats ${playerSelection}`;
}

const playerSelection = getUserSelection();
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));



