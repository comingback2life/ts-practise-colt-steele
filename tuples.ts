//tuple is an array type with fixed length and ordered with a fix set of types
//tuple does not exist in JS

const numberTuple: [number, number, number] = [1, 2, 3]; //three required numbers in an array

type mixedTuple = [number, string, boolean];

const goodRes: mixedTuple = [1, 'A', true];
// goodRes is of type tuple which can only accept a number,string and boolean in the same order

//you can push extra elements after declaration
goodRes.push('Ok');
goodRes.pop(); //allows you to pop too
console.log(goodRes);

const goodResArrayOfTuples: mixedTuple[] = [[1, 'Samip', false]]; //this is now an array of tuples
