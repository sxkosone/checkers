// some mock functions

function selectChip(chip) {
	// make sure any other selected chip on the board is unselected.
	// Only one chip should be selected at any time.
	clearSelection();
	// things that happen when a user clicks-on a chip on the board:
	// - get the element of the selected chip
	console.log(chip); // `chip` is the variable that represents the DOM element of the chip that was clicked

	// - highlight the chip in the UI so the user can see it's selected
	chip.classList.add('selected'); // add a class, `selected`, which should provide a highlight via CSS

	// - get the ID of the current square that the selected chip is in
	// - check the surrounding squares for available valid moves
	// - call the validateMoves function, pass the selected chip and the current square as arguments.
	//   might also need to pass-in the player or player's chip color
	// validateMoves(selectedChip, currentSquare);
}

function clearSelection() {
	const selectedChip = document.querySelectorAll('.selected'); // check the DOM for elements with a `selected` class
	if (selectedChip) { // if there are any instances of the `selected` class...
		for (var i = 0, len = selectedChip.length; i < len; i++) { // loop through them...
			selectedChip[i].classList.remove('selected'); // and remove the `selected` class
		}
	} else {
		return;
	}
}

function validateMoves(selectedChip, currentSquare) {
	// things to check to find out what the available moves are for the selected chip:
	// - get the array of nextValidSquares from the square's markup (or encapsulate that data into another object somewhere?)
	// - check each of the nextValidQuares for empty squares or enemy chips/friendly chips using the squareContains function
	// - create an array of available empty valid squares that the chip can move to
	// - create an array of valid squares that contain enemy chips
	// - when a valid square contains an enemy chip, check for available capture
	// - if a capture is available, create an array of valid squares to *jump-to* that would *capture* an enemy chip
}

function squareContains(selectedChip) {
	// decide if a valid square is empty.
	// if not empty, decide if the square contains a chip
	// if the square contains a chip, find out if it is an enemy chip!
	// isEnemyChip(selectedChip, evalChip)
	// return possible values: "emptySquare", "friendlyChip", "enemyChip"
}

function isEnemyChip(selectedChip, evalChip) {
	// check the selectedChip's color and test it against another chip, `evalChip` to decide if it is an enemy chip.
	// return a boolean
}

function userClick(element) {
	//takes a parameter of e.target, any clicked element on the page

	//if element is chip...
	if (element.classList.contains('chip')) {

		//check if chip already selected
		if (element.classList.contains('selected')) {
				clearSelection();

			//check if it's your own chip, NOT an enemyChip
			// else if (!isEnemyChip(element, evalChip))
			//this step commented out for testing purposes. Game will select any chip.
		} else {
			//select that chip
			selectChip(element);
		}
		//if element is square
	} else if (element.classList.contains('square')) {
		//if square is within an array of valid moves for the last .selected chip!
		//then make move: update state/location of chip, run the right animation
		//else
		//then perhaps alert user: "not a valid move"?
		//if element is not a square, nor a chip = it's outside the board, clear the selection
	} else {
		clearSelection();
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
