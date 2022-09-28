interface Dog {
	name: string;
	age: number;
}
interface Dog {
	breed: string;
	bark: () => string;
}

const elton: Dog = {
	name: 'Elton',
	age: 0.5,
	breed: 'Chihuwawa',
	bark: () => {
		return 'Woof!';
	},
}; //dog is the combination of two interfaces
