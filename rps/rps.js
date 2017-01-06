//window.onload = function () {
  function rpsFunction(){
 
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}; 



var compare = function (choice1, choice2){

    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    else if(choice1==="rock"){
        if(choice2 === "scissors"){
            return "Rock wins. You win.";
        }
        else {
            return "Paper wins. You lose.";
        }
    }
    else if (choice1 === "paper"){
        if (choice2 === "rock"){
            return "Paper wins. You win";
        }
        else {
            return "Scissors wins. You lose."
        }
    }
    else if (choice1 === "scissors"){
        if (choice2 === "rock"){
            return "Rock wins. You lose.";
        }
        else {
            return "Scissors wins. You lose";
        }
    
    }
};


var element1 = document.getElementById("gameStatus");
var newElement1 = document.createElement("p");
element1.appendChild(newElement1);
newElement1.innerHTML = "You: " + userChoice;

var element2 = document.getElementById("gameStatus");
var newElement2 = document.createElement("p");
element2.appendChild(newElement2);
newElement2.innerHTML = "Computer: " + computerChoice;

var element3 = document.getElementById("gameStatus");
var newElement3 = document.createElement("p");
element3.appendChild(newElement3);
newElement3.innerHTML = compare(userChoice, computerChoice);







};  