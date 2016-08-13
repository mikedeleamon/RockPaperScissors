//This is a quick rock paper scisso


var playerChoice;
//  rock = 1;
//  paper = 2;
//  scissors = 3; 

var choices = ["rock","paper","scissors"];

var player=0
var computadora=0

//the game is best two out of three

function RPS() {

for (var i = 0; i <= 2; i++) {

	playerChoice = prompt("here we go!! Best of 3! Rock..Paper.. Scissorssss.....")
	//computer generates number here
	j= Math.floor((Math.random()*3));
	console.log(j)


// turns input into a number for comparison
	
	if(playerChoice==5) {
		return;
	}
	else if (playerChoice=="rock"){ 
		playerChoice =0;
	}
	else if (playerChoice=="paper"){
		playerChoice=1;
	}
		else if (playerChoice=="scissors"){
			playerChoice=2;
		}
			else{
				// checks if something other than Rock paper or scissors was typed
			playerChoice=prompt("Hey! that's not how you play! try again. Rock..Paper.. Scissorssss....." )
	}



	// game mechanics start here
	//  rock = 1;
	//  paper = 2;
	//  scissors = 3; 

	// this condition handles if player selects rock but computer gets scissors
	if(playerChoice ==0 && j == 2){
		//increments score for the scorebord
		player++;
		alert("SHOOT! Nuts, I lost :(. you picked " + choices[playerChoice] + " and I picked "+ choices[j]+"."
		 + "/n Score"+"\n you: " + player + "\n me: " + computadora) 
	}



		// this condition handles if player selects scissors but computer gets rock
	else if(playerChoice ==2 && j == 0){
		computadora++;
		alert(" SHOOT!! YES! I WIN! you picked " + choices[playerChoice] + " and I picked "+ choices[j]+"."
			+ "\n Score"+"\n you: "+ player + "\n me: " + computadora)
	}


	// this coditional handles the hierchy of the game
	else if ((playerChoice< j) && (playerChoice!=0)){
		computadora++;
		alert("SHOOT!! YES! I WIN! you picked "+ choices[playerChoice] + " and I picked " + choices[j]+"."
			+ "\n Score"+"\n you: " + player + "\n me: " + computadora)
	}
	// message for a tie
	else{
		alert("its a tie. that simply wont due!" + "\n Score"+"\n you: " + player + "\n me: " + computadora)
		i--;
	}


	}

var again = confirm("Thanks for playing with me! want to try again?")
	if (again){
		RPS()
	}
}