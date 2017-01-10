window.onload = function(){ 

$('#one').append('<button id="button">Play</button>');
document.getElementById("button").onclick = function() {dragonSlayerFunction()};

function dragonSlayerFunction(){

    //alert("Strike the dragon");

    var slaying=true;

    //generate either 0 or 1:
    var youHit = Math.floor(Math.random()*2);

    var damageThisRound;

    //var damageThisRound = Math.floor(Math.random()*5+1);
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
                newElement.innerHTML = "<br> He's dead!";
  
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
};
//end window.onload = function ()
};