type Circle = {
	radius: number;
};
type Colorful = {
	color: string;
};

type ColorfulCircle = Circle & Colorful; //intersecting two types -- direct intersection

const happyFace: ColorfulCircle = {
	radius: 4,
	color: 'Yellow',
};

type Cat = {
	numLives: number;
};
type Dog = {
	breed: string;
};
type CatDog = Cat &
	Dog & {
		age: number;
	}; //intersecting with another property

const catDog: CatDog = {
	numLives: 4,
	breed: 'Husky',
	age: 12,
};

console.log(catDog);
