
$(document).ready(function(){

$('#one').append('<form>MESSAGE: <input type="text" name="message" value="Type your text here!"></form><br><button id="button">Add!</button>');

 $('button').click(function() {
    	var toAdd = $("input[name=message]").val();
         //$('#messages').append("<p>"+toAdd+"</p>");
    });


});


