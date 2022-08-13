function square(num: number) {
	return num * num;
}
console.log(square(3));

function greet(person: string) {
	//person * person; // not valid because it a type string
	return `Hi there ${person}`;
}

/**
 * Invalid
 * // greet(3);
// greet(true);
 */
greet('Samip');

const fullName = (name: string, age: number, isFunny: boolean) => {
	return 'ok';
};

// fullName('Samip', '111');
/**
 * The above code is invalid because TS knows if too little arguments were provided
 */

const greetDefault = (name: string = 'Stranger') => {
	//defaults the name to stranger if nothing is provided
};

greetDefault();

const addNums = (num1: number, num2: number): number => {
	//not necessary with typeScript because it infers anyway but it helps TS know what kind of a value does the function return
	return num1 * num2;

	//if given nothing TS assumes it is a void
};

function mysteryFunction(num: number) {
	if (Math.random() < 0.5) {
		return num.toString();
	} else {
		return num;
	}
} //TS knows that it eithers returns a string or number

const anotherFunction = (fullObj: object) => {
	for (let as in fullObj) {
		console.log('hello', as);
	}
}; //also accept objects

const colors = ['Yellow', 'Blue', 'Red'];
colors.map((color) => {
	// return color.toFixed();  //ts will know about this too and know that the color is a string and has no method called toFixed();
	return color.toUpperCase();
});

const printTwice = (msg: string): void => {
	//telling typeScript wouldn't return anything
	console.log(msg);
	// return ''; //typeScript knows this is a void method so it would not return anything hence return is not accepted
};

function makeError(msg: string): never {
	throw new Error(msg);
} //this function should never return anything -- no return keyword allowed

//Why not use void ? : Void technically returns undefined.
