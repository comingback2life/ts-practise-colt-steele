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
	//sayHi():string // another way to defined a function
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

interface Product {
	name: string;
	price: number;
	applyDiscount(discount: number): number;
}
const shoes: Product = {
	name: 'Blue Sweat Shoes',
	price: 100,
	applyDiscount(discount: number) {
		const newPrice = this.price * (1 - discount);
		this.price = newPrice;
		return newPrice;
	},
};
console.log(shoes.applyDiscount(0.4));
