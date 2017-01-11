//window.onload = function () {
  

function dragonSlayerFunction(){

    var slaying=true;

    //generate either 0 or 1:
    var youHit = Math.floor(Math.random()*2);

    var damageThisRound;

    var totalDamage=0;

    while(slaying){

        alert("Strike the dragon");
           
        youHit = Math.floor(Math.random()*2);   
 
        if(youHit){
 
            //Generate 0, 1, 2, 3, 4, or 5. (Generate a number <1, multiply it by 5 to get a number <5, add 1 to get a number <6, floor it to get an integer <=5)
            var damageThisRound = Math.floor(Math.random()*4+1);
            totalDamage+=damageThisRound;
   
            var element = document.getElementById("gameStatus");
            var newElement = document.createElement("p");
            element.appendChild(newElement);
            newElement.innerHTML = "Got'm!" + "<br> Damage this round: " + damageThisRound +  "<br> Total damage: " + totalDamage;
 
            if(totalDamage>=4){
 
                var element = document.getElementById("gameStatus");
                var newElement = document.createElement("p");
                element.appendChild(newElement);
                newElement.innerHTML = "<br> He's dead! The treasure is yours!";
  
                slaying=false; 
            //endif(totalDamage>=4){}else{}
            };

            //else if youHit = false
        }else{

            var element = document.getElementById("gameStatus");
            var newElement = document.createElement("p");
            element.appendChild(newElement);
            newElement.innerHTML = "<br> You missed! He killed you. You lose!";   

            slaying=false;  
            
         //end if(youHit){}else{}   
        };
    //end while(slaying)
    };
//end function dragonSlayerFunction()
}


function dragonOrNot(){
    //generate either 0 or 1:
    var youHit = Math.floor(Math.random()*2);
    if(youHit){
        alert("The dragon is in front of you! Strike him with your sword before he kills you!");
        alert("You have a 50% chance of hitting him.");
        alert("Each hit causes 1-4 points damage.");
        alert("A total of 4 points damage will kill him.");
        alert("You have a 50% chance of hitting him.");
        alert("But if you miss even once, he will kill you!");
        dragonSlayerFunction();
    }else{alert("Nothing here. Looks like you went on a wild goose chase. But don't give up--the dragon is lurking somewhere. Try again.")
    };
}


 function adventure(){

 var user = prompt("There are 3 paths in front of you. Do you choose the one on the left (l), the one in the middle (m), or the one on the right(r)? Enter l, m or r.").toUpperCase();

switch(user){
    
    case 'L':
    var userLeft = prompt("To your left (l) is a cave. To your right (r) is a forest. Which way do you go? Enter l or r.").toUpperCase();
    if(userLeft==="L"){
        alert("The cave is dark and creepy.");
        dragonOrNot()
    }else if(userLeft==="R"){
       alert("The forest is dark and creepy.");
        dragonOrNot();
    }else{
        alert("Hey, that wasn't one of the choices!");
        adventure();
    }
    break;

    case 'M':
    var userMiddle = prompt("To your left (l) is an abandoned village. To your right (r) is a mountain. Which way do you go? Enter l or r.").toUpperCase();
    if(userMiddle ==="L"){
        alert("The village is dark and creepy.");
        dragonOrNot()
    }else if(userMiddle ==="R"){
        alert("The mountain is dark and creepy.");
        dragonOrNot();
    }else{
        alert("Hey, that wasn't one of the choices!");
        adventure();
    }
    break;
    
    case 'R':
    var userRight = prompt("To your left (l) is a castle. To your right (r) is a ravine. Which way do you go? Enter l or r.").toUpperCase();
    if(userRight ==="L"){
        alert("The castle is dark and creepy.");
        dragonOrNot()
    }
    else if(userRight ==="R"){
        alert("The ravine is dark and creepy.");
        dragonOrNot()
    }else{
        alert("Hey, that wasn't one of the choices!");
        adventure();
    }
    break;
    
    default:
    alert("Hey, that wasn't one of the choices!");
    adventure();
    }
 
};  


