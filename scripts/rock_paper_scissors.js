
const Rock = "rock";
const Scissors = "scissors";
const Paper = "paper";

const isValidInput = (input="") => {
    input = input.toLowerCase();
    return input === Rock || input === Scissors || input === Paper;
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
        case 2: return Scissors;
        case 3: return Paper;
    }
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection)  return   `Draw! ${playerSelection} == ${computerSelection}`;
    let winMsg = `You won!  ${playerSelection} beats ${computerSelection}`;
    let losMsg = `You lost! ${computerSelection} beats ${playerSelection}`;
    switch (playerSelection) {
        case Rock:      if (computerSelection == Scissors)  return winMsg; else return losMsg;
        case Scissors:  if (computerSelection == Paper)     return winMsg; else return losMsg;
        case Paper:     if (computerSelection == Rock)      return winMsg; else return losMsg;
    }
}

const playerSelection = getUserSelection();
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));



