type User = {
	readonly id: number;
	//if there was array instead of  numbers they are allowed as they are refrential type and not primitive type
	username: string;
};

const user: User = {
	id: 1234,
	username: 'cat123',
}; //no problem here when assigning initially

// user.id = 12345; it won't allow to change
const printUser = () => {};
