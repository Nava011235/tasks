var ROCK = "rock";
var PAPER = 'paper';
var SCISSORS = 'scissors';
var programChoise;
var userChoise = prompt ('choose', '');
var random = Math.random();

if (random < 0.33) {
    programChoise = ROCK;
} else if (random < 0.66){
    programChoise = PAPER;
} else {
    programChoise = SCISSORS;
}

if (userChoise === programChoise) {
    alert('friendship')
} else if ((programChoise === ROCK && userChoise === PAPER) ||
    (programChoise === PAPER && userChoise === SCISSORS) ||
    (programChoise === SCISSORS && userChoise === ROCK)) {
    alert('you win')
} else {
    alert('you loose')
}
