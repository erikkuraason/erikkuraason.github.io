//window.onload = function () {
  
 function rpsFunction(){

 var user = prompt("Which do you prefer, classical or jazz? (Enter either choice)").toUpperCase();


switch(user){
    
    case 'CLASSICAL':
    var userClassical = prompt("What style period? Baroque, Classical, Romantic, or Modern?").toUpperCase();
    
    if(user==="CLASSICAL"&&userClassical==="BAROQUE")
    {document.getElementById("computerResponse").innerHTML="Why did J.S. Bach have 20 children? <br> Because his organ didn't have any stops.";
    }

    else if(userClassical==="CLASSICAL")
    {document.getElementById("computerResponse").innerHTML="Nobody could find the composer of the Surprise Symphony. He must've been Haydn.";
    }

    else if(userClassical==="ROMANTIC")
    {document.getElementById("computerResponse").innerHTML="\"Works of art make rules; rules do not make works of art.\"--Claude Debussy";
    }

    else if(userClassical==="MODERN")
    {document.getElementById("computerResponse").innerHTML="\"The more constraints one imposes, the more one frees one's self.\"--Igor Stravinsky";
    }

    else
    {document.getElementById("computerResponse").innerHTML="Hey, that wasn't one of the choices!";
    }
    break;
    
    case 'JAZZ':

    var userJazz = prompt("What kind of jazz? New Orleans, Swing, Bebop, or Hard Bop?" ).toUpperCase();
    if(userJazz ==="NEW ORLEANS")
    {document.getElementById("computerResponse").innerHTML="Do you know what it means to miss New Orleans?";
    }

    else if(userJazz ==="SWING")
    {document.getElementById("computerResponse").innerHTML="It don't mean a thing if it ain't got that swing!";
    }

    else if(userJazz ==="SWING")
    {document.getElementById("computerResponse").innerHTML="It don't mean a thing if it ain't got that swing!";
    }

    else if(userJazz ==="BEBOP")
    {document.getElementById("computerResponse").innerHTML="Do the cheeks, Diz!";
    }

    else if(userJazz ==="HARD BOP")
    {document.getElementById("computerResponse").innerHTML="\"You can play a shoestring if you're sincere.\"--John Coltrane";
    }

    else
    {document.getElementById("computerResponse").innerHTML="Hey, that wasn't one of the choices!";
    }
    break;
    
    /*
    case 'COUNTRY':
    document.getElementById("computerResponse").innerHTML="My achey-breaky heart.";
    break;

    case 'ROCK':
    document.getElementById("computerResponse").innerHTML="I know, it's only rock and roll, but you like it.";
    break;
    */
    
    default:
    document.getElementById("computerResponse").innerHTML="Whatever strokes your folks. <br> Different floats for different boats.";
    }





};  


