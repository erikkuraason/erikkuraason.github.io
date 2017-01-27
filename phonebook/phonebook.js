function phoneBook(){

    var contacts = [];
    var wantToAdd = confirm("Do you want to add an entry (Click \"OK\" for yes, \"Cancel\" for no.)");

    while(wantToAdd){

        var addEntry = function(firstName, lastName, phoneNumber){
            contacts[contacts.length] = {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber
                };
        };
  
        var firstName = prompt("Enter the first name");
        var lastName = prompt("Enter the last name");
        var phoneNumber = prompt("Enter the phone number");

        addEntry(firstName, lastName, phoneNumber);

        var wantToAdd = confirm("Do you want to add an entry? Click \"OK\" for yes, \"Cancel\" for no.");

    //end while loop wantToAdd
    };

    function printPerson(person) {
        alert("First name: " + person.firstName +  ". Last name: " + person.lastName + ". Phone number: " + person.phoneNumber +".");
        var element = document.getElementById("display");
        var newElement = document.createElement("p");
        element.appendChild(newElement);
        newElement.innerHTML = "First name: " + person.firstName +  "<br>Last name: " + person.lastName + "<br>Phone number: " + person.phoneNumber;
    };


    var wantToSearch = confirm("Do you want do search for an entry? Click \"OK\" for yes, \"Cancel\" for no.")

    if(wantToSearch){

    var searchLastName = prompt("Enter the last name of the person you want to search for")

    var search = function(searchLastName){
        var contactsLength = contacts.length;
        for (var i=0; i<contactsLength; i++){
            if(contacts[i].lastName===searchLastName){
            printPerson(contacts[i]);
            };
        };
        
    };
    
    search(searchLastName);
 
    //end if(wantToSearch)
    };

    var wantToDisplay = confirm("Do you want to display all entries? They will be displayed one at a time. Click \"OK\" for yes, \"Cancel\" for no.");
    if(wantToDisplay){
        function list(){
	        var contactsLength = contacts.length;
	        for (var i = 0; i < contactsLength; i++){
		    printPerson(contacts[i]);
	        };
        };
    list();
    }else{alert("Goodbye");};

  };


