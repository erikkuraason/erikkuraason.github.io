
$(document).ready(function(){

$('#one').append('<button id="button">Click me</button>');

document.getElementById("button").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("button").innerHTML = "YOU CLICKED ME!";
}

});


