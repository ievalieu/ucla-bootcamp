// Initialize Firebase (YOUR OWN APP)

var config = {
	apiKey: "AIzaSyANWJK9uI0z5m0iAlHVL82Exlgf0c_c7h8",
	authDomain: "super-awesome-e22d5.firebaseapp.com",
	databaseURL: "https://super-awesome-e22d5.firebaseio.com",
	storageBucket: "super-awesome-e22d5.appspot.com",
	messagingSenderId: "708432104187"
};

firebase.initializeApp(config);


// Create a variable to reference the database
var database = firebase.database();

// Use the below Initial Value 
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;	

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data. (I.E FIREBASE HERE)
// HINT: Use databaseVariable.ref().on("value", function(snapshot)) {}


//$(document).ready(function(){
	
	database.ref().on("value", function(snapshot){

// Inside your .on function...	
	// Console.log the initial "snapshot" value (the object itself)
	console.log(snapshot.val());
	$("#clickValue").html(snapshot.val().clickCount);

	
	// Change the initial value to reflect the initial value in Firebase
	// HINT: snapshot.val().__________
	clickCounter = snapshot.val().clickCount;
	
	// Change the value of your clickCounter to match the value in the database
	// ___________ = snapshot.val().______________________
	
	// Change the HTML using jquery to reflect the updated clickCounter value
	$("#clickValue").html(clickCounter);
});
//});
// Then include Firebase error logging
// HINT: }, function(errorObject) 

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#clickButton").on("click", function() {

	// Reduce the clickCounter by 1
	clickCounter--;

	// Alert User and reset the counter
	if (clickCounter == 0 ) {
		alert("Phew! You made it! That sure was a lot of clicking.");
		clickCounter = initialValue;
	}

	// Save new value to Firebase
	database.ref().set({
		clickCount: clickCounter
	});


	// Log the value of clickCounter
	console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restartButton").on("click", function() {

	// Set the clickCounter back to initialValue
	clickCounter = initialValue;
	
	// Save new value to Firebase
	database.ref().set({
		clickCount: clickCounter
	});



	// Log the value of clickCounter
	console.log(clickCounter);

	// Change the HTML Values
	$('#clickValue').html(clickCounter);


});

