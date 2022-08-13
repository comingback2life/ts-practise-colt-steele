/**
 * Rather than supplying the object type in an annotation we can make use of type aliases
 */

type Point = {
	x: number;
	y: number;
};

type Song = {
	title: 'I want to break free';
	artist: 'Queen';
	numberOfStreams: 123456765432;
	credits: {
		producer: "I don't know";
		writer: "I don't know writer";
	};
};

const doublePoint = (point: {
	x: number;
	y: number;
}): { x: number; y: number } => {
	//this functions accepts an object called point which has x as a number and y as a number

	//this function should return object according to TS, so it will return another object where x and y are both numbers
	return { x: point.x * 2, y: point.y * 2 };
};

const doublePointv2 = (point: Point): Point => {
	//this now accepts a object called point that is of type Point and returns an object that is of type Point
	return { x: point.x * 2, y: point.y * 2 };
};

//nested object

const calculateEarnings = (song: {
	title: string;
	artist: string;
	numberOfStreams: number;
	credits: { producer: string; writer: string };
}): number => {
	return song.numberOfStreams * 0.333;
}; // rather than doing this we can just pass the types

const calculateEarningsv2 = (song: Song): number => {
	//refactored version of the function above using types
	return song.numberOfStreams * 0.333;
};

const printSong = (mySong: Song): void => {
	//mySong is a function param with the type Song
	console.log(`${mySong.title} - ${mySong.artist}`);
};

const mySong: Song = {
	title: 'I want to break free',
	artist: 'Queen',
	numberOfStreams: 123456765432,
	credits: {
		producer: "I don't know",
		writer: "I don't know writer",
	},
};
const earnings = calculateEarningsv2(mySong);
console.log(earnings);
printSong(mySong);
