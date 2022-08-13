const dog = {
	name: 'Sheep',
	breed: 'Australian Shepherd',
	age: 0.5,
};

const printName = (person: { first: string; lastName: string }): void => {
	//this function expects an object that has key first and the value should be string
	//also lastName is a key that accepts string
	console.log(`${person.first} ${person.lastName}`);
};

printName({ first: 'Sadio', lastName: 'Mane' });
// printName({ first: 'Mohammed', lastName: 'Salah', age: 44 }); // this will not pass
const footballer = {
	first: 'Mohammed',
	lastName: 'Salah',
	age: 37,
};
printName(footballer); //TS only checks the two properties first and last and the excess properties are ignored
let coordinate: { x: number; y: number } = { x: 3, y: 2 }; //valid but a little odd

const makeRandomCoordinates = (): { x: number; y: number } => {
	return { x: Math.random(), y: Math.random() };
}; //function with a return type annonated as an object
