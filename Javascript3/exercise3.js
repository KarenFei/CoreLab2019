var myArray = [ "Violet", 
				"Indigo", 
				"Blue", 
				"Green", 
				"Yellow",
				"Orange",
				"Red"
			   ];

// document.getElementById("Color").innerHTML = myArray;


// var myOtherArray = ["Color/Violet.jpg",
// 				"Color/Indigo.png",
// 				"Color/blue.jpg",
// 				"Color/green.png",
// 				"Color/yellow.jpg",
// 				"Color/orange.jpg",
// 				"Color/red.jpg"];

var myOtherArray = [ " Innocence", 
				" Wisdom ", 
				" loyalty", 
				" freshness", 
				" hope",
				" enthusiasm",
				" passion"
			   ];

var counter = 0;

var myContainer = document.getElementById("Color");

while(counter < myArray.length ){
	var myListItem = document.createElement("li");
	myListItem.innerHTML = myArray[counter] + myOtherArray [counter];
	myContainer.appendChild(myListItem)
	counter++; // is the same as counter = counter +1;
}