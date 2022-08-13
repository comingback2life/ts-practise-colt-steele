/**
 * Rather than supplying the object type in an annotation we can make use of type aliases
 */
var doublePoint = function (point) {
    //this functions accepts an object called point which has x as a number and y as a number
    //this function should return object according to TS, so it will return another object where x and y are both numbers
    return { x: point.x * 2, y: point.y * 2 };
};
var doublePointv2 = function (point) {
    //this now accepts a object called point that is of type Point and returns an object that is of type Point
    return { x: point.x * 2, y: point.y * 2 };
};
//nested object
var calculateEarnings = function (song) {
    return song.numberOfStreams * 0.333;
}; // rather than doing this we can just pass the types
var calculateEarningsv2 = function (song) {
    //refactored version of the function above using types
    return song.numberOfStreams * 0.333;
};
var printSong = function (mySong) {
    //mySong is a function param with the type Song
    console.log("".concat(mySong.title, " - ").concat(mySong.artist));
};
var mySong = {
    title: 'I want to break free',
    artist: 'Queen',
    numberOfStreams: 123456765432,
    credits: {
        producer: "I don't know",
        writer: "I don't know writer"
    }
};
var earnings = calculateEarningsv2(mySong);
console.log(earnings);
printSong(mySong);
var printPersonDetails = function (person) {
    console.log("".concat(person.first, " ").concat(person.last, " ").concat(person === null || person === void 0 ? void 0 : person.age, " "));
};
printPersonDetails({ first: 'Samip', last: 'Pokharel' });
printPersonDetails({ first: 'Samip', last: 'Pokharel', age: 123456 });
