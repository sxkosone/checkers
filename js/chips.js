// some mock functions

function selectChip() {
	// things that happen when a user clicks-on a chip on the board:
	// - get the ID of the selected chip
	// - highlight the chip in the UI so the user can see it's selected
	// - get the ID of the current space/square/box that the selected chip is in
	// - check the surrounding spaces for available valid moves
	// - call the validateMoves function, pass the selected chip and the current square as arguments. 
	//   might also need to pass-in the player or player's chip color
	// validateMoves(selectedChip, currentSquare); 
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

// init functions
const chips = document.querySelectorAll('.chip');
console.log(chips);