window.onload = function () {
  
 
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
            return "Rock wins. You win";
        }
        else {
            return "paper wins";
        }
    }
    else if (choice1 === "paper"){
        if (choice2 === "rock"){
            return "Paper wins. You win";
        }
        else {
            return "scissors wins"
        }
    }
    else if (choice1 === "scissors"){
        if (choice2 === "rock"){
            return "rock wins";
        }
        else {
            return "scissors wins";
        }
    
    }
};

document.getElementById("computerChoice").innerHTML="Computer: " + computerChoice;
document.getElementById("winnerOrLoser").innerHTML=compare(userChoice, computerChoice);




};  