function dragonslayerFunction(){

alert("Strike the dragon");

var slaying=true;


//generate either 0 or 1:
var youHit = Math.floor(Math.random()*2);


//Generate 0, 1, 2, 3, 4, or 5. (Generate a number <1, multiply it by 5 to get a number <5, add 1 to get a number <6, floor it to get an integer <=5)
var damageThisRound = Math.floor(Math.random()*5+1);

var totalDamage=0;



while(slaying){
 
   
if(youHit){
 
             
totalDamage+=damageThisRound;
   
var element = document.getElementById("gameStatus");
var newElement = document.createElement("p");
element.appendChild(newElement);
newElement.innerHTML = "Got'm!" + "<br> Damage this round:" + damageThisRound +  "<br> Total damage:" + totalDamage;
 

if(totalDamage>=4){
 
 
var element = document.getElementById("gameStatus");
var newElement = document.createElement("p");
element.appendChild(newElement);
newElement.innerHTML = "<br> He's dead!";
  
slaying=false; 
  

}else{

alert("Strike the dragon");
           
youHit = Math.floor(Math.random()*2); 
        

}
    

}else{
  
  
var element = document.getElementById("gameStatus");
var newElement = document.createElement("p");
element.appendChild(newElement);
newElement.innerHTML = "<br> You missed! He killed you. You lose!";
        

slaying=false;
 
       
}

}


};
