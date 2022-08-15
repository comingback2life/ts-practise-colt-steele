//native to typeScript only

/**
 * Enums allow us to defined a set of named-constants.
 * It can be numeric or string value
 */

enum direction {
	NORTH,
	SOUTH,
	EAST = 123.54,
	WEST = 111.33,
}

const whatsTheDirection = direction.NORTH;

function getDirection(direction: direction) {
	console.log(direction);
}

getDirection(direction.EAST); //enum of type direction

enum ArrowKeys {
	UP,
	DOWN,
	LEFT,
	RIGHT,
}
