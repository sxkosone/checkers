var selectedChip; // creates a global variable to track the selectedChip element without requiring looping through the DOM for classes
var selectedSquare; //a global variable to track the selectedSquare element

function selectChip(chip) {

	// Only one chip should be selected at any time, so if the selectedChip variable is truthy, we should clear that.
	if(selectedChip) {
		clearSelection();
	}
	// things that happen when a user clicks-on a chip on the board:
	// - get the element of the selected chip
	console.log(chip); // `chip` is the variable that represents the DOM element of the chip that was clicked

	// - highlight the chip in the UI so the user can see it's selected
	chip.classList.add('selected'); // add a class, `selected`, which should provide a highlight via CSS

	selectedChip = chip; // set the newly-clicked chip to be the global selectedChip

	return selectedChip; // return the freshly-set selectedChip variable back to the global scope

	// - get the ID of the current square that the selected chip is in
	// - check the surrounding squares for available valid moves
	// - call the validateMoves function, pass the selected chip and the current square as arguments.
	//   might also need to pass-in the player or player's chip color
	// validateMoves(selectedChip, currentSquare);
}

function selectSquare(square) {
	//only one square can be selected at a time. If one square already selected, clear previous selection.
	if (selectedSquare) {
		clearSquare();
	}
	//testing: log that square has been selected
	console.log("Function selectSquare will select this " + square.classList[1])
	//add class selected to the selected square
	square.classList.add('selected');
	//set the newly-clicked square to be the global variable of selectedSquare
	selectedSquare = square;
	//return the new selected square
	return selectedSquare;
}

function clearSelection() {
	selectedChip.classList.remove('selected'); // remove the `selected` class
	selectedChip = undefined; // set the global variable back to undefined
	return selectedChip; // return the undefined variable back to the global scope
}

function clearSquare() {
	//this function does same as clearSelection() but for squares
	selectedSquare.classList.remove('selected');
	selectedSquare = undefined;
	return selectedSquare;
}

function validateMoves(currentSquare) {
	// things to check to find out what the available moves are for the selected chip:
	// - get the array of nextValidSquares from the square's markup (or encapsulate that data into another object somewhere?)
	// - check each of the nextValidQuares for empty squares or enemy chips/friendly chips using the evalSquare function
	// - create an array of available empty valid squares that the chip can move to
	// - create an array of valid squares that contain enemy chips
	// - when a valid square contains an enemy chip, check for available capture
	// - if a capture is available, create an array of valid squares to *jump-to* that would *capture* an enemy chip
}

function evalSquare(selectedSquare) {

	// if the clicked square is the parent of the selectedChip, do nothing.
	if (selectedSquare.children[0] == selectedChip) {
		return false;
	}

	var squareHas;

	if (selectedSquare.children.length === 0) {
		squareHas = "emptySquare";
	} else if (isEnemyChip(selectedSquare.children[0])) {
		squareHas = "enemyChip";
	} else {
		squareHas = "friendlyChip";
	}

	return squareHas;

}

function isEnemyChip(evalChip) {
	if (!selectedChip) {
		return false;
	}

	var chipColor;
	var evalChipColor;

	if (selectedChip.classList.contains("red")) {
		chipColor = "red";
	} else {
		chipColor = "black";
	}

	if (evalChip.classList.contains("red")) {
		evalChipColor = "red";
	} else {
		evalChipColor = "black";
	}

	if (chipColor === evalChipColor) {
		return false;
	} else {
		return true;
	}
}

function userClick(element) {
	//takes a parameter of e.target, any clicked element on the page

	// if the clicked element is also the selectedChip, do nothing.
	// testing purposes: or if the clicked element is the selectedSquare, do nothing
	if (element == selectedChip || element == selectedSquare) {
		// this condition will execute first and the return false here will ensure that the remainder
		// of the userClick() function does not execute.
		return false;
	}

	//if element is chip...
	if (element.classList.contains('chip')) {
		//select that chip
		selectChip(element);

		//check if it's your own chip, NOT an enemyChip
		// else if (!isEnemyChip(element, evalChip))
		//this step commented out for testing purposes. Game will select any chip.

		//if element is square
	} else if (element.classList.contains('red-square')) {
		console.log("that's a red square!");
		selectSquare(element);

		//if square is within an array of valid moves for the last .selected chip!
		//then make move: update state/location of chip, run the right animation
		//else
		//then perhaps alert user: "not a valid move"?

	} else if (element.classList.contains('black-square')) {
		//var squareHas = evalSquare(element);
		//console.log("squareHas = "+squareHas);
		console.log("that's a black square!");

		selectSquare(element);
		//if element is not a square, nor a chip = it's outside the board
	} else {
		//if a chip or square were selected, clear the selections
		if(selectedChip) {
			clearSelection();
			clearSquare();
		}

	}
}



// init functions

//add an event listener to all DOM elements
document.addEventListener('click', function(e){
	//on "click", this will pass the clicked element to the function
	userClick(e.target);
});

//I commented out the old event listeners and selectors for just chips
//OLD scan the DOM for all the chips and store them as an array called `chips`
//const chips = document.querySelectorAll('.chip');

// OLD loop over the chips array
// for (var i = 0, len = chips.length; i < len; i++) {
// 	console.log(chips[i].id); // log all the chip IDs in the console to be sure we can read them
// 	chips[i].addEventListener('click', function(e) {
// 		selectChip(e.target);
// 	});
// }
