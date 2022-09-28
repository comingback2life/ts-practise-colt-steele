//learning interfaces
// type Point = {
// 	x: number;
// 	y: number;
// };

// const anotherPoint: Point = { x: 3, y: 2 };

interface Point {
	x: number;
	y: number;
}
const anotherPoint: Point = { x: 3, y: 3 };

interface Person {
	readonly id: number;
	firstName: string;
	lastName: string;
	nickname?: string; //nickname is optional
	sayHi: (name: string) => string;
}

const Thomas: Person = {
	id: 1122,
	firstName: 'Thomas',
	lastName: 'Thomas',
	nickname: 'Tom',
	sayHi: (firstName) => {
		return 'Hello' + ' ' + firstName;
	},
};
const Jerry: Person = {
	id: 1212,
	firstName: 'Jerry',
	lastName: 'Thomas',
	sayHi: (firstName) => {
		return `Hey! ${firstName}`;
	},
};

console.table(Jerry);
console.table(Thomas);
