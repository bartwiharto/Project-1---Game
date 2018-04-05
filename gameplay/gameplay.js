// alert ("you are sane!");

//create const for runner 1 & 2:

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

let addMargin2 = 0;
$('#button2').on('click', function(){
	addMargin2 += 100;
//add addMargin to runner2's left margin in CSS:
	$('#runner2').css('margin-left', addMargin2 + ("px"));
	if(addMargin2 >= 1300) {
		alert("You done be drunk, runner 2!");
	}
});































