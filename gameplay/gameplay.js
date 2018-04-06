// alert ("you are sane!");

//on click of button: 


let runner1 = $('#runner1');
let runner2 = $('#runner2');



// create a button click function:

let addMargin1 = 0;

$('#button1').on('click', function(){
	addMargin1 += 100;
//add addMargin to runner1's left margin in CSS:
	$('#runner1').css('margin-left', addMargin1 + ("px"));
	if(addMargin1 >= 1300) {
		alert("You done be drunk, runner 1!");
	}

});

// create if statement so that when it's true then runner 2 can go: <= Not sure if necessary
// (Another way: using Jquery's .hasClass(), .addClass, or .removeClass) Will look into this if there's time.


//Create an alert that prompt's it's the other player's turn:
$('#runner1Completed').on('click', function() {
		alert("It's Player 2\'s turn.");
});

$('#runner1Failed').on('click', function() {
		alert("It's Player 2\'s turn.");
});


let addMargin2 = 0;
$('#button2').on('click', function(){
	addMargin2 += 100;
//add addMargin to runner2's left margin in CSS:
	$('#runner2').css('margin-left', addMargin2 + ("px"));
	if(addMargin2 >= 1300) {
		alert("You done be drunk, runner 2!");
	}
});

$('#runner2Completed').on('click', function() {
		alert("It's Player 1\'s turn.");
});

$('#runner2Failed').on('click', function() {
		alert("It's Player 1\'s turn.");
});


//Create truth and Dare arrays

var truth = ["Have you ever had a threesome?", 
			"Have you ever let someone take the blame for something you did? Tell the story.", 
			"What the most shocking thing your kids/friends/relatives don\'t know about you?",
			"If you could punch anyone in the face and get away with it, who would it be?",
			"What do you suck at doing? If possible, do it."];

var dare = ["Give your opponent a lap dance for 30 seconds.",
			"Take 1 article of clothing off.",
			"Take a body shot off of your opponent (any style).",
			"Sing a song from the 80\'s or 90\'s very loudly.",
			"Dance hardcore without music for 1 minute."];

//create function to generate random numbers:

//Math.random generates random number from 0 up to but not including 1. if we mulitply by 6, then it will generate 0 up to but not including 6.
//Math.ceil(Math.random() * (truth.length));


//create loop function that can randomly generate questions: DONE
//make so that function above works when a button is clicked: DONE
//make so that it won't repeat twice:

$('#buttonTruth').on('click', function(){
	var pickedNumber = Math.floor(Math.random() * truth.length);
	randomTruth = truth[pickedNumber];
	console.log(randomTruth);

	truth.splice(pickedNumber, 1);
});

//Do the same for Dare:

$('#buttonDare').on('click', function(){
	var pickedNumber = Math.floor(Math.random() * dare.length);
	randomDare = dare[pickedNumber];
	console.log(randomDare);

	dare.splice(pickedNumber, 1);
});
































