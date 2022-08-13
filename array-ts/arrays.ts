const activeUsers: string[] = [];
const inactiveUsers: string[] = ['Samip'];
const anyUsers = []; //any type
activeUsers.push('Tony Stark');
// activeUsers.push(2);  //this won't work because it is of a type string

const ageList: number[] = []; // number type array

const bools: Array<boolean> = []; //creates an empty array of booleans

type Point = {
	//calling it type v2 because typeAlisaPrac.ts already has a type called Point and if two files are open together it shows error
	x: number;
	y: number;
};

const coords: Point[] = []; //cords is a Point type array with no value

coords.push({ x: 3, y: 5 }); //requires both the value required by the type
