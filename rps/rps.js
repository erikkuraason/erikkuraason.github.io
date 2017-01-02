var userChoice = prompt("Do you choose rock, paper, or scissors?");
var computerChoice = Math.random();
console.log(computerChoice);
if (computerChoice < 0.33) {
    computerChoice = "rock";
}
else if(computerChoice < .66) {
    computerChoice = "paper";
}
else computerChoice = "scissors";