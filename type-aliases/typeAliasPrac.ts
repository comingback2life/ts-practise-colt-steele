/**
 * Rather than supplying the object type in an annotation we can make use of type aliases
 */

type Point = {
	x: number;
	y: number;
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
