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
