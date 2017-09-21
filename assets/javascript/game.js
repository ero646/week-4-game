
//setup variables
var playerScore = 0;
var randomnum = 0;
var endOfGame = false;	
var playLoses = false;
var playerScore = 0;
var wins=0;
var losses=0;


var crystal = {
	red : {
		value :0,
		path : "assets/images/mind_gem.jpg",

	},

	blue : {
		value : 0,
		path : "assets/images/time_gem.jpg",
	},
	
	yellow : {
		value : 0,
		path : "assets/images/power_gem.jpg",
	},

	green : {
		value : 0,
		path : "assets/images/space_gem.jpg",
	},

};



$(document).ready(function(){

	
	$('#red').append('<img src=' + crystal.red.path + '>');
	$('#red').click(function(){
		if (endOfGame == false){
		playerScore=playerScore + crystal.red.value;
		checkScore();
		$('#playerScore').html(playerScore);
		};
	})


	$('#blue').append('<img src=' + crystal.blue.path + '>');
	$('#blue').click(function(){
		if (endOfGame == false){
		playerScore=playerScore + crystal.blue.value;
		checkScore();
		$('#playerScore').html(playerScore);
		};
	})


	$('#yellow').append('<img src=' + crystal.yellow.path + '>');  
	$('#yellow').click(function(){
		if (endOfGame == false){
		playerScore=playerScore + crystal.yellow.value;
		checkScore();
		$('#playerScore').html(playerScore);
		};
	})


	$('#green').append('<img src=' + crystal.green.path + '>');
	$('#green').click(function(){
		if (endOfGame == false){
		playerScore=playerScore + crystal.green.value;
		checkScore();
		$('#playerScore').html(playerScore);
		};
	})


	function checkScore(){
				$('#playerScore').html(playerScore);
				if (playerScore == randomnum){
						endOfGame = true;
						wins++;
						alert ("You Won!");
						}else if (playerScore > randomnum){
							Playerloses = true;
							endOfGame = true;
							losses++;
							alert("You Lost!");
						};
						
						if (endOfGame){
						$('#wins').html("Wins: " + wins);
						$('#losses').html("Losses: "+losses);
						setTimeout(startgame,100);
						}
	}

	function startgame(){
			endOfGame = false;	
			playLoses = false;
			playerScore = 0
			randomnum = Math.round(Math.random() * (120 - 19)) + 19;
			
			crystal.red.value = Math.round(Math.random() * (12-1)) + 1;
			crystal.blue.value = Math.round(Math.random() * (12-1)) + 1;
			crystal.yellow.value = Math.round(Math.random() * (12-1)) + 1;
			crystal.green.value = Math.round(Math.random() * (12-1)) + 1;
			
			$('#playerScore').html(playerScore);
			$('#randnum').html(randomnum);
			$('#wins').html("Wins: " + wins);
			$('#losses').html("Losses: "+losses);
	}



startgame();

});