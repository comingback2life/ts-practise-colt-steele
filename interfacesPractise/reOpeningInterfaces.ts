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

interface serviceDogs extends Dog {
	job: 'drug sniffer' | 'bomb squad' | 'guide dog';
}

const chewy: serviceDogs = {
	name: 'Chewy',
	age: 30,
	breed: 'Lab',
	bark: () => {
		return 'Barkkkksss !';
	},
	job: 'drug sniffer',
};

interface Human {
	name: string;
}
interface Employee {
	readonly id: number;
	email: string;
}
interface Engineer extends Human, Employee {
	level: string;
	skills: string[];
}
const Samip: Engineer = {
	name: 'Samip',
	id: 1,
	email: 'hello@hello.com',
	level: 'Junior',
	skills: ['git', 'tsx'],
};
