
$(document).ready(function(){

var btn = document.createElement("BUTTON");
    btn.id = 'someId';
    var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    document.body.appendChild(btn);

document.getElementById("someId").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("someId").innerHTML = "YOU CLICKED ME!";
}

};
