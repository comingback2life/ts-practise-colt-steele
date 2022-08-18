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

//what do eNums compile to ?

/**
 * enums generates additional code when compiled to javaScript
 */

enum orderStatus {
	PENDING,
	SHIPPED,
	DELIVERED,
	RETURNED,
}

/**
 * that will compile to  the following in JS
 * "use strict";
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["PENDING"] = 0] = "PENDING";
    orderStatus[orderStatus["SHIPPED"] = 1] = "SHIPPED";
    orderStatus[orderStatus["DELIVERED"] = 2] = "DELIVERED";
    orderStatus[orderStatus["RETURNED"] = 3] = "RETURNED";
})(orderStatus || (orderStatus = {}));

 */
