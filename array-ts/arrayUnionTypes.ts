type Pointv3 = {
	x: number;
	y: number;
};

type Loc = {
	lat: number;
	long: number;
};

let coordinates: Pointv3 | Loc = { x: 1, y: 34 };
coordinates = { lat: 33, long: 33 }; //it can take both Point type and Loc type

const printAge = (age: number | string): void => {
	console.log(`You are ${age} years old`);
};

printAge(32);
printAge('32'); // both values are accepted

/**
 *
 */

function calculatePrice(price: number | string, tax: number) {
	if (typeof price === 'string') {
		price.replace('$', ''); //typeScript knows that it is a string
	} else {
		price * tax;
	}
}
