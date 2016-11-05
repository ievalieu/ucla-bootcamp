// Initialize Firebase

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


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-("

var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// 
// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot) {

	// If Firebase has a highPrice and highBidder stored (first case)
	if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
		// Set the initial variables for highBidder equal to the stored values.
			highBidder = snapshot.val().highBidder;
			highBid = parseInt(snapshot.val().highPrice);



		// Change the HTML to reflect the initial value
		$("#highestBidder").html(snapshot.val().highBidder);
		$("#highestPrice").html(initialBid);

		// Print the initial data to the console.
		console.log(initialBidder);
		console.log(initialBid);

	}

	// Keep the initial variables for highBidder equal to the initial values
	else{

		// Change the HTML to reflect the initial value
		$("#").html(initialBid);


		// Print the initial data to the console.



	}



// If any errors are experienced, log them to console. 
}, function (errorObject) {

  	console.log("The read failed: " + errorObject.code);

});

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#submitBid").on("click", function() {

	// Get the input values
	var bidderName = $("#bidderName").val().trim();
	var bidderPrice = $("#bidderPrice").val().trim();


	// Log the Bidder and Price (Even if not the highest)
	console.log("BN: " + bidderName);
	console.log("BP: " + bidderPrice);

	if(bidderPrice > highPrice) {

		// Alert 
		alert("You are now the highest bidder.");

		// Save the new price in Firebase
		database.ref().set({
			highBidder: bidderName,
			highPrice: bidderPrice
		});


		// Log the new High Price
		console.log("New high bidder: " + snapshot.val().highBidder);
		console.log("New high price: " + snapshot.val().highPrice);


		// Store the new high price and bidder name as a local variable (could have also used the firebase variable)

		highBidder = snapshot.val().highBidder;
		highPrice = snapshot.val().highPrice;


		// Change the HTML to reflect the new high price and bidder
		$("#highestBidder").html(snapshot.val().highBidder);
		$("#highestPrice").html(snapshot.val().highPrice);
	}

	else{

		// Alert
		alert("Sorry that bid is too low. Try again.");	
	}

	// Return False to allow "enter"
	return false;
});


